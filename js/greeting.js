const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

const greet = document.querySelector("#greet");
const greeting = document.querySelector("#greeting");
const question = document.querySelector("#todo_question");
const dd = document.querySelector("#todo-form")

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
let greetingText = "";

const saved_username = localStorage.getItem(USERNAME_KEY);

function onLoginSubmit(event) {
  //제출했을 때 새로고침되는 submit의 디폴트 설정 막기
  event.preventDefault();

  const userName = loginInput.value;

  //입력폼 숨기기
  loginForm.classList.add(HIDDEN_CLASSNAME);

  //유저네임 로컬에 저장하기
  localStorage.setItem(USERNAME_KEY, userName);

  greet_f(userName);
}

function textChange(){
  const date = new Date();

  const Hour = date.getHours();
  if (Hour >= 5 && Hour <= 10){
    greetingText = "Good Morning";
  } else if(Hour >=11 && Hour <=18){
    greetingText = "Good Afternoon";
  } else{
    greetingText = "Good Evening";
  }
}

function greet_f(userName) {
  textChange();
  greet.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerHTML = `${greetingText}, ${userName}.`;
  question.innerHTML = `What is your main goal for today?`;
  dd.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);

if (saved_username === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
} else {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greet_f(saved_username);
}
