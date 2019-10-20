let ang = 0;
let r = 50;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(100, 140, 200);
  translate(canvas.width / 2, canvas.height / 2);
  noStroke();

  let x = cos(ang) * r;
  let y = sin(ang) * r;
  let ang2 = ang + PI;
  let x2 = cos(ang2) * r;
  let y2 = sin(ang2) * r;

  fill(255, 255, 255);

  arc(0, 0, r * 4, r * 4, ang + PI, ang);

  fill(0, 0, 0);
  arc(0, 0, r * 4, r * 4, ang2 + PI, ang2);
  fill(255, 255, 255);
  ellipse(x, y, 2 * r, 2 * r);

  fill(0, 0, 0);

  ellipse(x2, y2, 2 * r, 2 * r);

  ang += 0.025;
}
