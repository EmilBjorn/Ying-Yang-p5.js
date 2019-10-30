let ang = 0;
let r = 50;
let ang0;
let Y1;

function setup() {
  createCanvas(600, 600);
  ang0 = createVector(1, 0);
  Y1 = new Yinyang(-100, 0, r, 2 * r, -1);
  Y2 = new Yinyang(100, 0, r, 2 * r, -1);
  Y3 = new Yinyang(0, 0, 2 * r, 0, 1);
}

function draw() {
  background(100, 140, 200);
  translate(canvas.width / 2, canvas.height / 2);
  noStroke();

  Y1.move();
  Y2.move();
  Y3.move();
  Y3.show();
  Y1.show();
  Y2.show();
}


function generatePattern(n) {
  let coords = [];
  for (let i = 0; i < n; i++) {

  }
}

class Yinyang {
  constructor(x, y, size, angRadius = 2 * r, clockwise) {
    this.vector = createVector(x, y);
    this.ang = this.vector.angleBetween(ang0);
    if (isNaN(this.ang)) {
      this.ang = 0;
    }
    this.rot = 0;
    this.r = size;
    this.dist = angRadius;
    this.dir = clockwise;
  }

  move() {
    this.rot += 0.01 * this.dir;
    this.ang -= 0.01 * this.dir;
    this.vector.x = this.dist * cos(this.ang);
    this.vector.y = this.dist * sin(this.ang);
  }

  show() {
    // Draws the shapes of the yin yang
    fill(255);
    arc(
      // White half-circle
      this.vector.x,
      this.vector.y,
      this.r * 4,
      this.r * 4,
      this.rot,
      this.rot + PI
    );
    fill(0);
    arc(
      // Black half-circle
      this.vector.x,
      this.vector.y,
      this.r * 4,
      this.r * 4,
      this.rot + PI,
      this.rot + PI + PI
    );
    if (this.dir == -1) {
      ellipse(
        // Black yang
        this.vector.x - this.r * cos(this.rot),
        this.vector.y - this.r * sin(this.rot),
        this.r * 2
      );
      fill(255);
      ellipse(
        // White yin
        this.vector.x + this.r * cos(this.rot),
        this.vector.y + this.r * sin(this.rot),
        this.r * 2
      );
    }
    ellipse(
      // White inner circle
      this.vector.x - this.r * cos(this.rot),
      this.vector.y - this.r * sin(this.rot),
      this.r
    );
    fill(0);
    ellipse(
      // Black inner circle
      this.vector.x + this.r * cos(this.rot),
      this.vector.y + this.r * sin(this.rot),
      this.r
    );
  }
}
