/* -----------------------
    FASE DI PREPARAZIONE
-------------------------- */

//lista bottoni standard-button

const standardButton = document.querySelectorAll(".standard-button");

//product review
var likeClicked = false; // Variabile per tenere traccia se il pulsante Like è stato cliccato
var dislikeClicked = false; // Variabile per tenere traccia se il pulsante Dislike è stato cliccato

//card store
const cardContainer = document.querySelector(".container-store-card");

const cardData = [
  {
    title: "Calendario dell’Avvento 2023 LEGO® ",
    price: 37.99,
    rating: 4.0,
    pieces: 320,
    age: "6+",
    img1: "https://www.lego.com/cdn/cs/set/assets/blt8345f6a8fc46d84b/75366_alt1.png?format=webply&fit=bounds&quality=90&width=320&height=320&dpr=1.5",
    img2: "https://www.lego.com/cdn/cs/set/assets/bltff8d93722741aaec/75366.png?format=webply&fit=bounds&quality=100&width=320&height=320&dpr=1",
  },

  {
    title: "Calendario dell’Avvento 2023 LEGO® ",
    price: 37.99,
    rating: 4.0,
    pieces: 320,
    age: "6+",
    img1: "https://www.lego.com/cdn/cs/set/assets/blt8345f6a8fc46d84b/75366_alt1.png?format=webply&fit=bounds&quality=90&width=320&height=320&dpr=1.5",
    img2: "https://www.lego.com/cdn/cs/set/assets/bltff8d93722741aaec/75366.png?format=webply&fit=bounds&quality=100&width=320&height=320&dpr=1",
  },
  {
    title: "Calendario dell’Avvento 2023 LEGO® ",
    price: 37.99,
    rating: 4.0,
    pieces: 320,
    age: "6+",
    img1: "https://www.lego.com/cdn/cs/set/assets/blt8345f6a8fc46d84b/75366_alt1.png?format=webply&fit=bounds&quality=90&width=320&height=320&dpr=1.5",
    img2: "https://www.lego.com/cdn/cs/set/assets/bltff8d93722741aaec/75366.png?format=webply&fit=bounds&quality=100&width=320&height=320&dpr=1",
  },
  {
    title: "Calendario dell’Avvento 2023 LEGO® ",
    price: 37.99,
    rating: 4.0,
    pieces: 320,
    age: "6+",
    img1: "https://www.lego.com/cdn/cs/set/assets/blt8345f6a8fc46d84b/75366_alt1.png?format=webply&fit=bounds&quality=90&width=320&height=320&dpr=1.5",
    img2: "https://www.lego.com/cdn/cs/set/assets/bltff8d93722741aaec/75366.png?format=webply&fit=bounds&quality=100&width=320&height=320&dpr=1",
  },
  {
    title: "Calendario dell’Avvento 2023 LEGO® ",
    price: 37.99,
    rating: 4.0,
    pieces: 320,
    age: "6+",
    img1: "https://www.lego.com/cdn/cs/set/assets/blt8345f6a8fc46d84b/75366_alt1.png?format=webply&fit=bounds&quality=90&width=320&height=320&dpr=1.5",
    img2: "https://www.lego.com/cdn/cs/set/assets/bltff8d93722741aaec/75366.png?format=webply&fit=bounds&quality=100&width=320&height=320&dpr=1",
  },
  {
    title: "Calendario dell’Avvento 2023 LEGO® ",
    price: 37.99,
    rating: 4.0,
    pieces: 320,
    age: "6+",
    img1: "https://www.lego.com/cdn/cs/set/assets/blt8345f6a8fc46d84b/75366_alt1.png?format=webply&fit=bounds&quality=90&width=320&height=320&dpr=1.5",
    img2: "https://www.lego.com/cdn/cs/set/assets/bltff8d93722741aaec/75366.png?format=webply&fit=bounds&quality=100&width=320&height=320&dpr=1",
  },
];

let prevButtonCard = document.querySelectorAll("#prevButton");
let nextButtonCard = document.querySelectorAll("#nextButton");
let imagesContainer = document.querySelectorAll(".images-store-card");
let currentPosition = 0;

//card2 container
const card2 = document.querySelectorAll(".newArticle");

//carousel homepage
const carousel = document.querySelectorAll(".carousel");
const prevButton = document.querySelectorAll(".prev-button");
const nextButton = document.querySelectorAll(".next-button");

//header
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

const menu = document.querySelector(".hamb-menu-container");
const titleMenu = document.querySelector(".hamb-title-header");
const areaGiochi = document.querySelector(".button-header-area-giochi");
const legoHead = document.querySelector(".lego-head-button-icon");
const blueBlock = document.querySelector(".lego-block-button-icon");

const acquista = document.getElementById("button-acquista-hamb");
const scopri = document.getElementById("button-scopri-hamb");
const aiuto = document.getElementById("button-aiuto-hamb");
const natale = document.querySelector(
  "#button-xmas-hamb.button-xmas-header span"
);

const bodyHeader = document.querySelector("body");

let menuPopUpCreated = false;

//cookie

const cookieButton = document.querySelector(".homepage-cookie-button");
const body = document.querySelector("body");
const containerCookie = document.querySelector(".homepage-cookie-container");

//footer-----------
const detailsSummary = document.querySelectorAll("details");

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

//footer-----------
if (window.innerWidth > 901) {
  detailsSummary.forEach((el) => {
    if (!el.hasAttribute("open")) {
      el.setAttribute("open", "true");
    } else {
      el.setAttribute("open", "false");
    }
  });
}

//card store render
createCard(cardData);

/* ----------------------
        FUNZIONI
-------------------------*/

//funzione di comparsa e scomparsa dello spinner sul standard-button

function switchHiddenClassButton(bottone) {
  try {
    const testoButton = bottone.querySelector(
      ".container-content-standard-button"
    );
    console.log(testoButton);
    const spinnerButton = bottone.querySelector(".spinner-container");
    const listaClassiTesto = testoButton.classList;

    if (listaClassiTesto.contains("hidden")) {
      testoButton.classList.remove("hidden");
      spinnerButton.classList.add("hidden");
    } else {
      spinnerButton.classList.remove("hidden");
      testoButton.classList.add("hidden");
    }
  } catch (err) {
    console.error(err);
  }
}

//button info codice

function toggleVignetta() {
  try {
    var vignetta = document.getElementById("vignetta");
    vignetta.style.display =
      vignetta.style.display === "block" ? "none" : "block";
  } catch (err) {
    console.error(err);
  }
}

function closeVignetta() {
  try {
    document.getElementById("vignetta").style.display = "none";
  } catch (err) {
    console.error(err);
  }
}

function pushLike() {
  try {
    var numLikeElement = document.getElementsByClassName("numLike")[0];
    var numLike = parseInt(numLikeElement.textContent);
    var likeSvg = document.querySelector(".likeSvg");

    if (!likeClicked) {
      numLikeElement.textContent = numLike + 1;
      likeClicked = true;
      likeSvg.classList.add("active");
    } else {
      numLikeElement.textContent = numLike - 1;
      likeClicked = false;
      likeSvg.classList.remove("active");
    }

    // Resetta dislikeClicked dopo un clic su Like
    if (dislikeClicked) {
      dislikeClicked = false;
    }
  } catch (error) {
    console.error(error);
  }
}

//Product Review

function pushDislike() {
  try {
    var numDislikeElement = document.getElementsByClassName("numDislike")[0];
    var numDislike = parseInt(numDislikeElement.textContent);
    var dislikeSvg = document.querySelector(".dislikeSvg");

    if (!dislikeClicked) {
      numDislikeElement.textContent = numDislike + 1;
      dislikeClicked = true;
      dislikeSvg.classList.add("active");
    } else {
      numDislikeElement.textContent = numDislike - 1;
      dislikeClicked = false;
      dislikeSvg.classList.remove("active");
    }

    // Resetta likeClicked dopo un clic su Dislike
    if (likeClicked) {
      likeClicked = false;
    }
  } catch (error) {
    console.error(error);
  }
}

// funzioen create card store
function createCard(arr) {
  try {
    const ul = document.createElement("ul");
    arr.forEach((el) => {
      const li = document.createElement("li");
      const card = document.createElement("article");
      card.classList.add("store-card");

      card.innerHTML = `
        <div class="container-img-store-card">
          <div class="images-store-card">
            <div class="store-card-image">
              <img
                src="${el.img1}"
                alt=""
              />
            </div>
            <div class="store-card-image">
              <img
                src="${el.img2}"
                alt=""
              />
            </div>
          </div>

          <button id="prevButton">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 40 40"
              fill="currentColor"
            >
              <path
                d="M26.643 2.413 9.799 18.716A2.489 2.489 0 0 0 9 20.527c0 .679.287 1.33.798 1.811L26.74 37.627c.257.24.604.374.967.374.362 0 .71-.134.967-.374l1.92-1.837c.129-.12.23-.261.3-.418a1.215 1.215 0 0 0 0-.988 1.283 1.283 0 0 0-.3-.418L15.642 20.411l14.952-14.44c.256-.24.4-.566.4-.905 0-.34-.144-.665-.4-.906L28.62 2.374a1.383 1.383 0 0 0-.458-.282 1.454 1.454 0 0 0-1.073.021c-.168.071-.32.173-.445.3Z"
              ></path>
            </svg>
          </button>
          <button id="nextButton">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 40 40"
              fill="currentColor"
            >
              <path
                d="M26.643 2.413 9.799 18.716A2.489 2.489 0 0 0 9 20.527c0 .679.287 1.33.798 1.811L26.74 37.627c.257.24.604.374.967.374.362 0 .71-.134.967-.374l1.92-1.837c.129-.12.23-.261.3-.418a1.215 1.215 0 0 0 0-.988 1.283 1.283 0 0 0-.3-.418L15.642 20.411l14.952-14.44c.256-.24.4-.566.4-.905 0-.34-.144-.665-.4-.906L28.62 2.374a1.383 1.383 0 0 0-.458-.282 1.454 1.454 0 0 0-1.073.021c-.168.071-.32.173-.445.3Z"
              ></path>
            </svg>
          </button>
        </div>

        <div class="product-atributes-card">
          <span class="product-attribute" data-test="product-age-label"
            ><div class="icon-store-card">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 40 40"
                fill="currentColor"
              >
                <path
                  d="M36.972 26.744c-.135-3.129-.322-7.406-5.725-7.406h-7.441V14.89a1.257 1.257 0 0 0 .926-.502c2.947-4.005 0-7.075-3.16-10.315l-.671-.697a1.308 1.308 0 0 0-1.835 0l-.671.697c-3.143 3.24-6.108 6.31-3.16 10.315a1.258 1.258 0 0 0 .926.502v4.465H8.753c-5.402 0-5.59 4.252-5.725 7.406v.68a3.175 3.175 0 0 0 2.242 3.462c.098.029.197.048.298.06v4.761A1.276 1.276 0 0 0 6.816 37H33.15a1.273 1.273 0 0 0 1.274-1.276v-4.77c.1-.018.2-.04.297-.068a3.169 3.169 0 0 0 2.252-3.461v-.68ZM19.983 6.08c2.999 3.113 4.018 4.482 3.033 6.25H16.95c-.986-1.768.034-3.137 3.032-6.25Zm-1.274 8.81h2.548v4.448H18.71V14.89ZM5.542 26.855c.162-3.682.459-4.966 3.177-4.966h22.494c2.718 0 3.016 1.284 3.177 4.966v.697c0 .749-.246.85-.416.85a2.207 2.207 0 0 1-2.098-.756 3.681 3.681 0 0 0-3.169-1.956 3.7 3.7 0 0 0-3.185 2.007 1.088 1.088 0 0 1-.91.646 1.213 1.213 0 0 1-1.019-.672 4.393 4.393 0 0 0-3.448-2.143h-.289a4.388 4.388 0 0 0-3.466 2.118 1.215 1.215 0 0 1-1.02.672 1.07 1.07 0 0 1-.908-.647 3.706 3.706 0 0 0-3.186-2.007 3.676 3.676 0 0 0-3.185 1.982 2.2 2.2 0 0 1-2.124.8c-.17-.052-.45-.137-.416-.851l-.009-.74Zm2.549 7.594v-3.742a4.248 4.248 0 0 0 2.2-1.794 1.14 1.14 0 0 1 .96-.672 1.188 1.188 0 0 1 .976.689 3.562 3.562 0 0 0 3.135 1.956 3.726 3.726 0 0 0 3.245-1.999 1.861 1.861 0 0 1 1.36-.85 1.858 1.858 0 0 1 1.358.85 3.732 3.732 0 0 0 3.245 1.999 3.557 3.557 0 0 0 3.135-1.956 1.19 1.19 0 0 1 .977-.689 1.138 1.138 0 0 1 .96.672 4.248 4.248 0 0 0 2.234 1.794v3.742H8.09Z"
                ></path>
              </svg>
            </div>
            ${el.age}
          </span>

          <span class="product-attribute" data-test="product-piece-label">
            <div class="icon-store-card">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 40 40"
                fill="currentColor"
              >
                <path
                  d="m8.18 11.486-.03.014c-.15.141-.15.775-.15.775v17.79c0 .38.21.733.571.916l10.956 5.892c.15.085.33.127.51.127s.361-.042.527-.127l10.865-5.892c.36-.183.571-.536.571-.916V12.26s0-.634-.18-.747l-.166-.127-.796-.437-4.043-2.199-.18-.084V6.919C26.635 4.692 23.87 3 20.038 3c-3.833 0-6.583 1.706-6.583 3.933V8.61m6.583-3.481c2.675 0 4.373 1.07 4.373 1.818 0 .747-1.698 1.818-4.373 1.818-2.675 0-4.374-1.071-4.374-1.818 0-.747 1.729-1.818 4.374-1.818Zm-4.374 4.778a9.916 9.916 0 0 0 4.374.959 9.542 9.542 0 0 0 4.373-.959v.212c0 .76-1.698 1.832-4.373 1.832-2.675 0-4.374-1.071-4.374-1.818v-.226Zm3.277 8.726v15.52l-8.717-4.709V14.01l8.716 4.567v.07-.013Zm1.112-1.819-7.65-4.045-.992-.494-.12-.056 2.3-1.269c.6 1.819 3.17 3.101 6.462 3.101 3.29 0 5.77-1.24 6.432-3.016l2.164 1.198h.015l-8.581 4.595-.03-.014Zm9.783 12.616-8.656 4.737v-15.52l8.656-4.652V29.43Z"
                ></path>
              </svg>
            </div>
            ${el.pieces}
          </span>

          <span class="product-attribute" data-test="product-rating-label">
            <div class="icon-store-card">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 40 40"
                fill="currentColor"
              >
                <path
                  d="M10.485 36c-.332 0-.66-.102-.942-.304a1.56 1.56 0 0 1-.638-1.546l1.674-9.612-7.093-6.811a1.554 1.554 0 0 1-.406-1.62c.19-.576.686-.988 1.295-1.075l9.8-1.403 4.386-8.748A1.597 1.597 0 0 1 20 4c.616 0 1.167.338 1.439.881l4.383 8.746 9.803 1.404c.609.087 1.106.5 1.295 1.076.19.576.035 1.197-.406 1.62l-7.091 6.808 1.673 9.615a1.56 1.56 0 0 1-.64 1.546 1.614 1.614 0 0 1-1.69.12l-8.764-4.538-8.77 4.539a1.624 1.624 0 0 1-.747.183Z"
                ></path>
              </svg>
            </div>
            ${el.rating}
          </span>
        </div>

        <h3 class="product-title-card" data-test="product-title-row">
          <a href="">${el.title}</a>
        </h3>

        <div class="product-price-card">${el.price} €</div>

        <button class="standard-button standard-button-round button-orange">
          <div class="spinner-container hidden">
            <svg class="spinner" viewBox="0 0 66 66">
              <circle cx="33" cy="33" r="20" fill="none" stroke="#000000" class="spinner-circle"></circle>
            </svg>
          </div>
          <div class="container-content-standard-button">
            <img class="bag-icon" src="/assets/icons/bag.svg" alt="bag-icon"></img>
            <div class="testo">Aggiungi al Carrello</div>
          </div>
        </button>`;

      li.append(card);

      ul.append(li);
    });

    cardContainer.append(ul);

    prevButtonCard = document.querySelectorAll("#prevButton");
    nextButtonCard = document.querySelectorAll("#nextButton");
    imagesContainer = document.querySelectorAll(".images-store-card");
  } catch (error) {
    console.error(error);
  }
}

/* ---------------------
        EVENTI
-----------------------*/

//event listener sul bottone per comparsa e scomparsa dello spinner

for (let i = 0; i < standardButton.length; i++) {
  standardButton[i].addEventListener("click", () =>
    switchHiddenClassButton(standardButton[i])
  );
}

// bottoni nex e prev sulle foto delle card
for (let i = 0; i < prevButtonCard.length; i++) {
  prevButtonCard[i].addEventListener("click", function () {
    try {
      const imageWidth = imagesContainer[i].clientWidth;
      currentPosition += imageWidth;
      if (currentPosition > 0) {
        currentPosition = 0;
      }
      imagesContainer[i].style.transform = `translateX(${currentPosition}px)`;
    } catch (error) {
      console.error(error);
    }
  });

  nextButtonCard[i].addEventListener("click", function () {
    try {
      const imageWidth = imagesContainer[i].clientWidth;
      currentPosition -= imageWidth;
      const maxPosition = -(
        imagesContainer[i].scrollWidth - imagesContainer[i].offsetWidth
      );
      if (currentPosition < maxPosition) {
        currentPosition = maxPosition;
      }
      imagesContainer[i].style.transform = `translateX(${currentPosition}px)`;
    } catch (error) {
      console.error(error);
    }
  });
}

//opacity on card2 hover
for (let i = 0; i < card2.length; i++) {
  card2[i].addEventListener("mouseover", function () {
    try {
      card2.forEach((el) => {
        el.classList.add("lessOp");
        card2[i].classList.remove("lessOp");
      });
    } catch (error) {
      console.error(error);
    }
  });
  card2[i].addEventListener("mouseout", function () {
    card2.forEach((el) => el.classList.remove("lessOp"));
  });
}

// Funzione di scroll Left e scroll right sui caroselli

for (let i = 0; i < prevButton.length; i++) {
  prevButton[i].classList.add("hidden");
  if (
    Math.ceil(carousel[i].scrollLeft) >=
    carousel[i].scrollWidth - carousel[i].offsetWidth
  ) {
    nextButton[i].classList.add("hidden");
  }

  //funzionamento prevButton
  prevButton[i].addEventListener("click", function () {
    const carouselwidth = Math.floor(carousel[i].offsetWidth);
    let currentPosition = carousel[i].scrollLeft;

    currentPosition -= carouselwidth;
    if (currentPosition < 0) {
      currentPosition = 0;
    }

    carousel[i].scrollLeft = currentPosition;

    setTimeout(() => {
      if (carousel[i].scrollLeft < 1) {
        prevButton[i].classList.add("hidden");
      } else {
        prevButton[i].classList.remove("hidden");
      }
    }, 700);

    nextButton[i].classList.remove("hidden");
  });

  //funzionamento nextButton
  nextButton[i].addEventListener("click", function () {
    const carouselwidth = Math.floor(carousel[i].offsetWidth);
    let currentPosition = carousel[i].scrollLeft;

    currentPosition += carouselwidth;
    if (currentPosition > carousel[i].scrollWidth - carousel[i].offsetWidth) {
      currentPosition = carousel[i].scrollWidth - carousel[i].offsetWidth;
    }

    carousel[i].scrollLeft = currentPosition;
    prevButton[i].classList.remove("hidden");

    setTimeout(() => {
      if (
        Math.ceil(carousel[i].scrollLeft) >=
        carousel[i].scrollWidth - carousel[i].offsetWidth
      ) {
        nextButton[i].classList.add("hidden");
      } else {
        nextButton[i].classList.remove("hidden");
      }
    }, 700);
  });
}

//evento per togliere l'upperHeader

xButton.addEventListener("click", () => {
  upperHeader.classList.add("not-visible-element-atom-header");
});

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

buttonXHambMenu.addEventListener("click", () => {
  if (buttonXHambMenu) {
    containerAside.classList.add("not-visible-element-atom-header");
  }
});

/*/////////evento per tasto acquista /////////////////////// */

const divForButton2 = document.createElement("div");
divForButton2.setAttribute("class", "delete-button-pop-up-menu");
const buttonXPopUpMenu2 = document.createElement("button");
const image2 = document.createElement("img");
image2.src = "close.png";
image2.alt = "";
buttonXPopUpMenu2.appendChild(image2);
divForButton2.appendChild(buttonXPopUpMenu2);

const containerPopMenu = document.createElement("div");
const containerForMenuPopUp = document.createElement("div");
containerForMenuPopUp.innerHTML = "";
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
            <li><button><div class="all-arrow-flex-button"><span class="span-arrow-button-pop-up-menu">Set per tema</span><img src="arrow.svg" class="arrow-header-pop-up-menu"></img></div></button></li>
            <li><button><div class="all-arrow-flex-button"><span class="span-arrow-button-pop-up-menu">Età</span><img src="arrow.svg" class="arrow-header-pop-up-menu"></img></div></button></li>
            <li><button><div class="all-arrow-flex-button"><span class="span-arrow-button-pop-up-menu">Prezzi</span><img src="arrow.svg" class="arrow-header-pop-up-menu"></img></div></button></li>
            <li><button><div class="all-arrow-flex-button"><span class="span-arrow-button-pop-up-menu">Merchandising LEGO</span><img src="arrow.svg" class="arrow-header-pop-up-menu"></img></div></button></li>
            <li><button><div class="all-arrow-flex-button"><span class="span-arrow-button-pop-up-menu">Interessi</span><img src="arrow.svg" class="arrow-header-pop-up-menu"></img></div></button></li>
            <li><button><div class="all-arrow-flex-button"><span class="span-arrow-button-pop-up-menu">Pick and Build</span><img src="arrow.svg" class="arrow-header-pop-up-menu"></img></div></button></li>
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
    const containerPopMenu = document.querySelector(
      ".general-container-pop-up-menu"
    );
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
            <li><button><div class="all-arrow-flex-button"><span class="span-arrow-button-pop-up-menu">I nostri valori</span><img src="arrow.svg" class="arrow-header-pop-up-menu"></img></div></button></li>
            <li><button><div class="all-arrow-flex-button"><span class="span-arrow-button-pop-up-menu">Le nostre app</span><img src="arrow.svg" class="arrow-header-pop-up-menu"></img></div></button></li>
            <li><button><div class="all-arrow-flex-button"><span class="span-arrow-button-pop-up-menu">Le nostre riviste</span><img src="arrow.svg" class="arrow-header-pop-up-menu"></img></div></button></li>
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
    const containerPopMenu = document.querySelector(
      ".general-container-pop-up-menu"
    );
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
    const containerPopMenu = document.querySelector(
      ".general-container-pop-up-menu"
    );
    if (window.innerWidth < 901) {
      containerPopMenu.remove();
      menuPopUpCreated = false;
    }
  });
});

// footer ------------------------------------------------------

window.addEventListener("resize", () => {
  if (window.innerWidth > 901) {
    detailsSummary.forEach((el) => {
      el.setAttribute("open", "true");
    });
  } else {
    detailsSummary.forEach((el) => {
      el.removeAttribute("open");
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const inputMail = document.querySelector(".input-mail");
  const yourMail = document.querySelector(".your-mail");

  inputMail.addEventListener("focus", function () {
    yourMail.style.transform = "translate(0px, -8px)";
    yourMail.style.fontSize = "12px";
  });

  inputMail.addEventListener("blur", function () {
    if (inputMail.value === "") {
      yourMail.style.transform = "none";
      yourMail.style.fontSize = "16px";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.getElementById("email-input");
  const sendButton = document.getElementById("send-button");

  sendButton.addEventListener("click", function () {
    emailInput.value = "";
  });
});

//cookie------------------------------------------------------
cookieButton.addEventListener("click", () => {
  const cookieDisabled = document.createElement("div");
  /*   cookieDisabled.className = 'homepage-cookie-displayed' */
  body.append(cookieDisabled);
  cookieDisabled.innerHTML = `
  <div class = 'homepage-cookie-disabled'>
    <div class = 'homepage-cookie-disabled-container'>
      <div class ='homepage-cookie-disabled-container-text'>
        <h2>Preferenze per la privacy: i cookie sono nostri. Il controllo è dell'utente.</h2>
        <p>LEGO System A/S (e le terze parti elencate di seguito) impostano e utilizzano cookie e tecnologie simili (“cookie”) su questo sito web per offrire un’esperienza migliore e più user-friendly, per scopi statistici e analitici e per fornire un marketing mirato e pertinente. Ulteriori informazioni sulle categorie di cookie sono riportate di seguito; utilizzare i pulsanti per decidere quali categorie si desidera attivare.</p>
        <p>Facendo clic su "Solo necessari", verranno impostati solo i cookie necessari per consentire il funzionamento del sito Web. Questi cookie non possono essere disabilitati. Selezionando "Accetta tutti" si impostano tutti i cookie. Questo ci consente di ottimizzare l'esperienza dell'utente e di pubblicizzare i nostri prodotti e servizi. In alternativa, è possibile selezionarne solo alcuni. È sufficiente fare clic su "Impostazioni dei cookie" e usare i pulsanti di attivazione/disattivazione per scegliere le categorie preferite.</p>
        <p>Ricordare che è sempre possibile revocare il proprio consenso o modificare le impostazioni semplicemente premendo il tasto “Impostazioni dei cookie” sul nostro sito. Per ulteriori informazioni, vedere anche la nostra Informativa sui cookie e la nostra Informativa sulla privacy Informativa sui cookie e Informativa sulla privacy</p>
        <p>Si noti che in questo sito rispettiamo il Global Privacy Control (GPC) per i cookie e quando viene rilevata l'impostazione GPC escludiamo automaticamente tutti i cookie, eccetto i cookie “Strettamente necessari”. Per ulteriori informazioni, visitare globalprivacycontrol.org.</p>
      </div>
      <div class = 'homepage-cookie-disabled-container-button'>
      <button class ='homepage-cookie-disabled-button-required'><span>Solo necessari</span></button>
      <button class ='homepage-cookie-disabled-button-all'><span>Accetta tutti</span></button>
      <p class = 'homepage-cookie-disabled-container-button-impostation'>Impostazioni dei cookie</p>
      </div>
    </div>
  </div>
  `;

  /* al click di solo necessari va in display none la card */
  const btnFewCookie = document.querySelector(
    ".homepage-cookie-disabled-button-required"
  );
  btnFewCookie.addEventListener("click", () => {
    cookieDisabled.style.display = "none";
  });

  const btnAllCookie = document.querySelector(
    ".homepage-cookie-disabled-button-all"
  );
  btnAllCookie.addEventListener("click", () => {
    cookieDisabled.style.display = "none";
    containerCookie.style.display = "none";
  });
});
