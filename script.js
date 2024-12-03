document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".carousel").forEach((carousel) => {
        const items = carousel.querySelectorAll(".carousel-item");
        let currentIndex = 0;

        function updateCarousel() {
            items.forEach((item, index) => {
                item.classList.toggle("active", index === currentIndex);
            });
        }

        function showNext() {
            currentIndex = (currentIndex + 1) % items.length;
            updateCarousel();
        }

        function showPrevious() {
            currentIndex = (currentIndex - 1 + items.length) % items.length;
            updateCarousel();
        }

        carousel.querySelector(".carousel-next").addEventListener("click", showNext);
        carousel.querySelector(".carousel-previous").addEventListener("click", showPrevious);

        updateCarousel();
    });
});