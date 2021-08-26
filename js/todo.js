const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "todos";
// const toDos = [];
//let toDos = []; //업데이트가 가능하도록 let으로 변경
let toDos = [];

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id != parseInt(li.id) ) //toDo의 id가 li.id와 다른 걸 남기고싶다.
  saveTodos(); // > 이건 왜 다시 불러야하나? 배열이 바뀌어서 그런가
}

function paintToDo(newToDo){
    // console.log("I Will paint",newToDo);
    const newLi = document.createElement("li");
    newLi.id = newToDo.id;
    const span = document.createElement("span");
    span.innerText = newToDo.text;
    const button = document.createElement("button");

    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);

    newLi.appendChild(span);
    newLi.appendChild(button);
        // console.log(newLi);

    toDoList.appendChild(newLi);

}

function handleToDoSubmit(event) {
  event.preventDefault();
  //없어지기 전에 값 저장
  const newToDo = toDoInput.value; //input의 현재 value를 새로운 변수에 복사
    // console.log(toDoInput.value);
  toDoInput.value = "";

   const newToDoObj = {
     text: newToDo,
     id: Date.now(),
   };
  toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveTodos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) { //여기에 뭔가가 있다면
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos; //olders keeping
  parsedToDos.forEach(paintToDo);
}

//7.5 새로고침 했을 때에 local storage 에 reset 되지 않고  기존의 list 뒤에 data 불러오기
//7.6 화면에서도 삭제하면 local storage에서도 삭제하기 -1
      //-각자의 id를 할당하여 중복이 되는 text의 값에도 해당 id의 obj를 삭제
//7.7 화면에서도 삭제하면 local storage에서도 삭제하기 -2
      // .filter
//7.8 toDo.js에 적용

 