const progressBar = document.querySelector('.progress-bar');
let progress = 0;

function updateProgressBar() {
    progress += 10;
    progressBar.style.width = progress + '%';

    if (progress >= 100) {
        clearInterval(interval);
    }
}
setTimeout(() => {
    window.location.href = "../pagina/login.html";
}, 3000); // Redirige a index.html después de 3 segundos
const interval = setInterval(updateProgressBar, 250);