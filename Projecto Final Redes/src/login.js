    function realizarLogin() {
    var username = document.getElementById("loginUsername").value;
    var password = document.getElementById("loginPassword").value;

    var storedUserData = localStorage.getItem('userData');

    if (!storedUserData) {
        alert("Não há uma conta registrada com essas credenciais. Por favor, registre-se primeiro.");
        return;
    }

    var userData = JSON.parse(storedUserData);

    if (userData.name === username && userData.password === password) {
        alert("Login bem-sucedido!");
        
        window.location.href = "index.html";
    } else {
        alert("Credenciais inválidas. Por favor, verifique seu nome de usuário e senha.");
    }
}
