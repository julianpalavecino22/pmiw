class Obstaculo { 
  constructor() {
    // posición horizontal aleatoria
    this.x = random(80, width - 80);

    // comienza lejos
    this.z = random(1500, 2500);

    this.size = 120; 
    this.chocado = false;
  }

  actualizar() {
    // se acerca hacia la cámara
    this.z -= 25;

    if (this.z < 0) {
      this.z = 0;
    }
  }

  dibujar() {
    if (this.chocado) return;

    let escala = map(this.z, 0, 2000, 2, 0.2);
    let pantallaY = map(this.z, 0, 2000, height - 150, 60);

    push();
    translate(this.x, pantallaY);
    scale(escala);
    image(imgArbol, -50, -80, this.size, this.size);
    pop();
  }

  colision(personaje) {
    if (this.chocado) return false;

    let px = personaje.posX + 120;
    let py = personaje.posY + 100;

    let sx = this.x;
    let sy = map(this.z, 0, 2000, height - 150, 60);

    let d = dist(px, py, sx, sy);

  
    return d < 80;  
  }
}
