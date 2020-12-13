function setup() {
  createCanvas(500, 500);
  frameRate(30);
}
var contador = 0;
var tela = 0;
var largura = 60;
var altura = 160;
var menux = 170;
var menuy1 = 160;
var menuy2 = 240;
var menuy3 = 320;
var titulo = 30;
var corpo = 20;
var centro = 250;
var t = 0;
let cont = 0;
let contS = 0;
let contr = 180;
let contR = 0;
var infor;

function preload() {
  img = loadImage('mapaceleste.png'); //imagem para exemplificar um mapa celestial
  zoo = loadImage('constelacoes-zodiacais.jpg'); //imagens de constelações
  peixe = loadImage('fish.jpg');
  simbolos = loadImage('planeta-símbolos.jpg')
  andr = loadImage('andromeda.jpg');
  cass = loadImage('cassiopeia.jpeg');
  ursam = loadImage('ursa maior.png');
  ursM = loadImage('ursa maior?.png');
  maior = loadImage('maior.jpg');
}

function draw() {
  background(0, 0, 61); // 
  textFont('Lato Black')
  textAlign(CENTER);

  //   menu principal do jogo:
  if (tela == 0) {
    textSize(titulo);
    fill(148, 0, 211);
    noStroke(0, 0, 61)
    text('Mapa celeste \n & \n Constelações', centro, 60);
    textSize(corpo);
    if (mouseX > menux && mouseX < menux + altura && mouseY > menuy1 && mouseY < menuy1 + largura) {
      stroke(200);
      fill(20);
      rect(menux, menuy1, altura, largura);
      if (mouseIsPressed) {
        tela = 3;
      }
    }
    if (mouseX > menux && mouseX < menux + altura && mouseY > menuy2 && mouseY < menuy2 + largura) {
      stroke(220);
      fill(20);
      rect(menux, menuy2, altura, largura);
      if (mouseIsPressed) {
        tela = 1;
      }
    }
    if (mouseX > menux && mouseX < menux + altura && mouseY > menuy3 && mouseY < menuy3 + largura) {
      stroke(220);
      fill(20);
      rect(menux, menuy3, altura, largura);
      if (mouseIsPressed) {
        tela = 2;
      }
    }
    fill(213, 213, 213);
    noStroke(0, 0, 61)
    text('Início', centro, menuy1 + 40);
    text('Informações', centro, menuy2 + 35);
    text('Crédidos', centro, menuy3 + 40);
  }
  //   Informações
  if (tela == 1) {
    textSize(titulo);
    fill(148, 0, 211);
    noStroke(0, 0, 61)
    text('Informações', centro, 60);
    textSize(corpo);
    var inf = 'O jogo "Mapa celeste & Constelações" tem como público alvo alunos do 5° ano do ensino fundamental. O objetivo é passar conhecimento por meio do lúdico utilizando este jogo. Para isso, é apresentando um mapa celeste por um determindo tempo e o jogador terá que memorizar as constelações para que depois possa identificar-las. Além disso vai ser exibido ao longo do jogo informações a respeito da temática constelações e mapas celestes.';
    fill(213, 213, 213);
    text(inf, 50, 100, 400, 400);
    if (mouseX > 60 && mouseX < 180 && mouseY > 400 && mouseY < 460) {
      stroke(200);
      fill(20);
      rect(60, 400, 120, largura);
      if (mouseIsPressed) {
        tela = 0;
      }
    }
    if (mouseX > 320 && mouseX < 440 && mouseY > 400 && mouseY < 460) {
      stroke(220);
      fill(20);
      rect(320, 400, 120, largura);

      if (mouseIsPressed) {
        tela = 3;
      }
    }
    fill(213, 213, 213);
    noStroke(0, 0, 61)
    text('Menu', 120, 440);
    fill(213, 213, 213);
    noStroke(0, 0, 61)
    text('Inicio', 380, 440);
  }
  //   Crédidos
  if (tela == 2) {
    textSize(titulo);
    fill(148, 0, 211);
    noStroke(0, 0, 61)
    text('Crédidos', centro, 90);
    textSize(corpo);
    var credidos = 'Imagens disponíveis em: brasilescola.uol.com.br/fisica/constelacoes.htm www.pikist.com/free-photo-scrds/pt\n \n Educador: \n André Luís Pereira Estevan, formado em Ciências Biológicas pela UFBP.'
    fill(213, 213, 213);
    text(credidos, 50, 150, 400, 500);
    if (mouseX > 60 && mouseX < 180 && mouseY > 400 && mouseY < 460) {
      stroke(200);
      fill(20);
      rect(60, 400, 120, largura);
      if (mouseIsPressed) {
        tela = 0;
      }
    }
    if (mouseX > 320 && mouseX < 440 && mouseY > 400 && mouseY < 460) {
      stroke(220);
      fill(20);
      rect(320, 400, 120, largura);
      if (mouseIsPressed) {
        tela = 3;
      }
    }
    fill(213, 213, 213);
    noStroke(0, 0, 61)
    text('Menu', 120, 440);
    fill(213, 213, 213);
    noStroke(0, 0, 61)
    text('Início', 380, 440);
  }
  //   Início
  if (tela == 3) {
    textSize(40);
    let texto1 = 'O que é um mapa celestial:'
    fill(148, 0, 211);
    text(texto1, 60, 60, 400, 400);
    textSize(20);

    let texto2 = 'É um mapa do céu noturno usadas para identificar e localizar objetos astronômicos como estrelas, constelações e galáxias, e têm sido usadas para a navegação humana desde tempos antigos.'
    fill(213, 213, 213);
    text(texto2, 40, 200, 400, 300);

    //passar para próxima imagem ou voltar

    if (mouseX > 60 && mouseX < 180 && mouseY > 400 && mouseY < 460) {
      stroke(200);
      fill(20);
      rect(60, 400, 120, largura);
      if (mouseIsPressed) {
        tela--;
      }
    }
    if (mouseX > 320 && mouseX < 440 && mouseY > 400 && mouseY < 460) {
      stroke(220);
      fill(20);
      rect(320, 400, 120, largura);
      if (mouseIsPressed) {
        tela = 4;
      }
    }
    fill(213, 213, 213);
    noStroke(0, 0, 61)
    text('VOLTAR', 120, 440);
    fill(213, 213, 213);
    noStroke(0, 0, 61)
    text('PRÓXIMO', 380, 440);
  }
  //   O que é um mapa celestial
  if (tela == 4) {
    textSize(titulo);
    let texto2 = 'Observe atentamente'
    fill(148, 0, 211);
    text(texto2, 50, 60, 400, 300);
    image(zoo, 0, 100, 500, 250);
    textSize(corpo);

    cont = cont + 1
    contS = parseInt(cont / 30);
    text("Tempo: " + contS, centro, 400);
    if (contS > 5) {
      tela++;
      cont = 0;
    }

  }
  // constelações do zoodiago com tempo crescente de 0 a 5
  if (tela == 5) {
    textSize(titulo);
    let texto2 = 'Que constelação é esta?'
    fill(148, 0, 211);
    text(texto2, 60, 60, 400, 300);
    image(peixe, 0, 100, 500, 250);
    textSize(corpo)
    fill(213, 213, 213);
    noStroke(0, 0, 61)

    if (mouseX > 60 && mouseX < 180 && mouseY > 350 && mouseY < 410) {
      stroke(200);
      fill(20);
      rect(60, 350, 120, largura);
      if (mouseIsPressed) {
        tela = 10;
      }
    }
    if (mouseX > 60 && mouseX < 180 && mouseY > 410 && mouseY < 500) {
      stroke(200);
      fill(20);
      rect(60, 410, 120, largura);
      if (mouseIsPressed) {
        tela = 10;
      }
    }
    if (mouseX > 320 && mouseX < 440 && mouseY > 410 && mouseY < 500) {
      stroke(220);
      fill(20);
      rect(320, 410, 120, largura);
      if (mouseIsPressed) {
        tela = 10;
      }
    }
    if (mouseX > 320 && mouseX < 440 && mouseY > 350 && mouseY < 410) {
      stroke(220);
      fill(20);
      rect(320, 350, 120, largura);
      if (mouseIsPressed) {
        tela++;
      }
    }
    fill(213, 213, 213);
    noStroke(0, 0, 61)
    text('Aquário', 120, 390);
    text('Peixes', 380, 390);
    text('zzzz', 120, 450);
    text('xxx', 380, 450);
  }
  //   Que constelação é esta: o jogador verá uma constelação e tera que quatro opições para clicar, caso escolha a opção certa avançara de nível.
  if (tela == 6) {
    textSize(titulo);
    fill(148, 0, 211);
    noStroke(0, 0, 61)
    text('Parabêns! Você acertou', centro, 60);
    textSize(corpo);
    var inf = 'A constelação de peixes fica visível no Brasil entre o final de outrubro e início de novembro nascendo no leste e pode ser vista às 21h de preferência em noites de luar';
    fill(213, 213, 213);
    text(inf, 50, 100, 400, 400);
    if (mouseX > 60 && mouseX < 180 && mouseY > 400 && mouseY < 460) {
      stroke(200);
      fill(20);
      rect(60, 400, 120, largura);
      if (mouseIsPressed) {
        tela = 0;
      }
    }
    if (mouseX > 320 && mouseX < 440 && mouseY > 400 && mouseY < 460) {
      stroke(220);
      fill(20);
      rect(320, 400, 120, largura);

      if (mouseIsPressed) {
        tela++;
      }
    }
    fill(213, 213, 213);
    text('Menu', 120, 440);
    text('Próximo', 380, 440);
    noStroke(0, 0, 61)
  }
  // parabens vc acertou
  if (tela == 7) {
    textSize(titulo);
    fill(148, 0, 211);
    text('Observe atentamente', 50, 60, 400, 300);
    text(contR, 400, 400)
    textSize(corpo);

    contr = contr - 1
    contR = parseInt(contr / 30);

    var imagens = [cass, maior, andr];
    var x = [50, 50, 270];
    var xf = [200, 200, 200];
    var y = [120, 300, 200];
    var yf = [120, 120, 120];
    var nome = ['CASSIOPEIA', 'URSA MAIOR', 'ANDREAMEDIA']
    for (i = 0; i < 3; i++) {
      image(imagens[i], x[i], y[i], xf[i], yf[i]);
      fill(148, 0, 211);
    }
    if (contR < 1) {
      tela++;
      contr = 180;
    }
  }
  // É exibido 3 imagens de constelações equatoriais, durante 6s (desta vez será contado regresivamente). Usei a repetição contada e vetores para distribuir as imagens.
  if (tela == 8) {
    fill(148, 0, 211);
    text('Qual é a constelação?', 60, 60, 400, 300);
    image(ursM, 0, 100, 500, 250);
    textSize(corpo)
    fill(213, 213, 213);
    noStroke(0, 0, 61)

    if (mouseX > 60 && mouseX < 180 && mouseY > 350 && mouseY < 410) {
      stroke(200);
      fill(20);
      rect(60, 350, 120, largura);
      if (mouseIsPressed) {
        tela++;
      }
    }
    if (mouseX > 60 && mouseX < 180 && mouseY > 410 && mouseY < 500) {
      stroke(200);
      fill(20);
      rect(60, 410, 120, largura);
      if (mouseIsPressed) {
        tela = 10.08;
      }
    }
    if (mouseX > 320 && mouseX < 440 && mouseY > 410 && mouseY < 500) {
      stroke(220);
      fill(20);
      rect(320, 410, 120, largura);
      if (mouseIsPressed) {
        tela = 10.08;
      }
    }
    if (mouseX > 320 && mouseX < 440 && mouseY > 350 && mouseY < 410) {
      stroke(220);
      fill(20);
      rect(320, 350, 120, largura);
      if (mouseIsPressed) {
        tela = 10.08;
      }
    }
    fill(213, 213, 213);
    noStroke(0, 0, 61)
    text('Urso Maior', 120, 390);
    text('Andromeda', 380, 390);
    text('Urso menor', 120, 450);
    text('Cassiopeia', 380, 450);

  }
//   Qual é a constelação?
  if (tela == 9) {
    textSize(titulo);
    fill(148, 0, 211);
    noStroke(0, 0, 61)
    text('Parabêns! Você acertou', centro, 60);
    text('Quer ir para informações extras?', centro, 200);
    if (mouseX > 60 && mouseX < 180 && mouseY > 400 && mouseY < 460) {
      stroke(200);
      fill(20);
      rect(60, 400, 120, largura);
      if (mouseIsPressed) {
        tela = 0;
      }
    }
    if (mouseX > 320 && mouseX < 440 && mouseY > 400 && mouseY < 460) {
      stroke(220);
      fill(20);
      rect(320, 400, 120, largura);
      if (mouseIsPressed) {
        tela = 11;
      }
    }
    fill(213, 213, 213);
    noStroke(0, 0, 61)
    text('NÃO', 120, 440);
    fill(213, 213, 213);
    noStroke(0, 0, 61)
    text('SIM', 380, 440);
  }
//   parabens
  if (tela == 10) {
    textSize(titulo);
    let texto2 = 'Você errou! Observe novamente'
    fill(148, 0, 211);
    text(texto2, 50, 60, 400, 300);
    image(zoo, 0, 100, 500, 250);
    textSize(corpo);
    cont = cont + 1
    contS = parseInt(cont / 30);
    text("Tempo: " + contS, centro, 400);
    if (contS > 5) {
      tela = 5;
      cont = 0
    }
  }
  //erro tela = 5
  if (tela == 10.08) {
    textSize(titulo);
    let tex = 'Você errou! Observe novamente'
    fill(148, 0, 211);
    text(tex, 50, 60, 400, 300);
    text(contR, 400, 400)
    textSize(corpo);

    contr = contr - 1
    contR = parseInt(contr / 30);
    var imagens = [cass, maior, andr];
    var x = [50, 50, 270];
    var xf = [200, 200, 200];
    var y = [120, 300, 200];
    var yf = [120, 120, 120];
    var nome = ['CASSIOPEIA', 'URSA MAIOR', 'ANDREAMEDIA']
    for (i = 0; i < 3; i++) {
      image(imagens[i], x[i], y[i], xf[i], yf[i]);
      fill(148, 0, 211);
    }
    if (contR < 1) {
      tela = 8;
      contr = 180;
    }

  }
//   erro tela=8
  if (tela == 11) {
    textSize(corpo);
    fill(213, 213, 213);
    text('As constelações Urso Maior, Andromeda e Cassiopeia são classificadas como boreais pois ficam no hemisfério celeste norte. O primeiro mapa celeste apresentado neste jogo é composto pelas constelações do zoodiaco. Estas são localizadas ao longo da eclíptica do Sol: Áries, Touro, Gêmeos, Câncer, Leão, Virgem, Libra, Escorpião, Sagitário, Capricórnio, Aquário e Peixes;', 30, 120, 400, 400);
      }
}