const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function deleteToDo(event){
  const li = event.target.parentElement;
  li.remove();
}

function paintToDo(newToDo){
    // console.log("I Will paint",newToDo);
    const newLi = document.createElement("li");
    const newSpan = document.createElement("span");
    newLi.appendChild(newSpan);
    newSpan.innerText = newToDo;
        // console.log(newLi);

        toDoList.appendChild(newLi);

}

function handleToDoSubmit(event) {
  event.preventDefault();
  //없어지기 전에 값 저장
  const newToDo = toDoInput.value; //input의 현재 value를 새로운 변수에 복사
    // console.log(toDoInput.value);
  toDoInput.value = ""; //
    // console.log(newToDo, toDoInput.value);
    paintToDo(newToDo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
