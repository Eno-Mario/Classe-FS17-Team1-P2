/* -----------------------
    FASE DI PREPARAZIONE
-------------------------- */

//lista bottoni standard-button

const standardButton = document.querySelectorAll(".standard-button");

//product review
var likeClicked = false; // Variabile per tenere traccia se il pulsante Like è stato cliccato
var dislikeClicked = false; // Variabile per tenere traccia se il pulsante Dislike è stato cliccato

//card2 container
const card2 = document.querySelectorAll(".newArticle");

//carousel homepage
const carousel = document.querySelectorAll(".carousel");
const prevButton = document.querySelectorAll(".prev-button");
const nextButton = document.querySelectorAll(".next-button");


/* -----------------------
        LOGICA
--------------------------*/

/* ----------------------
        FUNZIONI
-------------------------*/

//funzione di comparsa e scomparsa dello spinner sul standard-button

function switchHiddenClassButton(bottone) {
  const testoButton = bottone.querySelector(
    ".container-content-standard-button"
  );
  console.log(testoButton);
  const spinnerButton = bottone.querySelector(".spinner-container");
  const listaClassiTesto = testoButton.classList;

  if (listaClassiTesto.contains("hidden")) {
    testoButton.classList.remove("hidden");
    spinnerButton.classList.add("hidden");
  } else {
    spinnerButton.classList.remove("hidden");
    testoButton.classList.add("hidden");
  }
}

//button info codice

function toggleVignetta() {
  var vignetta = document.getElementById("vignetta");
  vignetta.style.display =
    vignetta.style.display === "block" ? "none" : "block";
}

function closeVignetta() {
  document.getElementById("vignetta").style.display = "none";
}

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

//Product Review

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

//event listener sul bottone per comparsa e scomparsa dello spinner

for (let i = 0; i < standardButton.length; i++) {
  standardButton[i].addEventListener("click", () =>
    switchHiddenClassButton(standardButton[i])
  );
}


//opacity on card2 hover
for (let i = 0; i < card2.length; i++) {
  card2[i].addEventListener("mouseover", function () {
    card2.forEach((el) => {
      el.classList.add("lessOp");
      card2[i].classList.remove("lessOp");
    });
  });
  card2[i].addEventListener("mouseout", function () {
    card2.forEach((el) => el.classList.remove("lessOp"));

    
// Funzione di scroll Left e scroll right sui caroselli

for (let i = 0; i < prevButton.length; i++) {
  prevButton[i].classList.add("hidden");

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
