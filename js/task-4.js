
const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Зупиняє стандартну поведінку форми (перезавантаження сторінки)

const emailInput = this.elements.email;
const passwordInput = this.elements.password;

  // Очищення значень полів від пробілів по краях
const emailValue = emailInput.value.trim();
const passwordValue = passwordInput.value.trim();

  // Перевірка на наявність пустих полів
if (emailValue === '' || passwordValue === '') {
    alert('All form fields must be filled in');
} else {
    // Створення об'єкта з введеними даними
    const formData = {
    email: emailValue,
    password: passwordValue
    };

    // Виведення об'єкта в консоль
    console.log(formData);

    // Очищення полів форми
    this.reset();
}
});