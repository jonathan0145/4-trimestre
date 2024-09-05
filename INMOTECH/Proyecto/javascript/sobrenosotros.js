function showContent(contentType) {
    var historia = document.getElementById('historia');
    var misionvision = document.getElementById('misionvision');
    var filosofia = document.getElementById('filosofia');
    var equipo = document.getElementById('equipo');

    if (contentType === 'historia') {
        historia.style.display = 'block';
        misionvision.style.display = 'none';
        filosofia.style.display = 'none';
        equipo.style.display = 'none';
    } else if (contentType === 'misionvision') {
        historia.style.display = 'none';
        misionvision.style.display = 'block';
        filosofia.style.display = 'none';
        equipo.style.display = 'none';
    } else if (contentType === 'filosofia') {
        historia.style.display = 'none';
        misionvision.style.display = 'none';
        filosofia.style.display = 'block';
        equipo.style.display = 'none';
    } else if (contentType === 'equipo') {
        historia.style.display = 'none';
        misionvision.style.display = 'none';
        filosofia.style.display = 'none';
        equipo.style.display = 'block';
    }
}