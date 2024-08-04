var digitos = prompt();
var array = digitos.split(' ');
var i = 0;
suma = 0;


while (i < array.length) {
    if (array[i] > 10) {
        suma += parseInt(array[i]);
    }
    i++;
}
document.write(array);
document.write(suma);