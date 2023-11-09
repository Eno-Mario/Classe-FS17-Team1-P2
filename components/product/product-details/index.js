/* -----------------------
    FASE DI PREPARAZIONE
-------------------------- */
const accordionButtons = document.getElementsByClassName(
  "product-details-accordion-button"
);

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
/* ----------------------
        FUNZIONI
-------------------------*/

/* ---------------------
        EVENTI
-----------------------*/
