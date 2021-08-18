const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("h1");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
//일반적으로 string만 포함되는 변수는 대문자로 표기, string을 저장하고 싶을 때 사용

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  //Local storage
  /*
  localStorage.getItem
  localStorage.removeItem
  */
  localStorage.setItem(USERNAME_KEY, username);

  /*
  if(username === ""){
    alert("Plz Write your name") === required
  }else if(username.length > 15){
    alert("Ur name is too long") === maxlength
  }
  */
  paintGreetings(username);
}

function paintGreetings(username) {
  // greeting.innerText = "hello, " + username;
  greeting.innerText = `Hello, ${username} !`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null) {
  //show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  //show the greetings
  paintGreetings(savedUsername);
}

//recap 4.7
