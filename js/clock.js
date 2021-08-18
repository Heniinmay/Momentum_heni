const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock();
// setInterval(sayHello, 5000);
setInterval(getClock, 1000);

/*
date.getDate();
date.getDay();
date.getFullYear();
date.getHours();
date.getMinutes();
*/

/*
"1".padStart(2,"0"); == "01"
(글자의 길이,아니면 ""을 채우자)
*/
