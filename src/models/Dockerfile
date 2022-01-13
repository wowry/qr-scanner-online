FROM emscripten/emsdk:latest

WORKDIR /app
RUN git clone https://github.com/opencv/opencv.git --depth 1

WORKDIR /app/opencv
RUN python3 ./platforms/js/build_js.py build_wasm --build_wasm --emscripten_dir=/emsdk/upstream/emscripten \
  --config_only --cmake_option="-DCMAKE_INSTALL_PREFIX=/usr/local"

WORKDIR /app/opencv/build_wasm
RUN emmake make -j8
RUN emmake make install

WORKDIR /app
COPY CMakeLists.txt .
COPY src ./src

WORKDIR /app/build
RUN emcmake cmake ..
RUN emmake make
