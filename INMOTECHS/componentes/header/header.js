let currentIndex=0;
const images = document.querySelectorAll('.banner-image');
const buttons = document.querySelectorAll('.banner-button');

function showImage(index){

    // Ocultar todas las imagenes y desactivar todos los botones
    images.forEach((img, i) =>{
        img.classList.remove('active');
        buttons[i].classList.remove('active')
    });

    //Mostrar la imagen seleccionada y activar el boton correspondiente
    images[index].classList.add('active');
    buttons[index].classList.add('active');

    currentIndex = index; //actualizar el index actual
}

function nextImage(){
    currentIndex= (currentIndex + 1) % images.length;
    showImage(currentIndex);
}
setInterval(nextImage, 5000);