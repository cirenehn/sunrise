let currentPattern = 0;
let switchInterval = 5000; // Time in milliseconds to switch patterns
let lastSwitchTime = 0;
let bgColor = 0; // Default background color (black)
let clearZone;
let xOffset = 0;
let yOffset = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    lastSwitchTime = millis();
    background(bgColor);
    clearZone = {
  x: -width / 4,  // Start point x (center adjusted)
  y: height / 10,  // Start point y (lower region)
  w: width / 2,   // Width of the clear zone
  h: height / 4   // Height of the clear zone
};
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // Resize canvas on window resize
} 

function draw() {
    translate(width / 2, height / 2);
    background(0);
    if (millis() - lastSwitchTime > switchInterval) {
        currentPattern = (currentPattern + 1) % 3; // Cycle through 0, 1, 2
        lastSwitchTime = millis(); // Reset the timer
    }

    switch (currentPattern) {
    case 0:
      crossStitchX(); // White "X" shaped cross-stitch symbols
      break;
    case 1:
      helixPattern(); // Pixels moving in a helix pattern
      break;
    case 2:
      ribbonPattern(); // Pixels moving in a ribbon pattern
      break;
  }
}

function crossStitchX() {
  let spacing = 40; // Increased spacing for gaps
  let size = 16; // Size of each "X"
  let speed = 0.02; // Speed of rotation
  let xOffset = cos(frameCount * 0.02) * 50; // Overall horizontal motion
  let yOffset = sin(frameCount * 0.02) * 50; // Overall vertical motion

  for (let x = -width / 2; x < width / 2; x += spacing) {
    for (let y = -height / 2; y < height / 2; y += spacing) {
      // Calculate adjusted positions with motion
      let posX = x + xOffset;
      let posY = y + yOffset;

      // Check if the position is within the clear zone
      if (posX > clearZone.x && posX < clearZone.x + clearZone.w &&
          posY > clearZone.y && posY < clearZone.y + clearZone.h) {
        continue; // Skip drawing in the clear zone
      }

      let angle = (sin(frameCount * speed + (x + y) * 0.05) + 1) * PI / 4; // Dynamic angle for rotation
      drawX(posX, posY, size, angle);
    }
  }
}


function drawX(x, y, size, angle) {
  push();
  translate(x, y);
  rotate(angle);
  strokeWeight(5); // Thick enough to be noticeable as a border
  stroke(0); // Black border
  let halfSize = size / 2;
  line(-halfSize, -halfSize, halfSize, halfSize); // First diagonal of the X
  line(-halfSize, halfSize, halfSize, -halfSize); // Second diagonal of the X
  strokeWeight(3); // Slightly thinner white stroke inside the black border
  stroke(255); // White color
  line(-halfSize, -halfSize, halfSize, halfSize); // Redraw the first diagonal
  line(-halfSize, halfSize, halfSize, -halfSize); // Redraw the second diagonal
  pop();
}


function helixPattern() {
  let amplitude = 100;
  let frequency = 0.05;
  let numPoints = 100;
  let size = 8; // Size of each square particle
  for (let i = 0; i < numPoints; i++) {
    let angle = map(i, 0, numPoints, 0, TWO_PI * 4); // Complete 4 full cycles
    let x = amplitude * cos(angle);
    let y = amplitude * sin(angle) * sin(frameCount * frequency + angle);
    rect(x, y, size, size);
  }
}

function ribbonPattern() {
  let amplitude = 50;
  let frequency = 0.1;
  let numPoints = 100;
  let size = 8; // Size of each square particle
  for (let i = 0; i < numPoints; i++) {
    let angle = map(i, 0, numPoints, 0, TWO_PI);
    let x = amplitude * cos(angle) + 100 * sin(frameCount * frequency);
    let y = amplitude * sin(angle);
    rect(x, y, size, size);
  }
}
