let hallwayImg;

function preload() {
  hallwayImg = loadImage("assets/images/exit8.jpg");
}

function setup() {
  createCanvas(800, 450);

  background(20);

  image(hallwayImg, 0, 0, width, height);

  fill(255);
  textAlign(CENTER);
  textSize(40);
  text("EXIT 8", width / 2, 50);

  fill(255, 0, 0);
  textSize(20);
  text("Observe the anomalies.", width / 2, 90);
}

function draw() {

}

function mousePressed() {
  fill(255, 0, 0);
  noStroke();
  circle(mouseX, mouseY, 40);
}
