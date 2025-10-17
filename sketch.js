let timer = 0;
function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(0);
  angleMode(DEGREES);
  ellipseMode(RADIUS);
  rectMode(RADIUS); //setup
  fill(0, 20); // 设置半透明黑色背景，产生拖尾效果
  noStroke()
  rect(0,0,width,height)
  // 循环创建雨丝
  for (let i = 0; i < 100; i+=40) {
    // 随机生成雨丝位置和长度
    let x = random(width); // 雨丝x坐标
    let y = random(height); // 雨丝y坐标
    let len = random(100, 150); // 雨丝长度
    
    stroke(255); // 设置雨丝颜色为白色
    line(x, y, x, y + len); // 绘制雨丝
    
    // 更新雨丝位置，使其下落
    y += 0.5; // 下落速度
    if (y > height) {
      y = 0; // 如果雨丝超出画布底部，重置到顶部
    }
  }
  stroke(255, 80);
  body();
  arm();
  face();
  neck();
  ear();
  eye();
}
function body() {
  let trans = abs((frameCount % 120) - 60) * 0.2;
  fill(255, 150 + trans);
  beginShape();
  vertex(220, 90);
  vertex(370, 60);
  vertex(390, 100);
  endShape(CLOSE); //脊背
  fill(255, 170 + trans);
  beginShape();
  vertex(220, 90);
  vertex(390, 100);
  vertex(330, 200);
  endShape(CLOSE); //前胸
  fill(255, 130 + trans);
  beginShape();
  vertex(180, 230);
  vertex(220, 90);
  vertex(330, 200);
  endShape(CLOSE); //后背
  fill(255, 160 + trans);
  beginShape();
  vertex(220, 90);
  bezierVertex(240, 50, 340, 40, 370, 60);
  endShape(CLOSE);
  beginShape();
  vertex(180, 230);
  vertex(330, 200);
  vertex(290, 350);
  endShape(CLOSE); //小腹
  fill(255, 130 + trans);
  beginShape();
  vertex(160, 310);
  vertex(180, 230);
  vertex(290, 350);
  endShape(CLOSE); //臀部
  beginShape();
  fill(255, 90 + trans);
  vertex(180, 230);
  bezierVertex(170, 250, 150, 270, 160, 310);
  endShape(CLOSE); //臀肉
  fill(255, 90 + trans);
  beginShape();
  vertex(150, 350);
  vertex(160, 310);
  vertex(290, 350);
  endShape(CLOSE); //尾巴
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
  let trans = abs((frameCount % 240) - 120) * 0.5;

  fill(255, 120 + trans);
  beginShape();
  ellipse(370, 110, 10);
  vertex(360, 170);
  vertex(370, 110);
  vertex(380, 90);
  vertex(420, 130);
  vertex(410, 160);
  vertex(390, 170);
  endShape(CLOSE); //肩膀
  fill(255, 70 + trans);
  ellipse(eX, eY, 10);
  beginShape();
  vertex(eX, eY);
  vertex(370, 110);
  vertex(eX - (dx * easing1) / 2 + 120, eY - (dy * easing1) / 2 + 40);
  vertex(eX - (dx * easing1) / 2 + 110, eY - (dy * easing1) / 2 + 50);
  vertex(eX - (dx * easing1) / 2 + 100, eY - (dy * easing1) / 2 + 50);
  endShape(CLOSE); //上臂
  fill(255, 120 + trans);
  beginShape();
  vertex(eX, eY);
  vertex(eX + 50, eY + 40);
  vertex(wX + 10, wY + 10);
  vertex(wX, wY);
  endShape(CLOSE); //前臂
  fill(255, 90 + trans);
  ellipse(wX, wY, 10);
  beginShape();
  vertex(eX - 10, eY + 30);
  vertex(eX, eY);
  vertex(wX, wY);
  vertex(wX, wY + 20);
  endShape(CLOSE); //后臂
  push();
  // let angle=0
  // if(targetX*targetY>=0){
  //   angle+=10
  // }
  // if(targetX*targetY<0){
  //   angle-=10
  // }
  translate(wX, wY);
  // rotate(angle)
  fill(255, 100 + trans);
  beginShape();
  vertex(0, 0);
  vertex(0 + 10, 0 + 10);
  vertex(0 + 50, 0 + 60);
  vertex(0 + 40, 0 + 60);
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
function neck() {
  let trans = abs((frameCount % 240) - 120) * 0.1;
  fill(255, 140 + trans);
  beginShape();
  vertex(390, 110);
  vertex(370, 60);
  bezierVertex(390, 80, 450, 85, 460, 80);
  endShape(CLOSE);
}
function face() {
  let trans = abs((frameCount % 120) - 60) * 0.1;
  fill(255, 130 + trans);
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
  endShape(CLOSE); //face
  beginShape();
  vertex(405, 155);
  vertex(450, 175);
  vertex(455, 205);
  vertex(445, 210);
  endShape(CLOSE); //mouse
}
function ear() {
  let trans = abs((frameCount % 240) - 120) * 0.2;
  fill(255, 120 + trans);
  beginShape();
  vertex(430, 120);
  bezierVertex(430, 80, 450, 60, 460, 50);
  endShape(CLOSE); //左耳廓
  beginShape();
  vertex(430, 120);
  vertex(460, 50);
  vertex(460, 90);
  endShape(CLOSE);
  beginShape(); //左
  vertex(450, 70);
  vertex(470, 30);
  vertex(470, 90);
  endShape(CLOSE); //右
  beginShape();
  vertex(470, 30);
  vertex(480, 30);
  bezierVertex(480, 70, 475, 85, 470, 90);
  endShape(CLOSE); //右耳廓
}
function eye() {
  let trans = abs((frameCount % 240) - 120) * 0.2;
  if (mouseIsPressed) {
    if (timer <= 255) {
    timer += 6;
    } else {
      timer = 255;
    }
  } else {
    if (timer >= 0) {
      timer -= 6;
    } else {
      timer = 0;
    }
  }
  let eyecolor = -timer * 2;
  fill(255+eyecolor, 100 + trans);
  beginShape();
  vertex(450, 140);
  bezierVertex(455, 135, 470, 125, 480, 130);
  vertex(470, 150);
  endShape(CLOSE);
  fill(255, 255, 255 + eyecolor, 140 + trans);
  beginShape();
  vertex(460, 140);
  vertex(470, 130);
  vertex(475, 140);
  vertex(470, 150);
  endShape(CLOSE); //
}
