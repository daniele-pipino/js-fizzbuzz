// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.



// recupero elemento html

var list = document.getElementById('numberlist');

var listanumeri = "";


// ciclo per stampare numeri d 1 a 100

for (var i = 1; i <= 100; i++){
    listanumeri += '<li>' + i + '</li>';

    // sistema divisibilitàa
    if (i % 3 == 0) {
        listanumeri += 'fizz';
        console.log('Divisibili per 3: ', i);
    }if (i % 5 == 0) {
        listanumeri += 'buzz';
        console.log('divisibili per 5:', i);
    }
   
}


list.innerHTML = listanumeri;


