// La pagina espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
var numeriRandom = [];
var numeriIndovinati = [];

while (numeriRandom.length < 5) { //creo 5 numeri casuali tra 1 e 50 🐱‍👤
  numeroRandom = randomNumberInRange(1, 50);
  if (numeriRandom.includes(numeroRandom)) {  //se il numero è già incluso nell'arrey generane un altro🐱‍👤
  } else {  //altrimenti🐱‍👤
    numeriRandom.push(numeroRandom);  //pushalo nell'array🐱‍👤
  }
}
console.log(numeriRandom);

$("#numeri").text(numeriRandom); //punto il p nell'html🐱‍👤

setTimeout(function(){  //definisco una funzione temporale a 5sec🐱‍👤
  var numeriDom = $("#numeri").text(numeriRandom);
  numeriDom.hide(); //dopo 5 sec nascondo i p dal DOM🐱‍👤
}, 5000);


setTimeout(function(){  //definisco funzione temporale che entra dopo 6 secondi🐱‍👤
  for (var i = 0; i < 5; i++) { //chiedo all'utente 5 numeri🐱‍👤
    var richiestaNum = parseInt(prompt("Che numeri hai visto?")); //richiedo i numeri🐱‍👤
      if (numeriRandom.includes(richiestaNum)) {  //se il numero è nell'array dei numeri randomici🐱‍👤
        numeriIndovinati.push(richiestaNum);  //pushalo nell'array dei numeri indovinati🐱‍👤
      }
      $("#risultato").text("Hai indovinato " + numeriIndovinati.length + " numeri! I numeri sono: " + numeriIndovinati);  //stampo il risultato🐱‍👤
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
