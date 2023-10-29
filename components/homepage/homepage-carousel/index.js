/* -----------------------
    FASE DI PREPARAZIONE
-------------------------- */
const carousel = document.querySelectorAll(".carousel");
const prevButton = document.querySelectorAll(".prev-button");
const nextButton = document.querySelectorAll(".next-button");

/* -----------------------
        LOGICA
--------------------------*/

// Funzione di scroll Left e scroll right sui caroselli

for (let i = 0; i < prevButton.length; i++) {
  prevButton[i].classList.add("hidden");
  prevButton[i].addEventListener("click", function () {
    const carouselwidth = Math.floor(carousel[i].offsetWidth);
    let currentPosition = carousel[i].scrollLeft;
    console.log(carousel[i].scrollLeft);
    currentPosition -= carouselwidth;
    if (currentPosition < 0) {
      currentPosition = 0;
    }

    carousel[i].scrollLeft = currentPosition;

    if (carousel[i].scrollLeft < 1) {
      prevButton[i].classList.add("hidden");
    } else {
      prevButton[i].classList.remove("hidden");
    }

    nextButton[i].classList.remove("hidden");
  });

  nextButton[i].addEventListener("click", function () {
    const carouselwidth = Math.floor(carousel[i].offsetWidth);
    let currentPosition = carousel[i].scrollLeft;
    console.log(carousel[i].scrollLeft);
    currentPosition += carouselwidth;
    if (currentPosition > carousel[i].scrollWidth - carousel[i].offsetWidth) {
      currentPosition = carousel[i].scrollWidth - carousel[i].offsetWidth;
    }

    carousel[i].scrollLeft = currentPosition;

    console.log(currentPosition);
    console.log(carousel[i].scrollLeft);

    prevButton[i].classList.remove("hidden");

    if (carousel[i].scrollLeft === currentPosition) {
      nextButton[i].classList.add("hidden");
    } else {
      nextButton[i].classList.remove("hidden");
    }
  });
}

/* ----------------------
        FUNZIONI
-------------------------*/

/* ---------------------
        EVENTI
-----------------------*/
