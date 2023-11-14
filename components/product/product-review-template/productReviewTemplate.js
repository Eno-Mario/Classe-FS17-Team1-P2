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
}
