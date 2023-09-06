const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.carousel-btn:nth-of-type(1)');
const nextBtn = document.querySelector('.carousel-btn:nth-of-type(2)');
const slideWidth = carousel.clientWidth;
let currentIndex = 0;

function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
}

function nextSlide() {
  if (currentIndex < carousel.children.length - 1) {
    currentIndex++;
    updateCarousel();
  }
}

function updateCarousel() {
  carousel.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}