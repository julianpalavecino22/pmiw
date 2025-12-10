// Palavecino Julian 121140/4
//Ibazeta Valentina 120322/4
 //video   https://youtu.be/TVOlmUvg75E
let objJuego;
let pantallas;



function preload() {
  musica = document.getElementById("sonido-cancion");
  imgFondo = loadImage("data/fondo1.png");
  imgPersonaje = loadImage("data/personaje.png");
  imgMoneda = loadImage("data/moneda.png");
  imgArbol = loadImage("data/arbol.png");
  Logo = loadImage("data/logo.png");
  Phineas = loadImage("data/phineas.png");

}

function setup() {
  createCanvas(640, 480);

  objJuego = new juego();
  pantallas = new Pantallas();  
}

function draw() {
  musica.play();
  pantallas.dibujar();  
}

function keyPressed() {
  pantallas.keyPressed(keyCode);
}
