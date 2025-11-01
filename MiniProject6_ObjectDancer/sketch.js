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

  // dancer.update();
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
  }
  update() {
    //smile
    this.smileAngle = abs(((frameCount % 120) - 60) / 2);
    //bounce
    this.cy += 1 * this.direction
    if (this.cy <= 25 && this.cy >= -25) {
      this.direction = this.direction
    } else {
      this.direction = -this.direction
    }
    //jump
    if (this.direction >= 0) {
      this.jumpAngle++
    } else {
      this.jumpAngle--
    }
  }
  display() {
    push();
    translate(this.x, this.y);

    // ******** //
    // ⬇️ draw your dancer from here ⬇️
    noStroke()
    angleMode(DEGREES);
    fill(195, 214, 231);
    arc(this.cx, this.cy, this.body, this.body, 180, 360, CHORD); //body
    fill(255)
    ellipse(
      this.cx - this.eye / 2 - 2,
      this.cy - this.eye,
      this.eye,
      this.eye
    );
    ellipse(
      this.cx + this.eye / 2 + 2,
      this.cy - this.eye,
      this.eye,
      this.eye
    );
    fill(0);
    ellipse(
      this.cx - this.eye / 3 + 2,
      this.cy - this.eye,
      this.eye / 3,
      this.eye / 3
    );
    ellipse(
      this.cx + this.eye / 3 - 2,
      this.cy - this.eye,
      this.eye / 3,
      this.eye / 3
    );
    fill(195, 214, 231);
    rect(this.cx - this.body / 2, this.cy, this.body, this.body * 0.25);//body
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
    pop()
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
    pop()//leg
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
    // ⬆️ draw your dancer above ⬆️
    // ******** //

    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too, 
    // is a part if your Dancer object.
    // comment it out or delete it eventually.
    this.drawReferenceShapes()

    pop();
  }
  drawReferenceShapes() {
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(255);
    rect(-100, -100, 200, 200);
    fill(255);
    stroke(0);
  }
}



/*
GOAL:
The goal is for you to write a class that produces a dancing being/creature/object/thing. In the next class, your dancer along with your peers' dancers will all dance in the same sketch that your instructor will put together. 

RULES:
For this to work you need to follow one rule: 
  - Only put relevant code into your dancer class; your dancer cannot depend on code outside of itself (like global variables or functions defined outside)
  - Your dancer must perform by means of the two essential methods: update and display. Don't add more methods that require to be called from outside (e.g. in the draw loop).
  - Your dancer will always be initialized receiving two arguments: 
    - startX (currently the horizontal center of the canvas)
    - startY (currently the vertical center of the canvas)
  beside these, please don't add more parameters into the constructor function 
  - lastly, to make sure our dancers will harmonize once on the same canvas, please don't make your dancer bigger than 200x200 pixels. 
*/