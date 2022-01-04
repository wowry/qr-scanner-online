cmake_minimum_required(VERSION 2.8.12)
project(detector LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} --bind -O3 \
  -s ALLOW_MEMORY_GROWTH=1 -s ENVIRONMENT=worker -s SINGLE_FILE=1 \
  -s EXPORT_ES6=1 -s MODULARIZE=1 -s EXPORT_NAME=detector")

include_directories(/usr/local/include/opencv4)

file(GLOB_RECURSE sources_main "src/detect.cpp")
add_executable(${PROJECT_NAME} ${sources_main})

file(GLOB opencv_lib "/usr/local/lib/*.a")
file(GLOB opencv_lib_3rdparty "/usr/local/lib/opencv4/3rdparty/*.a")
target_link_libraries(${PROJECT_NAME} ${opencv_lib} ${opencv_lib_3rdparty})
