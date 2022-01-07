# clean up
docker rmi -f detector
docker rm -f detectorContainer

# build
docker build . -t detector
docker run --name detectorContainer detector && docker cp detectorContainer:/app/build/detector.js build/

# clean up
docker rmi -f detector
docker rm -f detectorContainer
