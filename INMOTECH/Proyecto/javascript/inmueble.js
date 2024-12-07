// Obtener referencias a los elementos HTML
const imagenGrande = document.getElementById('imagenGrande');
const miniaturas = document.querySelectorAll('.mini-portafolio img');

// Agregar evento click a cada miniatura
miniaturas.forEach(miniatura => {
    miniatura.addEventListener('click', () => {
        // Actualizar la imagen grande con la fuente de la miniatura
        imagenGrande.src = `../multimedia/imagenes/${miniatura.dataset.src}`;

        // Opcional: Agregar una clase para resaltar la miniatura seleccionada
        miniaturas.forEach(img => img.classList.remove('selected'));
        miniatura.classList.add('selected');
    });
});