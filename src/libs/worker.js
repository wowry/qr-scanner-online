import detector from "../models/build/detector";

addEventListener("message", ({ data: { data, width, height } }) => {
  detector().then((Module) => {
    const detector = new Module.Detect();

    const buffer = Module._malloc(data.data.length);
    Module.HEAPU8.set(data.data, buffer);

    const hasCode = detector.detect(buffer, width, height);

    const decodedInfo = detector.getDecodedInfo();
    const codeNum = decodedInfo.size();
    const points = detector.getPoints();

    if (codeNum === 0) {
      postMessage({ codeNum: 0 });
    }

    for (var i = 0; i < codeNum; i++) {
      let pointArray = [];

      for (let j = 0; j < 8; j++) {
        pointArray.push(points.get(i * 8 + j));
      }

      const url = decodedInfo.get(i);

      postMessage({ i, codeNum, pointArray, url });
    }
  });
});
