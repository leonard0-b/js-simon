// La pagina espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
var i = 0;
var numeriRandom = [];

while (i < 5) {
  numeroRandom = randomNumberInRange(1, 50);
  if (numeriRandom.includes(numeroRandom)) {
  } else {
    numeriRandom.push(numeroRandom);
  }
  i++;
}
console.log(numeriRandom);

$("#numeri").text(numeriRandom);

setTimeout(function(){
  var numeriDom = $("#numeri").text(numeriRandom);
  numeriDom.hide();
}, 5000);














// FUNZIONI
function randomNumberInRange(min, max) {
  if (isNaN(min) || isNaN(max)) {
    console.log("Non sono numeri");
  } else {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
