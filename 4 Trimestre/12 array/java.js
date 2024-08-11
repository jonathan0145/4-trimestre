let array =[];
let suma= 0;
let clic = 0;
                
function capturando() {
    let valor =parseInt(document.getElementById('num').value);
    let mostrar = document.getElementById('pa');
    if(valor >= 1 && valor < 100){
        array.push(valor);
        let cantidadm=0;

        if(array.length == 10){
            for (let i = 0; i < array.length; i++) {
                if (array[i] > 60) {
                    suma +=  array[i];
                } else if (array[i] < 20) {
                    cantidadm++;
                }
            }
        
            mostrar.textContent = `la suma de los numeros mayores a 60 es ${suma} y la cantidad de numero menores a 20 es ${cantidadm}. los numeros digitados fueron ${array}`;
        }
        if (array.length == 11) {
            array.pop();
        }
    }
}