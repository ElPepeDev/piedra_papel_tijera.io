// referencias 

var puntosJugador = document.getElementById('puntosJugador');
var puntosCPU = document.getElementById('puntosCPU');

var jugadorPiedra = document.getElementById('jugadorPiedra');
var jugadorPapel = document.getElementById('jugadorPapel');
var jugadorTijeras = document.getElementById('jugadorTijeras');

var cpuPiedra = document.getElementById('cpuPiedra');
var cpuPapel = document.getElementById('cpuPapel');
var cpuTijeras = document.getElementById('cpuTijeras');

var mensaje = document.getElementById('mensaje');


//listeners

jugadorPiedra.addEventListener('click', function () {
  play(1);
});
jugadorPapel.addEventListener('click', function () {
  play(2);
});
jugadorTijeras.addEventListener('click', function () {
  play(3);
});


//Logica

var puntosJugadorMemoria = 0;
var puntosCpuMemoria = 0;

function play(botonPresionado) {
  clearButtonsColor();
  var cpuAction = Math.floor(Math.random() * 3) + 1;
  setWinner(botonPresionado,cpuAction);
}

function setWinner(playerAction,cpuAction) {
  var playerWon=false;
  if (playerAction!=cpuAction) {
    if ((playerAction == 1 && cpuAction == 3) || (playerAction == 2 &&   cpuAction == 1)|| (playerAction == 3 &&   cpuAction == 2)) {
      mensaje.innerHTML = "Ganaste ewe ";
      playerWon=true;
    }
    else
    {
      mensaje.innerHTML = "Perdiste :c ";
    }
    setButtonsColor(true, playerAction,playerWon);
    setButtonsColor(false, cpuAction,!playerWon);

    (playerWon)? puntosJugadorMemoria++ : puntosCpuMemoria++;
    puntosJugador.innerHTML = puntosJugadorMemoria;
    puntosCPU.innerHTML = puntosCpuMemoria;
  }
  else
  {
    mensaje.innerHTML = "Empate lel ";
    setButtonsColor(true, playerAction,true);
    setButtonsColor(false, cpuAction,true);
  } 
}

function setButtonsColor(isPlayerButton, botonPresionadoId,won) {
var color = (won)? "green" : "red";

  if (isPlayerButton) {
    if (botonPresionadoId == 1) {
      jugadorPiedra.style.backgroundColor = color;
    }
    if (botonPresionadoId == 2) {
      jugadorPapel.style.backgroundColor = color;
    }
    if (botonPresionadoId == 3) {
      jugadorTijeras.style.backgroundColor = color;
    }
  }
  else {
    if (botonPresionadoId == 1) {
      cpuPiedra.style.backgroundColor = color;
    }
    if (botonPresionadoId == 2) {
      cpuPapel.style.backgroundColor = color;
    }
    if (botonPresionadoId == 3) {
      cpuTijeras.style.backgroundColor = color;
    }
  }
}

function clearButtonsColor() {

  jugadorPiedra.style.backgroundColor = 'white';
  jugadorPapel.style.backgroundColor = 'white';
  jugadorTijeras.style.backgroundColor = 'white';
  cpuPiedra.style.backgroundColor = 'white';
  cpuPapel.style.backgroundColor = 'white';
  cpuTijeras.style.backgroundColor = 'white';

}
