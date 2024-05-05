document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    let currentIndex = 0;
    let slideWidth; // Ширина слайда + отступ
    let sliderWidth; // Ширина контейнера слайдера
    let slidesPerPage; // Количество слайдов на одной странице

    function updateSliderMetrics() {

        slideWidth =
            slides[0].offsetWidth + parseFloat(window.getComputedStyle(slider).gap);
        sliderWidth = slider.offsetWidth;
        slidesPerPage = Math.floor(sliderWidth / slideWidth) + 1;
        // console.log(slideWidth, slidesPerPage, sliderWidth)
    }
    function moveSlider(direction) {
        // currentIndex =
        if (direction == "next") {
            currentIndex = Math.min(currentIndex + 1, slides.length - slidesPerPage);
        } else if (direction == "prev") {
            currentIndex = Math.max(currentIndex - 1, 0);
        }

        const offset = -currentIndex * slideWidth;
        slider.style.transform = `translateX(${offset}px)`;

        // Проверяем, нужно ли скрыть кнопку "Next" и "Prev"
        // Показать или скрыть кнопку "Next"
        nextBtn.classList.toggle(
            "hidden",
            currentIndex === slides.length - slidesPerPage || slides.length <= slidesPerPage
        );

        // Показать или скрыть кнопку "Prev"
        prevBtn.classList.toggle("hidden", currentIndex == 0 || slides.length <= slidesPerPage);
    }

    prevBtn.addEventListener("click", () => moveSlider("prev"));
    nextBtn.addEventListener("click", () => moveSlider("next"));

    // Скрытие кнопки "Prev" при загрузке страницы, если слайд на первом месте
    prevBtn.classList.toggle("hidden", currentIndex == 0);

    // Обновляем метрики слайдера при загрузке страницы и изменении размеров окна
    updateSliderMetrics();
    moveSlider();
    window.addEventListener("resize", function () {
        // console.log(slidesPerPage);
        let tmpSlidesPerPage = slidesPerPage;
        updateSliderMetrics();
        moveSlider(tmpSlidesPerPage < slidesPerPage ? 'prev' : '')
    });
});