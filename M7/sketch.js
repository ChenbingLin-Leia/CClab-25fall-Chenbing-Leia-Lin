let ps = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i <= 1000; i++) {
    ps[i] = new P(random(360));
  }
}

function draw() {
  background(220);
  angleMode(DEGREES)
  frameRate(10)
  for (let i = 0; i <= 10; i++) {
    ps[i].move();
    ps[i].display();
  }
}
class P {
  constructor(angle) {
    this.cx=width*0.25
    this.cy=random(height)
    this.dx=1
    this.dy=1
    this.angle=this.angle
    this.m1=random(100)
    this.angle=random(100,130)
  }
  move() {
    this.cx+=100*this.dx
    if(!this.cx>=width*0.25&&this.cx<=width*0.75){
      this.dx=-this.dx
    }else{
      this.dx=this.dx
    }
  }
  display() {
    push();
    translate(this.cx,this.cy);
    rotate(this.angle)
    fill(0,this.m1)
    beginShape()
    vertex(0,0)
    bezierVertex(30,-30,50,0,120,20)
    endShape(CLOSE)
    pop();
    line()
  }
}
