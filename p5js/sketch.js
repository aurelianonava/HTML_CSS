

function setup() {
  createCanvas(1600, 1600);
}

function draw() {
  if (mouseIsPressed) {
    fill(125);
  } else {
    fill(165);
  }
  rect(mouseX, mouseY, 80, 80);
}
