function showContent(contentType) {
    var historia = document.getElementById('historia');
    var misionvision = document.getElementById('misionvision');
    var filosofia = document.getElementById('filosofia');
    var equipo = document.getElementById('equipo');

    if (contentType === 'historia') {
        historia.style.display = 'flex';
        misionvision.style.display = 'none';
        filosofia.style.display = 'none';
        equipo.style.display = 'none';
    } else if (contentType === 'misionvision') {
        historia.style.display = 'none';
        misionvision.style.display = 'flex';
        filosofia.style.display = 'none';
        equipo.style.display = 'none';
    } else if (contentType === 'filosofia') {
        historia.style.display = 'none';
        misionvision.style.display = 'none';
        filosofia.style.display = 'flex';
        equipo.style.display = 'none';
    } else if (contentType === 'equipo') {
        historia.style.display = 'none';
        misionvision.style.display = 'none';
        filosofia.style.display = 'none';
        equipo.style.display = 'flex';
    }
}