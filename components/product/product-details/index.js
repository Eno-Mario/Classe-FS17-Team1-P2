/* -----------------------
    FASE DI PREPARAZIONE
-------------------------- */
const accordionButtons = document.getElementsByClassName(
  "product-details-accordion-holder"
);
/* CAROUSEL JS */
const carousel = document.querySelectorAll(".carousel");
const prevButton = document.querySelectorAll(".prev-button");
const nextButton = document.querySelectorAll(".next-button");

/* -----------------------
        LOGICA
--------------------------*/
for (let i = 0; i < accordionButtons.length; i++) {
  accordionButtons[i].addEventListener("click", function () {
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// Funzione di scroll Left e scroll right sui caroselli

for (let i = 0; i < prevButton.length; i++) {
  prevButton[i].classList.add("hidden");
  if (
    Math.ceil(carousel[i].scrollLeft) >=
    carousel[i].scrollWidth - carousel[i].offsetWidth
  ) {
    nextButton[i].classList.add("hidden");
  }

  //funzionamento prevButton
  prevButton[i].addEventListener("click", function () {
    const carouselwidth = Math.floor(carousel[i].offsetWidth);
    let currentPosition = carousel[i].scrollLeft;

    currentPosition -= carouselwidth;
    if (currentPosition < 0) {
      currentPosition = 0;
    }

    carousel[i].scrollLeft = currentPosition;

    setTimeout(() => {
      if (carousel[i].scrollLeft < 1) {
        prevButton[i].classList.add("hidden");
      } else {
        prevButton[i].classList.remove("hidden");
      }
    }, 700);

    nextButton[i].classList.remove("hidden");
  });

  //funzionamento nextButton
  nextButton[i].addEventListener("click", function () {
    const carouselwidth = Math.floor(carousel[i].offsetWidth);
    let currentPosition = carousel[i].scrollLeft;

    currentPosition += carouselwidth;
    if (currentPosition > carousel[i].scrollWidth - carousel[i].offsetWidth) {
      currentPosition = carousel[i].scrollWidth - carousel[i].offsetWidth;
    }

    carousel[i].scrollLeft = currentPosition;
    prevButton[i].classList.remove("hidden");

    setTimeout(() => {
      if (
        Math.ceil(carousel[i].scrollLeft) >=
        carousel[i].scrollWidth - carousel[i].offsetWidth
      ) {
        nextButton[i].classList.add("hidden");
      } else {
        nextButton[i].classList.remove("hidden");
      }
    }, 700);
  });
}

/* ----------------------
        FUNZIONI
-------------------------*/
var likeClicked = false; // Variabile per tenere traccia se il pulsante Like è stato cliccato
var dislikeClicked = false; // Variabile per tenere traccia se il pulsante Dislike è stato cliccato

function pushLike() {
  var numLikeElement = document.getElementsByClassName("numLike")[0];
  var numLike = parseInt(numLikeElement.textContent);
  var likeSvg = document.querySelector(".likeSvg");

  if (!likeClicked) {
    numLikeElement.textContent = numLike + 1;
    likeClicked = true;
    likeSvg.classList.add("active");
  } else {
    numLikeElement.textContent = numLike - 1;
    likeClicked = false;
    likeSvg.classList.remove("active");
  }

  // Resetta dislikeClicked dopo un clic su Like
  if (dislikeClicked) {
    dislikeClicked = false;
  }
}

function pushDislike() {
  var numDislikeElement = document.getElementsByClassName("numDislike")[0];
  var numDislike = parseInt(numDislikeElement.textContent);
  var dislikeSvg = document.querySelector(".dislikeSvg");

  if (!dislikeClicked) {
    numDislikeElement.textContent = numDislike + 1;
    dislikeClicked = true;
    dislikeSvg.classList.add("active");
  } else {
    numDislikeElement.textContent = numDislike - 1;
    dislikeClicked = false;
    dislikeSvg.classList.remove("active");
  }

  // Resetta likeClicked dopo un clic su Dislike
  if (likeClicked) {
    likeClicked = false;
  }
}

/* ---------------------
        EVENTI
-----------------------*/
