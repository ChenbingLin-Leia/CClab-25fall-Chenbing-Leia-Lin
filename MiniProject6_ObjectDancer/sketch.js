/*
  Check our the GOAL and the RULES of this exercise at the bottom of this file.
  
  After that, follow these steps before you start coding:

  1. rename the dancer class to reflect your name (line 35).
  2. adjust line 20 to reflect your dancer's name, too.
  3. run the code and see if a square (your dancer) appears on the canvas.
  4. start coding your dancer inside the class that has been prepared for you.
  5. have fun.
*/

let dancer;

function setup() {
  // no adjustments in the setup function needed...
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");

  // ...except to adjust the dancer's name on the next line:
  dancer = new LeiaDancer(width / 2, height / 2);
}

function draw() {
  // you don't need to make any adjustments inside the draw loop
  background(0);
  drawFloor(); // for reference only

  dancer.update();
  dancer.display();
}

// You only code inside this class.
// Start by giving the dancer your name, e.g. LeonDancer.
class LeiaDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.body = 120;
    this.eye = this.body / 5;
    this.smileAngle = 0;
    this.cx = 0
    this.direction = 1
    this.cy = 0
    this.jumpAngle = 0
    this.eyeAngle = 0
  }
  update() {
    //eye
    this.eyeAngle+=5
    //smile
    this.smileAngle = abs(((frameCount % 120) - 60))/2;
    //bounce
    this.cy += 1 * this.direction
    if (this.cy <= 25 && this.cy >= -25) {
      this.direction = this.direction
    } else {
      this.direction = -this.direction
    }
    //jump
    if (this.direction >= 0) {
      this.jumpAngle+=3
    } else {
      this.jumpAngle-=3
    }
  }
  display() {
    push();
    translate(this.x, this.y);
    noStroke()
    angleMode(DEGREES);
    fill(229, 218, 235)
    arc(this.cx, this.cy, this.body, this.body, 180, 360, CHORD);
    rect(this.cx - this.body / 2, this.cy, this.body, this.body * 0.25);//body
    push()
    push()
    translate(this.cx - this.eye * 0.5 - 2, this.cy - this.eye)
    rotate(this.eyeAngle)
    fill(255)
    ellipse(
      0,
      0,
      this.eye,
      this.eye
    );
    fill(0);
    ellipse(
      this.eye * 0.2 + 4,
      0,
      this.eye * 0.3,
      this.eye * 0.3
    );
    pop()//left eye
    push()
    translate(this.cx + this.eye * 0.5 + 2, this.cy - this.eye)
    rotate(-this.eyeAngle)
    fill(255)
    ellipse(
      0,
      0,
      this.eye,
      this.eye
    );
    fill(0);
    ellipse(
      -this.eye * 0.2 - 4,
      0,
      this.eye * 0.3,
      this.eye * 0.3
    );
    pop()//right eye
    push()
    translate(this.cx - this.body * 0.25, this.cy + this.body * 0.2)
    rotate(this.jumpAngle)
    quad(
      0,
      - this.body * 0.1,
      - this.body * 0.35,
      - this.body * 0.1,
      - this.body * 0.35,
      this.body * 0.1,
      0,
      this.body * 0.1
    );
    pop()//left leg
    push()
    translate(this.cx + this.body * 0.25, this.cy + this.body * 0.2)
    rotate(-this.jumpAngle)
    quad(
      0,
      - this.body * 0.1, 
      this.body * 0.35,
      - this.body * 0.1,
      this.body * 0.35,
      this.body * 0.1,
      0,
      this.body * 0.1
    );
    pop()//right leg
    noFill();
    stroke(0)
    arc(
      this.cx,
      this.cy - this.body / 4,
      this.body * 0.8,
      this.body * 0.6,
      0 + this.smileAngle,
      150 + this.smileAngle
    ); //smile
    pop();
  }
}