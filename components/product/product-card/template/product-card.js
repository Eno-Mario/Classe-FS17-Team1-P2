/* -----------------------
    FASE DI PREPARAZIONE
-------------------------- */
var swiper = new Swiper(".mySwiper", {
        navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
        },
});
const buttonMinus = document.querySelector('.product-card-quantity-minus');
const buttonMinusImg = document.querySelector('.minus')
const buttonPlus = document.querySelector('.product-card-quantity-plus');
const maxInput = document.querySelector('#product-card-input');

/* -----------------------
        LOGICA
--------------------------*/

/* ----------------------
        FUNZIONI
-------------------------*/

/* ---------------------
        EVENTI
-----------------------*/
buttonMinus.addEventListener('click',() => {
        if(maxInput <= 1){
                buttonMinusImg.classList.add('grayColorNull')
                maxInput.value = 1;
        }else{
                maxInput.value = Math.max(1, parseInt(maxInput.value, 10) - 1);
        }
})

buttonPlus.addEventListener('click', () => {
        if(maxInput >= 5){
                maxInput.value = 5
        }else{
                maxInput.value = Math.min(5, parseInt(maxInput.value, 10) + 1)
        }
})