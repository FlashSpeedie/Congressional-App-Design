// Simulated Google Login
function googleLogin() {
    alert('Redirecting to Google Login...');
    window.location.href = 'https://accounts.google.com/signin';
}

// Simulated Apple Login
function appleLogin() {
    alert('Redirecting to Apple Login...');
    window.location.href = 'https://appleid.apple.com/auth/signin';
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Here you would validate the user credentials via backend authentication
    // If successful, redirect to the edit page
    window.location.href = "edit.html";
});