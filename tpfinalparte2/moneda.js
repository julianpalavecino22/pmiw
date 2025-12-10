class Moneda {  
  constructor() {
    // posición horizontal aleatoria
    this.x = random(80, width - 80);

    // comienza lejos 
    this.z = random(1500, 2500);

    this.size = 60; // tamaño base
    this.capturada = false;
  }

  actualizar() {
    // La moneda "avanza" hacia adelnate 
    this.z -= 25; 

    if (this.z < 0) {
      this.z = 0;
    }
  }

  dibujar() {
    if (this.capturada) return;

    let escala = map(this.z, 0, 2000, 1.5, 0.1);

    let pantallaY = map(this.z, 0, 2000, height - 120, 50);

    push();
    translate(this.x, pantallaY);
    scale(escala);
    image(imgMoneda, -30, -30, this.size, this.size);
    pop();
  }

  colision(personaje) {
    if (this.capturada) return false;

    let px = personaje.posX + 120;
    let py = personaje.posY + 100;

    let sx = this.x;
    let sy = map(this.z, 0, 2000, height - 120, 50);

    let d = dist(px, py, sx, sy);

    return d < 60; 
  }
}
