const clock = document.querySelector("#clock");

const padTwo = (num) => {
  return String(num).padStart(2, "0");
};

const updateClock = () => {
  const now = new Date();
  const hh = padTwo(now.getHours());
  const mm = padTwo(now.getMinutes());
  const ss = padTwo(now.getSeconds());
  clock.innerHTML = `${hh}:${mm}:${ss}`;
};

updateClock();
setInterval(updateClock, 1000);
