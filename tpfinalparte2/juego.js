class juego {
  constructor() {
  this.tiempoInicio = 0;
  this.tiempoActual = 0;
  this.fondo = imgFondo;
  this.crearPersonaje();

  this.monedas = [];
  this.obstaculos = []; 
  this.puntos = 0;
}


  dibujar() {
    // fondo a lo largo y ancho 
    let escala = max(width / this.fondo.width, height / this.fondo.height);
    let w = this.fondo.width * escala;
    let h = this.fondo.height * escala;

    imageMode(CENTER);
    image(this.fondo, width / 2, height / 2, w, h);
    imageMode(CORNER);

    // tiempo
    this.tiempoActual = int((millis() - this.tiempoInicio) / 1000);
    fill(0);
    textSize(20);
    textAlign(LEFT, TOP);
    text("Tiempo: " + this.tiempoActual, 10, 20);
    text("Puntos: " + this.puntos, 525, 20);


    // personaje
    this.personaje.dibujar();
    
    // crear monedas aleatoriamente
if (frameCount % 30 === 0) {
  this.monedas.push(new Moneda());
}
// crear obstaculos cada tanto
if (frameCount % 60=== 0) {
  this.obstaculos.push(new Obstaculo());
}


// actualizar y dibujar monedas
for (let i = this.monedas.length - 1; i >= 0; i--) {
  let m = this.monedas[i];

  m.actualizar();
  m.dibujar();

  // si el personaje la agarra
  if (m.colision(this.personaje)) {
    this.puntos += 5;
    this.monedas.splice(i, 1); // eliminar moneda
    continue;
  }

  // si la moneda ya llegó al frente del todo, eliminarla
  if (m.z <= 0) {
    this.monedas.splice(i, 1);
  }
}
// actualizar obstáculos
for (let i = this.obstaculos.length - 1; i >= 0; i--) {
  let o = this.obstaculos[i];

  o.actualizar();
  o.dibujar();

  // colisión con el personaje → perder
  if (o.colision(this.personaje)) {
    return "perdio";   // devuelve señal a Pantallas
  }

  // si llegó al frente, eliminar
  if (o.z <= 0) {
    this.obstaculos.splice(i, 1);
  }
}
  }
  crearPersonaje() {
    this.personaje = new personaje();
  }

  teclaPresionada(keyCode) {
    this.personaje.teclaPresionada(keyCode);
  }

 reiniciar() {
  this.monedas = [];
  this.obstaculos = [];
  this.puntos = 0;
  this.tiempoInicio = millis();
  this.crearPersonaje();
}
}
