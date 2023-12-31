const detailsSummary = document.querySelectorAll("details");

if (window.innerWidth > 901) {
  detailsSummary.forEach((el) => {
    if (!el.hasAttribute("open")) {
      el.setAttribute("open", "true");
    } else {
      el.setAttribute("open", "false");
    }
  });
}

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
