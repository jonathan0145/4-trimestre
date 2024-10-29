function showContent(contentType){
    var loginc = document.getElementById('loginc');
    var registerc = document.getElementById('registerc');
    var informacionl = document.getElementById('informacionl');

    if (contentType === 'login') {
        loginc.style.display = 'block';
        registerc.style.display = 'none';
        informacionl.style.display = 'none';
    } else if(contentType === 'register'){
        loginc.style.display = 'none';
        registerc.style.display = 'block';
        informacionl.style.display = 'none';
    } else if(contentType === 'welcome'){
        loginc.style.display = 'none';
        registerc.style.display = 'none';
        informacionl.style.display = 'block';
    }
}