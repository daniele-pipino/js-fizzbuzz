// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

// ciclo per stampare numeri d 1 a 100

// recupero elemento html
var text = document.getElementById('numberlist');


for (var i = 1; i <= 100; i++){
    text.innerHTML = '<li>' + i + '</li>';
}

// sistema per identificare le varie divisibilità

