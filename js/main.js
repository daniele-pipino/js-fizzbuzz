// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.



// recupero elemento html

var list = document.getElementById('numberlist');

var listanumeri = "";


// ciclo per stampare numeri da 1 a 100

for (var i = 1; i <= 100; i++) {

    if (i % 3 == 0 && i % 5 == 0) {
        listanumeri += '<li>' + "fizzbuzz" + '</li>';
    } else if (i % 3 == 0) {
        listanumeri += '<li>' + " fizz " + '</li>';
    } else if (i % 5 == 0) {
        listanumeri += '<li>' + " buzz " + '</li>';
    } else {
        listanumeri += '<li>' + i + '</li>';
    }

};

list.innerHTML = listanumeri;


