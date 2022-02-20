const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo() {
  const li = event.target.parentElement;
  // target을 넣어주면 지금 클릭하는게 어떤 버튼인지 알려줌.
  // 그 버튼의 부모(button의 부모 = li)
  li.remove(); // li 를 삭제..!
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  // toDos 배열에서 삭제하려고 하는 todo list의 id와 같은 것을 지우고 다시 배열을 써줌
  // update
  saveToDos();
  // localStorage 에 저장
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span"); // span 태그 생성
  span.innerText = newTodo.text; // span태그 안에 input 바에 작성했던 문자들을 넣어준다.
  const button = document.createElement("button"); // button 태그 생성
  button.innerText = "❌"; // button 태그 안에(>x
  button.addEventListener("click", deleteTodo); // 버튼을 클릭시 함수 호출
  li.appendChild(span); // li태그 안에 span태그를 자식태그로 넣어준다.
  li.appendChild(button); // li태그 안에 span태그를 자식태그로 넣어준다.
  toDoList.appendChild(li); // ul태그 안에 li태그를 자식태그로 넣어준다.
}
function handleToDoSubmit(event) {
  event.preventDefault();
  // submit시 새로고침 막는 기능
  const newTodo = toDoInput.value; // input.value의 값을 newTodo에 복사하고
  toDoInput.value = ""; // 엔터를치면 인풋바가 비워지도록 설정

  const newTodoOj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoOj); // toDos는 배열
  saveToDos();
  paintToDo(newTodoOj); // paintTodo함수 호출
}

toDoForm.addEventListener("submit", handleToDoSubmit);
// submit버튼을 누르면 함수 실행됨
const savedTodos = localStorage.getItem(TODOS_KEY);
// localStorage 에 저장된 todo list들을 savedTodos 변수에 저장
// array형태의 string
console.log(savedTodos);
if (savedTodos) {
  // if Todos exists on my localstorage
  const parsedToDos = JSON.parse(savedTodos);
  // string coming from my localstorage going to turn it into alive JavaScript object
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
  // 배열에 각각의 item에 대해 function을 실행하게 해줌(한바퀴 돈다)
}
