// Seleccionar el botón
const boton = document.getElementById('botonPrecio');
const info = document.getElementById('botonPrecio');



// Agregar un evento de clic al botón
boton.addEventListener('click', function() {
    // Obtener el valor del precio desde el atributo data-precio
    const precioSinIVA = boton.getAttribute('data-precio');
    console.log(`Has comprado por $${precioSinIVA}.`);

    const iva = 0.20; // Valor del IVA (20%)
    const precioConIVA = precioSinIVA * (1 + iva); // Calculamos el precio con IVA incluido

    // Mostrar el mensaje del precio en el elemento <p>
    mensajePrecio.textContent = `Has comprado por $${precioSinIVA}. con IVA del 20% su precio es de ${precioConIVA}.`;
});