// Inicializa las variables
var total = 0;
var apostado = 0;
var tirosRestantes = 5; // Número máximo de tiros permitido

    // Esperar a que el documento esté completamente cargado
    document.addEventListener('DOMContentLoaded', () => {
        // Obtener referencias a los elementos del DOM
        const apuestaInput = document.getElementById('apuesta');
        const apostarButton = document.getElementById('apostar');
        const resultDiv = document.getElementById('result');
        const generateButton = document.getElementById('generateButton');

        // Añadir un evento al botón de apostar
        apostarButton.addEventListener('click', () => {
            // Capturar el valor del input y convertirlo a número
            apostado = parseFloat(apuestaInput.value) || 0;
            resultDiv.textContent = `El valor apostado es: ${apostado}`;
        });

        // Añadir un evento al botón de lanzar
        generateButton.addEventListener('click', () => {
            if (tirosRestantes > 0) {
                var randomNumber = Math.floor(Math.random() * 6) + 1;
                var randomNumber1 = Math.floor(Math.random() * 6) + 1;

                // Aplicar la lógica según los números generados
                if ((randomNumber + randomNumber1) === 7) {
                    total += (apostado * 5);
                } else if (randomNumber === randomNumber1) {
                    total += (apostado * 3);
                } else if ((randomNumber + randomNumber1) === 3) {
                    total += (apostado * 2);
                }

                // Mostrar resultados
                document.getElementById('result').textContent = `Número Aleatorio: ${randomNumber} y ${randomNumber1}`;
                document.getElementById('result1').textContent = `Total acumulado: ${total}`;

                // Decrementar el número de tiros restantes
                tirosRestantes--;

                // Informar al usuario de los tiros restantes
                resultDiv.textContent += ` | Tiros restantes: ${tirosRestantes}`;

                // Desactivar el botón si no hay más tiros restantes
                if (tirosRestantes === 0) {
                    generateButton.disabled = true;
                    resultDiv.textContent += " | ¡No tienes más tiros!";
                }
                }
            });
        });
