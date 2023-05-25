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

  function draw() {
    background(220);
    translate(width / 2, height / 2);
    let commonCorner = createVector(0, 0);
    for (let i = 0; i < squares.length; i++) {
      rotate(squares[i].rotationAngle);
      translate(commonCorner.x, commonCorner.y);
      commonCorner = createVector(squares[i].size / 2, squares[i].size / 2);
      drawFractalSquare(squares[i].size);
      squares[i].rotationAngle += rotationSpeed;
    }
  }

  function drawFractalSquare(length) {
    let halfLength = length / 2;
    noFill();
    stroke(0);
    rect(-halfLength, -halfLength, length, length);
  }