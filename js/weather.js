const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");

const API_KEY = "926feb2ad3112827c56382d91ef1f95f";

const onLocationOk = (position) => {
  console.log(position);
  const latitude = position.coords.latitude;
  const logitude = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${logitude}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main}, ${String(
        Math.round(data.main.temp)
      )}℃`;
    });
};

const onLocationError = () => {
  alert("Sorry, we can't find you. The weather service is blocked.");
};

navigator.geolocation.getCurrentPosition(onLocationOk, onLocationError);
