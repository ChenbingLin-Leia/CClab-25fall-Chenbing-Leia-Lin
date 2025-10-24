//transparency: alpha for whole pic, trans for each part
let alpha, trans;
//background:square
let angleSquare = 0;
//background:raining
let timerRain = 0;
let particles = []; // collectAllRain
let r = 10; // rainRadius
let speed = 5; // verticalSpeed
let triggerChance = 0.3; // horizentalMoveChance
let hSpeed = 2; // horizentalMoveSpeed
let hDist = 16; //horizentalMoveDistance
//mousetip:player
let ball = { x: 0, y: 0 }; //ball
let trail = []; //ballTrail
let maxTrailLength = 20; //maxBallLength
//movement: hand
let angle = 0;
let timerEye = 0;
//create:blood
let linesGraphics;
let timerBlood = 0;
//text
let timePR = 0;
let PRtimes = 1;
function setup() {
let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container");
  linesGraphics = createGraphics(width, height); //create extra canvas for blood
  linesGraphics.clear(); // set transparent backgorund for blood
}

function draw() {
  angleMode(DEGREES);
  ellipseMode(RADIUS); //setup
  background(0, 20); //black background with transparency
  alpha = abs((frameCount % 120) - 60);
  stroke(255, 80);
  backgroundSquare();
  backgroundRain();
  ground();
  body();
  eye();
  decoration();
  arm();
  player();
  image(linesGraphics, 0, 0);
  blood();
  easeYourMemory();
}
function body() {
  noStroke();
  //body parts
  trans = alpha * 0.2;
  //upperback
  fill(255, 50 + trans);
  triangle(220, 90, 370, 60, 390, 100);
  //chest
  fill(255, 70 + trans);
  triangle(220, 90, 390, 100, 330, 200);
  //back
  fill(255, 30 + trans);
  triangle(180, 230, 220, 90, 330, 200);
  //back+
  fill(255, 60 + trans);
  beginShape();
  vertex(220, 90);
  bezierVertex(240, 50, 340, 40, 370, 60);
  endShape(CLOSE);
  //underbelly
  fill(255, 60 + trans);
  triangle(180, 230, 330, 200, 290, 350);
  //butt
  fill(255, 20 + trans);
  triangle(160, 310, 180, 230, 290, 350);
  //butt+
  fill(255, 30 + trans);
  beginShape();
  vertex(180, 230);
  bezierVertex(170, 250, 150, 270, 160, 310);
  endShape(CLOSE);
  //tail
  fill(255, 30 + trans);
  triangle(150, 350, 160, 310, 290, 350);
  //facial parts
  trans = alpha;
  //neck
  fill(255, 40 + trans);
  beginShape();
  vertex(390, 110);
  vertex(370, 60);
  bezierVertex(390, 80, 450, 85, 460, 80);
  endShape(CLOSE);
  //face
  fill(255, 30 + trans);
  beginShape();
  vertex(405, 155);
  vertex(410, 110);
  vertex(460, 80);
  vertex(480, 100);
  vertex(485, 140);
  vertex(470, 150);
  vertex(490, 170);
  vertex(480, 190);
  vertex(450, 175);
  endShape(CLOSE);
  //jaw
  beginShape();
  vertex(405, 155);
  vertex(450, 175);
  vertex(455, 205);
  vertex(445, 210);
  endShape(CLOSE);
  //ears
  fill(255, 20 + trans);
  triangle(430, 120, 460, 50, 460, 90); //left ear
  beginShape();
  vertex(430, 120);
  bezierVertex(430, 80, 450, 60, 460, 50);
  endShape(CLOSE); //left ear+
  triangle(450, 70, 470, 30, 470, 90); //right ear
  beginShape();
  vertex(470, 30);
  vertex(480, 30);
  bezierVertex(480, 70, 475, 85, 470, 90);
  endShape(CLOSE); //right ear+
}
function arm() {
  let easing1 = 0.1;
  let easing2 = 0.2;
  let eX = 250;
  let targetX = mouseX;
  let dx = targetX - eX;
  eX += dx * easing1;
  let eY = 120;
  let targetY = mouseY;
  let dy = targetY - eY;
  eY += dy * easing1;
  let wX = eX + 90 + dx * easing2;
  let wY = eY + 170 + dy * easing2;
  trans = alpha;
  fill(255, 20 + trans);
  beginShape();
  ellipse(370, 110, 10);
  vertex(360, 170);
  vertex(370, 110);
  vertex(380, 90);
  vertex(420, 130);
  vertex(410, 160);
  vertex(390, 170);
  endShape(CLOSE); //shoulders
  fill(255, 10 + trans);
  ellipse(eX, eY, 10);
  beginShape();
  vertex(eX, eY);
  vertex(370, 110);
  vertex(370, 160);
  vertex(360, 170);
  vertex(350, 170);
  endShape(CLOSE); //upperarm
  fill(255, 20 + trans);
  beginShape();
  vertex(eX, eY);
  vertex(eX + 50, eY + 40);
  vertex(wX + 10, wY + 10);
  vertex(wX, wY);
  endShape(CLOSE); //right part of arm
  fill(255, 10 + trans);
  ellipse(wX, wY, 10);
  beginShape();
  vertex(eX - 10, eY + 30);
  vertex(eX, eY);
  vertex(wX, wY + 10);
  vertex(wX, wY);
  endShape(CLOSE); //left part of arm
  push();
  if (mouseY - pmouseY > 0) {
    if (angle >= -45) {
      angle += -2;
    } else {
      angle += 0;
    }
  } else if (mouseY - pmouseY < 0) {
    if (angle <= 45) {
      angle += 2;
    } else {
      angle += 0;
    }
  } else {
    angle += 0;
  }
  translate(wX, wY);
  rotate(angle);
  fill(255, 10 + trans);
  beginShape();
  vertex(0, 0);
  vertex(10, 10);
  vertex(50, 60);
  vertex(40, 60);
  endShape(CLOSE); //后趾
  beginShape();
  vertex(10, 50);
  vertex(10, 30);
  vertex(40, 60);
  vertex(40, 70);
  endShape(CLOSE); //中趾
  beginShape();
  vertex(0, 50);
  vertex(0, 0);
  vertex(30, 60);
  vertex(30, 70);
  endShape(CLOSE); //前趾
  pop();
}
function decoration() {
  trans = alpha;
  stroke(255, 50);
  fill(255, 30 + trans);
  //左邊
  beginShape();
  vertex(140, 350);
  vertex(300, 350);
  vertex(310, 360);
  vertex(130, 360);
  endShape(CLOSE); //柱顶
  for (let i = 140; i <= 280; i += 10) {
    fill(255, 40 + trans / 10);
    beginShape();
    vertex(i, 400);
    vertex(i + 20, 360);
    vertex(i, 360);
    vertex(i + 20, 400);
    endShape(CLOSE);
  } //三角装饰
  for (let i = 140; i <= 290; i += 15) {
    fill(255, 10 + trans / 10);
    rect(i, 400, 10, 40);
    rect(i + 2.5, 400, 5, height - 400);
  } //直柱
  //右邊
  beginShape();
  vertex(480, 400);
  vertex(700, 400);
  vertex(710, 410);
  vertex(470, 410);
  endShape(CLOSE); //柱顶
  for (let i = 480; i <= 680; i += 10) {
    fill(255, 40 + trans / 10);
    beginShape();
    vertex(i, 410);
    vertex(i + 20, 420);
    vertex(i, 420);
    vertex(i + 20, 410);
    endShape(CLOSE);
  } //三角装饰
  for (let i = 490; i <= 690; i += 15) {
    fill(255, 10 + trans / 10);
    rect(i, 420, 5, 40);
    rect(i - 2.5, 420, 10, 60);
  }
  for (let i = 497.5; i <= 680; i += 15) {
    rect(i, 420, 5, height - 420);
  } //直柱
}
function eye() {
  trans = alpha;
  //changecolor(eyes)
  if (mouseIsPressed) {
    if (timerEye <= 255) {
      timerEye += 6;
    } else {
      timerEye = 255;
    }
  } else {
    if (timerEye >= 0) {
      timerEye -= 6;
    } else {
      timerEye = 0;
    }
  }
  let decrease = -timerEye * 6;
  fill(255 + decrease, 100 + trans);
  beginShape();
  vertex(450, 140);
  bezierVertex(455, 135, 470, 125, 480, 130);
  vertex(470, 150);
  endShape(CLOSE);
  fill(255, 255 + decrease, 255 + decrease, 140 + trans);
  beginShape();
  vertex(460, 140);
  vertex(470, 130);
  vertex(475, 140);
  vertex(470, 150);
  endShape(CLOSE); //
  fill(255, 0, 0, timerEye);
}
function backgroundRain() {
  timerRain++;
  let newParticles = 3; //when to release new particles
  let maxLength = 500; //max particles
  if (timerRain % newParticles === 0 && particles.length < maxLength) {
    particles.push({
      x: random(r, width - r),
      y: -r,
      horizontal: false,
      Direction: 0,
      moveStartX: 0,
    });
  }
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    if (mouseIsPressed) {
      if (!p.horizontal) {
        //verticalMove
        p.y += speed;
        if (p.y > height + r) {
          //boundaries check
          particles.splice(i, 1);
          i--; // 调整索引
          continue; // 跳过当前圆点的绘制
        }
        //how to create horizental move
        if (mouseX - pmouseX !== 0 && random(1) < triggerChance) {
          p.horizontal = true;
          p.moveStartX = p.x;
          p.Direction = (mouseX - pmouseX) / abs(mouseX - pmouseX);
        }
      } else {
        //how to create horizental move
        p.x += hSpeed * p.Direction * random(0.5, 1);
        //boundaries check
        let hitBoundary = false;
        if (p.x < r) {
          p.x = r;
          hitBoundary = true;
        }
        if (p.x > width - r) {
          p.x = width - r;
          hitBoundary = true;
        }
        //endCheck
        if (abs(p.x - p.moveStartX) >= hDist || hitBoundary) {
          p.horizontal = false;
        }
      }
    } else {
      particles = [];
    }
    fill(255, 0, 0, 80);
    noStroke();
    ellipse(p.x, p.y, r, r);
  }
}
function player() {
  noStroke();
  ball.x = mouseX;
  ball.y = mouseY;
  trail.push({ x: ball.x, y: ball.y });
  if (trail.length > maxTrailLength) {
    trail.shift();
  }
  for (let i = 0; i < trail.length; i++) {
    let pos = trail[i];
    let rad = map(i, 0, trail.length, 2.5, 10);
    let transparency = map(i, 0, trail.length, 150, 255);
    fill(255, transparency);
    ellipse(pos.x, pos.y, rad);
  }
}
function ground() {
  fill(255,0,0,timePR*0.01);
  noStroke();
  //body
  beginShape();
  vertex(150, 350);
  vertex(160, 310);
  bezierVertex(150, 270, 170, 250, 180, 230);
  vertex(220, 90);
  bezierVertex(240, 50, 340, 40, 370, 60);
  bezierVertex(390, 80, 450, 85, 460, 80);
  vertex(480, 100);
  vertex(485, 140);
  vertex(470, 150);
  vertex(490, 170);
  vertex(480, 190);
  vertex(450, 175);
  vertex(455, 205);
  vertex(445, 210);
  vertex(405, 155);
  vertex(330, 200);
  vertex(290, 350);
  vertex(150, 350);
  endShape(CLOSE);
  //arm
  let easing1 = 0.1;
  let easing2 = 0.2;
  let eX = 250;
  let targetX = mouseX;
  let dx = targetX - eX;
  eX += dx * easing1;
  let eY = 120;
  let targetY = mouseY;
  let dy = targetY - eY;
  eY += dy * easing1;
  let wX = eX + 90 + dx * easing2;
  let wY = eY + 170 + dy * easing2;
  trans = alpha;
  beginShape();
  vertex(360, 170);
  vertex(370, 110);
  vertex(380, 90);
  vertex(420, 130);
  vertex(410, 160);
  vertex(390, 170);
  beginShape();
  vertex(eX, eY);
  vertex(370, 110);
  vertex(370, 160);
  vertex(360, 170);
  vertex(350, 170);
  endShape(CLOSE);
  beginShape();
  vertex(eX, eY);
  vertex(eX + 50, eY + 40);
  vertex(wX + 10, wY + 10);
  vertex(wX, wY);
  endShape(CLOSE);
  ellipse(wX, wY, 10);
  beginShape();
  vertex(eX - 10, eY + 30);
  vertex(eX, eY);
  vertex(wX, wY + 10);
  vertex(wX, wY);
  endShape(CLOSE);
  push();
  if (mouseY - pmouseY > 0) {
    if (angle >= -45) {
      angle += -2;
    } else {
      angle += 0;
    }
  } else if (mouseY - pmouseY < 0) {
    if (angle <= 45) {
      angle += 2;
    } else {
      angle += 0;
    }
  } else {
    angle += 0;
  }
  translate(wX, wY);
  rotate(angle);
  beginShape();
  vertex(0, 0);
  vertex(10, 10);
  vertex(50, 60);
  vertex(40, 60);
  endShape(CLOSE);
  beginShape();
  vertex(10, 50);
  vertex(10, 30);
  vertex(40, 60);
  vertex(40, 70);
  endShape(CLOSE);
  beginShape();
  vertex(0, 50);
  vertex(0, 0);
  vertex(30, 60);
  vertex(30, 70);
  endShape(CLOSE);
  pop();
}
function blood() {
  if (mouseIsPressed) {
    timerBlood++;
    let fre = timerBlood * 0.02;
    let amp = 80;
    let noiseValue = noise(fre) * amp;
    let yNoise = (height * 7) / 12 + noiseValue;
    if (mouseX <= width && mouseX >= 0) {
      let x = map(mouseX, 0, width, 480, 700);
      linesGraphics.fill(255, 0, 0, 20);
      linesGraphics.stroke(255, 0, 0, random(20));
      linesGraphics.line(x, yNoise + random(height / 12), x, 400);
      linesGraphics.ellipse(x, yNoise + random(height / 12), random(3));
      stroke(255, 0, 0);
      line(455, 185, x, yNoise);
      fill(255, random(20));
      linesGraphics.triangle(
        x - 3,
        400,
        x + 3,
        400,
        x,
        400 + (height - yNoise) / 3 + random(50)
      );
      fill(255, 255, 255);
      linesGraphics.line(480, 400, 700, 400);
    }
  }
}
function backgroundSquare() {
  if (mouseX - pmouseX > 0) {
    if (angleSquare >= -45) {
      angleSquare += -1;
    } else {
      angleSquare += 0;
    }
  } else if (mouseX - pmouseX < 0) {
    if (angleSquare <= 45) {
      angleSquare += 1;
    } else {
      angleSquare += 0;
    }
  } else {
    angleSquare += 0;
  }
  for (let x = 0; x < width + 100; x += 100) {
    for (let y = 0; y < height + 100; y += 100) {
      if (!mouseIsPressed) {
        stroke(123, 255, 252, 30);
        noFill();
        push();
        translate(x, y);
        rotate(angleSquare + random(15));
        square(0, 0, 100, 0, 0, 0, 90);
        pop();
      }
    }
  }
}
function easeYourMemory() {
  fill(255,alpha+20)
  noStroke()
  textFont("Courier New", 20);
  if (mouseIsPressed) {
    timePR++;
  }
  if (timePR > 1) {

  textFont("Courier New", 20);
    if (!mouseIsPressed) {
      text("EASE HIS MEMORY", 50, 50);
      text("with KEY", 50, 70);
    } else if (PRtimes>1){
      text("You have", 50, 110);
      text("enslaved him", 50, 130);
      text("him for", 50, 150);
      text(PRtimes + " times", 50, 170);
    }
  }

  if (keyIsPressed) {
    linesGraphics.clear();
    timePR = 0;
  }
}
function keyPressed() {
  PRtimes++;
  return false;
}
