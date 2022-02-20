const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  //브라우저가 기본 동작을 실행하지 못하게 만듦
  //event object는 preventDefault함수를 기본적으로 가지고 있음
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  //greeting.innerText = "Hello " + username;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
console.log(savedUsername);

if (savedUsername === null) {
  //show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
  //submit이벤트가 발생한다면, onLoginSubmit함수를 실행시킨다는 의미
  //JS는 onLoginSubmit함수 호출 시 인자를 담아서 호출함. 해당 인자는 event object를 담은 정보
} else {
  paintGreetings(savedUsername);
  // show the greetings
}
