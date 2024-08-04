var total;

// document.getElementById('apostar').addEventListener('click', function() {
//     var apuesta= document.getElementById('apuesta').value;
//     apostado = apuesta;
// });

document.getElementById('generateButton').addEventListener('click', function() {
    var apuesta= document.getElementById('apuesta').value;

    var randomNumber = Math.floor(Math.random() * 6) + 1;
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;

    if((randomNumber + randomNumber1) == 7){
        total += (apuesta * 5);
    }else if(randomNumber == randomNumber1){
        total += (apuesta * 3);
    }else if((randomNumber + randomNumber1) == 3){
        total += (apuesta * 2);
    }

  console.log(total);
    document.getElementById('result').textContent = 'Número Aleatorio: ' + randomNumber + ' y ' + randomNumber1;
});

console.log(apostado);
