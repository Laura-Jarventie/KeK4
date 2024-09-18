let taustakuva;
let ankkakuva;

// Load the image and create a p5.Image object.
function preload() {
  taustakuva = loadImage('/images/lampi.png');
  ankkakuva = loadImage('/images/ankka.png');
}



function setup() {
    createCanvas(windowWidth, windowWidth/3);
    image(taustakuva, 0, 0, windowWidth, windowWidth/3);
  }
  
  function draw() {
    image(ankkakuva, 0, windowWidth/3/2, 50, 50)
  }
