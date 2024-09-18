document.addEventListener('DOMContentLoaded', function () {
    const googleSignUpButton = document.querySelector('.social-btn:first-child');
    const appleSignUpButton = document.querySelector('.social-btn:last-child');

    googleSignUpButton.addEventListener('click', function () {
        window.location.href = 'https://accounts.google.com/signin';
    });

    appleSignUpButton.addEventListener('click', function () {
        window.location.href = 'https://appleid.apple.com/auth/signin';
    });
});