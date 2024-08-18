class producto{
    constructor(){
        this.botones= [
            document.getElementById("boton50").value,
            document.getElementById("boton100").value,
            document.getElementById("boton200").value,
            document.getElementById("boton500").value,
            document.getElementById("boton1000").value,
            document.getElementById("boton2000").value,
            document.getElementById("boton5000").value,
            document.getElementById("boton10000").value,
            document.getElementById("boton20000").value,
            document.getElementById("boton50000").value,
            document.getElementById("boton100000").value
        ];
    }
    mostrar(){
        return "50 pesos";
    }
}

function valor() {
    // console.log(boton50, boton100, boton200, boton500, boton1000, boton2000, boton5000,
    // boton10000, boton20000, boton50000, boton100000);
    const moneda = new producto()
    console.log(moneda.mostrar());
}


