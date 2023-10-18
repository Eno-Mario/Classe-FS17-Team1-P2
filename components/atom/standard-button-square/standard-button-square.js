/* -----------------------
    FASE DI PREPARAZIONE
-------------------------- */

const standardButtonSquare = document.querySelectorAll(
  ".standard-button-square"
);

/* -----------------------
        LOGICA
--------------------------*/

/* ----------------------
        FUNZIONI
-------------------------*/

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

for (let i = 0; i < standardButtonSquare.length; i++) {
  standardButtonSquare[i].addEventListener("click", () =>
    switchHiddenClassButton(standardButtonSquare[i])
  );
}
