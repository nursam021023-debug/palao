// -------- Login Page --------
const loginForm = document.getElementById('loginForm');

if (loginForm) {
    // Redirect to home if already logged in
    const isLoggedIn = localStorage.getItem('loggedIn');
    if (isLoggedIn) {
        window.location.href = "home.html";
    }

    // Hardcoded credentials
    const validEmail = "user@example.com";
    const validPassword = "123456";

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if(email === validEmail && password === validPassword) {
            // Save login state
            localStorage.setItem('loggedIn', 'true');
            localStorage.setItem('userEmail', email);

            alert("Login successful!");
            window.location.href = "home.html";
        } else {
            alert("Invalid email or password!");
        }
    });
}

// -------- Home Page --------
const welcomeMsg = document.getElementById('welcomeMsg');

if (welcomeMsg) {
    // Silent redirect if not logged in
    const isLoggedIn = localStorage.getItem('loggedIn');
    if (!isLoggedIn) {
        window.location.href = "login.html";
    } else {
        // Display user email
        const email = localStorage.getItem('userEmail');
        welcomeMsg.innerText = `Welcome, ${email}!`;
    }
}

// -------- Logout Function (shared) --------
function logout() {
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('userEmail');
    window.location.href = 'login.html';
}
function goToSeller() {
    window.location.href = "seller.html";
}
