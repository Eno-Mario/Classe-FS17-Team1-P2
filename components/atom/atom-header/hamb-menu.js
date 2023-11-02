/* -----------------------
    FASE DI PREPARAZIONE
-------------------------- */

const menu = document.querySelector(".hamb-menu-container");
const titleMenu = document.querySelector(".hamb-title-header");
const areaGiochi = document.querySelector(".button-header-area-giochi");
const legoHead = document.querySelector(".lego-head-button-icon");
const blueBlock = document.querySelector(".lego-block-button-icon");

const acquista = document.getElementById("button-acquista-hamb");
const scopri = document.getElementById("button-scopri-hamb");
const aiuto = document.getElementById("button-aiuto-hamb");
const natale = document.querySelector("#button-xmas-hamb.button-xmas-header span");

const bodyHeader = document.querySelector("body");

console.log(natale);



/* -----------------------
LOGICA
--------------------------*/

/* ----------------------
FUNZIONI
-------------------------*/

/* ---------------------
EVENTI
-----------------------*/


/*///////////////////////////// creazione tasto x per hamburgher menu //////////////////// */
const buttonXHambMenu =document.createElement("button");
buttonXHambMenu.innerHTML = `<button aria-label="Close" data-test="mobile-global-banner-close-btn" class="delete-button-x-hamb-menu"><svg
          xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" aria-hidden="true"
          class="Icon__StyledSVG-lm07h6-0 dHKzVM">
          <path
            d="M10.377 8.142l5.953-5.954-2.234-2.234-5.954 5.954L2.188-.046-.046 2.188l5.954 5.954-5.954 5.954 2.234 2.234 5.954-5.953 5.954 5.953 2.234-2.234z"
            fill="currentColor" fill-rule="evenodd"></path>
        </svg></button>`


/* evento per hamburger menu */
const containerAside = document.createElement("div");
menu.addEventListener("click", () => {
    // Controlla la larghezza della finestra
    if (window.innerWidth <= 901) {
        const aside = document.createElement("div");
        containerAside.classList.add("general-container-hamb-menu");
        containerAside.classList.remove("not-visible-element-atom-header");
        aside.className = "aside-nav-hamb-menu";
        aside.innerHTML = `<div class="container-title-e-x-hamb-menu"><div class="title-hamb-menu">${titleMenu.innerHTML}</div>
       <div class="container-delete-button-x-hamb-menu">${buttonXHambMenu.innerHTML}</div></div>
        <div class="container-content-hamb-menu">
            <ul>
                <li><div><a href="#">${areaGiochi.textContent}</a></div></li> 
                <li><div>${natale.textContent}</div></li>
                <li><div><a href="#"><span>HOME</span></a></div></li>
                <li><div>${acquista.textContent}</div></li>
                <li><div>${scopri.textContent}</div></li>
                <li><div>${aiuto.textContent}</div></li>
                <li><div>${legoHead.innerHTML}</div></li>
                <li><div>${blueBlock.innerHTML}</div></li>
                <li><div><a href="#" class="button-hamb-menu-desideri"><span>La mia lista dei desideri</span></a></div></li>
                <li><div><a href="#" class="button-hamb-menu-mio-carrello"><span>Il mio carrello (0)</span></a></div></li>
                <li><div><a href="#" class="button-hamb-menu-italia"><img class="icon-hamb-menu-italia" src="icon_maps.png"><span>Italia</span></a></div></li>
            </ul>
        </div>`;
        containerAside.append(aside);
        bodyHeader.append(containerAside);
    }
});

// Aggiungi un listener per controllare le dimensioni della finestra quando la finestra viene ridimensionata
window.addEventListener("resize", () => {
    const containerAside = document.querySelector(".general-container-hamb-menu");

    // Controlla nuovamente la larghezza della finestra e rimuovi l'elemento se necessario
    if (window.innerWidth > 901 && containerAside) {
        containerAside.remove();
    }
});
containerAside.addEventListener("click", () => {
    if (containerAside) {
        containerAside.classList.add("not-visible-element-atom-header");
    }
});

buttonXHambMenu.addEventListener("click", () =>{
    if (buttonXHambMenu){
        containerAside.classList.add("not-visible-element-atom-header");
    }
})
