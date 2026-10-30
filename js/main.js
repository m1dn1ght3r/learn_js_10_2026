const button = document.querySelector('#show-message');

button.addEventListener('click', function () {
    alert('Привет! JavaScript работает.');
});





window.addEventListener('scroll', function () {
    if (window.scrollY > 200) {
        console.log('Страница прокручена более чем на 200 пикселей');
    }
});


const emailInput = document.querySelector('#email');
const errorMessage = document.querySelector('#email-error');

emailInput.addEventListener('input', function () {
    if (!emailInput.validity.valid) {
        errorMessage.textContent = 'Проверь формат e-mail.';
    } else {
        errorMessage.textContent = '';
    }
});

//JavaScript на бэкенде - когда браузера становится недостаточно