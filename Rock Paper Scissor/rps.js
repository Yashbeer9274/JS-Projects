var x = document.getElementById("img").addEventListener("click", fn);
var ar = ["rock", "paper", "scissor"];
function fn(e) {
  let p = document.querySelector(".modal-content").children[2];
  let predicted = ar[Math.floor(Math.random() * 3)];
  let choice = e.target.id;
  p.setAttribute("src", "image/" + predicted + ".png");
  document.getElementById("choice").innerHTML =
    "Computer Chose: " + predicted + "<br>" + "You Chose: " + choice;
  if (choice == predicted) {
    document.getElementById("prediction").style.color = "darkblue";
    document.getElementById("prediction").innerHTML = "It's a tie";
    toggleModal();
    //location.reload();
  } else if (
    (choice == "rock" && predicted != "paper") ||
    (choice == "paper" && predicted != "paper") ||
    (choice == "scissor" && predicted != "rock") ||
    predicted != "paper"
  ) {
    document.getElementById("prediction").style.color = "lightgreen";
    document.getElementById("prediction").innerHTML = "You Won";
    toggleModal();
    //location.reload();
  } else {
    document.getElementById("prediction").style.color = "red";
    document.getElementById("prediction").innerHTML = "You Lost";
    toggleModal();
    //location.reload();
  }
}

var modal = document.querySelector(".modal");
var closeButton = document.querySelector(".close-button");

function toggleModal() {
  modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}

closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
