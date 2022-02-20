const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
//interval에 의해 1초 마다 함수를 실행시키기 때문에 처음에 웹페이지가 load되면 1초동안은 00:00:00으로 표시되는데 이걸 없애기위함
setInterval(getClock, 1000);
