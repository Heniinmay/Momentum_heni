const h1Color = document.querySelector("h1");
let body = document.querySelector("body");

body.style.backgroundColor = "MediumTurquoise";
h1Color.style.color = "white";

function handleResize() {
  let winWidth = window.innerWidth;
  
  if (winWidth < 600) {
    h1Color.style.color = "black";
    body.style.backgroundColor = "gold";
  } else if (winWidth < 1000) {
      h1Color.style.color = "white"
    body.style.backgroundColor = "indigo";
  } else {
    body.style.backgroundColor = "MediumTurquoise";
  }
}

window.addEventListener("resize", handleResize);
