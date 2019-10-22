let ang = 0;
let r = 50;
let ang0;
let Y1;

function setup() {
  createCanvas(600, 600);
  Y1 = new Yinyang(-100, 0, 50);
  Y2 = new Yinyang(100, 0, 50);
  ang0 = createVector(1, 0);
}

function draw() {
  background(100, 140, 200);
  translate(canvas.width / 2, canvas.height / 2);
  noStroke();

  // Y1.move();
  // Y2.move();
  Y1.show();
  Y2.show();



}

class Yinyang {
  constructor(x, y, r) {
    this.vector = createVector(x, y)
    // this.ang = this.vector.angleBetween(ang0)
    this.ang = 0:
    this.rot = 0;
    // this.x = x;
    // this.y = y;
    this.r = r;
    console.log(this.x, this.ang)
  }

  move() {
    this.rot += 0.03;
    this.ang += 0.015;
    this.vector.x = this.r * sin(this.ang);
    this.vector.y = this.r * cos(this.ang);
  }

  show() {

    fill(255);
    arc(this.vector.x, this.vector.y, r * 4, r * 4, this.rot, this.rot + PI);
    fill(0);
    arc(this.vector.x, this.vector.y, r * 4, r * 4, this.rot + PI, this.rot + PI + PI);
    ellipse(this.vector.x + r * cos(this.rot), this.vector.y + r * sin(this.rot), r * 2)
    fill(255)
    ellipse(this.vector.x - r * cos(this.rot), this.vector.y - r * sin(this.rot), r * 2)
  }
}
