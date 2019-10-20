let x = 1;
let vx = 10;

function setup() {
	createCanvas(600, 600);
}

function draw() {
	background(100, 140, 200);
	translate(canvas.width / 2, canvas.height / 2)
	fill(0, 0, 100);
	noStroke();
	ellipse(0, 0, 40);
	/* x += vx
	if (x > canvas.width || x < 0) {
		vx *= -1
	} */
}