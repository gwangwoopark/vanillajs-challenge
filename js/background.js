const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];

const image = images[Math.floor(Math.random() * images.length)];

document.body.style.backgroundImage = `img/${image}`;

const background = document.createElement("img");

background.src = `img/${image}`;
background.classList.add("background");

document.body.appendChild(background);
