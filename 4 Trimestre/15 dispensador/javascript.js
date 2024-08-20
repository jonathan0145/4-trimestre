class Producto {
    constructor() {
        this.tabla = document.getElementById("tabla");

        // Verifica si 'tabla' no es null
        if (!this.tabla) {
            console.error('Elemento con ID "tabla" no encontrado.');
            return;
        }

        // Inicializa el total a 0
        this.total = 0;

        // Botones
        const botonIds = [
            "boton50", "boton100", "boton200", "boton500", "boton1000",
            "boton2000", "boton5000", "boton10000", "boton20000", 
            "boton50000", "boton100000"
        ];

        this.botones = botonIds.map(id => document.getElementById(id));

        // Verifica si todos los botones están presentes y agrega el manejador de eventos
        this.botones.forEach((boton) => {
            if (!boton) {
                console.error(`Elemento con ID "${boton.id}" no encontrado.`);
            } else {
                boton.addEventListener('click', this.mostrarValor.bind(this));
            }
        });

        // Maneja el botón de borrar
        const borrar = document.getElementById("borrar");
        if (borrar) {
            borrar.addEventListener('click', this.borrarTotal.bind(this));
        } else {
            console.error('Elemento con ID "borrar" no encontrado.');
        }
    }

    mostrarValor(event) {
        if (event && event.target) {
            // Suma el valor del botón clickeado
            this.total += parseInt(event.target.value, 10);
            // Muestra el total actualizado en el campo de entrada
            this.tabla.value = this.total;
        } else {
            console.error('El evento es undefined o no tiene target.');
        }
    }

    borrarTotal() {
        // Reinicia el total a 0 y actualiza el campo de entrada
        this.total = 0;
        this.tabla.value = this.total;
    }
}

class gaseosa{
    constructor(codigo,nombre,tamaño, envase,valor){
        this.codigo = codigo;
        this.nombre = nombre;
        this.tamaño = tamaño;
        this.envase = envase;
        this.valor = valor;
    }

}

// productos
const cocap250 = new gaseosa(1,"coca cola", 250,"plastico",2000);
const cocap500 = new gaseosa(2,"coca cola", 500,"plastico",3000);
const cocap1000 = new gaseosa(3,"coca cola", 1000,"plastico",4000);
const cocap1500 = new gaseosa(4,"coca cola", 1500,"plastico",5000);
const cocap2000 = new gaseosa(5,"coca cola", 2000,"plastico",6000);
const cocap2500 = new gaseosa(6,"coca cola", 2500,"plastico",7000);
const cocap3000 = new gaseosa(7,"coca cola", 3000,"plastico",8000);
const cocav200 = new gaseosa(8,"coca cola", 200,"vidrio",2300);
const cocav330 = new gaseosa(9,"coca cola", 330,"vidrio",3300);
const cocav350 = new gaseosa(10,"coca cola", 350,"vidrio",3800);

const gaseosas = [cocap250, cocap500,cocap1000, cocap1500, cocap2000, cocap2500, cocap3000,cocav200,cocav330, cocav350];

// Instancia de la clase
const moneda = new Producto();