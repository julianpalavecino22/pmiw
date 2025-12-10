class personaje {
  constructor() {
    this.posX = 200;
    this.posY = 280;
    this.img = imgPersonaje;
  }

  dibujar() {
    image(this.img, this.posX, this.posY, 250, 200);
  }

  teclaPresionada(keyCode) {
    if (keyCode === LEFT_ARROW) {
      this.posX -= 60;
    } else if (keyCode === RIGHT_ARROW) {
      this.posX += 60;
    }
  }
}
