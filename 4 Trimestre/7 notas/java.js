document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Previene el envío del formulario

    // Obtener valores de los inputs y convertir a números
    const n1 = parseFloat(document.getElementById('n1').value);
    const n2 = parseFloat(document.getElementById('n2').value);
    const n3 = parseFloat(document.getElementById('n3').value);
    const r = document.getElementById('resultado');

    // Calcular el promedio
    const promedio = (n1 + n2 + n3) / 3;

    // Mostrar el resultado
    r.innerHTML = `El promedio es ${promedio.toFixed(2)}. ${promedio >= 3 ? 'Aprobado' : 'Reprobado'}`;
});