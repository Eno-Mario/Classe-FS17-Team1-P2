/* -----------------------
    FASE DI PREPARAZIONE
-------------------------- */

//lista bottoni standard-button

const standardButton = document.querySelectorAll(".standard-button");

var likeClicked = false; // Variabile per tenere traccia se il pulsante Like è stato cliccato
var dislikeClicked = false; // Variabile per tenere traccia se il pulsante Dislike è stato cliccato

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
