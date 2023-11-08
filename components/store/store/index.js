/* -----------------------
    FASE DI PREPARAZIONE
-------------------------- */

//card store
const cardContainer = document.querySelector(".container-store-card");

const cardData = [
  {
    title: "Calendario dell’Avvento 2023 LEGO® ",
    price: 37.99,
    rating: 4.0,
    pieces: 700,
    age: 6,
    img1: "https://www.lego.com/cdn/cs/set/assets/blt8345f6a8fc46d84b/75366_alt1.png?format=webply&fit=bounds&quality=90&width=320&height=320&dpr=1.5",
    img2: "https://www.lego.com/cdn/cs/set/assets/bltff8d93722741aaec/75366.png?format=webply&fit=bounds&quality=100&width=320&height=320&dpr=1",
  },

  {
    title: "Calendario dell’Avvento 2023 LEGO® ",
    price: 55,
    rating: 4.0,
    pieces: 50,
    age: 6,
    img1: "https://www.lego.com/cdn/cs/set/assets/blt8345f6a8fc46d84b/75366_alt1.png?format=webply&fit=bounds&quality=90&width=320&height=320&dpr=1.5",
    img2: "https://www.lego.com/cdn/cs/set/assets/bltff8d93722741aaec/75366.png?format=webply&fit=bounds&quality=100&width=320&height=320&dpr=1",
  },
  {
    title: "Calendario dell’Avvento 2023 LEGO® ",
    price: 100,
    rating: 4.0,
    pieces: 320,
    age: 6,
    img1: "https://www.lego.com/cdn/cs/set/assets/blt8345f6a8fc46d84b/75366_alt1.png?format=webply&fit=bounds&quality=90&width=320&height=320&dpr=1.5",
    img2: "https://www.lego.com/cdn/cs/set/assets/bltff8d93722741aaec/75366.png?format=webply&fit=bounds&quality=100&width=320&height=320&dpr=1",
  },
  {
    title: "Calendario dell’Avvento 2023 LEGO® ",
    price: 500,
    rating: 4.0,
    pieces: 320,
    age: 6,
    img1: "https://www.lego.com/cdn/cs/set/assets/blt8345f6a8fc46d84b/75366_alt1.png?format=webply&fit=bounds&quality=90&width=320&height=320&dpr=1.5",
    img2: "https://www.lego.com/cdn/cs/set/assets/bltff8d93722741aaec/75366.png?format=webply&fit=bounds&quality=100&width=320&height=320&dpr=1",
  },
  {
    title: "Calendario dell’Avvento 2023 LEGO® ",
    price: 37.99,
    rating: 4.0,
    pieces: 320,
    age: 6,
    img1: "https://www.lego.com/cdn/cs/set/assets/blt8345f6a8fc46d84b/75366_alt1.png?format=webply&fit=bounds&quality=90&width=320&height=320&dpr=1.5",
    img2: "https://www.lego.com/cdn/cs/set/assets/bltff8d93722741aaec/75366.png?format=webply&fit=bounds&quality=100&width=320&height=320&dpr=1",
  },
  {
    title: "Calendario dell’Avvento 2023 LEGO® ",
    price: 37.99,
    rating: 4.0,
    pieces: 320,
    age: 6,
    img1: "https://www.lego.com/cdn/cs/set/assets/blt8345f6a8fc46d84b/75366_alt1.png?format=webply&fit=bounds&quality=90&width=320&height=320&dpr=1.5",
    img2: "https://www.lego.com/cdn/cs/set/assets/bltff8d93722741aaec/75366.png?format=webply&fit=bounds&quality=100&width=320&height=320&dpr=1",
  },
];

const checkboxData = {
  price: [
    [0, 20],
    [20, 50],
    [50, 100],
    [100, 99999],
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
    [1000, 9999999],
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
                          <label for="" class="atom-label-for-click" onclick="filterCard()">
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
                          <label for="" class="atom-label-for-click" onclick="filterCard()">
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
                          <label for="" class="atom-label-for-click" onclick="filterCard()">
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
