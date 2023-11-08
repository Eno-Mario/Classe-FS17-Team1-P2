/* -----------------------
    FASE DI PREPARAZIONE
-------------------------- */
const storeButtonCheckboxSection = document.querySelectorAll(".store-button-checkbox-section");
const storeContainerUlCheckboxSectionEffect = document.querySelectorAll(".store-container-ul-checkbox-section-effect");
const storeIconCheckboxSection = document.querySelectorAll(".store-icon-checkbox-section");
/* -----------------------
        LOGICA
--------------------------*/

/* ----------------------
        FUNZIONI
-------------------------*/
function displayNoneUl(index) {
        if (storeButtonCheckboxSection[index].checked) {
                storeButtonCheckboxSection[index].checked = false;
                storeContainerUlCheckboxSectionEffect[index].classList.remove("displayNoneUlCheckbox");
                storeContainerUlCheckboxSectionEffect[index].classList.add("store-container-ul-checkbox-section-effect-visible");
                storeIconCheckboxSection[index].classList.add("effect-to-change-state");
               

                
        } else {
                storeButtonCheckboxSection[index].checked = true;
                storeContainerUlCheckboxSectionEffect[index].classList.add("displayNoneUlCheckbox");
                storeContainerUlCheckboxSectionEffect[index].classList.remove("store-container-ul-checkbox-section-effect-visible");
                storeIconCheckboxSection[index].classList.remove("effect-to-change-state");
        }
}
/* ---------------------
        EVENTI
-----------------------*/
storeButtonCheckboxSection.forEach((element, index) => {
        element.addEventListener("click", () => {
                displayNoneUl(index);
        });
});