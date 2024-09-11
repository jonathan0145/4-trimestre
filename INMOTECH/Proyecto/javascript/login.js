function showContent(contentType) {
    var loginc = document.getElementById('loginc');
    var registerContent = document.getElementById('registerContent');

    if (contentType === 'login') {
        loginc.style.display = 'block';
        registerc.style.display = 'none';
    } else if (contentType === 'register') {
        loginc.style.display = 'none';
        registerContent.style.display = 'block';
    }
}