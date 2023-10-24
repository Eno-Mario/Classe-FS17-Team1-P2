/* -----------------------
    FASE DI PREPARAZIONE
-------------------------- */

/* -----------------------
        LOGICA
--------------------------*/

/* ----------------------
        FUNZIONI
-------------------------*/
function toggleVignetta() {
  var vignetta = document.getElementById('vignetta');
  vignetta.style.display = (vignetta.style.display === 'block') ? 'none' : 'block';
}

function closeVignetta() {
  document.getElementById('vignetta').style.display = 'none';
}
/* ---------------------
        EVENTI
-----------------------*/