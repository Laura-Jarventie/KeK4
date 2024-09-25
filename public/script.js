let taustakuva;
let ankkakuva;
let leveys;
let korkeus;
let ankka1;
let ankka2;


// Load the image and create a p5.Image object.
function preload() {
  taustakuva = loadImage('/images/lampi.png');
  ankkakuva = loadImage('/images/ankka.png');
}



function setup() {
  leveys = windowWidth;
  korkeus = windowWidth/3;
    createCanvas(leveys, korkeus);
    image(taustakuva, 0, 0, leveys, korkeus);
    ankka1 = new Ankka();
    ankka2 = new Ankka();
  }
  
  function draw() {
  leveys = windowWidth;
  korkeus = windowWidth/3;
  ankka1.liikuta();
  }

  function windowResized(){
  leveys = windowWidth;
  korkeus = windowWidth/3;
  resizeCanvas(leveys, korkeus);
  }

  class Ankka {
    constructor() {
      this.X = 0;
      this.X_speed = 2;
    }
    
    liikuta(){
      this.X = this.X + this.X_speed;
      image(ankkakuva, this.X, korkeus/2, 50, 50)
    }

  }