/* -----------------------
    FASE DI PREPARAZIONE
-------------------------- */
const container = document.querySelector(".carousel-atom-header");
const element1 = document.getElementById("first-element-atom-header");
const element2 = document.getElementById("second-element-atom-header");
const element3 = document.getElementById("third-element-atom-header");
const allElement = document.querySelectorAll(".carousel-element-atom-header");
const previous = document.querySelector(".arrow-previous-atom-header");
const next = document.querySelector(".arrow-next-atom-header");
const xButton = document.querySelector(".delete-button-x");
const upperHeader = document.querySelector(".upper-container-atom-header");

let counter = 0;

/* -----------------------
        LOGICA
--------------------------*/
// occultamento per parte degli elementi del carosello
if (element1) {
        element2.classList.add("not-visible-element-atom-header");
        element3.classList.add("not-visible-element-atom-header");
} else if (element2) {
        element1.classList.add("not-visible-element-atom-header");
        element3.classList.add("not-visible-element-atom-header");
} else {
        element1.classList.add("not-visible-element-atom-header");
        element2.classList.add("not-visible-element-atom-header");
}



/* ---------------------
        EVENTI
-----------------------*/

//evento per togliere l'upperHeader

xButton.addEventListener("click", () => {
        upperHeader.classList.add("not-visible-element-atom-header");
})

next.addEventListener("click", () => {
        allElement[counter].classList.add("not-visible-element-atom-header");
        counter = (counter + 1) % allElement.length;
        allElement[counter].classList.remove("not-visible-element-atom-header");
});

previous.addEventListener("click", () => {
        allElement[counter].classList.add("not-visible-element-atom-header");
        counter = (counter - 1) % allElement.length;
        allElement[counter].classList.remove("not-visible-element-atom-header");
});

