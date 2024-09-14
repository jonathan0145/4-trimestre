function showContent(contentType) {
    var loginc = document.getElementById('loginc');
    var registerc = document.getElementById('registerc');

    if (contentType === 'login') {
        loginc.style.display = 'block';
        registerc.style.display = 'none';
    } else if (contentType === 'register') {
        loginc.style.display = 'none';
        registerc.style.display = 'block';
    }
}