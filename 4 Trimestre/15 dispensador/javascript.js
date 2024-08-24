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

class codigos{
    constructor(){
        this.tablas = document.getElementById("tablas");

        // Verifica si 'tabla' no es null
        if (!this.tablas) {
            console.error('Elemento con ID "tabla" no encontrado.');
            return;
        }

        // Inicializa con digita codigo
        this.total = "Digita codigo";

        // Botones
        const botonIds = [
            "boton1", "boton2", "boton3", "boton4", "boton5",
            "boton6", "boton7", "boton8", "boton9", 
            "boton10"
        ];

        this.botones = botonIds.map(id => document.getElementById(id));

        // Verifica si todos los botones están presentes y agrega el manejador de eventos
        this.botones.forEach((boton) => {
            if (!boton) {
                console.error(`Elemento con ID "${boton.id}" no encontrado.`);
            } else {
                boton.addEventListener('click', this.mostrarValors.bind(this));
            }
        });

         // Maneja el botón de comprar
         const comprar = document.getElementById("botonComprar");
         if (comprar) {
             comprar.addEventListener('click', this.comprars.bind(this));
         } else {
             console.error('Elemento con ID "borrar" no encontrado.');
        }
    }

    mostrarValors(Event) {
        if (Event && Event.target) {
            this.total = (Event.target.value);
            // Muestra el total actualizado en el campo de entrada
            this.tablas.value = this.total;
        } else {
            console.error('El evento es undefined o no tiene target.');
        }
    }

    comprars() {
        // Reinicia el total a 0 y actualiza el campo de entrada
        this.total = "Digita codigo";
        this.tablas.value = this.total;
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

// crear etiquetas li
let productos = document.getElementById('productos')
const lis =[];
for (let i = 0; i < gaseosas.length; i++) {
    lis[i] = document.createElement('li');
    productos.appendChild(lis[i]);
    lis[i].textContent = `codigo: ${gaseosas[i].codigo} ${gaseosas[i].nombre} ${gaseosas[i].tamaño}ml ${gaseosas[i].envase} valor: ${gaseosas[i].valor} `;
}

// Instancia de la clase
const moneda = new Producto();
const codi = new codigos();