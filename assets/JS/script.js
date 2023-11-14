/* -----------------------
    FASE DI PREPARAZIONE
-------------------------- */

//lista bottoni standard-button

const standardButton = document.querySelectorAll(".standard-button");

//product review
var likeClicked = false; // Variabile per tenere traccia se il pulsante Like è stato cliccato
var dislikeClicked = false; // Variabile per tenere traccia se il pulsante Dislike è stato cliccato

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
try {
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
} catch (error) {
  console.error(error);
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

//store

function openStore() {
  const main = document.querySelector("main");

  main.innerHTML = `      <!-- store top -->
      <div class="top-store">
        <div class="top-links">
          <nav>
            <ol class="links">
              <li class="home">
                <span class="markup-home">
                  <a href="">Home</a>
                </span>
                <div class="icon-container">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 40 40"
                    fill="currentColor"
                  >
                    <path
                      d="m13.357 37.587 16.845-16.303A2.489 2.489 0 0 0 31 19.473c0-.679-.287-1.33-.798-1.811L13.26 2.373A1.42 1.42 0 0 0 12.293 2c-.362 0-.71.134-.967.374L9.406 4.21c-.129.12-.23.261-.3.418a1.214 1.214 0 0 0 0 .988c.07.156.171.299.3.418l14.952 13.553-14.952 14.44c-.256.241-.4.567-.4.906 0 .34.144.665.4.906l1.975 1.786c.13.122.287.218.458.282a1.454 1.454 0 0 0 1.073-.021 1.36 1.36 0 0 0 .444-.3Z"
                      class="icon-arrow"
                    ></path>
                  </svg>
                </div>
              </li>
              <li class="news">
                <span class="markup-news">
                  <a onclick="openStore()">Novità</a>
                </span>
                <div class="icon-container">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 40 40"
                    fill="currentColor"
                  >
                    <path
                      d="m13.357 37.587 16.845-16.303A2.489 2.489 0 0 0 31 19.473c0-.679-.287-1.33-.798-1.811L13.26 2.373A1.42 1.42 0 0 0 12.293 2c-.362 0-.71.134-.967.374L9.406 4.21c-.129.12-.23.261-.3.418a1.214 1.214 0 0 0 0 .988c.07.156.171.299.3.418l14.952 13.553-14.952 14.44c-.256.241-.4.567-.4.906 0 .34.144.665.4.906l1.975 1.786c.13.122.287.218.458.282a1.454 1.454 0 0 0 1.073-.021 1.36 1.36 0 0 0 .444-.3Z"
                      class="icon-arrow"
                    ></path>
                  </svg>
                </div>
              </li>
              <li class="new-set">
                <span class="markup-newSet"> Nuovi set LEGO </span>
              </li>
            </ol>
          </nav>
        </div>
        <div class="news-title">
          <h1>Novità</h1>
        </div>
        <section class="legoNews">
          <div class="container-legoNews">
            <h1>Nuovi set LEGO®</h1>
            <p>
              <span class="text-news">
                Avviso per tutti gli appassionati LEGO®! Se ti interessa
                conoscere gli ultimi set da costruire, salva questa pagina. Qui
                puoi trovare ogni nuovo set LEGO uscito negli ultimi 2 mesi. Da
                giocattoli da costruzione a complessi articoli da collezione,
                c'è un'ampia gamma di prodotti da scoprire. Esplora un vasto
                assortimento LEGO e filtra per
                <a href="" class="text-link">fascia d'età</a>,<a
                  href=""
                  class="text-link"
                  >prezzo</a
                >,<a href="" class="text-link">tipo di interesse</a> e altro
                ancora. Puoi anche trovare tutti i
                <a href="" class="text-link">set in arrivo</a>, i
                <a href="" class="text-link">set esclusivi LEGO</a> e i
                <a href="" class="text-link">set LEGO più popolari</a>
                <br />
                <span class="toggle-button-container">
                  <button class="toggle-button">Leggi di più</button>
                </span>
              </span>
            </p>
          </div>
        </section>
      </div>

      <!-- store -->
      <div class="store">
        <!-- aside -->
        <aside class="store-checkbox-primary-container">
          <div class="store-checkbox-total-container">
            <div class="store-checkbox-container">
              <div class="store-checkbox-container-content"></div>
            </div>
          </div>
        </aside>

        <!-- card container -->
        <div class="container-store-card"></div>
      </div>
      
             <div class="container-total-carousel">
        <div class="carousel-container">
          <div class="carousel">
            <div class="atom-homepage-post">
              <img
                src="https://www.lego.com/cdn/cs/set/assets/blt96924d13aaf44bca/10318-Page-202309-Block-Standard-2.jpg?fit=crop&format=jpg&quality=80&width=635&height=440&dpr=1"
                alt="airplain" class="atom-homepage-post-img" />
              <h3 class="atom-homepage-post-title">
                Nuovo set Concorde LEGO<sup>®</sup> Icons
              </h3>
              <p class="atom-homepage-post-paragraph">
                Fai volare la tua creatività a velocità supersonica con una
                nuova fantastica replica
              </p>
              <div class="atom-homepage-post-buy-now-arrow">
                <span class="atom-homepage-post-buy-now">Compra ora</span>
                <svg width="18" height="28" viewBox="0 0 18 28" aria-hidden="true" class="atom-homepage-post-arrow">
                  <path d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z" fill="currentColor"
                    class="atom-homepage-post-arrow"></path>
                </svg>
              </div>
            </div>
            <div class="atom-homepage-post">
              <img
              src="https://www.lego.com/cdn/cs/set/assets/blt94cbfc52253bb9c8/Hero_Banner_-_Mobile.jpg?fit=crop&format=jpg&quality=80&width=635&height=440&dpr=1"
                alt="airplain" class="atom-homepage-post-img" />
              <h3 class="atom-homepage-post-title">
                Nuovo set LEGO<sup>®</sup> Harry Potter™ per il Black Friday
              </h3>
              <p class="atom-homepage-post-paragraph">
                Questo Black Friday preparati a partire per un'avventura magica con tutti i tuoi personaggi preferiti di Harry Potter™.
              </p>
              <div class="atom-homepage-post-buy-now-arrow">
                <span class="atom-homepage-post-buy-now">Compra ora</span>
                <svg width="18" height="28" viewBox="0 0 18 28" aria-hidden="true" class="atom-homepage-post-arrow">
                  <path d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z" fill="currentColor"
                    class="atom-homepage-post-arrow"></path>
                </svg>
              </div>
            </div>
            <div class="atom-homepage-post">
              <img
                src="https://www.lego.com/cdn/cs/set/assets/bltfad86521402ae341/230710_Design_brief_Christmas_Decorations_Card_Content.jpg?fit=crop&format=jpg&quality=80&width=635&height=440&dpr=1"
                alt="airplain" class="atom-homepage-post-img" />
              <h3 class="atom-homepage-post-title">
                Come decorare la casa per il Natale con i mattoncini LEGO<sup>®</sup>
              </h3>
              <p class="atom-homepage-post-paragraph">
                Cercate idee per le decorazioni natalizie? Abbiamo pensato ai modi migliori per decorare casa vostra per le feste...
              </p>
              <div class="atom-homepage-post-buy-now-arrow">
                <span class="atom-homepage-post-buy-now">Compra ora</span>
                <svg width="18" height="28" viewBox="0 0 18 28" aria-hidden="true" class="atom-homepage-post-arrow">
                  <path d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z" fill="currentColor"
                    class="atom-homepage-post-arrow"></path>
                </svg>
              </div>
            </div>
            <div class="atom-homepage-post">
              <img
                src="https://www.lego.com/cdn/cs/set/assets/blt4b2b1165f5012299/vehicles_OG.png?fit=crop&format=png&width=635&height=440&dpr=1"
                alt="airplain" class="atom-homepage-post-img" />
              <h3 class="atom-homepage-post-title">
                I 12 migliori veicoli giocattolo per Natale
              </h3>
              <p class="atom-homepage-post-paragraph">

  Dai vita al mondo virtuale di Minecraft questo Black Friday con la nostra vasta collezione di giocattoli LEGO® Minecraft®
              </p>
              <div class="atom-homepage-post-buy-now-arrow">
                <span class="atom-homepage-post-buy-now">Compra ora</span>
                <svg width="18" height="28" viewBox="0 0 18 28" aria-hidden="true" class="atom-homepage-post-arrow">
                  <path d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z" fill="currentColor"
                    class="atom-homepage-post-arrow"></path>
                </svg>
              </div>
            </div>
            <div class="atom-homepage-post">
              <img
                src="https://www.lego.com/cdn/cs/set/assets/blt96924d13aaf44bca/10318-Page-202309-Block-Standard-2.jpg?fit=crop&format=jpg&quality=80&width=635&height=440&dpr=1"
                alt="airplain" class="atom-homepage-post-img" />
              <h3 class="atom-homepage-post-title">
                Nuovo set Concorde LEGO<sup>®</sup> Icons
              </h3>
              <p class="atom-homepage-post-paragraph">
                Fai volare la tua creatività a velocità supersonica con una
                nuova fantastica replica
              </p>
              <div class="atom-homepage-post-buy-now-arrow">
                <span class="atom-homepage-post-buy-now">Compra ora</span>
                <svg width="18" height="28" viewBox="0 0 18 28" aria-hidden="true" class="atom-homepage-post-arrow">
                  <path d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z" fill="currentColor"
                    class="atom-homepage-post-arrow"></path>
                </svg>
              </div>
            </div>
            <div class="atom-homepage-post">
              <img
              src="https://www.lego.com/cdn/cs/set/assets/blt94cbfc52253bb9c8/Hero_Banner_-_Mobile.jpg?fit=crop&format=jpg&quality=80&width=635&height=440&dpr=1"
                alt="airplain" class="atom-homepage-post-img" />
              <h3 class="atom-homepage-post-title">
                Nuovo set LEGO<sup>®</sup> Harry Potter™ per il Black Friday
              </h3>
              <p class="atom-homepage-post-paragraph">
                Questo Black Friday preparati a partire per un'avventura magica con tutti i tuoi personaggi preferiti di Harry Potter™.
              </p>
              <div class="atom-homepage-post-buy-now-arrow">
                <span class="atom-homepage-post-buy-now">Compra ora</span>
                <svg width="18" height="28" viewBox="0 0 18 28" aria-hidden="true" class="atom-homepage-post-arrow">
                  <path d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z" fill="currentColor"
                    class="atom-homepage-post-arrow"></path>
                </svg>
              </div>
            </div>
            <div class="atom-homepage-post">
              <img
                src="https://www.lego.com/cdn/cs/set/assets/bltfad86521402ae341/230710_Design_brief_Christmas_Decorations_Card_Content.jpg?fit=crop&format=jpg&quality=80&width=635&height=440&dpr=1"
                alt="airplain" class="atom-homepage-post-img" />
              <h3 class="atom-homepage-post-title">
                Come decorare la casa per il Natale con i mattoncini LEGO<sup>®</sup>
              </h3>
              <p class="atom-homepage-post-paragraph">
                Cercate idee per le decorazioni natalizie? Abbiamo pensato ai modi migliori per decorare casa vostra per le feste...
              </p>
              <div class="atom-homepage-post-buy-now-arrow">
                <span class="atom-homepage-post-buy-now">Compra ora</span>
                <svg width="18" height="28" viewBox="0 0 18 28" aria-hidden="true" class="atom-homepage-post-arrow">
                  <path d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z" fill="currentColor"
                    class="atom-homepage-post-arrow"></path>
                </svg>
              </div>
            </div>
            <div class="atom-homepage-post">
              <img
                src="https://www.lego.com/cdn/cs/set/assets/blt4b2b1165f5012299/vehicles_OG.png?fit=crop&format=png&width=635&height=440&dpr=1"
                alt="airplain" class="atom-homepage-post-img" />
              <h3 class="atom-homepage-post-title">
                I 12 migliori veicoli giocattolo per Natale
              </h3>
              <p class="atom-homepage-post-paragraph">

  Dai vita al mondo virtuale di Minecraft questo Black Friday con la nostra vasta collezione di giocattoli LEGO® Minecraft®
              </p>
              <div class="atom-homepage-post-buy-now-arrow">
                <span class="atom-homepage-post-buy-now">Compra ora</span>
                <svg width="18" height="28" viewBox="0 0 18 28" aria-hidden="true" class="atom-homepage-post-arrow">
                  <path d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z" fill="currentColor"
                    class="atom-homepage-post-arrow"></path>
                </svg>
              </div>
            </div>
          </div>

          <button class="prev-button">
            <svg viewBox="0 0 40 40" class="next round-butt">
              <g fill="none" fill-rule="evenodd">
                <rect opacity="1" width="38" height="38" rx="20"></rect>
                <path d="M16.42 9L29 20 16.42 31 15 29.653 26.042 20 15 10.347z" class="next"></path>
              </g>
            </svg>
          </button>
          <button class="next-button">
            <svg viewBox="0 0 40 40" class="next round-butt">
              <g fill="none" fill-rule="evenodd">
                <rect opacity="1"></rect>
                <path d="M16.42 9L29 20 16.42 31 15 29.653 26.042 20 15 10.347z" class="next"></path>
              </g>
            </svg>
          </button>
        </div>

      </div>
      `;
  /* -----------------------
    FASE DI PREPARAZIONE
-------------------------- */

  //card store
  const cardContainer = document.querySelector(".container-store-card");

  const cardDataArr = [
    {
      title: "Calendario dell’Avvento 2023 LEGO® Star Wars",
      price: 37.99,
      rating: 4.0,
      pieces: 320,
      age: 6,
      img1: "https://www.lego.com/cdn/cs/set/assets/blt8345f6a8fc46d84b/75366_alt1.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img2: "https://www.lego.com/cdn/cs/set/assets/bltff8d93722741aaec/75366.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img3: "https://www.lego.com/cdn/cs/set/assets/bltc80782a9abb9d13e/75366_alt2.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img4: "https://www.lego.com/cdn/cs/set/assets/bltf7f8b2ce7961b9de/75366_alt3.jpg?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img5: "https://www.lego.com/cdn/cs/set/assets/blt6a6a2202ddc3c309/75366_alt4.jpg?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    },

    {
      title: "Titanic LEGO®",
      price: 679.99,
      rating: 4.6,
      pieces: 9090,
      age: 18,
      img1: "https://www.lego.com/cdn/cs/set/assets/bltb94632aeb971eb91/10294.jpg?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img2: "https://www.lego.com/cdn/cs/set/assets/blt4970f39471f38330/10294_alt1.jpg?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img3: "https://www.lego.com/cdn/cs/set/assets/blt106cc94abfc29747/10294_alt2.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img4: "https://www.lego.com/cdn/cs/set/assets/blte2a2360888017d69/10294_alt3.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img5: "https://www.lego.com/cdn/cs/set/assets/blt31ad7a24060bc1f8/10294_alt4.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img6: "https://www.lego.com/cdn/cs/set/assets/blt26b206b09edcbc0b/10294_alt5.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img7: "https://www.lego.com/cdn/cs/set/assets/bltbb9bc2c8fa5f5f3a/10294_alt6.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img8: "https://www.lego.com/cdn/cs/set/assets/blt3c7bc7c49bce90d9/10294_alt7.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    },
    {
      title: "Baita alpina",
      price: 99.99,
      rating: 4.7,
      pieces: 1517,
      age: 18,
      img1: "https://www.lego.com/cdn/cs/set/assets/blt2069f4aa0d3bb63a/10325.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img2: "https://www.lego.com/cdn/cs/set/assets/blt476547efc6c46393/10325_alt1.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img3: "https://www.lego.com/cdn/cs/set/assets/blt293729cad317017b/10325_alt2.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img4: "https://www.lego.com/cdn/cs/set/assets/blt0b1d21d210bb34e6/10325_alt3.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img5: "https://www.lego.com/cdn/cs/set/assets/bltda6a600fc3e6ff2c/10325_alt4.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img6: "https://www.lego.com/cdn/cs/set/assets/blt5ffbad599e42d9cb/10325_alt5.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img7: "https://www.lego.com/cdn/cs/set/assets/blt3cffc4a5936374fb/10325_alt6.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img8: "https://www.lego.com/cdn/cs/set/assets/blt984515879600d5fc/10325_alt7.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    },
    {
      title: "Mamma ho perso l'aereo LEGO® Ideas",
      price: 299.99,
      rating: 4.8,
      pieces: 3955,
      age: 18,
      img1: "https://www.lego.com/cdn/cs/set/assets/blt0ba2da641d7f0426/21330_prod.png?format=webply&fit=bounds&quality=70&width=640&height=640&dpr=1.5",
      img2: "https://www.lego.com/cdn/cs/set/assets/blt9c69d4a46c794509/21330_box1.jpg?format=webply&fit=bounds&quality=70&width=640&height=640&dpr=1.5",
      img3: "https://www.lego.com/cdn/cs/set/assets/blt758788523f96138b/21330_alt1.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img4: "https://www.lego.com/cdn/cs/set/assets/blt33395590760cfb8e/21330_alt2.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img5: "https://www.lego.com/cdn/cs/set/assets/bltda8c79f512f688ff/21330_alt3.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img6: "https://www.lego.com/cdn/cs/set/assets/bltb5a663dd115605cd/21330_alt4.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img7: "https://www.lego.com/cdn/cs/set/assets/bltdefeaac575b10c65/21330_alt5.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img8: "https://www.lego.com/cdn/cs/set/assets/bltcdee6511375f7f15/21330_alt6.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    },
    {
      title: "Volo su Londra di Peter Pan e Wendy",
      price: 64.99,
      rating: 4.7,
      pieces: 466,
      age: 10,
      img1: "https://www.lego.com/cdn/cs/set/assets/blta9cf728f7ec432e6/43232.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img2: "https://www.lego.com/cdn/cs/set/assets/bltd196340d0f239d16/43232_alt1.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img3: "https://www.lego.com/cdn/cs/set/assets/blt7470bafd19a26ad7/43232_alt2.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img4: "https://www.lego.com/cdn/cs/set/assets/blt28b53285cec055b5/43232_alt3.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img5: "https://www.lego.com/cdn/cs/set/assets/blt0fba5cb10b7c05e7/43232_alt4.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img6: "https://www.lego.com/cdn/cs/set/assets/blta443e6700dcc6c6a/43232_alt5.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img7: "https://www.lego.com/cdn/cs/set/assets/blt16000198565a6af7/43232_alt6.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img8: "https://www.lego.com/cdn/cs/set/assets/bltaa12293981b53677/43232_alt7.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    },
    {
      title: "Villaggio vichingo",
      price: 139.99,
      rating: 5.0,
      pieces: 2103,
      age: 18,
      img1: "https://www.lego.com/cdn/cs/set/assets/blt331198c8f34e2d7a/21343.png?format=webply&fit=bounds&quality=70&width=640&height=640&dpr=1.5",
      img2: "https://www.lego.com/cdn/cs/set/assets/blt0f02b0cd97117394/21343_alt1.png?format=webply&fit=bounds&quality=70&width=640&height=640&dpr=1.5",
      img3: "https://www.lego.com/cdn/cs/set/assets/bltd3734359d5eaab89/21343_alt2.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img4: "https://www.lego.com/cdn/cs/set/assets/blt39fec5119b34b029/21343_alt3.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img5: "https://www.lego.com/cdn/cs/set/assets/blteac6c44051894a87/21343_alt4.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img6: "https://www.lego.com/cdn/cs/set/assets/blt9232ddd20240d8ed/21343_alt5.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img7: "https://www.lego.com/cdn/cs/set/assets/bltf4871e3d6901ce02/21343_alt6.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img8: "https://www.lego.com/cdn/cs/set/assets/blt662498e776508601/21343_alt7.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    },
    {
      title: "Icone dei cattivi Disney",
      price: 139.99,
      rating: 4.9,
      pieces: 1540,
      age: 18,
      img1: "https://www.lego.com/cdn/cs/set/assets/bltb0a3100b328dfcb0/43227.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img2: "https://www.lego.com/cdn/cs/set/assets/blt4d1db96a8eaf5e22/43227_alt1.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img3: "https://www.lego.com/cdn/cs/set/assets/blt6a7e870aa27d422f/43227_alt2.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img4: "https://www.lego.com/cdn/cs/set/assets/blt86086006bff28b1b/43227_alt4.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img5: "https://www.lego.com/cdn/cs/set/assets/blt0213500d9432584a/43227_alt3.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img6: "https://www.lego.com/cdn/cs/set/assets/bltb7a7ad4615afb413/43227_alt5.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img7: "https://www.lego.com/cdn/cs/set/assets/blt5a7b7f84207ed58a/43227_alt7.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img8: "https://www.lego.com/cdn/cs/set/assets/bltf9cf8b13ab4df635/43227_alt8.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    },
    {
      title: "Ghost e Phantom II",
      price: 169.99,
      rating: 4.6,
      pieces: 1394,
      age: 10,
      img1: "https://www.lego.com/cdn/cs/set/assets/blt743223623ed6a485/75357.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img2: "https://www.lego.com/cdn/cs/set/assets/bltd1ab1e6e34719af9/75357_alt1.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img3: "https://www.lego.com/cdn/cs/set/assets/blt6871fb6aeaad8cea/75357_alt6.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img4: "https://www.lego.com/cdn/cs/set/assets/blt95e25d64852971b6/75357_alt7.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img5: "https://www.lego.com/cdn/cs/set/assets/blt0e5b86677e5c34ab/75357_alt8.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img6: "https://www.lego.com/cdn/cs/set/assets/blte1cf2aad7573af90/75357_alt9.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img7: "https://www.lego.com/cdn/cs/set/assets/blt20a751b605c83b38/75357_alt2.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img8: "https://www.lego.com/cdn/cs/set/assets/blt36d8729132a568ad/75357_alt3.jpg?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    },
    {
      title: "Giardino botanico",
      price: 84.99,
      rating: 5.0,
      pieces: 1072,
      age: 12,
      img1: "https://www.lego.com/cdn/cs/set/assets/blt58d360250a7d0739/41757.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img2: "https://www.lego.com/cdn/cs/set/assets/blt2b1afe8e4740e27a/41757_alt1.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img3: "https://www.lego.com/cdn/cs/set/assets/blt89e882f601678843/41757_alt2.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img4: "https://www.lego.com/cdn/cs/set/assets/blt85099645adc501e3/41757_alt3.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img5: "https://www.lego.com/cdn/cs/set/assets/blt3c09b87e14d8a67a/41757_alt4.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img6: "https://www.lego.com/cdn/cs/set/assets/blt69a6984faf4c97d1/41757_alt5.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img7: "https://www.lego.com/cdn/cs/set/assets/bltbbc4e0e01aed3b29/41757_alt6.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img8: "https://www.lego.com/cdn/cs/set/assets/blt4e49e8b73e53cbfa/41757_alt7.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    },
    {
      title: "Colosseo",
      price: 549.99,
      rating: 4.8,
      pieces: 9036,
      age: 18,
      img1: "https://www.lego.com/cdn/cs/set/assets/blt7c4044f7aa529af3/10276_alt2.jpg?format=webply&fit=bounds&quality=70&width=640&height=640&dpr=1.5",
      img2: "https://www.lego.com/cdn/cs/set/assets/blt26cc4dd7f5cf656e/10276_alt1.jpg?format=webply&fit=bounds&quality=70&width=640&height=640&dpr=1.5",
      img3: "https://www.lego.com/cdn/cs/set/assets/blt5040546f8d1c4614/10276_alt3.jpg?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img4: "https://www.lego.com/cdn/cs/set/assets/blte647fb88e2bb38a8/10276_alt4.jpg?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img5: "https://www.lego.com/cdn/cs/set/assets/blt8008b5e0e006456f/10276_alt5.jpg?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img6: "https://www.lego.com/cdn/cs/set/assets/blt01997186cd4a3b00/10276_alt6.jpg?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img7: "https://www.lego.com/cdn/cs/set/assets/blt18442ec27e84b3bf/10276_alt7.jpg?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img8: "https://www.lego.com/cdn/cs/set/assets/blt61eba9a1c5d85895/10276_alt20.jpg?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    },
    {
      title: "Incrociatore d'attacco della Repubblica classe Venator",
      price: 649.99,
      rating: 4.7,
      pieces: 5374,
      age: 18,
      img1: "https://www.lego.com/cdn/cs/set/assets/blt06c6593d8e8d1c13/75367.png?format=webply&fit=bounds&quality=70&width=640&height=640&dpr=1.5",
      img2: "https://www.lego.com/cdn/cs/set/assets/blt266b40dfb46ff5de/75367_alt1.png?format=webply&fit=bounds&quality=70&width=640&height=640&dpr=1.5",
      img3: "https://www.lego.com/cdn/cs/set/assets/bltcfe4c209d7b5b7d2/75367_alt2.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img4: "https://www.lego.com/cdn/cs/set/assets/blta6d35cf64688bd7e/75367_alt3.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img5: "https://www.lego.com/cdn/cs/set/assets/bltb2ff00084c4d3cd7/75367_alt4.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img6: "https://www.lego.com/cdn/cs/set/assets/blt27eb167889485630/75367_alt5.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img7: "https://www.lego.com/cdn/cs/set/assets/blt2128bb47bc840972/75367_alt6.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img8: "https://www.lego.com/cdn/cs/set/assets/bltcd81a6934554cb94/75367_alt7.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    },
    {
      title: "Minifigure LEGO® a grandezza naturale",
      price: 49.99,
      rating: 5.0,
      pieces: 654,
      age: 10,
      img1: "https://www.lego.com/cdn/cs/set/assets/blt742e8599eb5e8931/40649.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img2: "https://www.lego.com/cdn/cs/set/assets/blt78b39f5757ec88eb/40649_alt1.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img3: "https://www.lego.com/cdn/cs/set/assets/blt0d2ef6fe545c3593/40649_alt2.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img4: "https://www.lego.com/cdn/cs/set/assets/bltccebe33614fe17e1/40649_alt3.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img5: "https://www.lego.com/cdn/cs/set/assets/blt1081a8ad4ef0e935/40649_alt4.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img6: "https://www.lego.com/cdn/cs/set/assets/blt0c23adbc9d96a693/40649_alt5.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    },
    {
      title: "Concorde",
      price: 199.99,
      rating: 4.9,
      pieces: 2083,
      age: 18,
      img1: "https://www.lego.com/cdn/cs/set/assets/bltdc7097183ba14c89/10318.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img2: "https://www.lego.com/cdn/cs/set/assets/bltd56ac1c273e08f9f/10318_alt1.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img3: "https://www.lego.com/cdn/cs/set/assets/bltfb105dece8087036/10318_alt2.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img4: "https://www.lego.com/cdn/cs/set/assets/blt80185e5c2d763534/10318_alt3.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img5: "https://www.lego.com/cdn/cs/set/assets/bltc368de600d3a8e3e/10318_alt4.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img6: "https://www.lego.com/cdn/cs/set/assets/blt8833c7dec6caac85/10318_alt5.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img7: "https://www.lego.com/cdn/cs/set/assets/bltfef4e2596c70f6ba/10318_alt6.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img8: "https://www.lego.com/cdn/cs/set/assets/blt8787c9d7d348f41c/10318_alt7.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    },
    {
      title: "Stazione di Polizia",
      price: 99.99,
      rating: 4.8,
      pieces: 811,
      age: 18,
      img1: "https://www.lego.com/cdn/cs/set/assets/blt22867b1f8fba50b3/10278_Prod.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img2: "https://www.lego.com/cdn/cs/set/assets/blt9f8f222b4d6ddf9b/10278_alt1.jpg?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img3: "https://www.lego.com/cdn/cs/set/assets/blt9cb3c82fe7c9edda/10278_alt2.jpg?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img4: "https://www.lego.com/cdn/cs/set/assets/bltf3813c12f623b335/10278_alt3.jpg?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img5: "https://www.lego.com/cdn/cs/set/assets/bltfb27bf8272014d75/10278_alt4.jpg?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img6: "https://www.lego.com/cdn/cs/set/assets/blta351bc0ea28e0103/10278_alt5.jpg?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img7: "https://www.lego.com/cdn/cs/set/assets/blte3cea45d1d5b6091/10278_alt6.jpg?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img8: "https://www.lego.com/cdn/cs/set/assets/bltd329aa3485c8d454/10278_alt7.jpg?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    },
    {
      title: "IL SIGNORE DEGLI ANELLI: GRAN BURRONE",
      price: 499.99,
      rating: 4.8,
      pieces: 6167,
      age: 18,
      img1: "https://www.lego.com/cdn/cs/set/assets/bltec012c948c003fba/10316_alt16.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img2: "https://www.lego.com/cdn/cs/set/assets/blt33d693d46b4b5858/10316_alt1.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1s",
      img3: "https://www.lego.com/cdn/cs/set/assets/blt0a0c82506f8bd960/10316.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img4: "https://www.lego.com/cdn/cs/set/assets/bltf60debbc5b62ec15/10316_alt2.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img5: "https://www.lego.com/cdn/cs/set/assets/bltf6c63e58e6201b11/10316_alt3.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img6: "https://www.lego.com/cdn/cs/set/assets/blt7cda2452018985c3/10316_alt4.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img7: "https://www.lego.com/cdn/cs/set/assets/bltd90e31a939a87d8e/10316_alt5.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img8: "https://www.lego.com/cdn/cs/set/assets/blta9a57450a2f6820c/10316_alt6.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    },
    {
      title: "Fortezza di Eldorado",
      price: 214.99,
      rating: 4.5,
      pieces: 2509,
      age: 18,
      img1: "https://www.lego.com/cdn/cs/set/assets/bltde348ae9bd9b3de2/10320.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img2: "https://www.lego.com/cdn/cs/set/assets/bltbd0d2797d43ad684/10320_alt1.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img3: "https://www.lego.com/cdn/cs/set/assets/blt1909ea1188745ab8/10320_alt2.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img4: "https://www.lego.com/cdn/cs/set/assets/bltb92a0205d6c58747/10320_alt3.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img5: "https://www.lego.com/cdn/cs/set/assets/blt176bdc3fa37a39a3/10320_alt4.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img6: "https://www.lego.com/cdn/cs/set/assets/blt2caec37ddfd56167/10320_alt5.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img7: "https://www.lego.com/cdn/cs/set/assets/bltc5923c0f14725c70/10320_alt10.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img8: "https://www.lego.com/cdn/cs/set/assets/blt77e7f44388885031/10320_alt6.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    },
    {
      title: "Banca dei Maghi Gringott™ – Edizione del Collezionista",
      price: 429.99,
      rating: 4.8,
      pieces: 4803,
      age: 18,
      img1: "https://www.lego.com/cdn/cs/set/assets/bltfbd377eafb67041a/76417.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img2: "https://www.lego.com/cdn/cs/set/assets/blt3db77dbc731f5eeb/76417_alt1.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img3: "https://www.lego.com/cdn/cs/set/assets/blt5ea33eb6eb515925/76417_alt2.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img4: "https://www.lego.com/cdn/cs/set/assets/blt8b282234ad44638e/76417_alt3.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img5: "https://www.lego.com/cdn/cs/set/assets/bltb06c34f4bda992f4/76417_alt4.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img6: "https://www.lego.com/cdn/cs/set/assets/bltb0fd43c41129ac09/76417_alt5.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img7: "https://www.lego.com/cdn/cs/set/assets/bltfc8f664168673602/76417_alt6.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img8: "https://www.lego.com/cdn/cs/set/assets/blt80ec055086a3919e/76417_alt7.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    },
    {
      title: "Castello e parco di Hogwarts™",
      price: 169.99,
      rating: 4.6,
      pieces: 2660,
      age: 18,
      img1: "https://www.lego.com/cdn/cs/set/assets/blte09f96efc93d5c1d/76419.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img2: "https://www.lego.com/cdn/cs/set/assets/blt5a988358a6267b58/76419_alt1.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img3: "https://www.lego.com/cdn/cs/set/assets/blt5b733a63c312a4bf/76419_alt4.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img4: "https://www.lego.com/cdn/cs/set/assets/blt784b4fd602b82f77/76419_alt5.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img5: "https://www.lego.com/cdn/cs/set/assets/bltba664ed2c46ac574/76419_alt6.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img6: "https://www.lego.com/cdn/cs/set/assets/blt82938990cc9e4385/76419_alt7.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img7: "https://www.lego.com/cdn/cs/set/assets/blt4046fec53a66c3ab/76419_alt8.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img8: "https://www.lego.com/cdn/cs/set/assets/bltdca84860ceac737c/76419_alt9.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    },
    {
      title: "La visita di Babbo Natale",
      price: 99.99,
      rating: 4.8,
      pieces: 1445,
      age: 18,
      img1: "https://www.lego.com/cdn/cs/set/assets/bltb148945c2bb2f149/10293.jpg?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img2: "https://www.lego.com/cdn/cs/set/assets/blt00f50f1154bdd4a9/10293_alt1.jpg?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img3: "https://www.lego.com/cdn/cs/set/assets/blt59ebc420cdbc4ed8/10293_alt2.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img4: "https://www.lego.com/cdn/cs/set/assets/blt06d96795199f4be3/10293_alt3.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img5: "https://www.lego.com/cdn/cs/set/assets/blt29187c9488cf3bdc/10293_alt4.jpg?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img6: "https://www.lego.com/cdn/cs/set/assets/blt097b217d1d989782/10293_alt5.jpg?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img7: "https://www.lego.com/cdn/cs/set/assets/blt13645451aff30e1e/10293_alt6.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img8: "https://www.lego.com/cdn/cs/set/assets/blt8a026fe8a152d6dc/10293_alt7.jpg?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    },
    {
      title: "LEGO® House ",
      price: 49.99,
      rating: 4.0,
      pieces: 774,
      age: 12,
      img1: "https://www.lego.com/cdn/cs/set/assets/blt4ec90da36b68ebcf/21037.jpg?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img2: "https://www.lego.com/cdn/cs/set/assets/bltc5d88a7042c458d2/21037_alt1.jpg?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img3: "https://www.lego.com/cdn/cs/set/assets/blt23af934c5c312577/21037_alt2.jpg?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img4: "https://www.lego.com/cdn/cs/set/assets/bltfddbc2e5e2ac86ce/21037_alt3.jpg?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img5: "https://www.lego.com/cdn/cs/set/assets/bltc165bf5bf61f94eb/21037_alt4.jpg?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
      img6: "https://www.lego.com/cdn/cs/set/assets/blt44d99dc3775b2b75/21037_alt5.jpg?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    },
  ];

  let idD = 0;
  const cardData = cardDataArr.map((el) => {
    el = { ...el, id: idD };
    idD++;
    return el;
  });

  const checkboxData = {
    price: [
      [0, 20],
      [20, 50],
      [50, 99],
      [100, 9999],
    ],
    age: [
      [6, 9999],
      [9, 9999],
      [18, 9999],
    ],
    pieces: [
      [1, 99],
      [100, 250],
      [250, 499],
      [500, 999],
      [1000, 99999],
    ],
  };

  let prevButtonCard = document.querySelectorAll("#prevButton");
  let nextButtonCard = document.querySelectorAll("#nextButton");
  let imagesContainer = document.querySelectorAll(".images-store-card");
  let currentPosition = 0;

  /////atom-store-checkbox//////////////////////////////////////////

  const checkboxContainer = document.querySelector(
    ".store-checkbox-container-content"
  );

  /* -----------------------
        LOGICA
--------------------------*/

  //card store render
  createCard(cardData);

  createCheckbox(checkboxData, cardData);

  /* ----------------------
        FUNZIONI
-------------------------*/

  // CREATE PRODUCT

  // funzioen create card store
  function createCard(arr) {
    try {
      const ul = document.createElement("ul");
      arr.forEach((el, index) => {
        const li = document.createElement("li");
        const card = document.createElement("article");
        card.classList.add("store-card");
        card.setAttribute("id", index);

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
            ${el.age}+
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
        card.addEventListener("click", () => {
          createProduct(index);
        });

        function createProduct(index) {
          const main = document.querySelector("main");

          main.innerHTML = `    <div class="product-card-container">
            <div class="top-links">
        <nav>
          <ol class="links">
            <li class="home">
              <span class="markup-home">
                <a href="">Home</a>
              </span>
              <div class="icon-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 40 40"
                  fill="currentColor"
                >
                  <path
                    d="m13.357 37.587 16.845-16.303A2.489 2.489 0 0 0 31 19.473c0-.679-.287-1.33-.798-1.811L13.26 2.373A1.42 1.42 0 0 0 12.293 2c-.362 0-.71.134-.967.374L9.406 4.21c-.129.12-.23.261-.3.418a1.214 1.214 0 0 0 0 .988c.07.156.171.299.3.418l14.952 13.553-14.952 14.44c-.256.241-.4.567-.4.906 0 .34.144.665.4.906l1.975 1.786c.13.122.287.218.458.282a1.454 1.454 0 0 0 1.073-.021 1.36 1.36 0 0 0 .444-.3Z"
                    class="icon-arrow"
                  ></path>
                </svg>
              </div>
            </li>
            <li class="news">
              <span class="markup-news">
                <a onclick="openStore()">Novità</a>
              </span>
              <div class="icon-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 40 40"
                  fill="currentColor"
                >
                  <path
                    d="m13.357 37.587 16.845-16.303A2.489 2.489 0 0 0 31 19.473c0-.679-.287-1.33-.798-1.811L13.26 2.373A1.42 1.42 0 0 0 12.293 2c-.362 0-.71.134-.967.374L9.406 4.21c-.129.12-.23.261-.3.418a1.214 1.214 0 0 0 0 .988c.07.156.171.299.3.418l14.952 13.553-14.952 14.44c-.256.241-.4.567-.4.906 0 .34.144.665.4.906l1.975 1.786c.13.122.287.218.458.282a1.454 1.454 0 0 0 1.073-.021 1.36 1.36 0 0 0 .444-.3Z"
                    class="icon-arrow"
                  ></path>
                </svg>
              </div>
            </li>
            <li class="new-set">
              <span class="markup-newSet"> ${el.title}</span>
            </li>
          </ol>
        </nav>
      </div>

      <div class="product-card">
        <div class="product-card-left">
          <div class="product-card-img">
            <!-- carosello scorrevole-->
            <ul class="product-card-carrosel">
              <li>
                <button class="product-card-carrosel-img">
                  <img
                    src="${el.img1}"
                    alt=""
                  />
                </button>
              </li>
                            <li>
                <button class="product-card-carrosel-img">
                  <img
                    src="${el.img2}"
                    alt=""
                  />
                </button>
              </li>
                            <li>
                <button class="product-card-carrosel-img">
                  <img
                    src="${el.img3}"
                    alt=""
                  />
                </button>
              </li>
                            <li>
                <button class="product-card-carrosel-img">
                  <img
                    src="${el.img4}"
                    alt=""
                  />
                </button>
              </li>
                            <li>
                <button class="product-card-carrosel-img">
                  <img
                    src="${el.img5}"
                    alt=""
                  />
                </button>
              </li>
                            <li>
                <button class="product-card-carrosel-img">
                  <img
                    src="${el.img6}"
                    alt=""
                  />
                </button>
              </li>
                            <li>
                <button class="product-card-carrosel-img">
                  <img
                    src="${el.img7}"
                    alt=""
                  />
                </button>
              </li>
                            <li>
                <button class="product-card-carrosel-img">
                  <img
                    src="${el.img8}"
                    alt=""
                  />
                </button>
              </li>
            </ul>

            <div class="product-card-swiper">
              <div class="product-card-swiper-button">
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 40 40"
                    fill="currentColor"
                  >
                    <path
                      d="M33 18H23c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h10c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1Zm-16 0H7c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h10c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1Zm16 16H23c-.55 0-1-.45-1-1V23c0-.55.45-1 1-1h10c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1Zm-16 0H7c-.55 0-1-.45-1-1V23c0-.55.45-1 1-1h10c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1Z"
                    ></path>
                  </svg>
                  <span>Visualizza tutti</span>
                </button>
              </div>

              <div class="product-card-swiper-counter">
                <span>
                  1
                  <span>/</span>
                  8
                </span>
              </div>
              <!-- Slider main container -->
              <div class="mySwiper">
                <!-- Additional required wrapper -->
                <div class="swiper-wrapper">
                  <!-- Slides -->
                  <div class="swiper-slide">
                    <img
                      src="${el.img1}"
                      alt=""
                    />
                  </div>
                  <div class="swiper-slide">
                    <img
                      src="${el.img2}"
                      alt=""
                    />
                  </div>
                                    <div class="swiper-slide">
                    <img
                      src="${el.img3}"
                      alt=""
                    />
                  </div>
                                    <div class="swiper-slide">
                    <img
                      src="${el.img4}"
                      alt=""
                    />
                  </div>
                                    <div class="swiper-slide">
                    <img
                      src="${el.img5}"
                      alt=""
                    />
                  </div>
                                    <div class="swiper-slide">
                    <img
                      src="${el.img6}"
                      alt=""
                    />
                  </div>
                                    <div class="swiper-slide">
                    <img
                      src="${el.img7}"
                      alt=""
                    />
                  </div>
                                    <div class="swiper-slide">
                    <img
                      src="${el.img8}"
                      alt=""
                    />
                  </div>
                  ...
                </div>
                <!-- If we need pagination -->
                <div class="swiper-pagination"></div>

                <!-- If we need navigation buttons -->
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
              </div>
            </div>
          </div>
          <div class="product-card-attributes">
            <div class="product-attributes-container" style="border-left: none">
              <div class="slot-icon-container">
                <svg
                  width="34"
                  height="40"
                  viewBox="0 0 34 40"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon-attributes-product"
                >
                  <g fill="currentColor" style="mix-blend-mode: darken">
                    <path
                      d="M32.606 29.532c.319 0 .576.127.576.282v.585c0 .155-.257.281-.576.281H.895c-.32 0-.578-.126-.578-.281v-.585c0-.155.258-.282.578-.282h31.71zM15.737 14.597c.071 0 .129.126.129.281v.585c0 .155-.058.281-.13.281H8.63c-.072 0-.13-.126-.13-.281v-.585c0-.155.058-.281.13-.281h7.107zm9.713 0c.072 0 .13.126.13.281v.585c0 .155-.058.281-.13.281h-7.106c-.072 0-.13-.126-.13-.281v-.585c0-.155.058-.281.13-.281h7.107z"
                    ></path>
                    <path
                      d="M1.821 21.572H32.18v16.606H1.82V21.572zM1.195 20A1.19 1.19 0 000 21.186v17.592a1.19 1.19 0 001.195 1.186h31.54a1.19 1.19 0 001.193-1.186V21.186A1.19 1.19 0 0032.734 20H1.195zM7.856 8.485c-.79.11-1.183.505-1.177 1.186v3.741c.342.047 1.524.09 1.524 1.559V9.885H25.9v3.874c.291-1.068.765-1.132 1.421-.193V9.671c0-.655-.527-1.186-1.177-1.186H7.856z"
                    ></path>
                    <path
                      d="M7.34 18.919c-1.64 0-1.634-.814-1.634-1.042 0-1.052 1.071-3.36 1.614-3.48.593.12 1.665 2.428 1.666 3.48 0 .23-.005 1.042-1.646 1.042M7.3 12.12c-1.028.214-3.05 4.31-3.05 6.18 0 .403-.008 1.847 3.085 1.847 3.097 0 3.106-1.441 3.106-1.847-.004-1.869-2.025-5.968-3.142-6.178m9.66 6.797c-1.64 0-1.635-.814-1.635-1.042 0-1.052 1.072-3.36 1.615-3.48.593.12 1.664 2.428 1.666 3.48 0 .23-.005 1.042-1.646 1.042m-.042-6.798c-1.026.213-3.048 4.309-3.048 6.178 0 .403-.008 1.847 3.085 1.847 3.096 0 3.105-1.441 3.105-1.847-.004-1.869-2.025-5.968-3.142-6.178m9.729 6.798c-1.64 0-1.634-.814-1.634-1.042 0-1.052 1.072-3.36 1.614-3.48.593.12 1.665 2.428 1.667 3.48 0 .23-.005 1.042-1.647 1.042m-.041-6.798c-1.025.213-3.048 4.309-3.048 6.178 0 .403-.009 1.847 3.084 1.847 3.097 0 3.105-1.441 3.105-1.847-.002-1.869-2.024-5.968-3.141-6.178m-9.646-4.596c-1.64 0-1.635-.814-1.635-1.041 0-1.053 1.072-3.36 1.615-3.482.593.12 1.664 2.429 1.666 3.482 0 .228-.005 1.04-1.646 1.04M16.917.728C15.891.94 13.87 5.036 13.87 6.905c0 .404-.008 1.847 3.085 1.847 3.096 0 3.105-1.441 3.105-1.847-.004-1.869-2.025-5.968-3.142-6.178"
                    ></path>
                  </g>
                </svg>
              </div>
              <div class="slot-info-container">
                <div class="info-techniques-product">${el.age}+</div>
              </div>
              <div class="slot-name-container">
                <div class="name-info-product">Età</div>
              </div>
            </div>
            <div class="product-attributes-container">
              <div class="slot-icon-container">
                <svg
                  width="33"
                  height="40"
                  viewBox="0 0 33 40"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  style="color: rgb(117, 117, 117)"
                >
                  <g
                    fill-rule="nonzero"
                    stroke="currentColor"
                    fill="none"
                    style="mix-blend-mode: darken"
                  >
                    <path
                      stroke-width="1.727"
                      fill="#FFF"
                      d="M1.184 9.433l15.224-7.281 15.59 7.194V30.49L17.418 39 1.184 30.577z"
                    ></path>
                    <path
                      d="M23.23 3.544C22.864 2.141 19.925 1 16.526 1c-3.675 0-6.798 1.228-6.89 2.895 0 0 .184 4.124.184 4.211 0 2.018 3.307 3.422 6.798 3.422 3.582 0 6.797-1.404 6.797-3.422v-3.07s.184-.965-.183-1.492z"
                      stroke-width="1.152"
                      fill="#FFF"
                    ></path>
                    <path
                      d="M10.094 4.334c.092-1.58 2.94-2.895 6.43-2.895 3.491 0 6.34 1.316 6.431 2.895.092 1.667-2.756 2.983-6.43 2.983-3.675 0-6.523-1.404-6.43-2.983h0z"
                      stroke-width="1.152"
                    ></path>
                    <path
                      stroke-width="1.727"
                      d="M2 10l15 7.222V39M17 17l14.63-7.122"
                    ></path>
                  </g>
                </svg>
              </div>
              <div class="slot-info-container">
                <div class="info-techniques-product">${el.pieces}</div>
              </div>
              <div class="slot-name-container">
                <div class="name-info-product">Pezzi</div>
              </div>
            </div>
            <div class="product-attributes-container">
              <div class="slot-icon-container">
                <svg
                  width="28"
                  height="38"
                  viewBox="0 0 34 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="Icon__StyledSVG-lm07h6-0 fFzRmK"
                  aria-label="Insiders"
                >
                  <path
                    d="M32.087 28.4892L32.2688 27.5059L31.2855 27.3241L29.9732 27.0815L30.1789 25.969C30.3466 25.0621 29.7477 24.1915 28.8408 24.0238L22.5036 22.8521C21.5968 22.6845 20.7262 23.2833 20.5585 24.1902L20.3528 25.3027L17.7318 24.8181L17.9375 23.7056C18.1052 22.7987 17.5063 21.9281 16.5995 21.7605L10.2623 20.5888C9.3554 20.4211 8.48481 21.02 8.31714 21.9268L8.13533 22.9101L8.13822 22.9106L8.11433 23.0399L6.79988 22.7968L5.81655 22.615L5.63474 23.5983L2.91816 38.2908L2.73634 39.2742L3.71968 39.456L28.2053 43.9833L29.1886 44.1651L29.3704 43.1818L32.087 28.4892Z"
                    fill="white"
                    stroke="#757575"
                    stroke-width="2"
                  ></path>
                  <path
                    d="M28.818 4.47443L28.7381 3.47762L27.7413 3.55744L26.4111 3.66396L26.3208 2.53621C26.2472 1.61692 25.4427 0.931754 24.5235 1.00537L18.0994 1.51977C17.1801 1.59338 16.4949 2.39783 16.5686 3.31712L16.6589 4.44487L14.002 4.65762L13.9117 3.52986C13.8381 2.61056 13.0336 1.92541 12.1143 1.99902L5.69028 2.51343C4.77099 2.58704 4.08583 3.39149 4.15944 4.31077L4.23926 5.30763L4.24219 5.30739L4.25267 5.43829L2.92018 5.54499L1.92337 5.62481L2.00319 6.62162L3.19582 21.5155L3.27564 22.5123L4.27244 22.4325L29.0936 20.4449L30.0904 20.3651L30.0106 19.3683L28.818 4.47443Z"
                    fill="white"
                    stroke="#757575"
                    stroke-width="2"
                  ></path>
                </svg>
              </div>
              <div class="slot-info-container">
                <div class="info-techniques-product">
                  1260
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24px"
                    height="24px"
                  >
                    <path
                      d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 11 7 L 11 9 L 13 9 L 13 7 L 11 7 z M 11 11 L 11 17 L 13 17 L 13 11 L 11 11 z"
                    />
                  </svg>
                </div>
              </div>
              <div class="slot-name-container">
                <div class="name-info-product">Punti LEGO® Insiders</div>
              </div>
            </div>
            <div class="product-attributes-container">
              <div class="slot-icon-container">
                <svg
                  style="color: rgb(117, 117, 117)"
                  ;
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  aria-hidden="true"
                  viewBox="0 0 36 36"
                  class="Icon__StyledSVG-lm07h6-0 fFzRmK"
                >
                  <path
                    d="M13.81 12.333l-2.833 11.334h11.216l2.834-11.334H13.81zm.945-3.777H25.97l1.53-6.124a1.89 1.89 0 013.668.914l-1.303 5.21h3.245c1.047 0 1.889.846 1.889 1.889a1.887 1.887 0 01-1.889 1.888h-4.19l-2.833 11.334h7.023c1.047 0 1.889.846 1.889 1.888a1.887 1.887 0 01-1.889 1.89h-7.967l-1.534 6.123a1.888 1.888 0 11-3.66-.914l1.299-5.21H10.033l-1.534 6.124a1.888 1.888 0 11-3.66-.914l1.299-5.21h-3.25a1.89 1.89 0 010-3.777h4.194l2.834-11.334H2.889a1.89 1.89 0 010-3.777h7.971l1.534-6.124a1.884 1.884 0 012.285-1.375 1.883 1.883 0 011.375 2.29l-1.3 5.209z"
                    fill="currentColor"
                    stroke="#FFF"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <div class="slot-info-container">
                <div class="info-techniques-product">${el.id + 1}</div>
              </div>
              <div class="slot-name-container">
                <div class="name-info-product">Articolo</div>
              </div>
            </div>
            <div class="product-attributes-container">
              <div class="slot-icon-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="42"
                  viewBox="0 0 28 42"
                  aria-hidden="true"
                  class="Icon__StyledSVG-lm07h6-0 fFzRmK"
                >
                  <g stroke="#6F6F6F" fill="none" fill-rule="evenodd">
                    <path
                      d="M24.568 23.822l-.719-3.617c-.16-.63-.245-1.226-.482-1.681-.862-1.655-3.313-4.703-3.938-4.869a1.687 1.687 0 00-.44-.052l1.91 10.85 3.669-.631z"
                      stroke-width="1.2"
                    ></path>
                    <path
                      d="M26.512 27.17c-.085-1.173-1.116-2.075-2.35-2.049-1.285.035-2.341 1.068-2.308 2.338.026.937.634 1.7 1.471 1.997l-.093-.955a1.62 1.62 0 01-.49-1.016c-.06-.805.532-1.47 1.327-1.488.794-.018 1.496.622 1.547 1.436.017.263-.034.517-.144.727l.279.823a2.203 2.203 0 00.76-1.813z"
                      fill="#6F6F6F"
                      stroke-width=".5"
                    ></path>
                    <path
                      d="M2.295 23.822l.719-3.617c.16-.63.245-1.226.481-1.681.863-1.655 3.314-4.703 3.94-4.869.126-.035.278-.052.439-.052l-1.919 10.84-3.66-.621z"
                      stroke-width="1.2"
                    ></path>
                    <path
                      d="M.42 27.17c.084-1.173 1.116-2.075 2.35-2.049 1.285.035 2.341 1.068 2.307 2.338-.025.937-.634 1.7-1.47 1.997L3.7 28.5a1.62 1.62 0 00.49-1.016c.059-.805-.533-1.47-1.327-1.488-.795-.018-1.496.622-1.556 1.436-.016.263.034.517.144.727l-.279.823A2.222 2.222 0 01.42 27.17z"
                      fill="#6F6F6F"
                      stroke-width=".5"
                    ></path>
                    <path
                      stroke-width="1.436"
                      d="M12.047 27.456l-5.088-.014-.527 12.44h5.896V33.04l-.296-.56z"
                    ></path>
                    <path
                      stroke-width=".513"
                      d="M12.81 37.318H6.04M6.25 32.289h6.265"
                    ></path>
                    <g>
                      <path
                        stroke-width="1.436"
                        d="M19.938 27.45l-5.081.014.008 5.024-.296.567v6.843h5.895z"
                      ></path>
                      <path
                        stroke-width=".513"
                        d="M14.383 32.298h6.263M20.866 37.36h-6.78"
                      ></path>
                    </g>
                    <path
                      d="M20.806 25.81l-1.31-7.876-.668-4.221c-.042-.294-.21-.54-.481-.54H8.533c-.262 0-.43.246-.482.54l-.667 4.221-1.31 7.875v1.07h14.724v-1.07h.008z"
                      stroke-width="1.436"
                    ></path>
                    <g>
                      <path
                        d="M11.103 3.54c-.017 0 0-1.681 0-1.681a.29.29 0 01.287-.298h4.108a.29.29 0 01.288.298V3.54"
                        stroke-width=".851"
                      ></path>
                      <path
                        d="M16.411 11.965c1.057 0 1.91-.885 1.91-1.98V5.529c0-1.094-.853-1.979-1.91-1.979h-5.925c-1.057 0-1.91.885-1.91 1.98v4.457c0 1.094.853 1.979 1.91 1.979h5.925z"
                        stroke-width="1.436"
                      ></path>
                    </g>
                  </g>
                </svg>
              </div>
              <div class="slot-info-container">
                <div class="info-techniques-product">${el.age}+</div>
              </div>
              <div class="slot-name-container">
                <div class="name-info-product">Età</div>
              </div>
            </div>
            <div class="product-attributes-container" style="height: 100%">
              <div class="slot-icon-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="39"
                  height="32"
                  viewBox="0 0 39 32"
                  aria-hidden="true"
                  class="Icon__StyledSVG-lm07h6-0 fFzRmK"
                >
                  <path
                    d="M18.766 0l-2.77 2.96 1.106 1.022.91-.972v16.8L2.238 28.949l.387-1.269-1.447-.434L0 31.116 3.969 32l.334-1.463-1.305-.292 15.89-9.206h17.08l-.978.903 1.03 1.099L39 20.288l-2.98-2.752-1.03 1.1.979.902H19.522V3.011l.91.971 1.105-1.022z"
                    fill="#6F6F6F"
                    fill-rule="evenodd"
                  ></path>
                  <g fill="currentColor" style="mix-blend-mode: darken">
                    <path
                      d="M32.606 29.532c.319 0 .576.127.576.282v.585c0 .155-.257.281-.576.281H.895c-.32 0-.578-.126-.578-.281v-.585c0-.155.258-.282.578-.282h31.71zM15.737 14.597c.071 0 .129.126.129.281v.585c0 .155-.058.281-.13.281H8.63c-.072 0-.13-.126-.13-.281v-.585c0-.155.058-.281.13-.281h7.107zm9.713 0c.072 0 .13.126.13.281v.585c0 .155-.058.281-.13.281h-7.106c-.072 0-.13-.126-.13-.281v-.585c0-.155.058-.281.13-.281h7.107z"
                    ></path>
                    <path
                      d="M1.821 21.572H32.18v16.606H1.82V21.572zM1.195 20A1.19 1.19 0 000 21.186v17.592a1.19 1.19 0 001.195 1.186h31.54a1.19 1.19 0 001.193-1.186V21.186A1.19 1.19 0 0032.734 20H1.195zM7.856 8.485c-.79.11-1.183.505-1.177 1.186v3.741c.342.047 1.524.09 1.524 1.559V9.885H25.9v3.874c.291-1.068.765-1.132 1.421-.193V9.671c0-.655-.527-1.186-1.177-1.186H7.856z"
                    ></path>
                    <path
                      d="M7.34 18.919c-1.64 0-1.634-.814-1.634-1.042 0-1.052 1.071-3.36 1.614-3.48.593.12 1.665 2.428 1.666 3.48 0 .23-.005 1.042-1.646 1.042M7.3 12.12c-1.028.214-3.05 4.31-3.05 6.18 0 .403-.008 1.847 3.085 1.847 3.097 0 3.106-1.441 3.106-1.847-.004-1.869-2.025-5.968-3.142-6.178m9.66 6.797c-1.64 0-1.635-.814-1.635-1.042 0-1.052 1.072-3.36 1.615-3.48.593.12 1.664 2.428 1.666 3.48 0 .23-.005 1.042-1.646 1.042m-.042-6.798c-1.026.213-3.048 4.309-3.048 6.178 0 .403-.008 1.847 3.085 1.847 3.096 0 3.105-1.441 3.105-1.847-.004-1.869-2.025-5.968-3.142-6.178m9.729 6.798c-1.64 0-1.634-.814-1.634-1.042 0-1.052 1.072-3.36 1.614-3.48.593.12 1.665 2.428 1.667 3.48 0 .23-.005 1.042-1.647 1.042m-.041-6.798c-1.025.213-3.048 4.309-3.048 6.178 0 .403-.009 1.847 3.084 1.847 3.097 0 3.105-1.441 3.105-1.847-.002-1.869-2.024-5.968-3.141-6.178m-9.646-4.596c-1.64 0-1.635-.814-1.635-1.041 0-1.053 1.072-3.36 1.615-3.482.593.12 1.664 2.429 1.666 3.482 0 .228-.005 1.04-1.646 1.04M16.917.728C15.891.94 13.87 5.036 13.87 6.905c0 .404-.008 1.847 3.085 1.847 3.096 0 3.105-1.441 3.105-1.847-.004-1.869-2.025-5.968-3.142-6.178"
                    ></path>
                  </g>
                </svg>
              </div>
              <div class="product-card-dimenzioni">
                <span>H: 4" (8cm)</span>
                <span>L: 13" (33cm)</span>
                <span>P: 9" (22cm)</span>
              </div>
              <div class="slot-name-container">
                <div class="name-info-product">Dimensioni</div>
              </div>
            </div>
          </div>
        </div>

        <div class="product-card-right">
          <div class="product-card-tag-reviews">
            <div class="atom-product-tag">
              <span class="atom-product-tag-yellow">Difficile da trovare</span>
            </div>
            <div class="product-card-revies-star">
              <div class="product-card-revies-star-img">
                <img
                  src="https://www.lego.com/_next/static/images/starActive-8f24279ea4ef0bb5bb5e8af9fbab2aab.svg"
                />
                <img
                  src="https://www.lego.com/_next/static/images/starActive-8f24279ea4ef0bb5bb5e8af9fbab2aab.svg"
                />
                <img
                  src="https://www.lego.com/_next/static/images/starActive-8f24279ea4ef0bb5bb5e8af9fbab2aab.svg"
                />
                <img
                  src="https://www.lego.com/_next/static/images/starActive-8f24279ea4ef0bb5bb5e8af9fbab2aab.svg"
                />
                <img
                  src="https://www.lego.com/_next/static/images/halfStar-9b6a3da7ddc2090ed53e3a4c39cfa182.svg"
                />
              </div>
              <button>7 recensioni</button>
            </div>
          </div>
          <div class="product-card-right-icons">
            <span>${el.title}</span>
            <a href="#">
              <img
                src="https://www.lego.com/cdn/cs/set/assets/blt7c9332ed5ec6017d/icons-logo-pos-600w.png?format=png&height=40&dpr=1"
                alt=""
              />
            </a>
          </div>
          <div class="product-card-price">
            <span class="product-card-price">${el.price} €</span>
          </div>
          <span class="product-card-disponibile"> Disponibile ora </span>
          <div class="product-card-limit">
            <div class="product-card-quantity">
              <button class="product-card-quantity-minus">
                <svg
                  class="minus"
                  width="14px"
                  height="2px"
                  viewBox="0 0 14 2"
                  aria-hidden="true"
                >
                  <polygon
                    points="14 2 0 2 0 -6.03961325e-14 14 -6.03961325e-14"
                  ></polygon>
                </svg>
              </button>
              <input
                type="text"
                value="1"
                id="product-card-input"
                oninput="this.value = this.value.replace(/[^0-9]/g, '')"
              />
              <button class="product-card-quantity-plus">
                <svg
                  class="add"
                  xmlns="http://www.w3.org/2000/svg"
                  width="14px"
                  height="14px"
                  viewBox="0 0 14 14"
                  aria-hidden="true"
                >
                  <polygon points="14 8 0 8 0 6 14 6"></polygon>
                  <rect
                    fill="black"
                    fill-rule="nonzero"
                    x="6"
                    y="0"
                    width="2"
                    height="14"
                  ></rect>
                </svg>
              </button>
            </div>
            <div class="product-card-limit-number">
              <span>Limite 5</span>
                <div class="container">
  
  <!-- CRRAEZIONE INFO BUTTON -->
    <button class="info-button" onclick="toggleVignetta()"><span>i</span></button>

  <!-- CREAZIONE DIV "VIGNETTA" CHE CONTIENE IL DIV DEL TITOLO E DEL TESTO DELLA VIGNETTA-->
    <div id="vignetta" class="vignetta">
      <div class="textContainer">
      <div class="title"><p class="description">Limite</p></div>
      <div class="exit"></div>
      <div class="text"><p>È previsto un limite per gli acquisti per ogni famiglia per garantire un'adeguata disponibilità per tutti i clienti. Se è già stato raggiunto tale limite con gli ordini precedenti, l'ordine potrebbe essere annullato.</p></div>
    </div>

  <!-- CRAZIONE BUTTON CONTENENTE SVG PER LA CHIUSURA DELLA VIGNETTA -->
    <button class="exit" onclick="closeVignetta()"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" aria-hidden="true" class="exitButton"><path d="M10.377 8.142l5.953-5.954-2.234-2.234-5.954 5.954L2.188-.046-.046 2.188l5.954 5.954-5.954 5.954 2.234 2.234 5.954-5.953 5.954 5.953 2.234-2.234z" fill="currentColor" fill-rule="evenodd"></path></svg></button>
    </div>
  </div>
            </div>
          </div>
          <div class="product-card-cart">
            <button class="standard-button standard-button-round button-orange">
              <div class="spinner-container hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="20"
                  viewBox="0 0 16 20"
                >
                  <g fill="currentColor" fill-rule="evenodd">
                    <path
                      d="M4 3.512v5.804c0 .377.349.684.779.684.43 0 .779-.307.779-.684V3.512C5.558 2.33 6.653 1.368 8 1.368c1.347 0 2.442.962 2.442 2.144v5.804c0 .377.35.684.78.684.43 0 .778-.307.778-.684V3.512C12 1.575 10.206 0 8 0S4 1.575 4 3.512z"
                    ></path>
                    <path
                      d="M2.46 6.33c-.269 0-.489.194-.5.441L1.435 18.19a.436.436 0 00.131.332.52.52 0 00.348.149h12.151c.276 0 .501-.207.501-.462l-.525-11.436c-.011-.248-.23-.442-.5-.442H2.46zM14.448 20l-12.974-.001a1.591 1.591 0 01-1.064-.462 1.357 1.357 0 01-.408-1.03L.56 6.372C.595 5.602 1.277 5 2.11 5h11.78c.835 0 1.516.602 1.551 1.372l.56 12.197c0 .789-.697 1.431-1.553 1.431z"
                    ></path>
                  </g>
                </svg>
              </div>
              <div class="container-content-standard-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 40 40"
                  style="width: 50px; height: 20px"
                  fill="currentColor"
                >
                  <path
                    d="M28.036 8.889V5a5.106 5.106 0 0 0-1.416-3.532A4.747 4.747 0 0 0 23.214 0h-6.428a4.747 4.747 0 0 0-3.406 1.468A5.106 5.106 0 0 0 11.964 5v3.889H5V35a5.107 5.107 0 0 0 1.415 3.532A4.747 4.747 0 0 0 9.821 40H30.18a4.747 4.747 0 0 0 3.406-1.468A5.106 5.106 0 0 0 35 35V8.889h-6.964ZM15.179 5c0-.442.169-.866.47-1.179.302-.312.71-.488 1.137-.488h6.428c.427 0 .835.176 1.137.488.301.313.47.737.47 1.179v3.889H15.18V5Zm16.607 30c0 .442-.17.866-.471 1.178-.301.313-.71.489-1.136.489H9.82c-.426 0-.835-.176-1.136-.489A1.698 1.698 0 0 1 8.215 35V12.222h3.75v4.445h3.214v-4.445h9.642v4.445h3.215v-4.445h3.75V35Z"
                  ></path>
                </svg>
                <div class="testo">Aggiungi al Carrello</div>
              </div>
            </button>
            <button class="product-card-like">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 40 40"
                fill="currentColor"
              >
                <path
                  d="M20.767 37.673a1.104 1.104 0 0 1-1.567 0l-15.867-16A11.583 11.583 0 0 1 0 13.574c.027-2.336.744-4.61 2.058-6.53a11.591 11.591 0 0 1 5.316-4.247 11.432 11.432 0 0 1 6.751-.506A11.533 11.533 0 0 1 20 5.697a11.533 11.533 0 0 1 5.875-3.407c2.25-.517 4.601-.34 6.751.506a11.59 11.59 0 0 1 5.316 4.246A11.813 11.813 0 0 1 40 13.573a11.568 11.568 0 0 1-.871 4.38 11.453 11.453 0 0 1-2.462 3.71l-15.9 16.01ZM11.544 5.37a8.125 8.125 0 0 0-5.776 2.386 8.332 8.332 0 0 0-2.435 5.816 8.178 8.178 0 0 0 .602 3.105c.4.984.989 1.88 1.732 2.633L20 33.724 34.344 19.3a8.176 8.176 0 0 0 2.323-5.727 8.392 8.392 0 0 0-1.71-4.994 8.218 8.218 0 0 0-4.334-2.946 8.126 8.126 0 0 0-5.211.29 8.25 8.25 0 0 0-3.99 3.408L20 11.705l-1.422-2.374a8.235 8.235 0 0 0-3.003-2.915 8.109 8.109 0 0 0-4.03-1.045Z"
                ></path>
              </svg>
            </button>
          </div>
          <div class="contenitore-avvertenze-tribute">
            <div class="set-tribute">
              <div class="set-tribute-img">
                <img
                  class="santa-claus"
                  srcset="
                    https://www.lego.com/cdn/cs/set/assets/blt7747df3460c03390/40595-GWP-202311-PDP-Promo-Badge.png?fit=bounds&amp;format=png&amp;width=120&amp;height=60&amp;dpr=1,
                    https://www.lego.com/cdn/cs/set/assets/blt7747df3460c03390/40595-GWP-202311-PDP-Promo-Badge.png?fit=bounds&amp;format=png&amp;width=120&amp;height=60&amp;dpr=1.5 1.5x,
                    https://www.lego.com/cdn/cs/set/assets/blt7747df3460c03390/40595-GWP-202311-PDP-Promo-Badge.png?fit=bounds&amp;format=png&amp;width=120&amp;height=60&amp;dpr=2   2x
                  "
                  src="https://www.lego.com/cdn/cs/set/assets/blt7747df3460c03390/40595-GWP-202311-PDP-Promo-Badge.png?fit=bounds&amp;format=png&amp;width=120&amp;height=60&amp;dpr=1"
                  alt=""
                  class="Imagestyles__Img-sc-1qqdbhr-0 ckQZCr TargetedPromotionstyles__StyledImage-qjzds-2 iacLSQ"
                />
              </div>
              <div class="set-tribute-text">
                <span>
                  Ottieni un set Tributo a Galileo Galilei LEGO® Ideas con gli
                  acquisti LEGO® a partire da 130 €.*
                </span>
                <a href="#">Scopri di più</a>
              </div>
            </div>
            <div class="product-card-avvertenze">
              <span>Avvertenza! Rischio di soffocamento. Piccole parti.</span>
              <img
                src="https://www.lego.com/_next/static/images/safety-08ff1b3398344608cf1508144b3c2d0f.svg"
                alt=""
              />
            </div>
          </div>
          <div class="product-card-consegne">
            <button>
              <div class="product-card-consegne-left">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="26"
                  viewBox="0 0 35 26"
                  aria-hidden="true"
                  class="product-card-consegne-img"
                >
                  <g
                    transform="translate(.112 1.705)"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <path
                      stroke="currentColor"
                      stroke-width="1.5"
                      d="M14 4.457L23.317 0l9.542 4.403v12.94l-8.925 5.208L14 17.397z"
                    ></path>
                    <path
                      stroke="currentColor"
                      stroke-width="1.5"
                      d="M14.5 4.803l9.18 4.42v13.328m0-13.464l8.953-4.359"
                    ></path>
                    <rect
                      fill="currentColor"
                      x=".388"
                      y="5.295"
                      width="10.5"
                      height="1.5"
                      rx=".75"
                    ></rect>
                    <rect
                      fill="currentColor"
                      x="3.388"
                      y="14.295"
                      width="7.5"
                      height="1.5"
                      rx=".75"
                    ></rect>
                    <rect
                      fill="currentColor"
                      x="1.888"
                      y="9.795"
                      width="9"
                      height="1.5"
                      rx=".75"
                    ></rect>
                  </g>
                </svg>
                <span
                  class="Text__BaseText-sc-13i1y3k-0 jfYWV ProductAccessoryActionstyles__ProductAccessoryActionTitle-k848dz-4 dRMduI"
                  >Consegne e resi
                </span>
              </div>
              <svg
                width="18"
                height="28"
                viewBox="0 0 18 28"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                class="product-card-arrow"
              >
                <path
                  d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
            <button>
              <div class="product-card-consegne-right">
                <svg
                  width="35"
                  height="26"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 25 28"
                >
                  <g fill="none">
                    <path
                      d="M2.975 1.14c-.943 0-1.716.777-1.716 1.726v22.44c0 .949.773 1.726 1.716 1.726H22.71c.944 0 1.716-.777 1.716-1.726V2.866c0-.95-.772-1.726-1.716-1.726H2.975z"
                      stroke="#006DB7"
                      stroke-width="2.055"
                      fill="#FFF"
                    ></path>
                    <path
                      d="M18.276 7.904V6.296a.121.121 0 00-.121-.122h-3.39a.121.121 0 00-.122.122v1.608h0H11.4V6.296a.121.121 0 00-.121-.122H7.91a.121.121 0 00-.12.122v1.608h0-1.342a.121.121 0 00-.121.122v7.377c0 .067.054.121.121.121H19.96a.121.121 0 00.121-.121V8.026a.121.121 0 00-.121-.122h-1.684 0z"
                      stroke="#006DB7"
                      stroke-width="1.37"
                      fill="#FFF"
                    ></path>
                    <path
                      fill="#006DB7"
                      d="M6.407 20.09H19.62v-1.363H6.407zM6.407 23.36H19.62v-1.363H6.407z"
                    ></path>
                  </g>
                </svg>
                <span
                  class="Text__BaseText-sc-13i1y3k-0 jfYWV ProductAccessoryActionstyles__ProductAccessoryActionTitle-k848dz-4 dRMduI"
                  >Istruzioni per la costruzione</span
                >
              </div>
              <svg
                width="18"
                height="28"
                viewBox="0 0 18 28"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                class="product-card-arrow"
              >
                <path
                  d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
          </div>
          <div class="product-card-attributes-hidden">
            <div class="product-attributes-container" style="border-left: none">
              <div class="slot-icon-container">
                <svg
                  width="34"
                  height="40"
                  viewBox="0 0 34 40"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon-attributes-product"
                >
                  <g fill="currentColor" style="mix-blend-mode: darken">
                    <path
                      d="M32.606 29.532c.319 0 .576.127.576.282v.585c0 .155-.257.281-.576.281H.895c-.32 0-.578-.126-.578-.281v-.585c0-.155.258-.282.578-.282h31.71zM15.737 14.597c.071 0 .129.126.129.281v.585c0 .155-.058.281-.13.281H8.63c-.072 0-.13-.126-.13-.281v-.585c0-.155.058-.281.13-.281h7.107zm9.713 0c.072 0 .13.126.13.281v.585c0 .155-.058.281-.13.281h-7.106c-.072 0-.13-.126-.13-.281v-.585c0-.155.058-.281.13-.281h7.107z"
                    ></path>
                    <path
                      d="M1.821 21.572H32.18v16.606H1.82V21.572zM1.195 20A1.19 1.19 0 000 21.186v17.592a1.19 1.19 0 001.195 1.186h31.54a1.19 1.19 0 001.193-1.186V21.186A1.19 1.19 0 0032.734 20H1.195zM7.856 8.485c-.79.11-1.183.505-1.177 1.186v3.741c.342.047 1.524.09 1.524 1.559V9.885H25.9v3.874c.291-1.068.765-1.132 1.421-.193V9.671c0-.655-.527-1.186-1.177-1.186H7.856z"
                    ></path>
                    <path
                      d="M7.34 18.919c-1.64 0-1.634-.814-1.634-1.042 0-1.052 1.071-3.36 1.614-3.48.593.12 1.665 2.428 1.666 3.48 0 .23-.005 1.042-1.646 1.042M7.3 12.12c-1.028.214-3.05 4.31-3.05 6.18 0 .403-.008 1.847 3.085 1.847 3.097 0 3.106-1.441 3.106-1.847-.004-1.869-2.025-5.968-3.142-6.178m9.66 6.797c-1.64 0-1.635-.814-1.635-1.042 0-1.052 1.072-3.36 1.615-3.48.593.12 1.664 2.428 1.666 3.48 0 .23-.005 1.042-1.646 1.042m-.042-6.798c-1.026.213-3.048 4.309-3.048 6.178 0 .403-.008 1.847 3.085 1.847 3.096 0 3.105-1.441 3.105-1.847-.004-1.869-2.025-5.968-3.142-6.178m9.729 6.798c-1.64 0-1.634-.814-1.634-1.042 0-1.052 1.072-3.36 1.614-3.48.593.12 1.665 2.428 1.667 3.48 0 .23-.005 1.042-1.647 1.042m-.041-6.798c-1.025.213-3.048 4.309-3.048 6.178 0 .403-.009 1.847 3.084 1.847 3.097 0 3.105-1.441 3.105-1.847-.002-1.869-2.024-5.968-3.141-6.178m-9.646-4.596c-1.64 0-1.635-.814-1.635-1.041 0-1.053 1.072-3.36 1.615-3.482.593.12 1.664 2.429 1.666 3.482 0 .228-.005 1.04-1.646 1.04M16.917.728C15.891.94 13.87 5.036 13.87 6.905c0 .404-.008 1.847 3.085 1.847 3.096 0 3.105-1.441 3.105-1.847-.004-1.869-2.025-5.968-3.142-6.178"
                    ></path>
                  </g>
                </svg>
              </div>
              <div class="slot-info-container">
                <div class="info-techniques-product">${el.age}+</div>
              </div>
              <div class="slot-name-container">
                <div class="name-info-product">Età</div>
              </div>
            </div>
            <div class="product-attributes-container">
              <div class="slot-icon-container">
                <svg
                  width="33"
                  height="40"
                  viewBox="0 0 33 40"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  style="color: rgb(117, 117, 117)"
                >
                  <g
                    fill-rule="nonzero"
                    stroke="currentColor"
                    fill="none"
                    style="mix-blend-mode: darken"
                  >
                    <path
                      stroke-width="1.727"
                      fill="#FFF"
                      d="M1.184 9.433l15.224-7.281 15.59 7.194V30.49L17.418 39 1.184 30.577z"
                    ></path>
                    <path
                      d="M23.23 3.544C22.864 2.141 19.925 1 16.526 1c-3.675 0-6.798 1.228-6.89 2.895 0 0 .184 4.124.184 4.211 0 2.018 3.307 3.422 6.798 3.422 3.582 0 6.797-1.404 6.797-3.422v-3.07s.184-.965-.183-1.492z"
                      stroke-width="1.152"
                      fill="#FFF"
                    ></path>
                    <path
                      d="M10.094 4.334c.092-1.58 2.94-2.895 6.43-2.895 3.491 0 6.34 1.316 6.431 2.895.092 1.667-2.756 2.983-6.43 2.983-3.675 0-6.523-1.404-6.43-2.983h0z"
                      stroke-width="1.152"
                    ></path>
                    <path
                      stroke-width="1.727"
                      d="M2 10l15 7.222V39M17 17l14.63-7.122"
                    ></path>
                  </g>
                </svg>
              </div>
              <div class="slot-info-container">
                <div class="info-techniques-product">${el.pieces}</div>
              </div>
              <div class="slot-name-container">
                <div class="name-info-product">Pezzi</div>
              </div>
            </div>
            <div class="product-attributes-container">
              <div class="slot-icon-container">
                <svg
                  width="28"
                  height="38"
                  viewBox="0 0 34 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="Icon__StyledSVG-lm07h6-0 fFzRmK"
                  aria-label="Insiders"
                >
                  <path
                    d="M32.087 28.4892L32.2688 27.5059L31.2855 27.3241L29.9732 27.0815L30.1789 25.969C30.3466 25.0621 29.7477 24.1915 28.8408 24.0238L22.5036 22.8521C21.5968 22.6845 20.7262 23.2833 20.5585 24.1902L20.3528 25.3027L17.7318 24.8181L17.9375 23.7056C18.1052 22.7987 17.5063 21.9281 16.5995 21.7605L10.2623 20.5888C9.3554 20.4211 8.48481 21.02 8.31714 21.9268L8.13533 22.9101L8.13822 22.9106L8.11433 23.0399L6.79988 22.7968L5.81655 22.615L5.63474 23.5983L2.91816 38.2908L2.73634 39.2742L3.71968 39.456L28.2053 43.9833L29.1886 44.1651L29.3704 43.1818L32.087 28.4892Z"
                    fill="white"
                    stroke="#757575"
                    stroke-width="2"
                  ></path>
                  <path
                    d="M28.818 4.47443L28.7381 3.47762L27.7413 3.55744L26.4111 3.66396L26.3208 2.53621C26.2472 1.61692 25.4427 0.931754 24.5235 1.00537L18.0994 1.51977C17.1801 1.59338 16.4949 2.39783 16.5686 3.31712L16.6589 4.44487L14.002 4.65762L13.9117 3.52986C13.8381 2.61056 13.0336 1.92541 12.1143 1.99902L5.69028 2.51343C4.77099 2.58704 4.08583 3.39149 4.15944 4.31077L4.23926 5.30763L4.24219 5.30739L4.25267 5.43829L2.92018 5.54499L1.92337 5.62481L2.00319 6.62162L3.19582 21.5155L3.27564 22.5123L4.27244 22.4325L29.0936 20.4449L30.0904 20.3651L30.0106 19.3683L28.818 4.47443Z"
                    fill="white"
                    stroke="#757575"
                    stroke-width="2"
                  ></path>
                </svg>
              </div>
              <div class="slot-info-container">
                <div class="info-techniques-product">
                  1260
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24px"
                    height="24px"
                  >
                    <path
                      d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 11 7 L 11 9 L 13 9 L 13 7 L 11 7 z M 11 11 L 11 17 L 13 17 L 13 11 L 11 11 z"
                    />
                  </svg>
                </div>
              </div>
              <div class="slot-name-container">
                <div class="name-info-product">Punti LEGO® Insiders</div>
              </div>
            </div>
            <div class="product-attributes-container">
              <div class="slot-icon-container">
                <svg
                  style="color: rgb(117, 117, 117)"
                  ;
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  aria-hidden="true"
                  viewBox="0 0 36 36"
                  class="Icon__StyledSVG-lm07h6-0 fFzRmK"
                >
                  <path
                    d="M13.81 12.333l-2.833 11.334h11.216l2.834-11.334H13.81zm.945-3.777H25.97l1.53-6.124a1.89 1.89 0 013.668.914l-1.303 5.21h3.245c1.047 0 1.889.846 1.889 1.889a1.887 1.887 0 01-1.889 1.888h-4.19l-2.833 11.334h7.023c1.047 0 1.889.846 1.889 1.888a1.887 1.887 0 01-1.889 1.89h-7.967l-1.534 6.123a1.888 1.888 0 11-3.66-.914l1.299-5.21H10.033l-1.534 6.124a1.888 1.888 0 11-3.66-.914l1.299-5.21h-3.25a1.89 1.89 0 010-3.777h4.194l2.834-11.334H2.889a1.89 1.89 0 010-3.777h7.971l1.534-6.124a1.884 1.884 0 012.285-1.375 1.883 1.883 0 011.375 2.29l-1.3 5.209z"
                    fill="currentColor"
                    stroke="#FFF"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <div class="slot-info-container">
                <div class="info-techniques-product">${el.id + 1}</div>
              </div>
              <div class="slot-name-container">
                <div class="name-info-product">Articolo</div>
              </div>
            </div>
            <div class="product-attributes-container">
              <div class="slot-icon-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="42"
                  viewBox="0 0 28 42"
                  aria-hidden="true"
                  class="Icon__StyledSVG-lm07h6-0 fFzRmK"
                >
                  <g stroke="#6F6F6F" fill="none" fill-rule="evenodd">
                    <path
                      d="M24.568 23.822l-.719-3.617c-.16-.63-.245-1.226-.482-1.681-.862-1.655-3.313-4.703-3.938-4.869a1.687 1.687 0 00-.44-.052l1.91 10.85 3.669-.631z"
                      stroke-width="1.2"
                    ></path>
                    <path
                      d="M26.512 27.17c-.085-1.173-1.116-2.075-2.35-2.049-1.285.035-2.341 1.068-2.308 2.338.026.937.634 1.7 1.471 1.997l-.093-.955a1.62 1.62 0 01-.49-1.016c-.06-.805.532-1.47 1.327-1.488.794-.018 1.496.622 1.547 1.436.017.263-.034.517-.144.727l.279.823a2.203 2.203 0 00.76-1.813z"
                      fill="#6F6F6F"
                      stroke-width=".5"
                    ></path>
                    <path
                      d="M2.295 23.822l.719-3.617c.16-.63.245-1.226.481-1.681.863-1.655 3.314-4.703 3.94-4.869.126-.035.278-.052.439-.052l-1.919 10.84-3.66-.621z"
                      stroke-width="1.2"
                    ></path>
                    <path
                      d="M.42 27.17c.084-1.173 1.116-2.075 2.35-2.049 1.285.035 2.341 1.068 2.307 2.338-.025.937-.634 1.7-1.47 1.997L3.7 28.5a1.62 1.62 0 00.49-1.016c.059-.805-.533-1.47-1.327-1.488-.795-.018-1.496.622-1.556 1.436-.016.263.034.517.144.727l-.279.823A2.222 2.222 0 01.42 27.17z"
                      fill="#6F6F6F"
                      stroke-width=".5"
                    ></path>
                    <path
                      stroke-width="1.436"
                      d="M12.047 27.456l-5.088-.014-.527 12.44h5.896V33.04l-.296-.56z"
                    ></path>
                    <path
                      stroke-width=".513"
                      d="M12.81 37.318H6.04M6.25 32.289h6.265"
                    ></path>
                    <g>
                      <path
                        stroke-width="1.436"
                        d="M19.938 27.45l-5.081.014.008 5.024-.296.567v6.843h5.895z"
                      ></path>
                      <path
                        stroke-width=".513"
                        d="M14.383 32.298h6.263M20.866 37.36h-6.78"
                      ></path>
                    </g>
                    <path
                      d="M20.806 25.81l-1.31-7.876-.668-4.221c-.042-.294-.21-.54-.481-.54H8.533c-.262 0-.43.246-.482.54l-.667 4.221-1.31 7.875v1.07h14.724v-1.07h.008z"
                      stroke-width="1.436"
                    ></path>
                    <g>
                      <path
                        d="M11.103 3.54c-.017 0 0-1.681 0-1.681a.29.29 0 01.287-.298h4.108a.29.29 0 01.288.298V3.54"
                        stroke-width=".851"
                      ></path>
                      <path
                        d="M16.411 11.965c1.057 0 1.91-.885 1.91-1.98V5.529c0-1.094-.853-1.979-1.91-1.979h-5.925c-1.057 0-1.91.885-1.91 1.98v4.457c0 1.094.853 1.979 1.91 1.979h5.925z"
                        stroke-width="1.436"
                      ></path>
                    </g>
                  </g>
                </svg>
              </div>
              <div class="slot-info-container">
                <div class="info-techniques-product">${el.age}+</div>
              </div>
              <div class="slot-name-container">
                <div class="name-info-product">Età</div>
              </div>
            </div>
            <div class="product-attributes-container" style="height: 100%">
              <div class="slot-icon-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="39"
                  height="32"
                  viewBox="0 0 39 32"
                  aria-hidden="true"
                  class="Icon__StyledSVG-lm07h6-0 fFzRmK"
                >
                  <path
                    d="M18.766 0l-2.77 2.96 1.106 1.022.91-.972v16.8L2.238 28.949l.387-1.269-1.447-.434L0 31.116 3.969 32l.334-1.463-1.305-.292 15.89-9.206h17.08l-.978.903 1.03 1.099L39 20.288l-2.98-2.752-1.03 1.1.979.902H19.522V3.011l.91.971 1.105-1.022z"
                    fill="#6F6F6F"
                    fill-rule="evenodd"
                  ></path>
                  <g fill="currentColor" style="mix-blend-mode: darken">
                    <path
                      d="M32.606 29.532c.319 0 .576.127.576.282v.585c0 .155-.257.281-.576.281H.895c-.32 0-.578-.126-.578-.281v-.585c0-.155.258-.282.578-.282h31.71zM15.737 14.597c.071 0 .129.126.129.281v.585c0 .155-.058.281-.13.281H8.63c-.072 0-.13-.126-.13-.281v-.585c0-.155.058-.281.13-.281h7.107zm9.713 0c.072 0 .13.126.13.281v.585c0 .155-.058.281-.13.281h-7.106c-.072 0-.13-.126-.13-.281v-.585c0-.155.058-.281.13-.281h7.107z"
                    ></path>
                    <path
                      d="M1.821 21.572H32.18v16.606H1.82V21.572zM1.195 20A1.19 1.19 0 000 21.186v17.592a1.19 1.19 0 001.195 1.186h31.54a1.19 1.19 0 001.193-1.186V21.186A1.19 1.19 0 0032.734 20H1.195zM7.856 8.485c-.79.11-1.183.505-1.177 1.186v3.741c.342.047 1.524.09 1.524 1.559V9.885H25.9v3.874c.291-1.068.765-1.132 1.421-.193V9.671c0-.655-.527-1.186-1.177-1.186H7.856z"
                    ></path>
                    <path
                      d="M7.34 18.919c-1.64 0-1.634-.814-1.634-1.042 0-1.052 1.071-3.36 1.614-3.48.593.12 1.665 2.428 1.666 3.48 0 .23-.005 1.042-1.646 1.042M7.3 12.12c-1.028.214-3.05 4.31-3.05 6.18 0 .403-.008 1.847 3.085 1.847 3.097 0 3.106-1.441 3.106-1.847-.004-1.869-2.025-5.968-3.142-6.178m9.66 6.797c-1.64 0-1.635-.814-1.635-1.042 0-1.052 1.072-3.36 1.615-3.48.593.12 1.664 2.428 1.666 3.48 0 .23-.005 1.042-1.646 1.042m-.042-6.798c-1.026.213-3.048 4.309-3.048 6.178 0 .403-.008 1.847 3.085 1.847 3.096 0 3.105-1.441 3.105-1.847-.004-1.869-2.025-5.968-3.142-6.178m9.729 6.798c-1.64 0-1.634-.814-1.634-1.042 0-1.052 1.072-3.36 1.614-3.48.593.12 1.665 2.428 1.667 3.48 0 .23-.005 1.042-1.647 1.042m-.041-6.798c-1.025.213-3.048 4.309-3.048 6.178 0 .403-.009 1.847 3.084 1.847 3.097 0 3.105-1.441 3.105-1.847-.002-1.869-2.024-5.968-3.141-6.178m-9.646-4.596c-1.64 0-1.635-.814-1.635-1.041 0-1.053 1.072-3.36 1.615-3.482.593.12 1.664 2.429 1.666 3.482 0 .228-.005 1.04-1.646 1.04M16.917.728C15.891.94 13.87 5.036 13.87 6.905c0 .404-.008 1.847 3.085 1.847 3.096 0 3.105-1.441 3.105-1.847-.004-1.869-2.025-5.968-3.142-6.178"
                    ></path>
                  </g>
                </svg>
              </div>
              <div class="product-card-dimenzioni">
                <span>H: 4" (8cm)</span>
                <span>L: 13" (33cm)</span>
                <span>P: 9" (22cm)</span>
              </div>
              <div class="slot-name-container">
                <div class="name-info-product">Dimensioni</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

        <div class="product-details-container">
      <!-- Primo accordion tab -->
      <div class="product-details-accordion-holder">
        <button class="product-details-accordion-button">
          <div class="content-accordion-button">
            <h2>Caratteristiche</h2>
          </div>
          <div>
            <img
              src="https://www.svgrepo.com/show/2087/plus.svg"
              width="15px"
            />
          </div>
        </button>
      </div>

      <!-- Content inside first tab -->
      <div class="product-details-accordion-panel">
        <div class="product-details-accordion-video-content" name="DIV1">
          <!-- VIDEO LOCATION -->
          <video
            autoplay
            loop
            muted
            src="https://www.lego.com/cdn/cs/set/assets/blt331f679eafe7505f/10325_AID2303845P1GL_ShopperVideo_30s_16x9_WoText.mp4"
          ></video>
        </div>

        <div class="product-details-accordion-text-content" name="DIV2">
          <div class="product-detail-accordion-text">
            <span class="product-detail-text-holder">
              <span>Crea un'accogliente rifugio innevato</span>
              <br />
              <span
                >Dalle camere degli ospiti decorate a festa ai caminetti
                illuminati, una pista di pattinaggio all'aperto e persino una
                cabina-WC, il set Baita alpina LEGO® Icons è un'aggiunta
                divertente e gratificante alla tua collezione Villaggio
                invernale LEGO Icons.
              </span>
            </span>
          </div>
        </div>

        <div class="product-details-accordion-content accordion-bottom-image">
          <img
            src="https://www.lego.com/cdn/cs/set/assets/blt9351c9f3b7f526dd/10325-202310-PDP-Hero-Short-Large.jpg?fit=crop&format=jpg&quality=80&width=1600&height=200&dpr=1"
            alt=""
          />
        </div>
        <div
          class="product-details-accordion-content accordion-side-text"
          name="DIV4"
        >
          <img
            src="https://www.lego.com/cdn/cs/set/assets/blt237d4d81bbadb2a5/10325-202310-PDP-Hero-Carousel-Large-1.jpg?fit=crop&format=jpg&quality=80&width=1600&height=500&dpr=1"
            alt=""
          />
          <div class="product-detail-accordion-right-side-content">
            <h2>Fai un giro sulla pista di pattinaggio all'aperto</h2>
          </div>
        </div>
        <div
          class="product-details-accordion-content accordion-left-side-text"
          name="DIV5"
        >
          <img
            src="https://www.lego.com/cdn/cs/set/assets/blt606ce6afeece8661/10325-202310-PDP-Hero-Carousel-Large-2.jpg?fit=crop&format=jpg&quality=80&width=1600&height=500&dpr=1"
            alt=""
          />
          <div class="product-detail-accordion-left-side-content">
            <h2>Salta sulla motoslitta e consegna l'albero di Natale</h2>
          </div>
        </div>
        <!-- DIV 6 -->
        <div
          class="product-details-accordion-content accordion-red-bg"
          name="DIV6"
        >
          <div class="accordion-card-holder">
            <div class="accordion-card">
              <img
                src="https://www.lego.com/cdn/cs/set/assets/blt7baad072a18a4c09/10325-202310-PDP-Block-Standard-1.jpg?fit=crop&format=jpg&quality=80&width=635&height=440&dpr=1"
                alt=""
              />
              <span>Sorprendi un amico nella cabina-WC</span>
            </div>
            <div class="accordion-card">
              <img
                src="https://www.lego.com/cdn/cs/set/assets/blt432beb8c81613613/10325-202310-PDP-Block-Standard-2.jpg?fit=crop&format=jpg&quality=80&width=635&height=440&dpr=1"
                alt=""
              />
              <span>Sistemati per la notte nell'accogliente loft</span>
            </div>
            <div class="accordion-card">
              <img
                src="https://www.lego.com/cdn/cs/set/assets/blt7c0ea79ae08e7277/10325-202310-PDP-Block-Standard-3.jpg?fit=crop&format=jpg&quality=80&width=635&height=440&dpr=1"
                alt=""
              />
              <span>
                Condividi una cioccolata calda accanto al fuoco(mattoncino
                nuvoloso)
              </span>
            </div>
            <div class="accordion-card">
              <img
                src="https://www.lego.com/cdn/cs/set/assets/blte2cdcee09afa9caf/10325-202310-PDP-Block-Standard-4.jpg?fit=crop&format=jpg&quality=80&width=635&height=440&dpr=1"
                alt=""
              />
              <span>Scambiatevi i regali accanto all'albero decorato</span>
            </div>
          </div>
          <div class="accordion-card-holder-carousel">
            <div class="carousel-accordion-container">
              <!-- Actual Carousel component -->
              <div class="carousel-container">
                <div class="carousel">
                  <div class="atom-homepage-card">
                    <div class="img-container-card">
                      <img
                        src="https://www.lego.com/cdn/cs/set/assets/bltfb3ccae42fc241c7/10308.png?fit=bounds&format=png&width=320&height=320&dpr=1"
                        alt="main image of the card"
                        class="atom-homepage-card-img"
                      />
                    </div>

                    <div class="atom-homepage-card-content">
                      <h3 class="atom-homepage-card-title">
                        Natale nella strada principale
                      </h3>
                      <div class="atom-homepage-card-icons">
                        <img
                          src="/assets/icons/star.svg"
                          alt="stellina gialla"
                          width="15px"
                        />
                        <img
                          src="/assets/icons/star.svg"
                          alt="stellina gialla"
                          width="15px"
                        />
                        <img
                          src="/assets/icons/star.svg"
                          alt="stellina gialla"
                          width="15px"
                        />
                        <img
                          src="/assets/icons/star.svg"
                          alt="stellina gialla"
                          width="15px"
                        />
                        <img
                          src="/assets/icons/halfStar.svg"
                          alt="stellina gialla"
                          width="15px"
                        />
                      </div>
                      <p class="atom-homepage-card-price">99,99€</p>
                      <!--       SPAZIO BOTTONE         -->

                      <button
                        class="standard-button standard-button-square button-red"
                      >
                        <div class="spinner-container hidden">
                          <svg class="spinner" viewBox="0 0 66 66">
                            <circle
                              cx="33"
                              cy="33"
                              r="20"
                              fill="none"
                              stroke="#000000"
                              class="spinner-circle"
                            ></circle>
                          </svg>
                        </div>
                        <div class="container-content-standard-button">
                          <div class="testo">Su ordinazione</div>
                        </div>
                      </button>
                    </div>
                  </div>
                  <div class="atom-homepage-card">
                    <div class="img-container-card">
                      <img
                        src="https://www.lego.com/cdn/cs/set/assets/blte9e3f43203ffb465/40658.png?fit=bounds&format=png&width=320&height=320&dpr=1"
                        alt="main image of the card"
                        class="atom-homepage-card-img"
                      />
                    </div>

                    <div class="atom-homepage-card-content">
                      <h3 class="atom-homepage-card-title">
                        Diorama Millenium falcon™
                      </h3>
                      <div class="atom-homepage-card-icons">
                        <img
                          src="/assets/icons/star.svg"
                          alt="stellina gialla"
                          width="15px"
                        />
                        <img
                          src="/assets/icons/star.svg"
                          alt="stellina gialla"
                          width="15px"
                        />
                        <img
                          src="/assets/icons/star.svg"
                          alt="stellina gialla"
                          width="15px"
                        />
                        <img
                          src="/assets/icons/star.svg"
                          alt="stellina gialla"
                          width="15px"
                        />
                        <img
                          src="/assets/icons/halfStar.svg"
                          alt="stellina gialla"
                          width="15px"
                        />
                      </div>
                      <p class="atom-homepage-card-price">29,99€</p>
                      <!--       SPAZIO BOTTONE         -->

                      <button
                        class="standard-button standard-button-square button-red"
                      >
                        <div class="spinner-container hidden">
                          <svg class="spinner" viewBox="0 0 66 66">
                            <circle
                              cx="33"
                              cy="33"
                              r="20"
                              fill="none"
                              stroke="#000000"
                              class="spinner-circle"
                            ></circle>
                          </svg>
                        </div>
                        <div class="container-content-standard-button">
                          <div class="testo">Su ordinazione</div>
                        </div>
                      </button>
                    </div>
                  </div>
                  <div class="atom-homepage-card">
                    <div class="img-container-card">
                      <img
                        src="https://www.lego.com/cdn/cs/set/assets/bltb148945c2bb2f149/10293.jpg?fit=bounds&format=jpg&quality=80&width=320&height=320&dpr=1"
                        alt="main image of the card"
                        class="atom-homepage-card-img"
                      />
                    </div>

                    <div class="atom-homepage-card-content">
                      <h3 class="atom-homepage-card-title">
                        La visita di Babbo Natale
                      </h3>
                      <div class="atom-homepage-card-icons">
                        <img
                          src="/assets/icons/star.svg"
                          alt="stellina gialla"
                          width="15px"
                        />
                        <img
                          src="/assets/icons/star.svg"
                          alt="stellina gialla"
                          width="15px"
                        />
                        <img
                          src="/assets/icons/star.svg"
                          alt="stellina gialla"
                          width="15px"
                        />
                        <img
                          src="/assets/icons/star.svg"
                          alt="stellina gialla"
                          width="15px"
                        />
                        <img
                          src="/assets/icons/halfStar.svg"
                          alt="stellina gialla"
                          width="15px"
                        />
                      </div>
                      <p class="atom-homepage-card-price">99,99€</p>
                      <!--       SPAZIO BOTTONE         -->

                      <button
                        class="standard-button standard-button-square button-red"
                      >
                        <div class="spinner-container hidden">
                          <svg class="spinner" viewBox="0 0 66 66">
                            <circle
                              cx="33"
                              cy="33"
                              r="20"
                              fill="none"
                              stroke="#000000"
                              class="spinner-circle"
                            ></circle>
                          </svg>
                        </div>
                        <div class="container-content-standard-button">
                          <div class="testo">Su ordinazione</div>
                        </div>
                      </button>
                    </div>
                  </div>
                  <div class="atom-homepage-card">
                    <div class="img-container-card">
                      <img
                        src="https://www.lego.com/cdn/cs/set/assets/blt331198c8f34e2d7a/21343.png?fit=bounds&format=png&width=320&height=320&dpr=1"
                        alt="main image of the card"
                        class="atom-homepage-card-img"
                      />
                    </div>

                    <div class="atom-homepage-card-content">
                      <h3 class="atom-homepage-card-title">
                        Villaggio vichingo
                      </h3>
                      <div class="atom-homepage-card-icons">
                        <img
                          src="/assets/icons/star.svg"
                          alt="stellina gialla"
                          width="15px"
                        />
                        <img
                          src="/assets/icons/star.svg"
                          alt="stellina gialla"
                          width="15px"
                        />
                        <img
                          src="/assets/icons/star.svg"
                          alt="stellina gialla"
                          width="15px"
                        />
                        <img
                          src="/assets/icons/star.svg"
                          alt="stellina gialla"
                          width="15px"
                        />
                        <img
                          src="/assets/icons/star.svg"
                          alt="stellina gialla"
                          width="15px"
                        />
                      </div>
                      <p class="atom-homepage-card-price">139,99€</p>
                      <!--       SPAZIO BOTTONE         -->

                      <button
                        class="standard-button standard-button-square button-red"
                      >
                        <div class="spinner-container hidden">
                          <svg class="spinner" viewBox="0 0 66 66">
                            <circle
                              cx="33"
                              cy="33"
                              r="20"
                              fill="none"
                              stroke="#000000"
                              class="spinner-circle"
                            ></circle>
                          </svg>
                        </div>
                        <div class="container-content-standard-button">
                          <div class="testo">Su ordinazione</div>
                        </div>
                      </button>
                    </div>
                  </div>
                  <div class="atom-homepage-card">
                    <div class="img-container-card">
                      <img
                        src="https://www.lego.com/cdn/cs/set/assets/bltb7d457aa2ce9f859/40499_Prod.png?fit=bounds&format=png&width=320&height=320&dpr=1"
                        alt="main image of the card"
                        class="atom-homepage-card-img"
                      />
                    </div>

                    <div class="atom-homepage-card-content">
                      <h3 class="atom-homepage-card-title">
                        La slitta di Babbo Natale
                      </h3>
                      <div class="atom-homepage-card-icons">
                        <img
                          src="/assets/icons/star.svg"
                          alt="stellina gialla"
                          width="15px"
                        />
                        <img
                          src="/assets/icons/star.svg"
                          alt="stellina gialla"
                          width="15px"
                        />
                        <img
                          src="/assets/icons/star.svg"
                          alt="stellina gialla"
                          width="15px"
                        />
                        <img
                          src="/assets/icons/star.svg"
                          alt="stellina gialla"
                          width="15px"
                        />
                        <img
                          src="/assets/icons/star.svg"
                          alt="stellina gialla"
                          width="15px"
                        />
                      </div>
                      <p class="atom-homepage-card-price">44,99€</p>
                      <!--       SPAZIO BOTTONE         -->

                      <button
                        class="standard-button standard-button-square button-red"
                      >
                        <div class="spinner-container hidden">
                          <svg class="spinner" viewBox="0 0 66 66">
                            <circle
                              cx="33"
                              cy="33"
                              r="20"
                              fill="none"
                              stroke="#000000"
                              class="spinner-circle"
                            ></circle>
                          </svg>
                        </div>
                        <div class="container-content-standard-button">
                          <div class="testo">Su ordinazione</div>
                        </div>
                      </button>
                    </div>
                  </div>
                  <div class="atom-homepage-card">
                    <div class="img-container-card">
                      <img
                        src="https://www.lego.com/cdn/cs/set/assets/blt3d62bb5d68e6dbd7/10295.jpg?fit=bounds&format=jpg&quality=80&width=320&height=320&dpr=1"
                        alt="main image of the card"
                        class="atom-homepage-card-img"
                      />
                    </div>

                    <div class="atom-homepage-card-content">
                      <h3 class="atom-homepage-card-title">Porsche 911</h3>
                      <div class="atom-homepage-card-icons">
                        <img
                          src="/assets/icons/star.svg"
                          alt="stellina gialla"
                          width="15px"
                        />
                        <img
                          src="/assets/icons/star.svg"
                          alt="stellina gialla"
                          width="15px"
                        />
                        <img
                          src="/assets/icons/star.svg"
                          alt="stellina gialla"
                          width="15px"
                        />
                        <img
                          src="/assets/icons/star.svg"
                          alt="stellina gialla"
                          width="15px"
                        />
                        <img
                          src="/assets/icons/halfStar.svg"
                          alt="stellina gialla"
                          width="15px"
                        />
                      </div>
                      <p class="atom-homepage-card-price">169,99€</p>
                      <!--       SPAZIO BOTTONE         -->

                      <button
                        class="standard-button standard-button-square button-red"
                      >
                        <div class="spinner-container hidden">
                          <svg class="spinner" viewBox="0 0 66 66">
                            <circle
                              cx="33"
                              cy="33"
                              r="20"
                              fill="none"
                              stroke="#000000"
                              class="spinner-circle"
                            ></circle>
                          </svg>
                        </div>
                        <div class="container-content-standard-button">
                          <div class="testo">Su ordinazione</div>
                        </div>
                      </button>
                    </div>
                  </div>
                  <div class="atom-homepage-card">
                    <div class="img-container-card">
                      <img
                        src="https://www.lego.com/cdn/cs/set/assets/blt2564f1fe0e59bb78/10321.png?fit=bounds&format=png&width=320&height=320&dpr=1"
                        alt="main image of the card"
                        class="atom-homepage-card-img"
                      />
                    </div>

                    <div class="atom-homepage-card-content">
                      <h3 class="atom-homepage-card-title">Corvette</h3>
                      <div class="atom-homepage-card-icons">
                        <img
                          src="/assets/icons/star.svg"
                          alt="stellina gialla"
                          width="15px"
                        />
                        <img
                          src="/assets/icons/star.svg"
                          alt="stellina gialla"
                          width="15px"
                        />
                        <img
                          src="/assets/icons/star.svg"
                          alt="stellina gialla"
                          width="15px"
                        />
                        <img
                          src="/assets/icons/star.svg"
                          alt="stellina gialla"
                          width="15px"
                        />
                        <img
                          src="/assets/icons/star.svg"
                          alt="stellina gialla"
                          width="15px"
                        />
                      </div>
                      <p class="atom-homepage-card-price">149,99€</p>
                      <!--       SPAZIO BOTTONE         -->

                      <button
                        class="standard-button standard-button-square button-red"
                      >
                        <div class="spinner-container hidden">
                          <svg class="spinner" viewBox="0 0 66 66">
                            <circle
                              cx="33"
                              cy="33"
                              r="20"
                              fill="none"
                              stroke="#000000"
                              class="spinner-circle"
                            ></circle>
                          </svg>
                        </div>
                        <div class="container-content-standard-button">
                          <div class="testo">Su ordinazione</div>
                        </div>
                      </button>
                    </div>
                  </div>
                  <div class="atom-homepage-card">
                    <div class="img-container-card">
                      <img
                        src="https://www.lego.com/cdn/cs/set/assets/blte09f96efc93d5c1d/76419.png?fit=bounds&format=png&width=320&height=320&dpr=1"
                        alt="main image of the card"
                        class="atom-homepage-card-img"
                      />
                    </div>

                    <div class="atom-homepage-card-content">
                      <h3 class="atom-homepage-card-title">
                        Castello e parco di Hogwarts™
                      </h3>
                      <div class="atom-homepage-card-icons">
                        <img
                          src="/assets/icons/star.svg"
                          alt="stellina gialla"
                          width="15px"
                        />
                        <img
                          src="/assets/icons/star.svg"
                          alt="stellina gialla"
                          width="15px"
                        />
                        <img
                          src="/assets/icons/star.svg"
                          alt="stellina gialla"
                          width="15px"
                        />
                        <img
                          src="/assets/icons/star.svg"
                          alt="stellina gialla"
                          width="15px"
                        />
                        <img
                          src="/assets/icons/star.svg"
                          alt="stellina gialla"
                          width="15px"
                        />
                      </div>
                      <p class="atom-homepage-card-price">169,99€</p>
                      <!--       SPAZIO BOTTONE         -->

                      <button
                        class="standard-button standard-button-square button-red"
                      >
                        <div class="spinner-container hidden">
                          <svg class="spinner" viewBox="0 0 66 66">
                            <circle
                              cx="33"
                              cy="33"
                              r="20"
                              fill="none"
                              stroke="#000000"
                              class="spinner-circle"
                            ></circle>
                          </svg>
                        </div>
                        <div class="container-content-standard-button">
                          <div class="testo">Su ordinazione</div>
                        </div>
                      </button>
                    </div>
                  </div>
                  <div class="atom-homepage-card">
                    <div class="img-container-card">
                      <img
                        src="https://www.lego.com/cdn/cs/set/assets/blte780055922ecc267/60366.png?fit=bounds&format=png&width=320&height=320&dpr=1"
                        alt="main image of the card"
                        class="atom-homepage-card-img"
                      />
                    </div>

                    <div class="atom-homepage-card-content">
                      <h3 class="atom-homepage-card-title">
                        Centro sci e arrampicata
                      </h3>
                      <div class="atom-homepage-card-icons">
                        <img
                          src="/assets/icons/star.svg"
                          alt="stellina gialla"
                          width="15px"
                        />
                        <img
                          src="/assets/icons/star.svg"
                          alt="stellina gialla"
                          width="15px"
                        />
                        <img
                          src="/assets/icons/star.svg"
                          alt="stellina gialla"
                          width="15px"
                        />
                        <img
                          src="/assets/icons/star.svg"
                          alt="stellina gialla"
                          width="15px"
                        />
                        <img
                          src="/assets/icons/star.svg"
                          alt="stellina gialla"
                          width="15px"
                        />
                      </div>
                      <p class="atom-homepage-card-price">104,99€</p>
                      <!--       SPAZIO BOTTONE         -->

                      <button
                        class="standard-button standard-button-square button-red"
                      >
                        <div class="spinner-container hidden">
                          <svg class="spinner" viewBox="0 0 66 66">
                            <circle
                              cx="33"
                              cy="33"
                              r="20"
                              fill="none"
                              stroke="#000000"
                              class="spinner-circle"
                            ></circle>
                          </svg>
                        </div>
                        <div class="container-content-standard-button">
                          <div class="testo">Su ordinazione</div>
                        </div>
                      </button>
                    </div>
                  </div>
                  <div class="atom-homepage-card">
                    <div class="img-container-card">
                      <img
                        src="https://www.lego.com/cdn/cs/set/assets/blt08ba1f2bb5e8f2fb/10326.png?fit=bounds&format=png&width=320&height=320&dpr=1"
                        alt="main image of the card"
                        class="atom-homepage-card-img"
                      />
                    </div>

                    <div class="atom-homepage-card-content">
                      <h3 class="atom-homepage-card-title">
                        Museo di Storia Naturale
                      </h3>
                      <div class="atom-homepage-card-icons">
                        <img
                          src="/assets/icons/star.svg"
                          alt="stellina gialla"
                          width="15px"
                        />
                        <img
                          src="/assets/icons/star.svg"
                          alt="stellina gialla"
                          width="15px"
                        />
                        <img
                          src="/assets/icons/star.svg"
                          alt="stellina gialla"
                          width="15px"
                        />
                        <img
                          src="/assets/icons/star.svg"
                          alt="stellina gialla"
                          width="15px"
                        />
                        <img
                          src="/assets/icons/star.svg"
                          alt="stellina gialla"
                          width="15px"
                        />
                      </div>
                      <p class="atom-homepage-card-price">299,99€</p>
                      <!--       SPAZIO BOTTONE         -->

                      <button
                        class="standard-button standard-button-square button-red"
                      >
                        <div class="spinner-container hidden">
                          <svg class="spinner" viewBox="0 0 66 66">
                            <circle
                              cx="33"
                              cy="33"
                              r="20"
                              fill="none"
                              stroke="#000000"
                              class="spinner-circle"
                            ></circle>
                          </svg>
                        </div>
                        <div class="container-content-standard-button">
                          <div class="testo">Su ordinazione</div>
                        </div>
                      </button>
                    </div>
                  </div>
                  <div class="atom-homepage-card">
                    <div class="img-container-card">
                      <img
                        src="https://www.lego.com/cdn/cs/set/assets/blt729f7a96490ebf6f/10304.png?fit=bounds&format=png&width=320&height=320&dpr=1"
                        alt="main image of the card"
                        class="atom-homepage-card-img"
                      />
                    </div>

                    <div class="atom-homepage-card-content">
                      <h3 class="atom-homepage-card-title">
                        Chevrolet Camaro Z28
                      </h3>
                      <div class="atom-homepage-card-icons">
                        <img
                          src="/assets/icons/star.svg"
                          alt="stellina gialla"
                          width="15px"
                        />
                        <img
                          src="/assets/icons/star.svg"
                          alt="stellina gialla"
                          width="15px"
                        />
                        <img
                          src="/assets/icons/star.svg"
                          alt="stellina gialla"
                          width="15px"
                        />
                        <img
                          src="/assets/icons/star.svg"
                          alt="stellina gialla"
                          width="15px"
                        />
                        <img
                          src="/assets/icons/star.svg"
                          alt="stellina gialla"
                          width="15px"
                        />
                      </div>
                      <p class="atom-homepage-card-price">169,99€</p>
                      <!--       SPAZIO BOTTONE         -->

                      <button
                        class="standard-button standard-button-square button-red"
                      >
                        <div class="spinner-container hidden">
                          <svg class="spinner" viewBox="0 0 66 66">
                            <circle
                              cx="33"
                              cy="33"
                              r="20"
                              fill="none"
                              stroke="#000000"
                              class="spinner-circle"
                            ></circle>
                          </svg>
                        </div>
                        <div class="container-content-standard-button">
                          <div class="testo">Su ordinazione</div>
                        </div>
                      </button>
                    </div>
                  </div>
                  <div class="atom-homepage-card">
                    <div class="img-container-card">
                      <img
                        src="https://www.lego.com/cdn/cs/set/assets/bltc1a3afc5b5af3287/10315.png?fit=bounds&format=png&width=320&height=320&dpr=1"
                        alt="main image of the card"
                        class="atom-homepage-card-img"
                      />
                    </div>

                    <div class="atom-homepage-card-content">
                      <h3 class="atom-homepage-card-title">
                        Il giardino Tranquillo
                      </h3>
                      <div class="atom-homepage-card-icons">
                        <img
                          src="/assets/icons/star.svg"
                          alt="stellina gialla"
                          width="15px"
                        />
                        <img
                          src="/assets/icons/star.svg"
                          alt="stellina gialla"
                          width="15px"
                        />
                        <img
                          src="/assets/icons/star.svg"
                          alt="stellina gialla"
                          width="15px"
                        />
                        <img
                          src="/assets/icons/star.svg"
                          alt="stellina gialla"
                          width="15px"
                        />
                        <img
                          src="/assets/icons/star.svg"
                          alt="stellina gialla"
                          width="15px"
                        />
                      </div>
                      <p class="atom-homepage-card-price">104,99€</p>
                      <!--       SPAZIO BOTTONE         -->

                      <button
                        class="standard-button standard-button-square button-red"
                      >
                        <div class="spinner-container hidden">
                          <svg class="spinner" viewBox="0 0 66 66">
                            <circle
                              cx="33"
                              cy="33"
                              r="20"
                              fill="none"
                              stroke="#000000"
                              class="spinner-circle"
                            ></circle>
                          </svg>
                        </div>
                        <div class="container-content-standard-button">
                          <div class="testo">Su ordinazione</div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>

                <button class="prev-button">
                  <svg viewBox="0 0 40 40" class="next round-butt">
                    <g fill="none" fill-rule="evenodd">
                      <rect opacity="1" width="38" height="38" rx="20"></rect>
                      <path
                        d="M16.42 9L29 20 16.42 31 15 29.653 26.042 20 15 10.347z"
                        class="next"
                      ></path>
                    </g>
                  </svg>
                </button>
                <button class="next-button">
                  <svg viewBox="0 0 40 40" class="next round-butt">
                    <g fill="none" fill-rule="evenodd">
                      <rect opacity="1"></rect>
                      <path
                        d="M16.42 9L29 20 16.42 31 15 29.653 26.042 20 15 10.347z"
                        class="next"
                      ></path>
                    </g>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="product-details-accordion-content accordion-side-button">
          <img
            src="https://www.lego.com/cdn/cs/set/assets/blt7d86a498a23b97f2/10325-202310-PDP-Hero-Carousel-Large-3.jpg?fit=crop&format=jpg&quality=80&width=1600&height=500&dpr=1"
            alt=""
          />
          <div class="product-detail-accordion-left-side-content">
            <h2>
              Un'aggiunta festosa a qualsiasi collezione Villagio invernale
            </h2>
            <button class="accordion-button">
              Compra ora
              <svg
                width="16"
                height="16"
                viewBox="0 0 18 28"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                class="homepage-subscription-button-svg"
              >
                <path
                  d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div class="product-details-accordion-content accordion-double-div">
          <div class="left-side-accordion-content">
            <img
              src="https://www.lego.com/cdn/cs/set/assets/blt450376755b8f5e1a/10325-PDP-202310-Sidekick-Standard.jpg?fit=crop&format=jpg&quality=80&width=800&height=426&dpr=1"
              alt=""
            />
          </div>
          <div class="right-side-accordion-content accordion-side-button2">
            <div class="product-detail-accordion-right-side-content">
              <h2>Leggi tutto sulla collezione Villaggio invernale LEGO®</h2>
              <button class="accordion-button">
                Iscriviti ora
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 18 28"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  class="homepage-subscription-button-svg"
                >
                  <path
                    d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z"
                    fill="currentColor"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <!-- CAROUSEL DIV -->
        <div class="product-details-accordion-content">
          <!-- Carousel space here -->
          <div class="carousel-accordion-container">
            <div class="carousel-title">
              <h1>Scopri altri set stagionali</h1>
              <p>Visualizza tutti</p>
              <svg
                width="16"
                height="16"
                viewBox="0 0 18 28"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                class="carousel-link-svg"
              >
                <path
                  d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <!-- Actual Carousel component -->
            <div class="carousel-container">
              <div class="carousel">
                <div class="atom-homepage-card">
                  <div class="img-container-card">
                    <img
                      src="https://www.lego.com/cdn/cs/set/assets/bltfb3ccae42fc241c7/10308.png?fit=bounds&format=png&width=320&height=320&dpr=1"
                      alt="main image of the card"
                      class="atom-homepage-card-img"
                    />
                  </div>

                  <div class="atom-homepage-card-content">
                    <h3 class="atom-homepage-card-title">
                      Natale nella strada principale
                    </h3>
                    <div class="atom-homepage-card-icons">
                      <img
                        src="/assets/icons/star.svg"
                        alt="stellina gialla"
                        width="15px"
                      />
                      <img
                        src="/assets/icons/star.svg"
                        alt="stellina gialla"
                        width="15px"
                      />
                      <img
                        src="/assets/icons/star.svg"
                        alt="stellina gialla"
                        width="15px"
                      />
                      <img
                        src="/assets/icons/star.svg"
                        alt="stellina gialla"
                        width="15px"
                      />
                      <img
                        src="/assets/icons/halfStar.svg"
                        alt="stellina gialla"
                        width="15px"
                      />
                    </div>
                    <p class="atom-homepage-card-price">99,99€</p>
                    <!--       SPAZIO BOTTONE         -->

                    <button
                      class="standard-button standard-button-square button-red"
                    >
                      <div class="spinner-container hidden">
                        <svg class="spinner" viewBox="0 0 66 66">
                          <circle
                            cx="33"
                            cy="33"
                            r="20"
                            fill="none"
                            stroke="#000000"
                            class="spinner-circle"
                          ></circle>
                        </svg>
                      </div>
                      <div class="container-content-standard-button">
                        <div class="testo">Su ordinazione</div>
                      </div>
                    </button>
                  </div>
                </div>
                <div class="atom-homepage-card">
                  <div class="img-container-card">
                    <img
                      src="https://www.lego.com/cdn/cs/set/assets/blte9e3f43203ffb465/40658.png?fit=bounds&format=png&width=320&height=320&dpr=1"
                      alt="main image of the card"
                      class="atom-homepage-card-img"
                    />
                  </div>

                  <div class="atom-homepage-card-content">
                    <h3 class="atom-homepage-card-title">
                      Diorama Millenium falcon™
                    </h3>
                    <div class="atom-homepage-card-icons">
                      <img
                        src="/assets/icons/star.svg"
                        alt="stellina gialla"
                        width="15px"
                      />
                      <img
                        src="/assets/icons/star.svg"
                        alt="stellina gialla"
                        width="15px"
                      />
                      <img
                        src="/assets/icons/star.svg"
                        alt="stellina gialla"
                        width="15px"
                      />
                      <img
                        src="/assets/icons/star.svg"
                        alt="stellina gialla"
                        width="15px"
                      />
                      <img
                        src="/assets/icons/halfStar.svg"
                        alt="stellina gialla"
                        width="15px"
                      />
                    </div>
                    <p class="atom-homepage-card-price">29,99€</p>
                    <!--       SPAZIO BOTTONE         -->

                    <button
                      class="standard-button standard-button-square button-red"
                    >
                      <div class="spinner-container hidden">
                        <svg class="spinner" viewBox="0 0 66 66">
                          <circle
                            cx="33"
                            cy="33"
                            r="20"
                            fill="none"
                            stroke="#000000"
                            class="spinner-circle"
                          ></circle>
                        </svg>
                      </div>
                      <div class="container-content-standard-button">
                        <div class="testo">Su ordinazione</div>
                      </div>
                    </button>
                  </div>
                </div>
                <div class="atom-homepage-card">
                  <div class="img-container-card">
                    <img
                      src="https://www.lego.com/cdn/cs/set/assets/bltb148945c2bb2f149/10293.jpg?fit=bounds&format=jpg&quality=80&width=320&height=320&dpr=1"
                      alt="main image of the card"
                      class="atom-homepage-card-img"
                    />
                  </div>

                  <div class="atom-homepage-card-content">
                    <h3 class="atom-homepage-card-title">
                      La visita di Babbo Natale
                    </h3>
                    <div class="atom-homepage-card-icons">
                      <img
                        src="/assets/icons/star.svg"
                        alt="stellina gialla"
                        width="15px"
                      />
                      <img
                        src="/assets/icons/star.svg"
                        alt="stellina gialla"
                        width="15px"
                      />
                      <img
                        src="/assets/icons/star.svg"
                        alt="stellina gialla"
                        width="15px"
                      />
                      <img
                        src="/assets/icons/star.svg"
                        alt="stellina gialla"
                        width="15px"
                      />
                      <img
                        src="/assets/icons/halfStar.svg"
                        alt="stellina gialla"
                        width="15px"
                      />
                    </div>
                    <p class="atom-homepage-card-price">99,99€</p>
                    <!--       SPAZIO BOTTONE         -->

                    <button
                      class="standard-button standard-button-square button-red"
                    >
                      <div class="spinner-container hidden">
                        <svg class="spinner" viewBox="0 0 66 66">
                          <circle
                            cx="33"
                            cy="33"
                            r="20"
                            fill="none"
                            stroke="#000000"
                            class="spinner-circle"
                          ></circle>
                        </svg>
                      </div>
                      <div class="container-content-standard-button">
                        <div class="testo">Su ordinazione</div>
                      </div>
                    </button>
                  </div>
                </div>
                <div class="atom-homepage-card">
                  <div class="img-container-card">
                    <img
                      src="https://www.lego.com/cdn/cs/set/assets/blt331198c8f34e2d7a/21343.png?fit=bounds&format=png&width=320&height=320&dpr=1"
                      alt="main image of the card"
                      class="atom-homepage-card-img"
                    />
                  </div>

                  <div class="atom-homepage-card-content">
                    <h3 class="atom-homepage-card-title">Villaggio vichingo</h3>
                    <div class="atom-homepage-card-icons">
                      <img
                        src="/assets/icons/star.svg"
                        alt="stellina gialla"
                        width="15px"
                      />
                      <img
                        src="/assets/icons/star.svg"
                        alt="stellina gialla"
                        width="15px"
                      />
                      <img
                        src="/assets/icons/star.svg"
                        alt="stellina gialla"
                        width="15px"
                      />
                      <img
                        src="/assets/icons/star.svg"
                        alt="stellina gialla"
                        width="15px"
                      />
                      <img
                        src="/assets/icons/star.svg"
                        alt="stellina gialla"
                        width="15px"
                      />
                    </div>
                    <p class="atom-homepage-card-price">139,99€</p>
                    <!--       SPAZIO BOTTONE         -->

                    <button
                      class="standard-button standard-button-square button-red"
                    >
                      <div class="spinner-container hidden">
                        <svg class="spinner" viewBox="0 0 66 66">
                          <circle
                            cx="33"
                            cy="33"
                            r="20"
                            fill="none"
                            stroke="#000000"
                            class="spinner-circle"
                          ></circle>
                        </svg>
                      </div>
                      <div class="container-content-standard-button">
                        <div class="testo">Su ordinazione</div>
                      </div>
                    </button>
                  </div>
                </div>
                <div class="atom-homepage-card">
                  <div class="img-container-card">
                    <img
                      src="https://www.lego.com/cdn/cs/set/assets/bltb7d457aa2ce9f859/40499_Prod.png?fit=bounds&format=png&width=320&height=320&dpr=1"
                      alt="main image of the card"
                      class="atom-homepage-card-img"
                    />
                  </div>

                  <div class="atom-homepage-card-content">
                    <h3 class="atom-homepage-card-title">
                      La slitta di Babbo Natale
                    </h3>
                    <div class="atom-homepage-card-icons">
                      <img
                        src="/assets/icons/star.svg"
                        alt="stellina gialla"
                        width="15px"
                      />
                      <img
                        src="/assets/icons/star.svg"
                        alt="stellina gialla"
                        width="15px"
                      />
                      <img
                        src="/assets/icons/star.svg"
                        alt="stellina gialla"
                        width="15px"
                      />
                      <img
                        src="/assets/icons/star.svg"
                        alt="stellina gialla"
                        width="15px"
                      />
                      <img
                        src="/assets/icons/star.svg"
                        alt="stellina gialla"
                        width="15px"
                      />
                    </div>
                    <p class="atom-homepage-card-price">44,99€</p>
                    <!--       SPAZIO BOTTONE         -->

                    <button
                      class="standard-button standard-button-square button-red"
                    >
                      <div class="spinner-container hidden">
                        <svg class="spinner" viewBox="0 0 66 66">
                          <circle
                            cx="33"
                            cy="33"
                            r="20"
                            fill="none"
                            stroke="#000000"
                            class="spinner-circle"
                          ></circle>
                        </svg>
                      </div>
                      <div class="container-content-standard-button">
                        <div class="testo">Su ordinazione</div>
                      </div>
                    </button>
                  </div>
                </div>
                <div class="atom-homepage-card">
                  <div class="img-container-card">
                    <img
                      src="https://www.lego.com/cdn/cs/set/assets/blt3d62bb5d68e6dbd7/10295.jpg?fit=bounds&format=jpg&quality=80&width=320&height=320&dpr=1"
                      alt="main image of the card"
                      class="atom-homepage-card-img"
                    />
                  </div>

                  <div class="atom-homepage-card-content">
                    <h3 class="atom-homepage-card-title">Porsche 911</h3>
                    <div class="atom-homepage-card-icons">
                      <img
                        src="/assets/icons/star.svg"
                        alt="stellina gialla"
                        width="15px"
                      />
                      <img
                        src="/assets/icons/star.svg"
                        alt="stellina gialla"
                        width="15px"
                      />
                      <img
                        src="/assets/icons/star.svg"
                        alt="stellina gialla"
                        width="15px"
                      />
                      <img
                        src="/assets/icons/star.svg"
                        alt="stellina gialla"
                        width="15px"
                      />
                      <img
                        src="/assets/icons/halfStar.svg"
                        alt="stellina gialla"
                        width="15px"
                      />
                    </div>
                    <p class="atom-homepage-card-price">169,99€</p>
                    <!--       SPAZIO BOTTONE         -->

                    <button
                      class="standard-button standard-button-square button-red"
                    >
                      <div class="spinner-container hidden">
                        <svg class="spinner" viewBox="0 0 66 66">
                          <circle
                            cx="33"
                            cy="33"
                            r="20"
                            fill="none"
                            stroke="#000000"
                            class="spinner-circle"
                          ></circle>
                        </svg>
                      </div>
                      <div class="container-content-standard-button">
                        <div class="testo">Su ordinazione</div>
                      </div>
                    </button>
                  </div>
                </div>
                <div class="atom-homepage-card">
                  <div class="img-container-card">
                    <img
                      src="https://www.lego.com/cdn/cs/set/assets/blt2564f1fe0e59bb78/10321.png?fit=bounds&format=png&width=320&height=320&dpr=1"
                      alt="main image of the card"
                      class="atom-homepage-card-img"
                    />
                  </div>

                  <div class="atom-homepage-card-content">
                    <h3 class="atom-homepage-card-title">Corvette</h3>
                    <div class="atom-homepage-card-icons">
                      <img
                        src="/assets/icons/star.svg"
                        alt="stellina gialla"
                        width="15px"
                      />
                      <img
                        src="/assets/icons/star.svg"
                        alt="stellina gialla"
                        width="15px"
                      />
                      <img
                        src="/assets/icons/star.svg"
                        alt="stellina gialla"
                        width="15px"
                      />
                      <img
                        src="/assets/icons/star.svg"
                        alt="stellina gialla"
                        width="15px"
                      />
                      <img
                        src="/assets/icons/star.svg"
                        alt="stellina gialla"
                        width="15px"
                      />
                    </div>
                    <p class="atom-homepage-card-price">149,99€</p>
                    <!--       SPAZIO BOTTONE         -->

                    <button
                      class="standard-button standard-button-square button-red"
                    >
                      <div class="spinner-container hidden">
                        <svg class="spinner" viewBox="0 0 66 66">
                          <circle
                            cx="33"
                            cy="33"
                            r="20"
                            fill="none"
                            stroke="#000000"
                            class="spinner-circle"
                          ></circle>
                        </svg>
                      </div>
                      <div class="container-content-standard-button">
                        <div class="testo">Su ordinazione</div>
                      </div>
                    </button>
                  </div>
                </div>
                <div class="atom-homepage-card">
                  <div class="img-container-card">
                    <img
                      src="https://www.lego.com/cdn/cs/set/assets/blte09f96efc93d5c1d/76419.png?fit=bounds&format=png&width=320&height=320&dpr=1"
                      alt="main image of the card"
                      class="atom-homepage-card-img"
                    />
                  </div>

                  <div class="atom-homepage-card-content">
                    <h3 class="atom-homepage-card-title">
                      Castello e parco di Hogwarts™
                    </h3>
                    <div class="atom-homepage-card-icons">
                      <img
                        src="/assets/icons/star.svg"
                        alt="stellina gialla"
                        width="15px"
                      />
                      <img
                        src="/assets/icons/star.svg"
                        alt="stellina gialla"
                        width="15px"
                      />
                      <img
                        src="/assets/icons/star.svg"
                        alt="stellina gialla"
                        width="15px"
                      />
                      <img
                        src="/assets/icons/star.svg"
                        alt="stellina gialla"
                        width="15px"
                      />
                      <img
                        src="/assets/icons/star.svg"
                        alt="stellina gialla"
                        width="15px"
                      />
                    </div>
                    <p class="atom-homepage-card-price">169,99€</p>
                    <!--       SPAZIO BOTTONE         -->

                    <button
                      class="standard-button standard-button-square button-red"
                    >
                      <div class="spinner-container hidden">
                        <svg class="spinner" viewBox="0 0 66 66">
                          <circle
                            cx="33"
                            cy="33"
                            r="20"
                            fill="none"
                            stroke="#000000"
                            class="spinner-circle"
                          ></circle>
                        </svg>
                      </div>
                      <div class="container-content-standard-button">
                        <div class="testo">Su ordinazione</div>
                      </div>
                    </button>
                  </div>
                </div>
                <div class="atom-homepage-card">
                  <div class="img-container-card">
                    <img
                      src="https://www.lego.com/cdn/cs/set/assets/blte780055922ecc267/60366.png?fit=bounds&format=png&width=320&height=320&dpr=1"
                      alt="main image of the card"
                      class="atom-homepage-card-img"
                    />
                  </div>

                  <div class="atom-homepage-card-content">
                    <h3 class="atom-homepage-card-title">
                      Centro sci e arrampicata
                    </h3>
                    <div class="atom-homepage-card-icons">
                      <img
                        src="/assets/icons/star.svg"
                        alt="stellina gialla"
                        width="15px"
                      />
                      <img
                        src="/assets/icons/star.svg"
                        alt="stellina gialla"
                        width="15px"
                      />
                      <img
                        src="/assets/icons/star.svg"
                        alt="stellina gialla"
                        width="15px"
                      />
                      <img
                        src="/assets/icons/star.svg"
                        alt="stellina gialla"
                        width="15px"
                      />
                      <img
                        src="/assets/icons/star.svg"
                        alt="stellina gialla"
                        width="15px"
                      />
                    </div>
                    <p class="atom-homepage-card-price">104,99€</p>
                    <!--       SPAZIO BOTTONE         -->

                    <button
                      class="standard-button standard-button-square button-red"
                    >
                      <div class="spinner-container hidden">
                        <svg class="spinner" viewBox="0 0 66 66">
                          <circle
                            cx="33"
                            cy="33"
                            r="20"
                            fill="none"
                            stroke="#000000"
                            class="spinner-circle"
                          ></circle>
                        </svg>
                      </div>
                      <div class="container-content-standard-button">
                        <div class="testo">Su ordinazione</div>
                      </div>
                    </button>
                  </div>
                </div>
                <div class="atom-homepage-card">
                  <div class="img-container-card">
                    <img
                      src="https://www.lego.com/cdn/cs/set/assets/blt08ba1f2bb5e8f2fb/10326.png?fit=bounds&format=png&width=320&height=320&dpr=1"
                      alt="main image of the card"
                      class="atom-homepage-card-img"
                    />
                  </div>

                  <div class="atom-homepage-card-content">
                    <h3 class="atom-homepage-card-title">
                      Museo di Storia Naturale
                    </h3>
                    <div class="atom-homepage-card-icons">
                      <img
                        src="/assets/icons/star.svg"
                        alt="stellina gialla"
                        width="15px"
                      />
                      <img
                        src="/assets/icons/star.svg"
                        alt="stellina gialla"
                        width="15px"
                      />
                      <img
                        src="/assets/icons/star.svg"
                        alt="stellina gialla"
                        width="15px"
                      />
                      <img
                        src="/assets/icons/star.svg"
                        alt="stellina gialla"
                        width="15px"
                      />
                      <img
                        src="/assets/icons/star.svg"
                        alt="stellina gialla"
                        width="15px"
                      />
                    </div>
                    <p class="atom-homepage-card-price">299,99€</p>
                    <!--       SPAZIO BOTTONE         -->

                    <button
                      class="standard-button standard-button-square button-red"
                    >
                      <div class="spinner-container hidden">
                        <svg class="spinner" viewBox="0 0 66 66">
                          <circle
                            cx="33"
                            cy="33"
                            r="20"
                            fill="none"
                            stroke="#000000"
                            class="spinner-circle"
                          ></circle>
                        </svg>
                      </div>
                      <div class="container-content-standard-button">
                        <div class="testo">Su ordinazione</div>
                      </div>
                    </button>
                  </div>
                </div>
                <div class="atom-homepage-card">
                  <div class="img-container-card">
                    <img
                      src="https://www.lego.com/cdn/cs/set/assets/blt729f7a96490ebf6f/10304.png?fit=bounds&format=png&width=320&height=320&dpr=1"
                      alt="main image of the card"
                      class="atom-homepage-card-img"
                    />
                  </div>

                  <div class="atom-homepage-card-content">
                    <h3 class="atom-homepage-card-title">
                      Chevrolet Camaro Z28
                    </h3>
                    <div class="atom-homepage-card-icons">
                      <img
                        src="/assets/icons/star.svg"
                        alt="stellina gialla"
                        width="15px"
                      />
                      <img
                        src="/assets/icons/star.svg"
                        alt="stellina gialla"
                        width="15px"
                      />
                      <img
                        src="/assets/icons/star.svg"
                        alt="stellina gialla"
                        width="15px"
                      />
                      <img
                        src="/assets/icons/star.svg"
                        alt="stellina gialla"
                        width="15px"
                      />
                      <img
                        src="/assets/icons/star.svg"
                        alt="stellina gialla"
                        width="15px"
                      />
                    </div>
                    <p class="atom-homepage-card-price">169,99€</p>
                    <!--       SPAZIO BOTTONE         -->

                    <button
                      class="standard-button standard-button-square button-red"
                    >
                      <div class="spinner-container hidden">
                        <svg class="spinner" viewBox="0 0 66 66">
                          <circle
                            cx="33"
                            cy="33"
                            r="20"
                            fill="none"
                            stroke="#000000"
                            class="spinner-circle"
                          ></circle>
                        </svg>
                      </div>
                      <div class="container-content-standard-button">
                        <div class="testo">Su ordinazione</div>
                      </div>
                    </button>
                  </div>
                </div>
                <div class="atom-homepage-card">
                  <div class="img-container-card">
                    <img
                      src="https://www.lego.com/cdn/cs/set/assets/bltc1a3afc5b5af3287/10315.png?fit=bounds&format=png&width=320&height=320&dpr=1"
                      alt="main image of the card"
                      class="atom-homepage-card-img"
                    />
                  </div>

                  <div class="atom-homepage-card-content">
                    <h3 class="atom-homepage-card-title">
                      Il giardino Tranquillo
                    </h3>
                    <div class="atom-homepage-card-icons">
                      <img
                        src="/assets/icons/star.svg"
                        alt="stellina gialla"
                        width="15px"
                      />
                      <img
                        src="/assets/icons/star.svg"
                        alt="stellina gialla"
                        width="15px"
                      />
                      <img
                        src="/assets/icons/star.svg"
                        alt="stellina gialla"
                        width="15px"
                      />
                      <img
                        src="/assets/icons/star.svg"
                        alt="stellina gialla"
                        width="15px"
                      />
                      <img
                        src="/assets/icons/star.svg"
                        alt="stellina gialla"
                        width="15px"
                      />
                    </div>
                    <p class="atom-homepage-card-price">104,99€</p>
                    <!--       SPAZIO BOTTONE         -->

                    <button
                      class="standard-button standard-button-square button-red"
                    >
                      <div class="spinner-container hidden">
                        <svg class="spinner" viewBox="0 0 66 66">
                          <circle
                            cx="33"
                            cy="33"
                            r="20"
                            fill="none"
                            stroke="#000000"
                            class="spinner-circle"
                          ></circle>
                        </svg>
                      </div>
                      <div class="container-content-standard-button">
                        <div class="testo">Su ordinazione</div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>

              <button class="prev-button">
                <svg viewBox="0 0 40 40" class="next round-butt">
                  <g fill="none" fill-rule="evenodd">
                    <rect opacity="1" width="38" height="38" rx="20"></rect>
                    <path
                      d="M16.42 9L29 20 16.42 31 15 29.653 26.042 20 15 10.347z"
                      class="next"
                    ></path>
                  </g>
                </svg>
              </button>
              <button class="next-button">
                <svg viewBox="0 0 40 40" class="next round-butt">
                  <g fill="none" fill-rule="evenodd">
                    <rect opacity="1"></rect>
                    <path
                      d="M16.42 9L29 20 16.42 31 15 29.653 26.042 20 15 10.347z"
                      class="next"
                    ></path>
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Secondo accordion tab -->
      <div class="product-details-accordion-holder">
        <button class="product-details-accordion-button">
          <div class="content-accordion-button">
            <h2>Dettagli del prodotto</h2>
          </div>
          <div>
            <img
              src="https://www.svgrepo.com/show/2087/plus.svg"
              width="15px"
            />
          </div>
        </button>
      </div>
      <!-- Content inside second tab -->
      <div class="product-details-accordion-panel">
        <div class="product-details-list-container">
          <div class="detail-list-main-content">
            <p>
              Benvenuto alla Baita alpina LEGO® Icons (10325), l’ultima novità
              nella popolare collezione Villaggio invernale LEGO. Prenditi una
              pausa e realizza un accogliente bed and breakfast innevato con
              camere confortevoli e caminetti accesi.
            </p>
            <p>
              Dettagli fantastici <br />
              Questo modello di baita a 3 livelli contiene una reception
              arredata con bancone del check-in, caminetto illuminato e macchina
              per il caffè, una camera per gli ospiti al secondo piano con
              caminetto illuminato e 2 letti, e una camera da letto soppalcata
              al terzo piano. Le caratteristiche esterne includono un negozio di
              legna, un box per gli sci, un’area di pattinaggio e cabina-WC, più
              una motoslitta, un albero di Natale, 5 minifigure e uccelli, gatti
              e scoiattoli.
            </p>
            <p>
              Un modello festivo per tutta la famiglia <br />Scopri uno spazio
              per il relax con questo set LEGO di alta qualità, una fantastica
              idea regalo per i fan della collezione Villaggio invernale LEGO
              con istruzioni per la costruzione separate per bambini e adulti.
            </p>
            <ul>
              <li>
                Un festoso progetto di costruzione in famiglia: trascorri del
                tempo di qualità realizzando tutti i dettagli della Baita alpina
                LEGO® Icons (10325)
              </li>
              <li>
                Cosa c’è nella scatola? Tutto il necessario per costruire la
                baita alpina a 3 piani, l’area di pattinaggio all’aperto, la
                cabina-WC, la motoslitta e il rimorchio, più un albero di
                Natale, 5 minifigure e un gatto, uno scoiattolo e un uccello
              </li>
              <li>
                Caratteristiche e funzioni: premi il comignolo per accendere i
                caminetti nella reception e nella camera degli ospiti al secondo
                piano
              </li>
              <li>
                Un regalo LEGO®: regala questo set da costruzione per il
                compleanno, il Natale o qualsiasi altra occasione a un fan
                adulto dei set da costruzione LEGO e della collezione Villaggio
                invernale LEGO
              </li>
              <li>
                Dimensioni: il modello della baita misura 21 cm di altezza, 24
                cm di larghezza e 16 cm di profondità
              </li>
              <li>
                Accessori: il set include un albero di Natale, decorazioni per
                l’albero di Natale e un libro degli ospiti
              </li>
              <li>
                Istruzioni per la costruzione digitale: l’app LEGO® Builder
                contiene una versione digitale delle istruzioni di montaggio
                incluse in questo set
              </li>
              <li>
                Progetti LEGO® pieni di mindfulness per gli adulti e le
                famiglie: questo set da costruzione fa parte di una gamma di
                modelli avanzati progettati per gli adulti, le famiglie e gli
                amici
              </li>
              <li>
                Materiali di qualità: dal 1958, i mattoncini da costruzione
                LEGO® sono prodotti con materiali di prima qualità. Sono sempre
                uniformi e compatibili e si montano e si smontano facilmente
              </li>
              <li>
                Garanzia di sicurezza: con i pezzi LEGO®, la sicurezza e la
                qualità sono una priorità. Sono infatti rigorosamente testati,
                per assicurare che questo modello di hotel sia tanto sicuro e
                robusto
              </li>
            </ul>
          </div>
          <div class="product-list-details-image">
            <img
              src="${el.img1}"
              alt=""
            />
          </div>
        </div>
      </div>

      <!-- Terzo accordion tab -->
      <div class="product-details-accordion-holder">
        <button class="product-details-accordion-button">
          <div class="content-accordion-button">
            <h2>Recensioni di Prodotti</h2>
            <div class="content-accordion-review-extra">
              <img src="/assets/icons/star.svg" width="15px" alt="" />
              <img src="/assets/icons/star.svg" width="15px" alt="" />
              <img src="/assets/icons/star.svg" width="15px" alt="" />
              <img src="/assets/icons/star.svg" width="15px" alt="" />
              <img src="/assets/icons/star.svg" width="15px" alt="" />
            </div>
            <span>9 Recensioni</span>
          </div>
          <div>
            <img
              src="https://www.svgrepo.com/show/2087/plus.svg"
              width="15px"
            />
          </div>
        </button>
      </div>
      <!-- Content inside third tab -->
      <div class="product-details-accordion-panel">
        <div class="accordion-review-header">
          <div class="full-review-content">
            <p>Valutazione complessiva</p>
            <div class="full-review-content-title">
              <img src="/assets/icons/star.svg" width="15px" alt="" />
              <img src="/assets/icons/star.svg" width="15px" alt="" />
              <img src="/assets/icons/star.svg" width="15px" alt="" />
              <img src="/assets/icons/star.svg" width="15px" alt="" />
              <img src="/assets/icons/star.svg" width="15px" alt="" />
              <p>4.8</p>
              <p>(9 recensioni)</p>
            </div>

            <div>
              <span>96% degli autori consiglierebbe questo prodotto</span>
            </div>
            <div class="full-review-doublediv">
              <div class="full-review-left">
                <h3>Valutazione</h3>
                <div class="review-left-content">
                  <div class="left-content-button">
                    5 stelle
                    <div class="left-content-buttons-bar">
                      <div class="buttons-bar-100"></div>
                    </div>
                    109 recensioni
                  </div>
                  <div class="left-content-button">
                    4 stelle
                    <div class="left-content-buttons-bar">
                      <div class="buttons-bar-100"></div>
                    </div>
                    17 recensioni
                  </div>
                  <div class="left-content-button">
                    3 stelle
                    <div class="left-content-buttons-bar">
                      <div class="buttons-bar-44"></div>
                    </div>
                    3 recensioni
                  </div>
                  <div class="left-content-button">
                    2 stelle
                    <div class="left-content-buttons-bar">
                      <div class="buttons-bar-11"></div>
                    </div>
                    0 recensioni
                  </div>
                  <div class="left-content-button">
                    1 stelle
                    <div class="left-content-buttons-bar">
                      <div class="buttons-bar-0"></div>
                    </div>
                    0 recensioni
                  </div>
                </div>
              </div>
              <div class="full-review-right">
                <p>Esperienza complessiva</p>
                <p>Esperienza di gioco</p>
                <div class="review-right-icons">
                  <img
                    class="review-icon-legobrick"
                    src="https://www.lego.com/_next/static/images/brickActive-bdeb6d559725fa0f969db49dc6f55a39.svg"
                    alt=""
                    width="15px"
                  /><img
                    class="review-icon-legobrick"
                    src="https://www.lego.com/_next/static/images/brickActive-bdeb6d559725fa0f969db49dc6f55a39.svg"
                    alt=""
                    width="15px"
                  /><img
                    class="review-icon-legobrick"
                    src="https://www.lego.com/_next/static/images/brickActive-bdeb6d559725fa0f969db49dc6f55a39.svg"
                    alt=""
                    width="15px"
                  /><img
                    class="review-icon-legobrick"
                    src="https://www.lego.com/_next/static/images/brickActive-bdeb6d559725fa0f969db49dc6f55a39.svg"
                    alt=""
                    width="15px"
                  /><img
                    class="review-icon-legobrick"
                    src="https://www.lego.com/_next/static/images/halfBrick-fdb4b33287fe96ad9a098eda517dcd1c.svg"
                    alt=""
                    width="15px"
                  />
                  4.5
                </div>
                <p>Rapporto qualità prezzo</p>
                <div class="review-right-icons">
                  <img
                    class="review-icon-legobrick"
                    src="https://www.lego.com/_next/static/images/brickActive-bdeb6d559725fa0f969db49dc6f55a39.svg"
                    alt=""
                    width="15px"
                  /><img
                    class="review-icon-legobrick"
                    src="https://www.lego.com/_next/static/images/brickActive-bdeb6d559725fa0f969db49dc6f55a39.svg"
                    alt=""
                    width="15px"
                  /><img
                    class="review-icon-legobrick"
                    src="https://www.lego.com/_next/static/images/brickActive-bdeb6d559725fa0f969db49dc6f55a39.svg"
                    alt=""
                    width="15px"
                  /><img
                    class="review-icon-legobrick"
                    src="https://www.lego.com/_next/static/images/brickActive-bdeb6d559725fa0f969db49dc6f55a39.svg"
                    alt=""
                    width="15px"
                  /><img
                    class="review-icon-legobrick"
                    src="https://www.lego.com/_next/static/images/halfBrick-fdb4b33287fe96ad9a098eda517dcd1c.svg"
                    alt=""
                    width="15px"
                  />
                  4.6
                </div>
              </div>
            </div>
          </div>
          <div class="full-review-button">
            <button class="review-button">Invia recensione</button>
          </div>
          <div class="full-review-message">
            <span
              ><i
                >Quando si esprime un voto sull'utilità di una recensione,
                l'indirizzo IP viene rilevato e memorizzato dal nostro fornitore
                di servizi di fiducia al fine di evitare l'inserimento di
                molteplici voti dallo stesso indirizzo IP. Per informazioni su
                come controllare i propri dati personali, vedere la nostra
              </i></span
            >
          </div>
        </div>
        <!-- Review container/s -->
        <div class="container-review">
          <p class="markup-date">
            <span class="date">December 6th, 2022</span>
          </p>
          <div class="container-stars">
            <div class="markup-star">
              <img
                src="https://www.lego.com/_next/static/images/starActive-8f24279ea4ef0bb5bb5e8af9fbab2aab.svg"
                class="star"
              />
            </div>
            <div class="markup-star">
              <img
                src="https://www.lego.com/_next/static/images/starActive-8f24279ea4ef0bb5bb5e8af9fbab2aab.svg"
                class="star"
              />
            </div>
            <div class="markup-star">
              <img
                src="https://www.lego.com/_next/static/images/starActive-8f24279ea4ef0bb5bb5e8af9fbab2aab.svg"
                class="star"
              />
            </div>
            <div class="markup-star">
              <img
                src="https://www.lego.com/_next/static/images/starActive-8f24279ea4ef0bb5bb5e8af9fbab2aab.svg"
                class="star"
              />
            </div>
            <div class="markup-star">
              <img
                src="https://www.lego.com/_next/static/images/starActive-8f24279ea4ef0bb5bb5e8af9fbab2aab.svg"
                class="star"
              />
            </div>
            <span class="vote">5.0</span>
          </div>
          <p class="markup-title">
            <span class="title">Speciale!</span>
          </p>
          <span class="userID">
            <p class="ID">gianlucam1</p>
          </span>
          <p class="first-comment">Sì, consiglio questo prodotto.</p>
          <p class="gift">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="39"
              viewBox="0 0 26 39"
              aria-hidden="true"
              class="gift-svg"
            >
              <g
                fill="#FFF"
                stroke="#006DB7"
                stroke-width="1.339"
                fill-rule="evenodd"
              >
                <path
                  d="M11.644 5.478l-.735 3.21-3.232-.634-.493.32-.342 1.49.282.433 5.53 1.085.001-.004h.004l1.239-5.405-.35-.54-1.41-.276zM5.358 18.307l-.097.597 2.014 3.1.554.16.61-.39 6.564-4.263-2.498-3.845zM14.752 12.207l2.497 3.845 7.18-4.663.113-.5L22.5 7.743l-.58-.19zM17.964 25.676v11.92h6.577l.566-.553V25.676zM8.143 25.676V37.09l.534.506h6.609V25.676z"
                ></path>
              </g>
            </svg>
            <span class="gift-text"
              >Prodotto ricevuto in omaggio da LEGO Group</span
            >
          </p>
          <div class="comment">
            <div class="text-photo">
              <div class="container-reviewText">
                <span class="review-text"
                  >Sono molto contento di avere questo pezzo da collezione tra
                  le mie mani! Per gli appasionati di videogiochi questo può
                  essere un regalo bellissimo! É così bello che non voglio ne
                  anche tirarlo fuori dalla scatola. Lo consiglio
                  vivamente</span
                >
              </div>
              <div class="container-photo">
                <button class="photo-button">
                  <div class="photo-div">
                    <img
                      src="https://photos-eu.bazaarvoice.com/photo/2/cGhvdG86bGVnby1nbG9iYWw/86922092-a710-5107-9c44-71b833f9e414"
                      class="photo"
                    />
                  </div>
                </button>
                <button class="photo-button">
                  <div class="photo-div">
                    <img
                      src="https://photos-eu.bazaarvoice.com/photo/2/cGhvdG86bGVnby1nbG9iYWw/adf907d6-c203-53b7-8bb4-996dd0eade93"
                      class="photo"
                    />
                  </div>
                </button>
                <button class="photo-button">
                  <div class="photo-div">
                    <img
                      src="https://photos-eu.bazaarvoice.com/photo/2/cGhvdG86bGVnby1nbG9iYWw/81794f24-d3f2-576d-9b7d-168b44e59b10"
                      class="photo"
                    />
                  </div>
                </button>
              </div>
            </div>
            <div class="space"></div>
          </div>
          <p class="answer">É stato utile?</p>
          <div class="opinion">
            <div class="container-like">
              <button class="like" onclick="pushLike()">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  class="likeSvg"
                >
                  <path
                    d="M.993 20h4V8H0l.993 12zm18.928-8.645l-1.737 6.535A2.727 2.727 0 0 1 15.519 20H5.993V8.021l1.719-6.196a2.152 2.152 0 0 1 4.28.328V8h5.264a2.739 2.739 0 0 1 2.665 3.355z"
                    fill-rule="evenodd"
                  ></path>
                </svg>
                <span class="numLike"> 1</span>
              </button>
              <div class="container-dislike">
                <button class="dislike" onclick="pushDislike()">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    class="dislikeSvg"
                  >
                    <g fill-rule="evenodd">
                      <path
                        d="M.993 0h4v12H0L.993 0zM19.92 8.645L18.184 2.11A2.727 2.727 0 0 0 15.519 0H5.993v11.979l1.719 6.196a2.152 2.152 0 0 0 4.28-.328V12h5.264a2.739 2.739 0 0 0 2.665-3.355z"
                      ></path>
                    </g>
                  </svg>
                  <span class="numDislike"> 2 </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

        <div class="container-total-carousel">
      <h2 class="header-carousel">Consigliati per te!</h2>
      <div class="carousel-container">
        <div class="carousel">
          <div class="atom-homepage-card">
            <div class="img-container-card">
              <img
                src="https://www.lego.com/cdn/cs/set/assets/bltfb3ccae42fc241c7/10308.png?fit=bounds&format=png&width=320&height=320&dpr=1"
                alt="main image of the card"
                class="atom-homepage-card-img"
              />
            </div>

            <div class="atom-homepage-card-content">
              <h3 class="atom-homepage-card-title">
                Natale nella strada principale
              </h3>
              <div class="atom-homepage-card-icons">
                <img
                  src="/assets/icons/star.svg"
                  alt="stellina gialla"
                  width="15px"
                />
                <img
                  src="/assets/icons/star.svg"
                  alt="stellina gialla"
                  width="15px"
                />
                <img
                  src="/assets/icons/star.svg"
                  alt="stellina gialla"
                  width="15px"
                />
                <img
                  src="/assets/icons/star.svg"
                  alt="stellina gialla"
                  width="15px"
                />
                <img
                  src="/assets/icons/halfStar.svg"
                  alt="stellina gialla"
                  width="15px"
                />
              </div>
              <p class="atom-homepage-card-price">99,99€</p>
              <!--       SPAZIO BOTTONE         -->

              <button class="standard-button standard-button-square button-red">
                <div class="spinner-container hidden">
                  <svg class="spinner" viewBox="0 0 66 66">
                    <circle
                      cx="33"
                      cy="33"
                      r="20"
                      fill="none"
                      stroke="#000000"
                      class="spinner-circle"
                    ></circle>
                  </svg>
                </div>
                <div class="container-content-standard-button">
                  <div class="testo">Su ordinazione</div>
                </div>
              </button>
            </div>
          </div>
          <div class="atom-homepage-card">
            <div class="img-container-card">
              <img
                src="https://www.lego.com/cdn/cs/set/assets/blte9e3f43203ffb465/40658.png?fit=bounds&format=png&width=320&height=320&dpr=1"
                alt="main image of the card"
                class="atom-homepage-card-img"
              />
            </div>

            <div class="atom-homepage-card-content">
              <h3 class="atom-homepage-card-title">
                Diorama Millenium falcon™
              </h3>
              <div class="atom-homepage-card-icons">
                <img
                  src="/assets/icons/star.svg"
                  alt="stellina gialla"
                  width="15px"
                />
                <img
                  src="/assets/icons/star.svg"
                  alt="stellina gialla"
                  width="15px"
                />
                <img
                  src="/assets/icons/star.svg"
                  alt="stellina gialla"
                  width="15px"
                />
                <img
                  src="/assets/icons/star.svg"
                  alt="stellina gialla"
                  width="15px"
                />
                <img
                  src="/assets/icons/halfStar.svg"
                  alt="stellina gialla"
                  width="15px"
                />
              </div>
              <p class="atom-homepage-card-price">29,99€</p>
              <!--       SPAZIO BOTTONE         -->

              <button class="standard-button standard-button-square button-red">
                <div class="spinner-container hidden">
                  <svg class="spinner" viewBox="0 0 66 66">
                    <circle
                      cx="33"
                      cy="33"
                      r="20"
                      fill="none"
                      stroke="#000000"
                      class="spinner-circle"
                    ></circle>
                  </svg>
                </div>
                <div class="container-content-standard-button">
                  <div class="testo">Su ordinazione</div>
                </div>
              </button>
            </div>
          </div>
          <div class="atom-homepage-card">
            <div class="img-container-card">
              <img
                src="https://www.lego.com/cdn/cs/set/assets/bltb148945c2bb2f149/10293.jpg?fit=bounds&format=jpg&quality=80&width=320&height=320&dpr=1"
                alt="main image of the card"
                class="atom-homepage-card-img"
              />
            </div>

            <div class="atom-homepage-card-content">
              <h3 class="atom-homepage-card-title">
                La visita di Babbo Natale
              </h3>
              <div class="atom-homepage-card-icons">
                <img
                  src="/assets/icons/star.svg"
                  alt="stellina gialla"
                  width="15px"
                />
                <img
                  src="/assets/icons/star.svg"
                  alt="stellina gialla"
                  width="15px"
                />
                <img
                  src="/assets/icons/star.svg"
                  alt="stellina gialla"
                  width="15px"
                />
                <img
                  src="/assets/icons/star.svg"
                  alt="stellina gialla"
                  width="15px"
                />
                <img
                  src="/assets/icons/halfStar.svg"
                  alt="stellina gialla"
                  width="15px"
                />
              </div>
              <p class="atom-homepage-card-price">99,99€</p>
              <!--       SPAZIO BOTTONE         -->

              <button class="standard-button standard-button-square button-red">
                <div class="spinner-container hidden">
                  <svg class="spinner" viewBox="0 0 66 66">
                    <circle
                      cx="33"
                      cy="33"
                      r="20"
                      fill="none"
                      stroke="#000000"
                      class="spinner-circle"
                    ></circle>
                  </svg>
                </div>
                <div class="container-content-standard-button">
                  <div class="testo">Su ordinazione</div>
                </div>
              </button>
            </div>
          </div>
          <div class="atom-homepage-card">
            <div class="img-container-card">
              <img
                src="https://www.lego.com/cdn/cs/set/assets/blt331198c8f34e2d7a/21343.png?fit=bounds&format=png&width=320&height=320&dpr=1"
                alt="main image of the card"
                class="atom-homepage-card-img"
              />
            </div>

            <div class="atom-homepage-card-content">
              <h3 class="atom-homepage-card-title">Villaggio vichingo</h3>
              <div class="atom-homepage-card-icons">
                <img
                  src="/assets/icons/star.svg"
                  alt="stellina gialla"
                  width="15px"
                />
                <img
                  src="/assets/icons/star.svg"
                  alt="stellina gialla"
                  width="15px"
                />
                <img
                  src="/assets/icons/star.svg"
                  alt="stellina gialla"
                  width="15px"
                />
                <img
                  src="/assets/icons/star.svg"
                  alt="stellina gialla"
                  width="15px"
                />
                <img
                  src="/assets/icons/star.svg"
                  alt="stellina gialla"
                  width="15px"
                />
              </div>
              <p class="atom-homepage-card-price">139,99€</p>
              <!--       SPAZIO BOTTONE         -->

              <button class="standard-button standard-button-square button-red">
                <div class="spinner-container hidden">
                  <svg class="spinner" viewBox="0 0 66 66">
                    <circle
                      cx="33"
                      cy="33"
                      r="20"
                      fill="none"
                      stroke="#000000"
                      class="spinner-circle"
                    ></circle>
                  </svg>
                </div>
                <div class="container-content-standard-button">
                  <div class="testo">Su ordinazione</div>
                </div>
              </button>
            </div>
          </div>
          <div class="atom-homepage-card">
            <div class="img-container-card">
              <img
                src="https://www.lego.com/cdn/cs/set/assets/bltb7d457aa2ce9f859/40499_Prod.png?fit=bounds&format=png&width=320&height=320&dpr=1"
                alt="main image of the card"
                class="atom-homepage-card-img"
              />
            </div>

            <div class="atom-homepage-card-content">
              <h3 class="atom-homepage-card-title">
                La slitta di Babbo Natale
              </h3>
              <div class="atom-homepage-card-icons">
                <img
                  src="/assets/icons/star.svg"
                  alt="stellina gialla"
                  width="15px"
                />
                <img
                  src="/assets/icons/star.svg"
                  alt="stellina gialla"
                  width="15px"
                />
                <img
                  src="/assets/icons/star.svg"
                  alt="stellina gialla"
                  width="15px"
                />
                <img
                  src="/assets/icons/star.svg"
                  alt="stellina gialla"
                  width="15px"
                />
                <img
                  src="/assets/icons/star.svg"
                  alt="stellina gialla"
                  width="15px"
                />
              </div>
              <p class="atom-homepage-card-price">44,99€</p>
              <!--       SPAZIO BOTTONE         -->

              <button class="standard-button standard-button-square button-red">
                <div class="spinner-container hidden">
                  <svg class="spinner" viewBox="0 0 66 66">
                    <circle
                      cx="33"
                      cy="33"
                      r="20"
                      fill="none"
                      stroke="#000000"
                      class="spinner-circle"
                    ></circle>
                  </svg>
                </div>
                <div class="container-content-standard-button">
                  <div class="testo">Su ordinazione</div>
                </div>
              </button>
            </div>
          </div>
          <div class="atom-homepage-card">
            <div class="img-container-card">
              <img
                src="https://www.lego.com/cdn/cs/set/assets/blt3d62bb5d68e6dbd7/10295.jpg?fit=bounds&format=jpg&quality=80&width=320&height=320&dpr=1"
                alt="main image of the card"
                class="atom-homepage-card-img"
              />
            </div>

            <div class="atom-homepage-card-content">
              <h3 class="atom-homepage-card-title">Porsche 911</h3>
              <div class="atom-homepage-card-icons">
                <img
                  src="/assets/icons/star.svg"
                  alt="stellina gialla"
                  width="15px"
                />
                <img
                  src="/assets/icons/star.svg"
                  alt="stellina gialla"
                  width="15px"
                />
                <img
                  src="/assets/icons/star.svg"
                  alt="stellina gialla"
                  width="15px"
                />
                <img
                  src="/assets/icons/star.svg"
                  alt="stellina gialla"
                  width="15px"
                />
                <img
                  src="/assets/icons/halfStar.svg"
                  alt="stellina gialla"
                  width="15px"
                />
              </div>
              <p class="atom-homepage-card-price">169,99€</p>
              <!--       SPAZIO BOTTONE         -->

              <button class="standard-button standard-button-square button-red">
                <div class="spinner-container hidden">
                  <svg class="spinner" viewBox="0 0 66 66">
                    <circle
                      cx="33"
                      cy="33"
                      r="20"
                      fill="none"
                      stroke="#000000"
                      class="spinner-circle"
                    ></circle>
                  </svg>
                </div>
                <div class="container-content-standard-button">
                  <div class="testo">Su ordinazione</div>
                </div>
              </button>
            </div>
          </div>
          <div class="atom-homepage-card">
            <div class="img-container-card">
              <img
                src="https://www.lego.com/cdn/cs/set/assets/blt2564f1fe0e59bb78/10321.png?fit=bounds&format=png&width=320&height=320&dpr=1"
                alt="main image of the card"
                class="atom-homepage-card-img"
              />
            </div>

            <div class="atom-homepage-card-content">
              <h3 class="atom-homepage-card-title">Corvette</h3>
              <div class="atom-homepage-card-icons">
                <img
                  src="/assets/icons/star.svg"
                  alt="stellina gialla"
                  width="15px"
                />
                <img
                  src="/assets/icons/star.svg"
                  alt="stellina gialla"
                  width="15px"
                />
                <img
                  src="/assets/icons/star.svg"
                  alt="stellina gialla"
                  width="15px"
                />
                <img
                  src="/assets/icons/star.svg"
                  alt="stellina gialla"
                  width="15px"
                />
                <img
                  src="/assets/icons/star.svg"
                  alt="stellina gialla"
                  width="15px"
                />
              </div>
              <p class="atom-homepage-card-price">149,99€</p>
              <!--       SPAZIO BOTTONE         -->

              <button class="standard-button standard-button-square button-red">
                <div class="spinner-container hidden">
                  <svg class="spinner" viewBox="0 0 66 66">
                    <circle
                      cx="33"
                      cy="33"
                      r="20"
                      fill="none"
                      stroke="#000000"
                      class="spinner-circle"
                    ></circle>
                  </svg>
                </div>
                <div class="container-content-standard-button">
                  <div class="testo">Su ordinazione</div>
                </div>
              </button>
            </div>
          </div>
          <div class="atom-homepage-card">
            <div class="img-container-card">
              <img
                src="https://www.lego.com/cdn/cs/set/assets/blte09f96efc93d5c1d/76419.png?fit=bounds&format=png&width=320&height=320&dpr=1"
                alt="main image of the card"
                class="atom-homepage-card-img"
              />
            </div>

            <div class="atom-homepage-card-content">
              <h3 class="atom-homepage-card-title">
                Castello e parco di Hogwarts™
              </h3>
              <div class="atom-homepage-card-icons">
                <img
                  src="/assets/icons/star.svg"
                  alt="stellina gialla"
                  width="15px"
                />
                <img
                  src="/assets/icons/star.svg"
                  alt="stellina gialla"
                  width="15px"
                />
                <img
                  src="/assets/icons/star.svg"
                  alt="stellina gialla"
                  width="15px"
                />
                <img
                  src="/assets/icons/star.svg"
                  alt="stellina gialla"
                  width="15px"
                />
                <img
                  src="/assets/icons/star.svg"
                  alt="stellina gialla"
                  width="15px"
                />
              </div>
              <p class="atom-homepage-card-price">169,99€</p>
              <!--       SPAZIO BOTTONE         -->

              <button class="standard-button standard-button-square button-red">
                <div class="spinner-container hidden">
                  <svg class="spinner" viewBox="0 0 66 66">
                    <circle
                      cx="33"
                      cy="33"
                      r="20"
                      fill="none"
                      stroke="#000000"
                      class="spinner-circle"
                    ></circle>
                  </svg>
                </div>
                <div class="container-content-standard-button">
                  <div class="testo">Su ordinazione</div>
                </div>
              </button>
            </div>
          </div>
          <div class="atom-homepage-card">
            <div class="img-container-card">
              <img
                src="https://www.lego.com/cdn/cs/set/assets/blte780055922ecc267/60366.png?fit=bounds&format=png&width=320&height=320&dpr=1"
                alt="main image of the card"
                class="atom-homepage-card-img"
              />
            </div>

            <div class="atom-homepage-card-content">
              <h3 class="atom-homepage-card-title">Centro sci e arrampicata</h3>
              <div class="atom-homepage-card-icons">
                <img
                  src="/assets/icons/star.svg"
                  alt="stellina gialla"
                  width="15px"
                />
                <img
                  src="/assets/icons/star.svg"
                  alt="stellina gialla"
                  width="15px"
                />
                <img
                  src="/assets/icons/star.svg"
                  alt="stellina gialla"
                  width="15px"
                />
                <img
                  src="/assets/icons/star.svg"
                  alt="stellina gialla"
                  width="15px"
                />
                <img
                  src="/assets/icons/star.svg"
                  alt="stellina gialla"
                  width="15px"
                />
              </div>
              <p class="atom-homepage-card-price">104,99€</p>
              <!--       SPAZIO BOTTONE         -->

              <button class="standard-button standard-button-square button-red">
                <div class="spinner-container hidden">
                  <svg class="spinner" viewBox="0 0 66 66">
                    <circle
                      cx="33"
                      cy="33"
                      r="20"
                      fill="none"
                      stroke="#000000"
                      class="spinner-circle"
                    ></circle>
                  </svg>
                </div>
                <div class="container-content-standard-button">
                  <div class="testo">Su ordinazione</div>
                </div>
              </button>
            </div>
          </div>
          <div class="atom-homepage-card">
            <div class="img-container-card">
              <img
                src="https://www.lego.com/cdn/cs/set/assets/blt08ba1f2bb5e8f2fb/10326.png?fit=bounds&format=png&width=320&height=320&dpr=1"
                alt="main image of the card"
                class="atom-homepage-card-img"
              />
            </div>

            <div class="atom-homepage-card-content">
              <h3 class="atom-homepage-card-title">Museo di Storia Naturale</h3>
              <div class="atom-homepage-card-icons">
                <img
                  src="/assets/icons/star.svg"
                  alt="stellina gialla"
                  width="15px"
                />
                <img
                  src="/assets/icons/star.svg"
                  alt="stellina gialla"
                  width="15px"
                />
                <img
                  src="/assets/icons/star.svg"
                  alt="stellina gialla"
                  width="15px"
                />
                <img
                  src="/assets/icons/star.svg"
                  alt="stellina gialla"
                  width="15px"
                />
                <img
                  src="/assets/icons/star.svg"
                  alt="stellina gialla"
                  width="15px"
                />
              </div>
              <p class="atom-homepage-card-price">299,99€</p>
              <!--       SPAZIO BOTTONE         -->

              <button class="standard-button standard-button-square button-red">
                <div class="spinner-container hidden">
                  <svg class="spinner" viewBox="0 0 66 66">
                    <circle
                      cx="33"
                      cy="33"
                      r="20"
                      fill="none"
                      stroke="#000000"
                      class="spinner-circle"
                    ></circle>
                  </svg>
                </div>
                <div class="container-content-standard-button">
                  <div class="testo">Su ordinazione</div>
                </div>
              </button>
            </div>
          </div>
          <div class="atom-homepage-card">
            <div class="img-container-card">
              <img
                src="https://www.lego.com/cdn/cs/set/assets/blt729f7a96490ebf6f/10304.png?fit=bounds&format=png&width=320&height=320&dpr=1"
                alt="main image of the card"
                class="atom-homepage-card-img"
              />
            </div>

            <div class="atom-homepage-card-content">
              <h3 class="atom-homepage-card-title">Chevrolet Camaro Z28</h3>
              <div class="atom-homepage-card-icons">
                <img
                  src="/assets/icons/star.svg"
                  alt="stellina gialla"
                  width="15px"
                />
                <img
                  src="/assets/icons/star.svg"
                  alt="stellina gialla"
                  width="15px"
                />
                <img
                  src="/assets/icons/star.svg"
                  alt="stellina gialla"
                  width="15px"
                />
                <img
                  src="/assets/icons/star.svg"
                  alt="stellina gialla"
                  width="15px"
                />
                <img
                  src="/assets/icons/star.svg"
                  alt="stellina gialla"
                  width="15px"
                />
              </div>
              <p class="atom-homepage-card-price">169,99€</p>
              <!--       SPAZIO BOTTONE         -->

              <button class="standard-button standard-button-square button-red">
                <div class="spinner-container hidden">
                  <svg class="spinner" viewBox="0 0 66 66">
                    <circle
                      cx="33"
                      cy="33"
                      r="20"
                      fill="none"
                      stroke="#000000"
                      class="spinner-circle"
                    ></circle>
                  </svg>
                </div>
                <div class="container-content-standard-button">
                  <div class="testo">Su ordinazione</div>
                </div>
              </button>
            </div>
          </div>
          <div class="atom-homepage-card">
            <div class="img-container-card">
              <img
                src="https://www.lego.com/cdn/cs/set/assets/bltc1a3afc5b5af3287/10315.png?fit=bounds&format=png&width=320&height=320&dpr=1"
                alt="main image of the card"
                class="atom-homepage-card-img"
              />
            </div>

            <div class="atom-homepage-card-content">
              <h3 class="atom-homepage-card-title">Il giardino Tranquillo</h3>
              <div class="atom-homepage-card-icons">
                <img
                  src="/assets/icons/star.svg"
                  alt="stellina gialla"
                  width="15px"
                />
                <img
                  src="/assets/icons/star.svg"
                  alt="stellina gialla"
                  width="15px"
                />
                <img
                  src="/assets/icons/star.svg"
                  alt="stellina gialla"
                  width="15px"
                />
                <img
                  src="/assets/icons/star.svg"
                  alt="stellina gialla"
                  width="15px"
                />
                <img
                  src="/assets/icons/star.svg"
                  alt="stellina gialla"
                  width="15px"
                />
              </div>
              <p class="atom-homepage-card-price">104,99€</p>
              <!--       SPAZIO BOTTONE         -->

              <button class="standard-button standard-button-square button-red">
                <div class="spinner-container hidden">
                  <svg class="spinner" viewBox="0 0 66 66">
                    <circle
                      cx="33"
                      cy="33"
                      r="20"
                      fill="none"
                      stroke="#000000"
                      class="spinner-circle"
                    ></circle>
                  </svg>
                </div>
                <div class="container-content-standard-button">
                  <div class="testo">Su ordinazione</div>
                </div>
              </button>
            </div>
          </div>
        </div>

        <button class="prev-button">
          <svg viewBox="0 0 40 40" class="next round-butt">
            <g fill="none" fill-rule="evenodd">
              <rect opacity="1" width="38" height="38" rx="20"></rect>
              <path
                d="M16.42 9L29 20 16.42 31 15 29.653 26.042 20 15 10.347z"
                class="next"
              ></path>
            </g>
          </svg>
        </button>
        <button class="next-button">
          <svg viewBox="0 0 40 40" class="next round-butt">
            <g fill="none" fill-rule="evenodd">
              <rect opacity="1"></rect>
              <path
                d="M16.42 9L29 20 16.42 31 15 29.653 26.042 20 15 10.347z"
                class="next"
              ></path>
            </g>
          </svg>
        </button>
      </div>
    </div>


`;
          /* -----------------------
    FASE DI PREPARAZIONE
-------------------------- */
          let swiper = new Swiper(".mySwiper", {
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });

          const buttonMinus = document.querySelector(
            ".product-card-quantity-minus"
          );
          const buttonMinusImg = document.querySelector(".minus");
          const buttonPlus = document.querySelector(
            ".product-card-quantity-plus"
          );
          const maxInput = document.querySelector("#product-card-input");
          const imgCarousel = document.querySelectorAll(
            ".product-card-carrosel-img"
          );
          const imgActive = document.querySelector(".swiper-slide-active img");

          const accordionButtons = document.getElementsByClassName(
            "product-details-accordion-holder"
          );
          /* CAROUSEL JS */
          const carousel = document.querySelectorAll(".carousel");
          const prevButton = document.querySelectorAll(".prev-button");
          const nextButton = document.querySelectorAll(".next-button");

          /* -----------------------
        LOGICA
--------------------------*/

          for (let i = 0; i < accordionButtons.length; i++) {
            accordionButtons[i].nextElementSibling.style.display = "none";
            accordionButtons[i].addEventListener("click", function () {
              let panel = this.nextElementSibling;
              if (panel.style.display === "block") {
                panel.style.display = "none";
              } else {
                panel.style.display = "block";
              }
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
              if (
                currentPosition >
                carousel[i].scrollWidth - carousel[i].offsetWidth
              ) {
                currentPosition =
                  carousel[i].scrollWidth - carousel[i].offsetWidth;
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

          /* ----------------------
        FUNZIONI
-------------------------*/

          var likeClicked = false; // Variabile per tenere traccia se il pulsante Like è stato cliccato
          var dislikeClicked = false; // Variabile per tenere traccia se il pulsante Dislike è stato cliccato

          function pushLike() {
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
          }

          function pushDislike() {
            var numDislikeElement =
              document.getElementsByClassName("numDislike")[0];
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
          }

          function toggleVignetta() {
            var vignetta = document.getElementById("vignetta");
            vignetta.style.display =
              vignetta.style.display === "block" ? "none" : "block";
          }

          function closeVignetta() {
            document.getElementById("vignetta").style.display = "none";
          }
          /* ---------------------
        EVENTI
-----------------------*/

          buttonMinus.addEventListener("click", () => {
            if (maxInput <= 1) {
              buttonMinusImg.classList.add("grayColorNull");
              maxInput.value = 1;
            } else {
              maxInput.value = Math.max(1, parseInt(maxInput.value, 10) - 1);
            }
          });

          buttonPlus.addEventListener("click", () => {
            if (maxInput >= 5) {
              maxInput.value = 5;
            } else {
              maxInput.value = Math.min(5, parseInt(maxInput.value, 10) + 1);
            }
          });

          imgCarousel.forEach((el) =>
            el.addEventListener("click", (event) => {
              console.log(event.target.src);
              const img = event.target.src;

              imgActive.src = `${img}`;
            })
          );
        }
      });

      cardContainer.append(ul);

      prevButtonCard = document.querySelectorAll("#prevButton");
      nextButtonCard = document.querySelectorAll("#nextButton");
      imagesContainer = document.querySelectorAll(".images-store-card");
    } catch (error) {
      console.error(error);
    }
  }

  function createCheckbox(obj, arr) {
    checkboxContainer.innerHTML = `                <!-- assemblaggio checkbox section -->
                <div class="store-container-checkbox-section">
                  <h3 class="store-h3-checkbox-section">
                    <button class="store-button-checkbox-section">
                      <span class="store-slot-content-checkbox-section">
                        <span>Prezzo</span>
                        <svg
                          width="18"
                          height="28"
                          viewBox="0 0 18 28"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          class="store-icon-checkbox-section"
                        >
                          <path
                            d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                    </button>
                  </h3>
                  <div
                    class="store-container-ul-checkbox-section-effect displayNoneUlCheckbox "
                  >

                  </div>
                </div>
                <!-- fine assemblaggio checkbox section -->

                <!-- assemblaggio checkbox section -->
                <div class="store-container-checkbox-section">
                  <h3 class="store-h3-checkbox-section">
                    <button class="store-button-checkbox-section">
                      <span class="store-slot-content-checkbox-section">
                        <span>Età</span>
                        <svg
                          width="18"
                          height="28"
                          viewBox="0 0 18 28"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          class="store-icon-checkbox-section"
                        >
                          <path
                            d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                    </button>
                  </h3>
                  <div
                    class="store-container-ul-checkbox-section-effect displayNoneUlCheckbox"
                  >

                  </div>
                </div>
                <!-- fine assemblaggio checkbox section -->

                <!-- assemblaggio checkbox section -->
                <div class="store-container-checkbox-section">
                  <h3 class="store-h3-checkbox-section">
                    <button class="store-button-checkbox-section">
                      <span class="store-slot-content-checkbox-section">
                        <span>Numero Di Pezzi</span>
                        <svg
                          width="18"
                          height="28"
                          viewBox="0 0 18 28"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          class="store-icon-checkbox-section"
                        >
                          <path
                            d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                    </button>
                  </h3>
                  <div
                    class="store-container-ul-checkbox-section-effect displayNoneUlCheckbox"
                  >

                  </div>
                </div>
                <!-- fine assemblaggio checkbox section -->`;

    const storeContainerUlCheckboxSectionEffect = document.querySelectorAll(
      ".store-container-ul-checkbox-section-effect"
    );

    let arrConta = conta(obj, arr);

    console.log(arrConta);

    createSingleCheckbox(obj);

    const inputCheck = document.querySelectorAll(".atom-label-for-click");
    const checkImage = document.querySelectorAll(".svg-checkbox-V ");
    const realInput = document.querySelectorAll(".atom-input-checkbox");
    const squareSlot = document.querySelectorAll(".container-image-checkbox");

    //store-checkbox-section////////
    const storeButtonCheckboxSection = document.querySelectorAll(
      ".store-button-checkbox-section"
    );

    const storeIconCheckboxSection = document.querySelectorAll(
      ".store-icon-checkbox-section"
    );
    ////////atom-store-checkbox eventi/////////////////////////

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
        filterCard();
      });
    });

    //store-checkbox-section//////////////////////
    function displayNoneUl(index) {
      console.log(index);
      if (
        storeContainerUlCheckboxSectionEffect[index].classList.contains(
          "displayNoneUlCheckbox"
        )
      ) {
        storeContainerUlCheckboxSectionEffect[index].classList.remove(
          "displayNoneUlCheckbox"
        );
        storeContainerUlCheckboxSectionEffect[index].classList.add(
          "store-container-ul-checkbox-section-effect-visible"
        );
        storeIconCheckboxSection[index].classList.add("effect-to-change-state");
        console.log("if");
      } else {
        storeContainerUlCheckboxSectionEffect[index].classList.add(
          "displayNoneUlCheckbox"
        );
        storeContainerUlCheckboxSectionEffect[index].classList.remove(
          "store-container-ul-checkbox-section-effect-visible"
        );
        storeIconCheckboxSection[index].classList.remove(
          "effect-to-change-state"
        );
        console.log("else");
      }
    }

    storeButtonCheckboxSection.forEach((element, index) => {
      element.addEventListener("click", () => {
        displayNoneUl(index);
      });
    });

    function createSingleCheckbox(obj) {
      let i = 0;
      arrConta.forEach((el) => {
        let stringa = ``;
        let j = 0;
        const arrDaContare = ["price", "age", "pieces"];
        el.forEach((ele) => {
          if (arrDaContare[i] === "price") {
            stringa =
              stringa +
              `                    <!-- assemblaggio atom/store-checkbox -->
                    <div class="container-atom-store-checkbox">
                      <ul class="list-container-atom-store-checkbox">
                        <li class="li-atom-store-checkbox">
                          <label for="" class="atom-label-for-click" >
                            <div class="atom-container-space-to-check">
                              <input
                                type="checkbox"
                                class="atom-input-checkbox"
                              />
                              <div class="container-image-checkbox">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 -25 100 100"
                                  xml:space="preserve"
                                  class="svg-checkbox-V checkbox-image-not-visible"
                                >
                                  <polygon
                                    fill="currentColor"
                                    points="0.4,23.9 36,59.6 99.6,-4 88.5,-4 77.4,-4 36,37.3 22.6,24 11.5,24 "
                                  ></polygon>
                                </svg>
                              </div>
                            </div>
                            <span class="container-span-content-check">
                              <span class="span-content-check">${
                                obj[arrDaContare[i]][j][0]
                              }€ - ${obj[arrDaContare[i]][j][1]}€</span>
                              <span class="span-number-check"
                                >[<!-- -->${
                                  arrConta[i][j].length
                                }<!-- -->]</span
                              >
                            </span>
                          </label>
                        </li>
                      </ul>
                    </div>
                    <!-- fine assemblaggio -->`;
            j++;
          } else if (arrDaContare[i] === "age") {
            stringa =
              stringa +
              `                    <!-- assemblaggio atom/store-checkbox -->
                    <div class="container-atom-store-checkbox">
                      <ul class="list-container-atom-store-checkbox">
                        <li class="li-atom-store-checkbox">
                          <label for="" class="atom-label-for-click" >
                            <div class="atom-container-space-to-check">
                              <input
                                type="checkbox"
                                class="atom-input-checkbox"
                                onchange="filterCard()"
                              />
                              <div class="container-image-checkbox">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 -25 100 100"
                                  xml:space="preserve"
                                  class="svg-checkbox-V checkbox-image-not-visible"
                                >
                                  <polygon
                                    fill="currentColor"
                                    points="0.4,23.9 36,59.6 99.6,-4 88.5,-4 77.4,-4 36,37.3 22.6,24 11.5,24 "
                                  ></polygon>
                                </svg>
                              </div>
                            </div>
                            <span class="container-span-content-check">
                              <span class="span-content-check">${
                                obj[arrDaContare[i]][j][0]
                              }+</span>
                              <span class="span-number-check"
                                >[<!-- -->${
                                  arrConta[i][j].length
                                }<!-- -->]</span
                              >
                            </span>
                          </label>
                        </li>
                      </ul>
                    </div>
                    <!-- fine assemblaggio -->`;
            j++;
          } else {
            stringa =
              stringa +
              `                    <!-- assemblaggio atom/store-checkbox -->
                    <div class="container-atom-store-checkbox">
                      <ul class="list-container-atom-store-checkbox">
                        <li class="li-atom-store-checkbox">
                          <label for="" class="atom-label-for-click" >
                            <div class="atom-container-space-to-check">
                              <input
                                type="checkbox"
                                class="atom-input-checkbox"
                                onchange="filterCard()"

                              />
                              <div class="container-image-checkbox">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 -25 100 100"
                                  xml:space="preserve"
                                  class="svg-checkbox-V checkbox-image-not-visible"
                                >
                                  <polygon
                                    fill="currentColor"
                                    points="0.4,23.9 36,59.6 99.6,-4 88.5,-4 77.4,-4 36,37.3 22.6,24 11.5,24 "
                                  ></polygon>
                                </svg>
                              </div>
                            </div>
                            <span class="container-span-content-check">
                              <span class="span-content-check">${
                                obj[arrDaContare[i]][j][0]
                              } - ${obj[arrDaContare[i]][j][1]}</span>
                              <span class="span-number-check"
                                >[<!-- -->${
                                  arrConta[i][j].length
                                }<!-- -->]</span
                              >
                            </span>
                          </label>
                        </li>
                      </ul>
                    </div>
                    <!-- fine assemblaggio -->`;
            j++;
          }
        });

        storeContainerUlCheckboxSectionEffect[i].innerHTML = stringa;
        i++;
      });
    }

    function conta(obj, arr) {
      const arrDaContare = ["price", "age", "pieces"];

      const arrCount = [];
      const singolaProprieta = [];

      arrDaContare.forEach((el) => {
        const elemento = el;
        /* console.log(obj[el]); */
        obj[el].forEach((el) => {
          const min = el[0];
          const max = el[1];

          const risultato = arr.filter(
            (el) => el[elemento] >= min && el[elemento] <= max
          );

          singolaProprieta.push(risultato);
        });

        arrCount.push([...singolaProprieta]);

        singolaProprieta.length = 0;
      });

      return arrCount;
    }
  }

  const realInput = document.querySelectorAll(".atom-input-checkbox");

  const arrDaContare = ["price", "age", "pieces"];

  async function filterCard() {
    cardContainer.innerHTML = ``;
    let arrConta = conta(checkboxData, cardData);
    const arrChecked = [];
    const arrToShow = [];
    let j = 0;

    for (let i = 0; i < arrConta.length; i++) {
      for (let el of arrConta[i]) {
        await new Promise((resolve) => {
          setTimeout(() => {
            if (realInput[j].checked) {
              arrChecked.push(el);
            }
            j++;
            resolve();
          }, 10);
        });
      }
    }

    arrChecked.forEach((el) => {
      el.forEach((ele) => {
        if (!arrToShow.includes(ele)) arrToShow.push(ele);
      });
    });

    createCard(arrToShow);

    /*   createCard(el);
     */
    function conta(obj, arr) {
      const arrDaContare = ["price", "age", "pieces"];

      const arrCount = [];
      const singolaProprieta = [];

      arrDaContare.forEach((el) => {
        const elemento = el;
        /* console.log(obj[el]); */
        obj[el].forEach((el) => {
          const min = el[0];
          const max = el[1];

          const risultato = arr.filter(
            (el) => el[elemento] >= min && el[elemento] <= max
          );

          singolaProprieta.push(risultato);
        });

        arrCount.push([...singolaProprieta]);

        singolaProprieta.length = 0;
      });

      return arrCount;
    }
  }

  /* ---------------------
        EVENTI
-----------------------*/

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
                <li><div class="area-giochi-container-hamb-menu"><a class="area-giochi-content-hamb-menu" href="#"><img
                src="/components/atom/atom-header/long arrow.svg"
                class="arrow-header">${areaGiochi.textContent}</a></div></li> 
                <li><div class="all-button-upperCase-humb-menu button-natale-hamb-menu">${natale.textContent}</div></li>
                <li><div class="all-button-upperCase-humb-menu"><span>HOME</span></div></li>
                <li><div class="all-button-upperCase-humb-menu all-arrow-flex-button" onclick="openStore()">${acquista.textContent} <img src="/components/atom/atom-header/arrow.svg" class="arrow-header-humb-menu"></img></div></li>
                <li><div class="all-button-upperCase-humb-menu all-arrow-flex-button">${scopri.textContent}<img src="/components/atom/atom-header/arrow.svg" class="arrow-header-humb-menu"></img></div></li>
                <li><div class="all-button-upperCase-humb-menu all-arrow-flex-button">${aiuto.textContent}<img src="/components/atom/atom-header/arrow.svg" class="arrow-header-humb-menu"></img></div></li>
                <li><div class="button-hamb-menu">${legoHead.innerHTML}</div></li>
                <li><div class="button-hamb-menu">${blueBlock.innerHTML}</div></li>
                <li><div class="button-hamb-menu"><span>La mia lista dei desideri</span></div></li>
                <li><div class="button-hamb-menu"><span>Il mio carrello (0)</span></div></li>
                <li><div class="button-hamb-menu"><img class="icon-hamb-menu-italia" src="/components/atom/atom-header/icon_maps.png"><span>Italia</span></div></li>
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
divForButton2.classList.add("delete-button-pop-up-menu");
const buttonXPopUpMenu2 = document.createElement("button");
const image2 = document.createElement("img");
image2.src = "/components/atom/atom-header/close.png";
image2.alt = "";
buttonXPopUpMenu2.appendChild(image2);
divForButton2.appendChild(buttonXPopUpMenu2);

const containerPopMenu = document.createElement("div");
const containerForMenuPopUp = document.createElement("div");
containerForMenuPopUp.classList.add("container-for-menu-pop-up-header");
containerForMenuPopUp.innerHTML = "";
// Crea il contenuto di containerForMenuPopUp
acquista.addEventListener("click", () => {
  if (!menuPopUpCreated) {
    // Crea il container per il menu pop-up
    containerPopMenu.classList.add("not-visible-element-atom-header");

    // Crea il container per il contenuto del menu pop-up

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
            <li><div class="button-without-arrow-button"><a href="#">Set Esclusivi</a></div></li>
            <li><div class="button-without-arrow-button"><a href="#" onclick="openStore()">Novità</a></div></li>
            <li><div class="button-without-arrow-button"><a href="#">I più venduti</a></div></li>
            <li><div class="button-without-arrow-button"><a href="#">Home decor</a></div></li>
            <li><div class="button-without-arrow-button"><a href="#">Sconti e offerte</a></div></li>
            <li><div class="button-without-arrow-button"><a href="#">Buoni regalo</a></div></li>
            <li><div class="button-without-arrow-button"><a href="#">Disponibile a breve</a></div></li>
            <li><div class="button-without-arrow-button"><a href="#">Ultima occasione per acquistarli</a></div></li>
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

    containerPopMenu.classList.add("general-container-pop-up-menu");
    containerPopMenu.classList.remove("not-visible-element-atom-header");
    containerForMenuPopUp.innerHTML = `
    <div class="content-pop-up-menu">
        <ul>
            <li><button><div class="all-arrow-flex-button"><span class="span-arrow-button-pop-up-menu">I nostri valori</span><img src="/components/atom/atom-header/arrow.svg" class="arrow-header-pop-up-menu"></img></div></button></li>
            <li><button><div class="all-arrow-flex-button"><span class="span-arrow-button-pop-up-menu">Le nostre app</span><img src="/components/atom/atom-header/arrow.svg" class="arrow-header-pop-up-menu"></img></div></button></li>
            <li><button><div class="all-arrow-flex-button"><span class="span-arrow-button-pop-up-menu">Le nostre riviste</span><img src="/components/atom/atom-header/arrow.svg" class="arrow-header-pop-up-menu"></img></div></button></li>
            <li><div class="button-without-arrow-button"><a href="#">Tutti i temi LEGO</a></div></li>
            <li><div class="button-without-arrow-button"><a href="#">Tutti gli interessi LEGO</a></div></li>
            <li><div class="button-without-arrow-button"><a href="#">Per gli adulti</a></div></li>
            <li><div class="button-without-arrow-button"><a href="#">Per le famiglie</a></div></li>
            <li><div class="button-without-arrow-button"><a href="#">LEGO® Insiders</a></div></li>
            <li><div class="button-without-arrow-button"><a href="#">LEGO® Mosaic Maker</a></div></li>
            <li><div class="button-without-arrow-button"><a href="#">Idee regalo LEGO®</a></div></li>
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

    containerPopMenu.classList.add("general-container-pop-up-menu");
    containerPopMenu.classList.remove("not-visible-element-atom-header");
    containerForMenuPopUp.innerHTML = `
    <div class="content-pop-up-menu">
        <ul>
            <li><div class="button-without-arrow-button"><a href="#">Verifica stato ordine</a></div></li>
            <li><div class="button-without-arrow-button"><a href="#">Consegne e resi</a></div></li>
            <li><div class="button-without-arrow-button"><a href="#">Trova uno store</a></div></li>
            <li><div class="button-without-arrow-button"><a href="#">Istruzioni per la costruzione</a></div></li>
            <li><div class="button-without-arrow-button"><a href="#">Domande frequenti</a></div></li>
            <li><div class="button-without-arrow-button"><a href="#">Contattaci</a></div></li>
            <li><div class="button-without-arrow-button"><a href="#">Pezzi di ricambio</a></div></li>
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
