// available:
// label
// probability

function setup() {
  createCanvas(640, 480);
  setupML();
}

function mousePressed() {
  runML();
}

function draw() {
  image(video, 0, 0, width, height);
}