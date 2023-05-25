function setup() {
    createCanvas(800, 800);
    angleMode(DEGREES);
    for (let i = 0; i < numSquares; i++) {
      let square = {
        size: sideLength * pow(scaleFactor, i),
        rotationAngle: 0
      };
      squares.push(square);
    }
  }