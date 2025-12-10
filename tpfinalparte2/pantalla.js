class Pantallas {
  constructor() {
    this.estado = 1;  // 1 = inicio
  }

  dibujar() {

    // ESTADO 1 → INICIO
    if (this.estado === 1) {
      this.pantallaInicio();
    }

    // ESTADO 2 → INSTRUCCIONES
    else if (this.estado === 2) {
      this.pantallaInstrucciones();
    }

    // ESTADO 3 → JUEGO
    else if (this.estado === 3) {
      let resultado = objJuego.dibujar();

      if (resultado === "perdio") {
        this.estado = 6;
      }

      if (objJuego.puntos >= 100) {
        this.estado = 5;
      }
    }

    // ESTADO 5 → GANASTE
    else if (this.estado === 5) {
      this.pantallaGanaste();
    }

    // ESTADO 6 → PERDISTE
    else if (this.estado === 6) {
      this.pantallaPerdiste();
    }

    // ESTADO 4 → CRÉDITOS
    else if (this.estado === 4) {
      this.pantallaCreditos();
    }
  }


  keyPressed(keyCode) {

    // INICIO → INSTRUCCIONES
    if (this.estado === 1 && keyCode === ENTER) {
      this.estado = 2;
    }

    // INSTRUCCIONES → JUEGO
    else if (this.estado === 2 && keyCode === ENTER) {
      this.estado = 3;
      objJuego.reiniciar();
    }

    // JUEGO → JUGAR
    else if (this.estado === 3) {
      objJuego.teclaPresionada(keyCode);
    }

    // GANASTE → CRÉDITOS (tecla C)
    else if (this.estado === 5 && (key === 'c' || key === 'C')) {
      this.estado = 4;
    }

    // PERDISTE → CRÉDITOS (tecla C)
    else if (this.estado === 6 && (key === 'c' || key === 'C')) {
      this.estado = 4;
    }
     // GANASTE → REINICIAR (ENTER)
  else if (this.estado === 5 && keyCode === ENTER) {
    objJuego.reiniciar();
    this.estado = 3;
  }

  // PERDISTE → REINICIAR (ENTER)
  else if (this.estado === 6 && keyCode === ENTER) {
    objJuego.reiniciar();
    this.estado = 3;
  }


    // CRÉDITOS → INICIO (ENTER)
    else if (this.estado === 4 && keyCode === ENTER) {
      this.estado = 1;
    }
  }


  pantallaInicio() {
    background(70, 100, 200);
    fill(255);
    textAlign(CENTER, CENTER);
    image (Phineas, 390, 200, 260, 300);
    image (Logo, 185, 15, 280, 200);
    textSize(30);
    line (20, 180, 620, 180);
    //text("Bienvenidos al juego", width / 2, height / 2 - 30);
    textSize(20);
    fill(100,60,150);
    rect(170,240,300,40);
    fill(255);
    text("Presiona ENTER para comenzar", width / 2, height / 2 + 20);
  }

  pantallaInstrucciones() {
    background(70, 100, 200);

    fill(255);
    textAlign(CENTER, CENTER);

    textSize(32);
    text("INSTRUCCIONES", width / 2, 80);
textAlign(CENTER,TOP );
   textSize(20);
text(
  "• Usa las flechas para moverte\n" +
  "• Evita los obstáculos\n" +
  "• Junta monedas para sumar puntos\n" +
  "• Llega a 100 puntos para ganar",
  width / 2,
  height / 4 + 100
);

    fill(100,60,150);
    rect(170,410,300,40);
    textSize(18);
    fill(255);
    text("Presiona ENTER para comenzar", width / 2, height - 60);
  }

  pantallaGanaste() {
    background(0,  128,  0);

    fill(255);
    textAlign(CENTER, CENTER);
    textSize(60);
    text("¡GANASTE!", width / 2, height / 2 - 40);


    fill(100,60,150);
    rect(130,260,390,40);
    textSize(22);
    fill(255);
    text("Presiona ENTER para jugar otra vez", width / 2, height / 2 + 40);

    textSize(18);
    fill(255);
    text("Presioná C para ver los créditos", width / 2, height / 2 + 80);
  }

  pantallaPerdiste() {
    background(200, 30, 30);

    fill(255);
    textAlign(CENTER, CENTER);
    textSize(60);
    text("¡PERDISTE!", width / 2, height / 2 - 40);
    
    fill(100,60,150);
    rect(160,260,320,40);
    textSize(22);
    fill(255);
    text("Presiona ENTER para reiniciar", width / 2, height / 2 + 40);

    textSize(18);
    text("Presioná C para ver los créditos", width / 2, height / 2 + 80);
  }

  pantallaCreditos() {
    background(10, 10, 10);

    fill(255);
    textAlign(CENTER, CENTER);

    textSize(40);
    text("CRÉDITOS", width / 2, 80);

    textSize(24);
    text("\nJuego desarrollado por Valentina Ibazeta y\nJulian Palavecino.", width / 2, height / 2);
    fill(255);

    fill(100,60,150);
    rect(165,400,310,40);
    textSize(18);
    fill(255);
    text("Presioná ENTER para volver al inicio", width / 2, height - 60);
  }
}
