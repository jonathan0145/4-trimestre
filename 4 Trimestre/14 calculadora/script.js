class Calculadora {
    constructor() {
        this.numeroActual = '';
        this.numeroPrevio = '';
        this.operacionActual = '';
        this.inputNumero = document.getElementById('inputNumero');
        this.resultadoDiv = document.getElementById('resultado');

        // Vincular el evento de entrada al input para capturar los números
        this.inputNumero.addEventListener('input', (e) => {
            this.numeroActual = e.target.value;
        });

        // Borrar el campo cuando el input reciba foco
        this.inputNumero.addEventListener('focus', () => {
            this.inputNumero.value = '';
        });
    }

    operar(operacion) {
        if (this.numeroActual === '') return;
        this.numeroPrevio = this.numeroActual;
        this.operacionActual = operacion;
        this.numeroActual = '';
        this.inputNumero.value = '';
    }

    igual() {
        if (this.numeroActual === '' || this.numeroPrevio === '') return;

        let resultado;
        const num1 = parseFloat(this.numeroPrevio);
        const num2 = parseFloat(this.numeroActual);

        switch (this.operacionActual) {
            case 'suma':
                resultado = num1 + num2;
                break;
            case 'resta':
                resultado = num1 - num2;
                break;
            case 'multiplicacion':
                resultado = num1 * num2;
                break;
            case 'division':
                if (num2 === 0) {
                    alert("No se puede dividir entre cero");
                    return;
                }
                resultado = num1 / num2;
                break;
            default:
                return;
        }

        this.resultadoDiv.textContent = `Resultado: ${resultado}`;
        this.numeroActual = resultado.toString();
        this.numeroPrevio = '';
        this.operacionActual = '';
    }

    limpiar() {
        this.numeroActual = '';
        this.numeroPrevio = '';
        this.operacionActual = '';
        this.inputNumero.value = '';
        this.resultadoDiv.textContent = '';
    }
}

// Instanciar la calculadora
const calculadora = new Calculadora();