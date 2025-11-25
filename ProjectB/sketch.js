let image1;
let density = "Ñ@#W$9876543210?!abc;:+=-,._ ";

function preload() {
  image1 = loadImage("assets/image/tree1001.jpg");
}

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(0);
  let x1 = 50;
  let y1 = 50;
  let w1 = 100;
  let h1 = 100;
  //image(image1, x1, y1, w1, h1);
  image1.loadPixels();
  for (let i = 0; i < image1.width; i++) {
    for (let j = 0; j < image1.height; j++) {
      let pixelIndex = (i + j * w1) * 4;
      let r = image1.pixels[pixelIndex + 0];
      let g = image1.pixels[pixelIndex + 1];
      let b = image1.pixels[pixelIndex + 2];
      let a = image1.pixels[pixelIndex + 3];

      let avg = (r + g + b) / 3;

      const len = density.length;
      const charIndex = floor(map(avg, 0, 255, len, 0));

      fill(255);
      textSize(1);
      textAlign(CENTER, CENTER);
      text(density.charAt(charIndex), i * w1 + w1 * 0.5, j * h1 + h1 * 0.5);
    }
  }
}