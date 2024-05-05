const burgerMenu = document.querySelector(".burger-menu");
const dataBlock = document.querySelector(".links");
const body = document.getElementsByTagName('body')[0];
burgerMenu.addEventListener("click", function () {
    if (dataBlock.classList.contains("show")) {
        // Если меню открыто
        dataBlock.style.animation = "slideOut 0.2s ease-in-out forwards";
        setTimeout(() => {
            // Применяем стиль через 0.2 секунды
            dataBlock.style.display = "none";
        }, 199);
        body.style.overflow = "auto";
    } else {
        dataBlock.style.display = "flex";
        dataBlock.style.animation = "slideIn 0.2s ease-in-out forwards";
        body.style.overflow = "hidden";
    }
    burgerMenu.classList.toggle("closed")
    dataBlock.classList.toggle("show");
});
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        // Если ширина окна больше 768px, удаляем стили из элемента
        body.removeAttribute('style');
        dataBlock.removeAttribute('style');
        dataBlock.classList.remove('show');
        if (burgerMenu.classList.contains('closed')) {
            burgerMenu.classList.toggle("closed")
        }
    }
});