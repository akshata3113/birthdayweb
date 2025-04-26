let slideIndex = 0;
const slides = document.querySelector('.slide-wrapper');

function moveSlide(step) {
  const totalSlides = document.querySelectorAll('.slide').length;
  slideIndex += step;

  if (slideIndex >= totalSlides) slideIndex = 0;
  if (slideIndex < 0) slideIndex = totalSlides - 1;

  slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}

  
  