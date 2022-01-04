#include "Detect.hpp"
#include <emscripten/bind.h>
#include <emscripten.h>
#include <opencv2/imgcodecs.hpp>

bool Detect::detect(size_t addr, int width, int height)
{
  auto data = reinterpret_cast<void *>(addr);
  cv::Mat img(height, width, CV_8UC4, data);

  cv::QRCodeDetector detector;

  bool hasCode = detector.detectAndDecodeMulti(img, _decoded_info, _points);

  return hasCode;
}

std::vector<float> Detect::getPoints()
{
  std::vector<float> points;

  for (int i = 0; i < _points.rows; i++)
  {
    cv::Vec2f *p = _points.ptr<cv::Vec2f>(i);

    for (int j = 0; j < 4; j++)
    {
      points.push_back(p[j][0]);
      points.push_back(p[j][1]);
    }
  }

  return points;
}

std::vector<std::string> Detect::getDecodedInfo()
{
  return _decoded_info;
}

EMSCRIPTEN_BINDINGS(my_module)
{
  emscripten::class_<Detect>("Detect")
      .constructor()
      .function("detect", &Detect::detect)
      .function("getPoints", &Detect::getPoints)
      .function("getDecodedInfo", &Detect::getDecodedInfo);

  emscripten::register_vector<float>("vector<float>");
  emscripten::register_vector<std::string>("vector<string>");
}
