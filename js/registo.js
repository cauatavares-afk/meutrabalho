function capturarDados() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var dob = document.getElementById("dob").value;
    var nif = document.getElementById("nif").value;

    var age = calcularIdade(new Date(dob));
    if (age < 18) {
        document.getElementById("nifError").innerText = "Você deve ter no mínimo 18 anos.";
        return null;
    } else {
        document.getElementById("nifError").innerText = "";
    }

    if (nif.length !== 9) {
        document.getElementById("nifError").innerText = "O NIF deve conter exatamente 9 dígitos.";
        return null;
    } else {
        document.getElementById("nifError").innerText = "";
    }

    var password = document.getElementById("password").value;

    var userData = {
        name: name,
        email: email,
        dob: dob,
        nif: nif,
        password: password
    };

    return userData;
}

function registrar() {
    var userData = capturarDados();

    if (!userData) {
        return; 
    }

    // Obter registros existentes do localStorage
    var storedUsers = localStorage.getItem('userList');
    var userList = storedUsers ? JSON.parse(storedUsers) : [];

    userList.push(userData);

    localStorage.setItem('userList', JSON.stringify(userList));

    console.log("Registro bem-sucedido!");
    console.log(userData);

    alert("Sua conta foi registrada com sucesso!");

    window.location.href = "login.html";
}

function calcularIdade(dataNascimento) {
    var agora = new Date();
    var diferencaAnos = agora.getFullYear() - dataNascimento.getFullYear();
    if (agora.getMonth() < dataNascimento.getMonth() ||
        (agora.getMonth() === dataNascimento.getMonth() && agora.getDate() < dataNascimento.getDate())) {
        diferencaAnos--;
    }
    return diferencaAnos;
}

function validatePassword() {
    var password = document.getElementById('password').value;

    // Verifica o comprimento
    var lengthCriteria = document.getElementById('length');
    lengthCriteria.classList.toggle('valid', password.length >= 8);

    // Verifica se há uma letra maiúscula
    var uppercaseCriteria = document.getElementById('uppercase');
    uppercaseCriteria.classList.toggle('valid', /[A-Z]/.test(password));

    // Verifica se há uma letra minúscula
    var lowercaseCriteria = document.getElementById('lowercase');
    lowercaseCriteria.classList.toggle('valid', /[a-z]/.test(password));

    // Verifica se há pelo menos um número
    var numberCriteria = document.getElementById('number');
    numberCriteria.classList.toggle('valid', /\d/.test(password));
}

function validateDateOfBirth() {
    var dobInput = document.getElementById('dob');
    var dobError = document.getElementById('dobError');
    var dob = new Date(dobInput.value);
    var today = new Date();

    // Verifica se a data de nascimento é anterior ao dia atual
    if (dob > today) {
        dobError.textContent = 'A data de nascimento não pode ser posterior ao dia atual.';
        dobInput.classList.add('error');
    } else {
        dobError.textContent = '';
        dobInput.classList.remove('error');
    }
}