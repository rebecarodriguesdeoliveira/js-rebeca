let xBolinha = 300;
let yBolinha = 200;
const diametro = 15;
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;
let yPlayer = 200;
let yNpc = 200;
const velocidadeYNpc = 3;
let pontoPlayer = 0;
let pontoNpc = 0;
const larguraRaquete = 10;
const comprimentoRaquete = 60;
const raio = diametro / 2;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  
  desenhaBolinha();
  moveBolinha();
  moveNpc();
  verificaColisaoBorda();
  verificaColisaoRaquete();
  desenhaRaquetes();
  moveJogador();
  exibePontos();
}

function desenhaBolinha() {
  circle(xBolinha, yBolinha, diametro);
}

function moveBolinha() {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function moveNpc() {
  yNpc += velocidadeYNpc;
}

function verificaColisaoBorda() {
  // Colisão com bordas laterais
  if (xBolinha > width) {
    velocidadeXBolinha *= -1;
    pontoPlayer += 1;
  } else if (xBolinha < 0) {
    velocidadeXBolinha *= -1;
    pontoNpc += 1;
  }
  
  // Colisão com bordas superior e inferior
  if (yBolinha > height || yBolinha < 0) {
    velocidadeYBolinha *= -1;
  }
  
  if (yNpc > height || yNpc < 0) {
    velocidadeYNpc *= -1;
  }
}

function verificaColisaoRaquete() {
  // Colisão com a raquete do jogador
  if (xBolinha < 200 && xBolinha - raio < larguraRaquete && yBolinha < yPlayer + comprimentoRaquete && yBolinha > yPlayer - comprimentoRaquete) {
    velocidadeXBolinha *= -1;
  }
  
  // Colisão com a raquete do NPC
  if (xBolinha > 400 && xBolinha + raio > 600 - larguraRaquete && yBolinha < yNpc + comprimentoRaquete && yBolinha > yNpc - comprimentoRaquete) {
    velocidadeXBolinha *= -1;
  }
}

function desenhaRaquetes() {
  rect(0, yPlayer, larguraRaquete, comprimentoRaquete);
  rect(width - larguraRaquete, yNpc, larguraRaquete, comprimentoRaquete);
}

function moveJogador() {
  if (keyIsPressed) {
    if (keyCode === UP_ARROW) {
      yPlayer -= 8;
    } else if (keyCode === DOWN_ARROW) {
      yPlayer += 8;
    }
  }
}

function exibePontos() {
  fill(255);
  textAlign(CENTER);
  textSize(16);
  text(pontoPlayer, width / 2 - 30, 30);
  text(pontoNpc, width / 2 + 30, 30);
}
