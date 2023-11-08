/* -----------------------
    FASE DI PREPARAZIONE
-------------------------- */
const inputCheck = document.querySelectorAll(".atom-label-for-click");
const checkImage = document.querySelectorAll(".svg-checkbox-V ");
const realInput = document.querySelectorAll(".atom-input-checkbox");
const squareSlot = document.querySelectorAll(".container-image-checkbox");


/* -----------------------
        LOGICA
--------------------------*/

/* ----------------------
        FUNZIONI
-------------------------*/
/* ---------------------
EVENTI
-----------------------*/

function handleItemClick(index) {
        if (realInput[index].checked) {
                realInput[index].checked = false;
                squareSlot[index].classList.remove("slot-square-checkbox-shadow");
                checkImage[index].classList.add("checkbox-image-not-visible");
        } else {
                realInput[index].checked = true;
                squareSlot[index].classList.add("slot-square-checkbox-shadow");
                checkImage[index].classList.remove("checkbox-image-not-visible");
        }
}

inputCheck.forEach((element, index) => {
        element.addEventListener("click", () => {
                handleItemClick(index);
        });
});