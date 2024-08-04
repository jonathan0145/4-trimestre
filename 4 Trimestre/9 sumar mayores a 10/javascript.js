var digitos = prompt();
var array = digitos.split(' ');
var i = 0;
suma = 0;
var a = array.length-1;

while(array.length > 10){
    array.pop();
    a--;
}

while (i < array.length) {
    if (array[i] > 10) {
        suma += parseInt(array[i]);
    }
    i++;
}
document.write(array, " resultado suma: ");
document.write(suma);