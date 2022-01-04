#ifndef DETECT_HPP
#define DETECT_HPP

#include <opencv2/opencv.hpp>
#include <iostream>

class Detect
{
public:
  bool detect(std::size_t addr, int width, int height);
  std::vector<float> getPoints();
  std::vector<std::string> getDecodedInfo();

private:
  cv::Mat_<cv::Vec2f> _points;
  std::vector<std::string> _decoded_info;
};

#endif // DETECT_HPP