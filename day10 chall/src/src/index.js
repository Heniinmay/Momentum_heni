const clockTitle = document.querySelector(".js-clock");

function getXmasTimer() {
  const Xmas = new Date("12/24/2022 00:00:00");
  const nowDate = new Date();
  const remainTime = Xmas - nowDate;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(remainTime / day);
  const hours = Math.floor((remainTime % day) / hour);

  const minutes = Math.floor((remainTime % hour) / minute);
  const seconds = Math.floor((remainTime % minute) / second);

  // const min = String(date.getMinutes()).padStart(2, "0");
  // const sec = String(date.getSeconds()).padStart(2, "0");

  clockTitle.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}
getXmasTimer();
setInterval(getXmasTimer, 1000);
