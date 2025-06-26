document.addEventListener('DOMContentLoaded', function() {
    // Elementos DOM
    const loginForm = document.getElementById('loginForm');
    const navLinks = document.getElementById('navLinks');
    const loginStatus = document.getElementById('loginStatus');
    const loginMessage = document.getElementById('loginMessage');
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');

    // Credenciais válidas
    const validUsername = "larissa";
    const validPassword = "12345600";

    // Verificar se o usuário já está logado
    function checkLogin() {
        return localStorage.getItem('isLoggedIn') === 'true';
    }

    // Atualizar interface com base no status de login
    function updateUI() {
        const isLoggedIn = checkLogin();
        
        if (isLoggedIn) {
            // Adicionar link "Marketing Flash"
            if (!document.querySelector('#marketingLink')) {
                const marketingLink = document.createElement('li');
                marketingLink.id = 'marketingLink';
                marketingLink.innerHTML = '<a href="marketing.html">Marketing Flash</a>';
                navLinks.appendChild(marketingLink);
            }
            
            // Atualizar botão de login para logout
            if (loginStatus) {
                loginStatus.textContent = 'Logout';
                loginStatus.href = '#';
                loginStatus.onclick = logout;
            }
        }
    }

    // Função de login
    function login(e) {
        if (e) e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        if (username === validUsername && password === validPassword) {
            localStorage.setItem('isLoggedIn', 'true');
            loginMessage.textContent = 'Login realizado com sucesso!';
            loginMessage.style.color = '#4CAF50';
            updateUI();
            
            // Redirecionar após login bem-sucedido
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1000);
        } else {
            loginMessage.textContent = 'Usuário ou senha incorretos!';
            loginMessage.style.color = '#f44336';
        }
    }

    // Função de logout
    function logout() {
        localStorage.removeItem('isLoggedIn');
        const marketingLink = document.querySelector('#marketingLink');
        if (marketingLink) marketingLink.remove();
        
        if (loginStatus) {
            loginStatus.textContent = 'Login';
            loginStatus.removeAttribute('onclick');
        }
        
        // Redirecionar para página inicial
        window.location.href = 'index.html';
    }

    // Toggle de visibilidade da senha
    if (togglePassword && passwordInput) {
        togglePassword.addEventListener('click', function() {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            this.textContent = type === 'password' ? '👁️' : '🔒';
        });
    }

    // Event Listeners
    if (loginForm) {
        loginForm.addEventListener('submit', login);
    }
    
    if (loginStatus && checkLogin()) {
        loginStatus.onclick = logout;
    }

    // Inicializar UI
    updateUI();
});