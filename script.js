document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const signupForm = document.getElementById("signup-form");

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const username = loginForm.querySelector("#username").value;
            const password = loginForm.querySelector("#password").value;

            // Realize a validação do usuário e senha aqui

            // Exemplo simples de validação
            if (username === "usuariodeteste" && password === "senhadeteste") {
                alert("Login bem-sucedido!");
            } else {
                alert("Usuário ou senha incorretos.");
            }
        });
    }

    if (signupForm) {
        signupForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const password = signupForm.querySelector("#password").value;
            const confirmPassword = signupForm.querySelector("#confirm-password").value;

            if (password !== confirmPassword) {
                alert("As senhas não coincidem. Tente novamente.");
            } else {
                // Envie os dados de cadastro para o servidor ou realize outras ações aqui
                alert("Cadastro bem-sucedido!");
                // Redirecione para a página de login ou outra página desejada
            }
        });
    }
});
