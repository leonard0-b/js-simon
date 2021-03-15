// La pagina espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
var numeriRandom = [];
var numeriIndovinati = [];
var numeriUtente = [];

while (numeriRandom.length < 5) {
  numeroRandom = randomNumberInRange(1, 50);
  if (numeriRandom.includes(numeroRandom)) {
  } else {
    numeriRandom.push(numeroRandom);
  }
}
console.log(numeriRandom);

$("#numeri").text(numeriRandom);

setTimeout(function(){
  var numeriDom = $("#numeri").text(numeriRandom);
  numeriDom.hide();
}, 5000);


setTimeout(function(){
  for (var i = 0; i < 5; i++) {
    var richiestaNum = parseInt(prompt("Che numeri hai visto?"));
      if (numeriRandom.includes(richiestaNum)) {
        numeriIndovinati.push(richiestaNum);
      }
      $("#risultato").text("Hai indovinato " + numeriIndovinati.length + " numeri! I numeri sono: " + numeriIndovinati);
}
}, 6000);

console.log(numeriIndovinati);

















// FUNZIONI
function randomNumberInRange(min, max) {
  if (isNaN(min) || isNaN(max)) {
    console.log("Non sono numeri");
  } else {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
