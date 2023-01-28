// JavaScript code for buttons
const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        window.open(e.target.getAttribute('data-url'));
    });
});
