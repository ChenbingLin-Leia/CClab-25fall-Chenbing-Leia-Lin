let mic;
let bite;
let mySound;
function preload() {
  // preload() runs once
  mySound = loadSound("assets/goose.wav");
}

function setup() {
  createCanvas(400, 400);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(0,49,83);
  
  let level = mic.getLevel();
  
  ellipseMode(RADIUS)
  angleMode(DEGREES)
  //cheeze
  noStroke()
  fill(227,168,65)
  rect(120,80,160,240)
  //holes
  fill(0,49,83)
  stroke(247,160,60)
  strokeWeight(5)
  ellipse(120,80,50)
  ellipse(260,200,50)
  ellipse(200,320,30)
  //goose
  fill(255)
  stroke(255)
  strokeWeight(50)
  line(mouseX,mouseY,420,360)//neck
  fill(255,0,0)
  stroke(255,0,0)
  strokeWeight(10)
  arc(mouseX-15,mouseY+10,15,15,180,360,CHORD)//forehead
  fill(0)
  stroke(0)
  strokeWeight(10)
  point(mouseX,mouseY-15)//eyes
  //body
  
  let wingX=lerp(mouseX,420,0.5)
  let wingY=lerp(mouseY,360,0.5)
  let wingCX=lerp(wingX,420,0.5)
  let wingCY=lerp(wingY,360,0.5)
  let d=dist(wingCX,wingCY,420,360)
  if(wingCX<=400){
  fill(249,242,212)
  noStroke()
  arc(wingCX,wingY,d,d,180,360,CHORD)
  fill(232,222,187)
  triangle(wingX,wingY,420,360,420,wingY)
  }
  //noise
  fill(247,160,60)
  stroke(255,0,0)
  strokeWeight(5)
  let bite = map(level, 0.0, 1.0, 0, 1000);
  if (bite>=300){
    mySound.play();
  }
  ellipse(mouseX-30,mouseY+10,bite)
}
function mouseDragged() {
  if (mySound.isPlaying() == false) {
    mySound.loop();
  }
}
function mouseReleased() {
  mySound.stop();
}
