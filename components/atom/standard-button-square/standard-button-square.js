/* -----------------------
    FASE DI PREPARAZIONE
-------------------------- */

//lista bottoni standard-button-square

const standardButtonSquare = document.querySelectorAll(
  ".standard-button-square"
);

/* -----------------------
        LOGICA
--------------------------*/

/* ----------------------
        FUNZIONI
-------------------------*/

//funzione di comparsa e scomparsa dello spinner sul standard-button-square

function switchHiddenClassButton(bottone) {
  const testoButtonSquare = bottone.querySelector(".testo");
  const spinnerButtonSquare = bottone.querySelector(".spinner-container");
  const listaClassiTesto = testoButtonSquare.classList;

  if (listaClassiTesto.contains("hidden")) {
    testoButtonSquare.classList.remove("hidden");
    spinnerButtonSquare.classList.add("hidden");
  } else {
    spinnerButtonSquare.classList.remove("hidden");
    testoButtonSquare.classList.add("hidden");
  }
}

/* ---------------------
        EVENTI
-----------------------*/

//event listener sul bottone per comparsa e scomparsa dello spinner

for (let i = 0; i < standardButtonSquare.length; i++) {
  standardButtonSquare[i].addEventListener("click", () =>
    switchHiddenClassButton(standardButtonSquare[i])
  );
}
