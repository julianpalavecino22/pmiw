function iniciar() {
  // Textos de los botones
  boton[0] = "Iniciar";
  boton[1] = "Volver";
  boton[2] = "Siguiente";
  botonOpciones[0] ="Una maquina traductora de animales ";
  botonOpciones[1] ="Maquina para fabricar nieve ";
  botonOpciones[2] ="Ayudar a perry en\nsu misíon contra\n Doofenshimirtz";
  botonOpciones[3] = "Hacer de cuenta que \nno escucharon nada";
  botonOpciones[4] = "Usar la máquina para hacer \nuna pista de esquí \ngigante ";
  botonOpciones[5] = "Buscar como apagar la \nmáquina antes que se \nsiga descontrolando";
  
}

// Detección de bordes del boton
function bordeBoton(x, y, w, h) {
  return (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h);
}
function dibujarBotonOpciones(txt, x, y, w, h) {
  push();
  rectMode(CORNER);
  noStroke();
  
  if (bordeBoton(x, y, w, h)) {
    fill(200, 165, 0); // naranja
  } else {
    fill(150); //más claro al pasar el mouse
  }
  
  rect(x, y, w, h); // 
  
  fill(0);
  textAlign(CENTER, TOP);
  textSize(16); 
  text(txt, x + w / 2, y + h / 5);
  pop();
}



// Dibujo del botón
function dibujarBoton(txt, x, y, w, h) { //txt  texto del boton 
  push();
  rectMode(CORNER);
  stroke(255, 0, 0);

  if (bordeBoton(x, y, w, h)) {
    fill(255, 0, 0); // color más claro si el mouse está encima
  } else {
    fill(255);   // );
  }

  rect(x, y, w, h, 20); 
  fill(0);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(16);
  text(txt, x + w / 2, y + h / 2);
  pop();
}
function copiarTexto (i, x, y, pos) {
  let proporcion = width * 0.03; //Ajuste proporcional del texto
  textSize(proporcion);
  fill(255);
  noStroke();
  textAlign(pos);
  text(textos[i], x, y, width * 0.6); //Ajuste ancho maximo del texto  
}
