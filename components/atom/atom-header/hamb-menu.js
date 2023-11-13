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


let menuPopUpCreated = false;


/*///////////////////////////// creazione tasto x per hamburgher menu //////////////////// */


const buttonXHambMenu = document.createElement("button");
buttonXHambMenu.innerHTML = `<button aria-label="Close" data-test="mobile-global-banner-close-btn" class="delete-button-x-hamb-menu"><svg
          xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" aria-hidden="true"
          class="Icon__StyledSVG-lm07h6-0 dHKzVM">
          <path
            d="M10.377 8.142l5.953-5.954-2.234-2.234-5.954 5.954L2.188-.046-.046 2.188l5.954 5.954-5.954 5.954 2.234 2.234 5.954-5.953 5.954 5.953 2.234-2.234z"
            fill="currentColor" fill-rule="evenodd"></path>
        </svg></button>`;





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
                <li><div class="area-giochi-container-hamb-menu"><a class="area-giochi-content-hamb-menu" href="#">${areaGiochi.textContent}</a></div></li> 
                <li><div class="all-button-upperCase-humb-menu button-natale-hamb-menu">${natale.textContent}</div></li>
                <li><div class="all-button-upperCase-humb-menu"><a href="#"><span>HOME</span></a></div></li>
                <li><div class="all-button-upperCase-humb-menu all-arrow-flex-button">${acquista.textContent} <img src="arrow.svg" class="arrow-header-humb-menu"></img></div></li>
                <li><div class="all-button-upperCase-humb-menu all-arrow-flex-button">${scopri.textContent}<img src="arrow.svg" class="arrow-header-humb-menu"></img></div></li>
                <li><div class="all-button-upperCase-humb-menu all-arrow-flex-button">${aiuto.textContent}<img src="arrow.svg" class="arrow-header-humb-menu"></img></div></li>
                <li><div class="button-hamb-menu">${legoHead.innerHTML}</div></li>
                <li><div class="button-hamb-menu">${blueBlock.innerHTML}</div></li>
                <li><div><a href="#" class="button-hamb-menu"><span>La mia lista dei desideri</span></a></div></li>
                <li><div><a href="#" class="button-hamb-menu"><span>Il mio carrello (0)</span></a></div></li>
                <li><div><a href="#" class="button-hamb-menu"><img class="icon-hamb-menu-italia" src="icon_maps.png"><span>Italia</span></a></div></li>
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



containerAside.addEventListener("click", (event) => {
    if (event.target === containerAside) {
        containerAside.remove();
    }
});

buttonXHambMenu.addEventListener("click", () => {
    containerAside.classList.add("not-visible-element-atom-header");
});



/*/////////evento per tasto acquista /////////////////////// */

const divForButton2 = document.createElement("div");
divForButton2.setAttribute("class", "delete-button-pop-up-menu");
const buttonXPopUpMenu2 = document.createElement("button");
const image2 = document.createElement("img");
image2.src = "/components/atom/atom-header/close.png"
image2.alt = "";
buttonXPopUpMenu2.appendChild(image2);
divForButton2.appendChild(buttonXPopUpMenu2);




const containerPopMenu = document.createElement("div");
const containerForMenuPopUp = document.createElement("div");
containerForMenuPopUp.innerHTML ="";
// Crea il contenuto di containerForMenuPopUp
acquista.addEventListener("click", () => {
    if (!menuPopUpCreated) {
        // Crea il container per il menu pop-up
        containerPopMenu.classList.add("not-visible-element-atom-header");

        // Crea il container per il contenuto del menu pop-up
       
        containerForMenuPopUp.className = "container-for-menu-pop-up-header";
        containerPopMenu.classList.add("general-container-pop-up-menu");
        containerPopMenu.classList.remove("not-visible-element-atom-header");
            containerForMenuPopUp.innerHTML = `
    <div class="content-pop-up-menu">
        <ul>
            <li><button><div class="all-arrow-flex-button"><span class="span-arrow-button-pop-up-menu">Set per tema</span><img src="/components/atom/atom-header/arrow.svg" class="arrow-header-pop-up-menu"></img></div></button></li>
            <li><button><div class="all-arrow-flex-button"><span class="span-arrow-button-pop-up-menu">Età</span><img src="/components/atom/atom-header/arrow.svg" class="arrow-header-pop-up-menu"></img></div></button></li>
            <li><button><div class="all-arrow-flex-button"><span class="span-arrow-button-pop-up-menu">Prezzi</span><img src="/components/atom/atom-header/arrow.svg" class="arrow-header-pop-up-menu"></img></div></button></li>
            <li><button><div class="all-arrow-flex-button"><span class="span-arrow-button-pop-up-menu">Merchandising LEGO</span><img src="/components/atom/atom-header/arrow.svg" class="arrow-header-pop-up-menu"></img></div></button></li>
            <li><button><div class="all-arrow-flex-button"><span class="span-arrow-button-pop-up-menu">Interessi</span><img src="/components/atom/atom-header/arrow.svg" class="arrow-header-pop-up-menu"></img></div></button></li>
            <li><button><div class="all-arrow-flex-button"><span class="span-arrow-button-pop-up-menu">Pick and Build</span><img src="/components/atom/atom-header/arrow.svg" class="arrow-header-pop-up-menu"></img></div></button></li>
            <li><div><a href="#">Set Esclusivi</a></div></li>
            <li><div><a href="#">Novità</a></div></li>
            <li><div><a href="#">I più venduti</a></div></li>
            <li><div><a href="#">Home decor</a></div></li>
            <li><div><a href="#">Sconti e offerte</a></div></li>
            <li><div><a href="#">Buoni regalo</a></div></li>
            <li><div><a href="#">Disponibile a breve</a></div></li>
            <li><div><a href="#">Ultima occasione per acquistarli</a></div></li>
        </ul>
    </div>
`;
        containerForMenuPopUp.appendChild(divForButton2);
        containerPopMenu.append(containerForMenuPopUp);
        bodyHeader.append(containerPopMenu);
        // Gestisci la chiusura del menu quando "buttonXHambMenu" viene cliccato

        menuPopUpCreated = true;
    }


    buttonXPopUpMenu2.addEventListener("click", () => {
        containerPopMenu.remove();
        menuPopUpCreated = false;
    });
    // Gestisci la chiusura del menu quando containerPopMenu viene cliccato
    containerPopMenu.addEventListener("click", (event) => {
        if (event.target === containerPopMenu) {
            containerPopMenu.remove();
            menuPopUpCreated = false;
        }
    });

    // Rimuovi il menu quando la finestra viene ridimensionata
    window.addEventListener("resize", () => {
        const containerPopMenu = document.querySelector(".general-container-pop-up-menu");
        if (window.innerWidth < 901) {
            containerPopMenu.remove();
            menuPopUpCreated = false;
        }
    });
});

/*/////////evento per tasto scopri /////////////////////// */


// Crea il contenuto di containerForMenuPopUp
scopri.addEventListener("click", () => {
    if (!menuPopUpCreated) {
        // Crea il container per il menu pop-up
        containerPopMenu.classList.add("not-visible-element-atom-header");

        // Crea il container per il contenuto del menu pop-up
      
        containerForMenuPopUp.className = "container-for-menu-pop-up-header";
        containerPopMenu.classList.add("general-container-pop-up-menu");
        containerPopMenu.classList.remove("not-visible-element-atom-header");
        containerForMenuPopUp.innerHTML = `
    <div class="content-pop-up-menu">
        <ul>
            <li><button><div class="all-arrow-flex-button"><span class="span-arrow-button-pop-up-menu">I nostri valori</span><img src="/components/atom/atom-header/arrow.svg" class="arrow-header-pop-up-menu"></img></div></button></li>
            <li><button><div class="all-arrow-flex-button"><span class="span-arrow-button-pop-up-menu">Le nostre app</span><img src="/components/atom/atom-header/arrow.svg" class="arrow-header-pop-up-menu"></img></div></button></li>
            <li><button><div class="all-arrow-flex-button"><span class="span-arrow-button-pop-up-menu">Le nostre riviste</span><img src="/components/atom/atom-header/arrow.svg" class="arrow-header-pop-up-menu"></img></div></button></li>
            <li><div><a href="#">Tutti i temi LEGO</a></div></li>
            <li><div><a href="#">Tutti gli interessi LEGO</a></div></li>
            <li><div><a href="#">Per gli adulti</a></div></li>
            <li><div><a href="#">Per le famiglie</a></div></li>
            <li><div><a href="#">LEGO® Insiders</a></div></li>
            <li><div><a href="#">LEGO® Mosaic Maker</a></div></li>
            <li><div><a href="#">Idee regalo LEGO®</a></div></li>
        </ul>
    </div>
`;
        containerForMenuPopUp.appendChild(divForButton2);
        containerPopMenu.append(containerForMenuPopUp);
        bodyHeader.append(containerPopMenu);
        // Gestisci la chiusura del menu quando "buttonXHambMenu" viene cliccato

        menuPopUpCreated = true;
    }


    buttonXPopUpMenu2.addEventListener("click", () => {
        containerPopMenu.remove();
        menuPopUpCreated = false;
    });
    // Gestisci la chiusura del menu quando containerPopMenu viene cliccato
    containerPopMenu.addEventListener("click", (event) => {
        if (event.target === containerPopMenu) {
            containerPopMenu.remove();
            menuPopUpCreated = false;
        }
    });

    // Rimuovi il menu quando la finestra viene ridimensionata
    window.addEventListener("resize", () => {
        const containerPopMenu = document.querySelector(".general-container-pop-up-menu");
        if (window.innerWidth < 901) {
            containerPopMenu.remove();
            menuPopUpCreated = false;
        }
    });
});

/*/////////evento per tasto aiuto /////////////////////// */


// Crea il contenuto di containerForMenuPopUp
aiuto.addEventListener("click", () => {
    if (!menuPopUpCreated) {
        // Crea il container per il menu pop-up
        containerPopMenu.classList.add("not-visible-element-atom-header");

        // Crea il container per il contenuto del menu pop-up

        containerForMenuPopUp.className = "container-for-menu-pop-up-header";
        containerPopMenu.classList.add("general-container-pop-up-menu");
        containerPopMenu.classList.remove("not-visible-element-atom-header");
        containerForMenuPopUp.innerHTML = `
    <div class="content-pop-up-menu">
        <ul>
            <li><div><a href="#">Verifica stato ordine</a></div></li>
            <li><div><a href="#">Consegne e resi</a></div></li>
            <li><div><a href="#">Trova uno store</a></div></li>
            <li><div><a href="#">Istruzioni per la costruzione</a></div></li>
            <li><div><a href="#">Domande frequenti</a></div></li>
            <li><div><a href="#">Contattaci</a></div></li>
            <li><div><a href="#">Pezzi di ricambio</a></div></li>
        </ul>
    </div>
`;
        containerForMenuPopUp.appendChild(divForButton2);
        containerPopMenu.append(containerForMenuPopUp);
        bodyHeader.append(containerPopMenu);
        // Gestisci la chiusura del menu quando "buttonXHambMenu" viene cliccato

        menuPopUpCreated = true;
    }


    buttonXPopUpMenu2.addEventListener("click", () => {
        containerPopMenu.remove();
        menuPopUpCreated = false;
    });
    // Gestisci la chiusura del menu quando containerPopMenu viene cliccato
    containerPopMenu.addEventListener("click", (event) => {
        if (event.target === containerPopMenu) {
            containerPopMenu.remove();
            menuPopUpCreated = false;
        }
    });





    // Rimuovi il menu quando la finestra viene ridimensionata
    window.addEventListener("resize", () => {
        const containerPopMenu = document.querySelector(".general-container-pop-up-menu");
        if (window.innerWidth < 901) {
            containerPopMenu.remove();
            menuPopUpCreated = false;
        }
    });
});
