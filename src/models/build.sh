# clean up
docker rmi -f qr-scanner-image
docker rm -f qr-scanner

# build
docker build ./src/models -t qr-scanner-image
mkdir -p ./src/models/build
docker run --name qr-scanner qr-scanner-image && docker cp qr-scanner:/app/build/detector.js ./src/models/build/
