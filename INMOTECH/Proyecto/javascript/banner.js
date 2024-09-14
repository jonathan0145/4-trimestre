// Obtener los elementos necesarios
const imagenes = document.querySelectorAll('#imagenes img');
const imagengrande = document.getElementById('imagengrande');

// Añadir evento a cada miniatura
imagenes.forEach(imagen => {
    imagen.addEventListener('click', () => {
        // Al hacer clic, actualizar la imagen grande
        imagengrande.src = imagen.src;
        imagengrande.alt = imagen.alt;
    });
});