const colorYez = document.querySelector(".colorYez");
const bodyBcg = document.querySelector("body");

const colors = ["yellow", "red", "green", "#3b5998"];

colorYez.addEventListener("click", changeColor);

function changeColor() {
  //bodyBcg.style.backgroundColor = colors[2];
  let random = Math.floor(Math.random() * colors.length);
  bodyBcg.style.backgroundColor = colors[random];
}
