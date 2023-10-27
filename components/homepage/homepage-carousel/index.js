/* -----------------------
    FASE DI PREPARAZIONE
-------------------------- */
const carousel = document.querySelector(".carousel");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
prevButton.classList.add("hidden");

/* -----------------------
        LOGICA
--------------------------*/

/* ----------------------
        FUNZIONI
-------------------------*/

/* ---------------------
        EVENTI
-----------------------*/
prevButton.addEventListener("click", function () {
  const carouselwidth = Math.floor(carousel.offsetWidth);
  let currentPosition = carousel.scrollLeft;
  console.log(carousel.scrollLeft);
  currentPosition -= carouselwidth;
  if (currentPosition < 0) {
    currentPosition = 0;
  }

  carousel.scrollLeft = currentPosition;

  if (carousel.scrollLeft < 1) {
    prevButton.classList.add("hidden");
  } else {
    prevButton.classList.remove("hidden");
  }

  nextButton.classList.remove("hidden");
});

nextButton.addEventListener("click", function () {
  const carouselwidth = Math.floor(carousel.offsetWidth);
  let currentPosition = carousel.scrollLeft;
  console.log(carousel.scrollLeft);
  currentPosition += carouselwidth;
  if (currentPosition > carousel.scrollWidth - carousel.offsetWidth) {
    currentPosition = carousel.scrollWidth - carousel.offsetWidth;
  }

  carousel.scrollLeft = currentPosition;

  console.log(currentPosition);
  console.log(carousel.scrollLeft);

  prevButton.classList.remove("hidden");

  if (carousel.scrollLeft === currentPosition) {
    nextButton.classList.add("hidden");
  } else {
    nextButton.classList.remove("hidden");
  }
});
