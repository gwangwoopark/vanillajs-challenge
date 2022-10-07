const loginForm = document.querySelector("#login-form");
const loginFormInput = loginForm.querySelector("#login-input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSS = "hidden";
const USERNAME_KEY = "username";

const showGreeting = (username) => {
  greeting.innerHTML = `Welcome ${username}!`;
  greeting.classList.remove(HIDDEN_CLASSS);
};

const onLoginSubmit = (event) => {
  event.preventDefault();
  const username = loginFormInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  loginForm.classList.add(HIDDEN_CLASSS);
  showGreeting(username);
};

const username = localStorage.getItem(USERNAME_KEY);

if (username) {
  showGreeting(username);
} else {
  loginForm.addEventListener("submit", onLoginSubmit);
  loginForm.classList.remove(HIDDEN_CLASSS);
}
