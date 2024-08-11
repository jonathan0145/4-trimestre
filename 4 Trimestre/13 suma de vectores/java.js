const v1 = [];
const v2 = [];
const sumaV = [];

function sumarV(){
    let v1 = document.getElementById('vector1').value;
    let v2 = document.getElementById('vector2').value;
    let pa = document.getElementById('pa');

    v1 = v1.split(" ");
    v2 = v2.split(" ");

    if(v1.length > 5 || v2.length > 5){
        pa.textContent = "digito mas de 5 numeros"; 
    }
    else if(v1.length == 5 && v1.length == 5){
        for (let i = 0; i < v1.length && i < v2.length; i++) {
            sumaV[i] = parseInt(v1[i]) + parseInt(v2[i]);
        }
        pa.textContent = sumaV;  
    }

}