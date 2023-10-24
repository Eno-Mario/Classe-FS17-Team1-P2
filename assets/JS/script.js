/* -----------------------
    FASE DI PREPARAZIONE
-------------------------- */

//lista bottoni standard-button

const standardButton = document.querySelectorAll(".standard-button");

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

/* ---------------------
        EVENTI
-----------------------*/

//event listener sul bottone per comparsa e scomparsa dello spinner

for (let i = 0; i < standardButton.length; i++) {
  standardButton[i].addEventListener("click", () =>
    switchHiddenClassButton(standardButton[i])
  );
}
