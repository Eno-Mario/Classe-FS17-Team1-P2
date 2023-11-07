/* -----------------------
    FASE DI PREPARAZIONE
-------------------------- */
const inputCheck = document.querySelector(".atom-label-for-click");
const checkImage = document.querySelector(".svg-checkbox-V ");
const realInput = document.querySelector(".atom-input-checkbox");
const squareSlot = document.querySelector(".container-image-checkbox");


/* -----------------------
        LOGICA
--------------------------*/

/* ----------------------
        FUNZIONI
-------------------------*/
/* ---------------------
EVENTI
-----------------------*/

inputCheck.addEventListener("click", () => {
        if (realInput.checked) {
                realInput.checked = false;
                squareSlot.classList.remove("slot-square-checkbox-shadow");
                checkImage.classList.add("checkbox-image-not-visible");
        } else {
                realInput.checked = true;
                squareSlot.classList.add("slot-square-checkbox-shadow");
                checkImage.classList.remove("checkbox-image-not-visible");
        }
});