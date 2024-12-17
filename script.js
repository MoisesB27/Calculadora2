const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

document.querySelectorAll('.container input').forEach(input => {
    // Cuando el input recibe foco
    input.addEventListener('focus', function() {
        this.style.animation = 'electricShock 1s infinite';
    });

    // Cuando el input pierde el foco
    input.addEventListener('blur', function() {
        this.style.animation = ''; // Se elimina la animación cuando pierde el foco
    });
});
