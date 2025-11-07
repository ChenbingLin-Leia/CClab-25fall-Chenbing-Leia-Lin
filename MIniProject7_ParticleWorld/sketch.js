let birds = [];
let bs = 100;
let backR1=26
let backG1=9
let backB1=26
let backR2=45
let backG2=24
let backB2=27
let backR,backG,backB
function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i <= 50; i++) {
    birds[i] = new Bird(-bs * 1.25+random(width), - bs * 0.1+random(height));
  }
}

function draw() {
  backR=map(mouseY,0,height,backR1,backR2)
  backG=map(mouseY,0,height,backG1,backG2)
  backG=map(mouseY,0,height,backB1,backB2)
  background(backR,24,27,99.999);
  ellipseMode(RADIUS);
  angleMode(DEGREES);
  for (let i = 0; i < birds.length - 1; i++) {
    stroke(134,107,82,95)
    line(
      birds[i].bx + bs * 1.25,
      birds[i].by - bs * 0.1,
      width/2,
      height/2
    );
    stroke(134,107,82,30)
      line(
      birds[i].bx + bs * 1.25,
      birds[i].by - bs * 0.1,
      birds[i+1].bx + bs * 1.25,
      birds[i+1].by - bs * 0.1,
    );
  }
  for (let i = 0; i <= 50; i++) {
    birds[i].update();
    birds[i].display();
  }
}
class Bird {
  constructor(x, y) {
    this.bx = x;
    this.by = y;
    this.sp1 = random(-2, 2);
    this.sp2 = random(-1.5, 1.5);
    this.angleWing = 0;
  }
  update() {
    this.bx += 2 * this.sp1;
    if (this.bx <= width && bs * 1.25+this.bx >= 0) {
      this.sp1 = this.sp1;
    } else {
      this.sp1 = -this.sp1;
    }//body
    this.angleWing += this.sp2;
    if (this.angleWing >= 0 && this.angleWing <= 30) {
      this.sp2 = this.sp2;
    } else {
      this.sp2 = -this.sp2;
    }//wing
    this.by+=sin(2*frameCount)
    //up&down
  }
  display() {
    noStroke();
    fill(212,194,180)
    push();
    translate(this.bx + bs * 0.9, this.by);
    rotate(this.angleWing - 10);
    beginShape();
    vertex(0, 0);
    vertex(-bs * 0.7, -bs * 0.2);
    vertex(-bs * 0.4, bs * 0.1);
    endShape(CLOSE);
    pop(); //wing in the back
    push();
    beginShape();
    translate(this.bx, this.by);
    vertex(0, 0);
    bezierVertex(bs * 0.4, bs * 0.1, bs * 0.9, bs * 0.2, bs * 1.1, 0);
    bezierVertex(
      bs * 1.2,
      -bs * 0.05,
      bs * 1.2,
      -bs * 0.05,
      bs * 1.25,
      -bs * 0.1
    );
    bezierVertex(bs * 0.8, -bs * 0.1, bs * 0.4, -bs * 0.1, bs * 0.15, 0);
    endShape(CLOSE);
    pop(); //body
    push();
    translate(this.bx + bs * 0.9, this.by);
    rotate(this.angleWing);
    beginShape();
    vertex(0, 0);
    vertex(-bs * 0.7, -bs * 0.2);
    vertex(-bs * 0.4, bs * 0.1);
    endShape(CLOSE);
    pop(); //wing in the front
  }
}
