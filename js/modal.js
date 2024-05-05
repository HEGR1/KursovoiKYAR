
const modal = document.getElementById("myModal");
const span = document.querySelector(".close");
const btns = document.querySelectorAll('.btn-register');

// Функция для проверки пустых полей и корректности данных
function validateInputs(userName, userEmail, userPhone) {
    if (!userName || !userEmail || !userPhone) {
        alert("Пожалуйста, заполните все поля.");
        return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(userEmail)) {
        alert("Пожалуйста, введите корректный адрес электронной почты.");
        return false;
    }

    const phonePattern = /^(\+?\d{1,3})?\d{9}$/;
    if (!phonePattern.test(userPhone)) {
        alert("Пожалуйста, введите номер телефона в формате +375XXXXXXXXX.");
        return false;
    }

    return true;
}

// Функция для открытия модального окна
function openModal() {
    modal.style.display = "flex";
}

// Обработчик события клика на кнопки
document.addEventListener('click', function (e) {
    if (e.target.classList.contains('btn-register')) {
        openModal();
    } else if (e.target === span || !modal.contains(e.target)) {
        modal.style.display = "none";
    }
});

// Обработчик события отправки данных
function submitBooking() {
    const userName = document.getElementById("userName").value;
    const userEmail = document.getElementById("userEmail").value;
    const userPhone = document.getElementById("userPhone").value;

    if (validateInputs(userName, userEmail, userPhone)) {
        alert(`Спасибо, ${userName}! Ваша заявка принята. Мы скоро свяжемся с вами.`);
        modal.style.display = "none";
    }
}
