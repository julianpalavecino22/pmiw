//https://youtu.be/kh9f64FwoJY?si=Ry-EQ7rCMAmBZdAp
//valentina ibazeta 120322/4
//julian palavecino 121140/4

let textos = [];
let imagenes = [];
let boton = [];
let botonOpciones = [];
let estado = 0;



function preload() {
  textos = loadStrings('data/textos.txt.txt');
  imagenes[0] = loadImage('data/Inicio.png');
  imagenes[1] = loadImage('data/A1.png');
  imagenes[2] = loadImage('data/A2.png');
  imagenes[3] = loadImage('data/A3.png');
  imagenes[4] = loadImage('data/A4.png');
  imagenes[5] = loadImage('data/A5.png');
  imagenes[6] = loadImage('data/A6.png');
  imagenes[7] = loadImage('data/A7.png');
  imagenes[8] = loadImage('data/A8.png');
  imagenes[9] = loadImage('data/A9.png');
  imagenes[10] = loadImage('data/A10.png');
  imagenes[11] = loadImage('data/A11.png');
  imagenes[12] = loadImage('data/B1.png');
  imagenes[13] = loadImage('data/B2.png');
  imagenes[14] = loadImage('data/B3.png');
  imagenes[15] = loadImage('data/B4.png');
  imagenes[16] = loadImage('data/C1.png');
  imagenes[17] = loadImage('data/C2.png');
  imagenes[18] = loadImage('data/C3.png');
  imagenes[19] = loadImage('data/C4.png');
  imagenes[20] = loadImage('data/C5.png');
  imagenes[21] = loadImage('data/C6.png');
  imagenes[22] = loadImage('data/C7.png');
  imagenes[23] = loadImage('data/C8.png');
  imagenes[24] = loadImage('data/C9.png');
  imagenes[25] = loadImage('data/C10.png');
  imagenes[26] = loadImage('data/D1.png');
  imagenes[27] = loadImage('data/D2.png');
  imagenes[28] = loadImage('data/D3.png');
  imagenes[29] = loadImage('data/D4.png');
  imagenes[30] = loadImage('data/portada.png');
  musica = document.getElementById("sonido-cancion");


  }

function setup() {
  createCanvas(640, 480);
  iniciar(); // contiene los textos de los botones
}

function draw() {
  background(0);
  

  // Pantalla de inicio
   musica.play();
  if (estado === 0) {
    image(imagenes[0], 0, 0, width, height);
    dibujarBoton(boton[0], width - 260, height - 60, 200, 40);
  }

  // Pantalla 1 ferb que podemos hacer hoy ?
  else if (estado === 1) {
    image(imagenes[1], 0, 0, width, height);
   fill(0);
   rect (2,40, 300, 40);
    copiarTexto(0, width / - 14, height * 0.1 , CENTER); 
    dibujarBoton(boton[2], width - 220, height - 60, 200, 40);
  }

  // Pantalla 2 tengo una idea
  else if (estado === 2) {
    image(imagenes[2], 0, 0, width, height);
    fill(0);
   rect (71,43, 150, 40);
    copiarTexto(1, width / - 14, height * 0.1 , CENTER); 
    dibujarBoton(boton[2], width - 220, height - 60, 200, 40);
  }

 // Pantalla 3  opciones 0- maquina traductora de animales 1-maquina de fabricar nieve 
  else if (estado === 3) {
    image(imagenes[3], 0, 0, width, height);
   dibujarBotonOpciones(botonOpciones[0], width / 4 - 150, height / 6 - 60, 280, 50);
   dibujarBotonOpciones(botonOpciones[1], width / 2 + 10, height / 6- 60, 250, 50);
  }
  
  // Pantalla 4 comienzan a idear la maquina
  else if (estado === 4) {
    image(imagenes[4], 0, 0, width, height);
    fill(0);
   rect (128,40, 280, 40);
    copiarTexto(2, width / 8, height * 0.1 , CENTER); 
    dibujarBoton(boton[2], width - 220, height - 60, 200, 40);
  }
 // Pantalla 5 construyen la maquina  
  else if (estado === 5) {
    image(imagenes[5], 0, 0, width, height);
    fill(0);
   rect (36,40, 218, 40);
     copiarTexto(3, width / - 14, height * 0.1 , CENTER); 
    dibujarBoton(boton[2], width - 220, height - 60, 200, 40);
  }
  // Pantalla 6  perry intenta halar y accidentalmente revela su identidad secreta como agente 
  else if (estado === 6) {
    image(imagenes[6], 0, 0, width, height);
    fill(0);
   rect (65,40, 356, 55);
    copiarTexto(4, width / 12, height * 0.1 , CENTER); 
    dibujarBoton(boton[2], width - 220, height - 60, 200, 40);
  }
  // Pantalla 7 sorprendidos por lo que perry acaba de decir deben tomar una decision 
  else if (estado === 7) {
    image(imagenes[7], 0, 0, width, height);
    fill(0);
   rect (24,40, 356, 55);
    copiarTexto(5, width / 18, height * 0.1 , LEFT); 
    dibujarBoton(boton[2], width - 220, height - 60, 200, 40);
  }
  // Pantalla 8 opciones 2- ayudar aperry a su mision contra Doofenshimirtz 3-Hacer de cuenta que no escucharon nada
  else if (estado === 8) {
    image(imagenes[8], 0, 0, width, height);
   dibujarBotonOpciones(botonOpciones[2], width / 4 - 150, height / 6 - 60, 280, 80);
   dibujarBotonOpciones(botonOpciones[3], width / 2 + 10, height / 6- 60, 250, 80);
    
    
  }
  // Pantalla 9 phineas y ferb se suman a su mision 
  else if (estado === 9) {
    image(imagenes[9], 0, 0, width, height)
    fill(0);
   rect (182,40, 335, 40);
    copiarTexto(6, width / 4, height * 0.1 , CENTER); 
    dibujarBoton(boton[2], width - 220, height - 60, 200, 40);
    
  }
  // Pantalla 10 inventan un plan para ayudar a perry 
  else if (estado === 10) {
    image(imagenes[10], 0, 0, width, height);
    fill(0);
   rect (185,40, 331, 40);
    copiarTexto(7, width / 4, height * 0.1 , CENTER); 
    dibujarBoton(boton[2], width - 220, height - 60, 200, 40);
  }
  // Pantalla 11 logran derrotar a  Doofenshimirtz
  else if (estado === 11) {
    image(imagenes[11], 0, 0, width, height);
    fill(0);
   rect (20,2, 300, 40);
    copiarTexto(8, width / - 30, height * 0.02 , CENTER); 
    dibujarBoton(boton[2], width - 220, height - 60, 200, 40);
  }
  // Pantalla 12 siguen probando la maquina en otros animales 
  else if (estado === 12) {
    image(imagenes[12], 0, 0, width, height);
    fill(0);
   rect (3,40, 335, 55);
    copiarTexto(9, width / - 30, height * 0.1 , CENTER); 
    dibujarBoton(boton[2], width - 220, height - 60, 200, 40);
  }
  // Pantalla 13 candace ve esto y los quiere acusar con su madre 
  else if (estado === 13) {
    image(imagenes[13], 0, 0, width, height);
    fill(0);
   rect (103,40, 390, 55);
    copiarTexto(10, width / 6, height * 0.1 , CENTER); 
    dibujarBoton(boton[2], width - 220, height - 60, 200, 40);
  }
  // Pantalla 14 aparece un aujero negro que succiona la maquina  y desaparece 
  else if (estado === 14) {
    image(imagenes[14], 0, 0, width, height);
    fill(0);
   rect (103,40,386, 75);
    copiarTexto(11, width / 6, height * 0.1 , CENTER); 
    dibujarBoton(boton[2], width - 220, height - 60, 200, 40);
  }
  // Pantalla 15 la madre le dice a candace son solo phineas y ferb en el  jardin  
  else if (estado === 15) {
    image(imagenes[15], 0, 0, width, height);
    fill(0);
   rect (176,40, 348, 55);
    copiarTexto(12, width / 4, height * 0.1 , CENTER); 
    dibujarBoton(boton[2], width - 220, height - 60, 200, 40);
  }
  // Pantalla 16 empiezan a construir la maquina de nieve 
  else if (estado === 16) {
    image(imagenes[16], 0, 0, width, height);
    fill(0);
   rect (164,43, 385, 40);
    copiarTexto(13, width / 4, height * 0.1 , CENTER); 
    dibujarBoton(boton[2], width - 220, height - 60, 200, 40);
  }
  // Pantalla 17 encienden la maquina 
  else if (estado === 17) {
    image(imagenes[17], 0, 0, width, height);
    fill(0);
   rect (247,40, 220, 40);
    copiarTexto(14, width / 4, height * 0.1 , CENTER); 
    dibujarBoton(boton[2], width - 220, height - 60, 200, 40);
  }
  // Pantalla 18 todo el barrio comienza a llenarse de nieve 
  else if (estado === 18) {
    image(imagenes[18], 0, 0, width, height);
    fill(0);
   rect (157,38, 388, 40);
     copiarTexto(15, width / 4, height * 0.1 , CENTER); 
    dibujarBoton(boton[2], width - 220, height - 60, 200, 40);
  }
  // Pantalla 19 se genera problemas debido a que la nieve no se detiene 
  else if (estado === 19) {
    image(imagenes[19], 0, 0, width, height);
    fill(0);
   rect (176,41, 352, 60);
     copiarTexto(16, width / 4, height * 0.1 , CENTER); 
    dibujarBoton(boton[2], width - 220, height - 60, 200, 40);
  }
  // Pantalla 20 deben tomar una decision 
  else if (estado === 20) {
    image(imagenes[20], 0, 0, width, height);
    fill(0);
   rect (388,41, 241, 40);
     copiarTexto(17, width / 2, height * 0.1 , CENTER); 
    dibujarBoton(boton[2], width - 220, height - 60, 200, 40);
  }
  // Pantalla 21 opciones 4- usar la máquina para hacer una pista de esquí gigante 5-Buscar como apagar la máquina antes que se siga descontrolando
  else if (estado === 21) {
    image(imagenes[21], 0, 0, width, height);
   dibujarBotonOpciones(botonOpciones[4], width / 4 - 150, height / 6 - 60, 280, 80);
   dibujarBotonOpciones(botonOpciones[5], width / 2 + 10, height / 6- 60, 250, 80);
  }
  // Pantalla 22 phinead y ferb preocupados 
  else if (estado === 22 ) {
    image(imagenes[22], 0, 0, width, height);
    fill(0);
   rect (192,40, 316, 40);
     copiarTexto(18, width / 4, height * 0.1 , CENTER); 
    dibujarBoton(boton[2], width - 220, height - 60, 200, 40);
 
  }
  // Pantalla 23 perry aparece e intenta apagar la maquina sin ser visto 
  else if (estado === 23) {
    image(imagenes[23], 0, 0, width, height);
    fill(0);
   rect (163,40, 374, 55);
     copiarTexto(19, width / 4, height * 0.1 , CENTER); 
    dibujarBoton(boton[2], width - 220, height - 60, 200, 40);
  }
  // Pantalla 24 phineas y ferb se desprocupan porque se apago la maquina magicamente
  else if (estado === 24) {
    image(imagenes[24], 0, 0, width, height);
    fill(0);
   rect (158,40, 385, 55);
    copiarTexto(20, width / 4, height * 0.1 , CENTER); 
    dibujarBoton(boton[2], width - 220, height - 60, 200, 40);
  }
  // Pantalla 25 guardan la maquina para usarlo en otro momento 
  else if (estado === 25) {
    image(imagenes[25], 0, 0, width, height);
    fill(0);
   rect (155,40, 393, 55);
    copiarTexto(21, width / 4, height * 0.1 , CENTER); 
    dibujarBoton(boton[2], width - 220, height - 60, 200, 40);
  }
  // Pantalla 26 construyen un parque de diversiones de nieve 
  else if (estado === 26) {
    image(imagenes[26], 0, 0, width, height);
    fill(0);
   rect (168,40, 365, 55);
    copiarTexto(22, width / 4, height * 0.1 , CENTER); 
    dibujarBoton(boton[2], width - 220, height - 60, 200, 40);
  }
  // Pantalla 27 candace ve esto y los quiere acusar 
  else if (estado === 27) {
    image(imagenes[27], 0, 0, width, height);
    fill(0);
   rect (153,40, 390, 55);
    copiarTexto(23, width / 4, height * 0.1 , CENTER); 
    dibujarBoton(boton[2], width - 220, height - 60, 200, 40);
  }
  // Pantalla 28 Accidentalmente se cae.
  else if (estado === 28) {
    image(imagenes[28], 0, 0, width, height);
    fill(0);
   rect (13,40, 227, 40);
     copiarTexto(24, width / - 10, height * 0.1 , CENTER); 
    dibujarBoton(boton[2], width - 220, height - 60, 200, 40);
  }
  // pantalla 29 Pasa toda la tarde esquiando con sus hermanos.
    else if (estado === 29) {
    image(imagenes[29], 0, 0, width, height);
    fill(0);
   rect (0,40, 335, 55);
     copiarTexto(25, width / -25, height * 0.1 , CENTER); 
    dibujarBoton(boton[2], width - 220, height - 60, 200, 40);
  }
  //pantalla creditos 
    else if (estado === 30) {
    image(imagenes[30], 0, 0, width, height);
    fill(0);
    rect(0,360,290,220);
     copiarTexto(26, 8 , 390,LEFT);  
     copiarTexto(27, 8 , 420,LEFT);  
     copiarTexto(28, 8 , 440,LEFT);  
    dibujarBoton(boton[1], width - 220, height - 60, 200, 40);
  }
}


function mousePressed() {
  fill(255, 0, 0);   // rojo
  let bx = width - 220; //posicion del boton en x
  let by = height - 60; //posicion del boton en y
  let bw = 200; //ancho del boton 
  let bh = 40; // largo del boton


  // Pantalla inicio → pasa a pantalla 1
    if (estado === 0 && bordeBoton(bx, by, bw, bh)) {
  estado = 1;
    }

  // Pantalla 1 → pasa a pantalla 2
  else if (estado === 1 && bordeBoton(bx, by, bw, bh)) {
    estado = 2;
  }

  // Pantalla 2 → pasa a pantalla 3
  else if (estado === 2 && bordeBoton(bx, by, bw, bh)) {
    estado = 3;
  }
  // Pantalla 3 → pasa a pantalla 4
  if (estado === 3) {
    if (bordeBoton(width / 4 - 150, height / 6 - 60, 280, 50)) {
      estado = 4; // opción 1 lleva a pantalla 4
    } else if (bordeBoton(width / 2 + 10, height / 6 - 60, 250, 50)) {
      estado = 16 ; // opción 2 lleva a pantalla 16
    }
  }
 
  
   // Pantalla 4 → pasa a pantalla 5
  else if (estado === 4 && bordeBoton(bx, by, bw, bh)) {
    estado = 5;
  }
   // Pantalla 5 → pasa a pantalla 6
  else if (estado === 5 && bordeBoton(bx, by, bw, bh)) {
    estado = 6;
  }
   // Pantalla 6 → pasa a pantalla 7
  else if (estado === 6 && bordeBoton(bx, by, bw, bh)) {
    estado = 7;
  }
   // Pantalla 7 → pasa a pantalla 8
  else if (estado === 7 && bordeBoton(bx, by, bw, bh)) {
    estado = 8;
  }
   // Pantalla 8 → pasa a pantalla 9
   if (estado === 8) {
    if (bordeBoton(width / 4 - 150, height / 6 - 60, 280, 50)) {
      estado = 9; // opción 1 lleva a pantalla 4
    } else if (bordeBoton(width / 2 + 10, height / 6 - 60, 250, 50)) {
      estado = 12; // opción 2 lleva a pantalla 14
    }
  }
   // Pantalla 9 → pasa a pantalla 10
  else if (estado === 9 && bordeBoton(bx, by, bw, bh)) {
    estado = 10;
  }
   // Pantalla 10 → pasa a pantalla 11
  else if (estado === 10 && bordeBoton(bx, by, bw, bh)) {
    estado = 11;
  }
   // Pantalla 11 → pasa a pantalla 8
  else if (estado === 11 && bordeBoton(bx, by, bw, bh)) {
    estado = 30;
  }
   // Pantalla 12 → pasa a pantalla 13
  else if (estado === 12 && bordeBoton(bx, by, bw, bh)) {
    estado = 13;
  }
   // Pantalla 13 → pasa a pantalla 14
  else if (estado === 13 && bordeBoton(bx, by, bw, bh)) {
    estado = 14;
  }
   // Pantalla 14 → pasa a pantalla 15
  else if (estado === 14 && bordeBoton(bx, by, bw, bh)) {
    estado = 15;
  }
   // Pantalla 15 → pasa a pantalla 16
  else if (estado === 15 && bordeBoton(bx, by, bw, bh)) {
    estado = 30;
  }
   // Pantalla 16 → pasa a pantalla 17
  else if (estado === 16 && bordeBoton(bx, by, bw, bh)) {
    estado = 17;
  }
   // Pantalla 17 → pasa a pantalla 18
  else if (estado === 17 && bordeBoton(bx, by, bw, bh)) {
    estado = 18;
  }
   // Pantalla 18 → pasa a pantalla 19
  else if (estado === 18 && bordeBoton(bx, by, bw, bh)) {
    estado = 19;
  }
  
   // Pantalla 19 → pasa a pantalla 20
  else if (estado === 19 && bordeBoton(bx, by, bw, bh)) {
    estado = 20;
  }
   // Pantalla 20 → pasa a pantalla 21
  else if (estado === 20 && bordeBoton(bx, by, bw, bh)) {
    estado = 21;
  }
   // Pantalla 21 → pasa a pantalla 22
     else if (estado === 21) {
    if (bordeBoton(width / 4 - 150, height / 6 - 60, 280, 50)) {
      estado = 26; // opción 4 lleva a pantalla 26
    } else if (bordeBoton(width / 2 + 10, height / 6 - 60, 250, 50)) {
      estado = 22 ; // opción 5 lleva a pantalla 22
  }
      }
  // Pantalla 22 → pasa a pantalla 23
  else if (estado === 22 && bordeBoton(bx, by, bw, bh)) {
   estado = 23;
  }
   // Pantalla 23 → pasa a pantalla 24
  else if (estado === 23 && bordeBoton(bx, by, bw, bh)) {
    estado = 24;
  }
   // Pantalla 24 → pasa a pantalla 25
  else if (estado === 24 && bordeBoton(bx, by, bw, bh)) {
    estado = 25;
  }
   // Pantalla 25 → pasa a pantalla 0
  else if (estado === 25 && bordeBoton(bx, by, bw, bh)) {
    estado = 30;
  }
   // Pantalla 26 → pasa a pantalla 27
  else if (estado === 26 && bordeBoton(bx, by, bw, bh)) {
    estado = 27;
  }
   // Pantalla 27 → pasa a pantalla 28
  else if (estado === 27 && bordeBoton(bx, by, bw, bh)) {
    estado = 28;
  }
   // Pantalla 28  → pasa a pantalla 29
  else if (estado === 28 && bordeBoton(bx, by, bw, bh)) {
    estado = 29;
  }
  // Pantalla 29  → pasa a pantalla 30
  else if (estado === 29 && bordeBoton(bx, by, bw, bh)) {
    estado = 30;
  }
  // Pantalla 30  → pasa a pantalla 0
  else if (estado === 30 && bordeBoton(bx, by, bw, bh)) {
    estado = 0;
  }
  }
  
  
