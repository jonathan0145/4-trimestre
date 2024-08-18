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
    constructor(){
        
    }
}

// Instancia de la clase
const moneda = new Producto();