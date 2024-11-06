let taustakuva;
let ankkakuva;
let leveys;
let korkeus;
let ankka1;
let ankka2;
let lautanLeveys;
let lautanKorkeus;
let lautanY;
let painovoima = 0.05;
let lautanX;
let pisteet = 0;
let elamiaJaljella = 3;

let ankkaLista = [];

// Load the image and create a p5.Image object.
function preload() {
  taustakuva = loadImage('/images/lampi.png');
  ankkakuva = loadImage('/images/ankka.png');
}


function setup() {
  leveys = windowWidth;
  korkeus = windowWidth/3;
  lautanKorkeus = korkeus/20;
  lautanLeveys = leveys/20;
  lautanY = korkeus * 0.9;
  createCanvas(leveys, korkeus);   
  luoAnkkoja();

  }
  
  function draw() {
  leveys = windowWidth;
  korkeus = windowWidth/3;
  background("white");
  image(taustakuva, 0, 0, leveys, korkeus);
  luoJaLiikutaLauttaa();

  ankkaLista.forEach(function(ankkaOlio, monesko){
    
  ankkaOlio.liikuta();

    if(ankkaOlio.X > leveys){
      ankkaLista.splice(monesko, 1);
      pisteet = pisteet + 1;
      //pisteet += 1;
      console.log("Pisteet:"  + pisteet);
    }

    if(ankkaOlio.Y > korkeus){
      ankkaLista.splice(monesko, 1);
      elamiaJaljella -= 1;
      console.log("Elämiä jäljellä: " + elamiaJaljella);
    }

  });
  
  }

  function windowResized(){
  leveys = windowWidth;
  korkeus = windowWidth/3;
  resizeCanvas(leveys, korkeus);
  }


  function luoJaLiikutaLauttaa(){
    fill("#ffffb3");
    rect(mouseX, lautanY, lautanLeveys, lautanKorkeus, 20, 20, 3, 3);
  }

  function luoAnkkoja(){
    ankkaOlio = new Ankka();  
    ankkaLista.unshift(ankkaOlio);
    setTimeout(luoAnkkoja, 2000);
    console.log(ankkaLista);
  }

  class Ankka {
    constructor() {
      this.X = 0;
      this.Y = korkeus/2;
      this.xSpeed = random(1,5);
      this.ySpeed = -5;
      this.size = leveys / 40;
    }
    
    liikuta(){
      lautanKorkeus = korkeus/20;
      lautanLeveys = leveys/10;
      lautanY = korkeus * 0.9;
      lautanX = mouseX;
      this.X = this.X + this.xSpeed;
      this.ySpeed = this.ySpeed + painovoima;


      if( this.X > lautanX && this.X < lautanX + lautanLeveys )

      {
        //otettu pois this.Y jälkeen this.korkeus niin alkoi toimimaan
        if(this.Y  + lautanKorkeus> lautanY && this.Y < lautanY + lautanKorkeus)
          {
            this.ySpeed = -abs(this.ySpeed);
          }
      }

      this.Y = this.Y + this.ySpeed;
      image(ankkakuva, this.X, this.Y, this.size, this.size)

    }

  }