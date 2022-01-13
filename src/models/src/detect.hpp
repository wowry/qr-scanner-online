#ifndef DETECT_HPP
#define DETECT_HPP

#include <opencv2/opencv.hpp>
#include <iostream>

class Detect
{
public:
  /**
   * 複数のQRコードを同時検出する
   * @param addr 入力画像のアドレス
   * @param width 入力画像の幅
   * @param height 入力画像の高さ
   * @return QRコードが検出されたかどうか
   */
  bool detect(std::size_t addr, int width, int height);

  /**
   * 検出されたQRコードの座標を得る
   * @return 検出されたQRコードの座標
   */
  std::vector<float> getPoints();

  /**
   * 検出されたQRコードのデコード結果（URL）を得る
   * @return 検出されたQRコードのデコード結果（URL）
   */
  std::vector<std::string> getDecodedInfo();

private:
  //! QRコードの座標
  cv::Mat_<cv::Vec2f> _points;

  //! QRコードのデコード結果（URL）
  std::vector<std::string> _decoded_info;
};

#endif // DETECT_HPP