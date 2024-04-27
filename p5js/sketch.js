

function setup() {
  createCanvas(1200, 1200);
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  rect(mouseX, mouseY, 80, 80);
}
