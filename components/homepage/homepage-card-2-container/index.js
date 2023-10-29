/* -----------------------
    FASE DI PREPARAZIONE
-------------------------- */

const card2 = document.querySelectorAll(".newArticle");

/* -----------------------
        LOGICA
--------------------------*/

// event listener for hover opacityto the cards

for (let i = 0; i < card2.length; i++) {
  card2[i].addEventListener("mouseover", function () {
    card2.forEach((el) => {
      el.classList.add("lessOp");
      card2[i].classList.remove("lessOp");
    });
  });
  card2[i].addEventListener("mouseout", function () {
    card2.forEach((el) => el.classList.remove("lessOp"));
  });
}

/* ----------------------
        FUNZIONI
-------------------------*/

/* ---------------------
        EVENTI
-----------------------*/
