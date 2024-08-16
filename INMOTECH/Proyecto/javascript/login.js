function showContent(contentType) {
    var loginContent = document.getElementById('loginContent');
    var registerContent = document.getElementById('registerContent');

    if (contentType === 'login') {
        loginContent.style.display = 'block';
        registerContent.style.display = 'none';
    } else if (contentType === 'register') {
        loginContent.style.display = 'none';
        registerContent.style.display = 'block';
    }
}