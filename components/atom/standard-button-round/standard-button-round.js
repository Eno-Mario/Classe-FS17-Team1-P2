/* -----------------------
    FASE DI PREPARAZIONE
-------------------------- */

//lista bottoni standard-button-square

const standardButtonRound = document.querySelectorAll(
        ".standard-button-round"
);

/* -----------------------
        LOGICA
--------------------------*/

/* ----------------------
        FUNZIONI
-------------------------*/

//funzione di comparsa e scomparsa dello spinner sul standard-button-square

function switchHiddenClassButton(bottone) {
        const containerContentButton = bottone.querySelector(".container-content-standard-button-round");
        const spinnerButtonRound = bottone.querySelector(".spinner-container");
        const listaClassiDiv =  containerContentButton.classList;

        if (listaClassiDiv.contains("hidden")) {
                containerContentButton.classList.remove("hidden");
                spinnerButtonRound.classList.add("hidden");
        } else {
                spinnerButtonRound.classList.remove("hidden");
                containerContentButton.classList.add("hidden");
        }
}

/* ---------------------
        EVENTI
-----------------------*/

//event listener sul bottone per comparsa e scomparsa dello spinner

for (let i = 0; i < standardButtonRound.length; i++) {
        standardButtonRound[i].addEventListener("click", () =>
                switchHiddenClassButton(standardButtonRound[i])
        );
}
