const from = document.getElementById('add-form');
const addInput = document.querySelector('#add-input')
const todos = JSON.parse(localStorage.getItem("todos")) || []
function addTodo(e) {
  e.preventDefault();
  const addInputValue = addInput.value.trim();
  if (addInputValue.length === 0) {
    addInput.nextElementSibling.innerText = "*This field is required!"
    return;
  }
  addInput.nextElementSibling.innerText = ""
  const newTodo = {
    todo: addInputValue,
    completed: false,
    isUpdating: false,
  }
   todos.push(newTodo);
  localStorage.setItem('todos', JSON.stringify(todos))
  from.reset()
  displayTodos()
}


function displayTodos() {
  let result = '';
  todos.forEach((item, index) => {
    result += `
      <tr>
      <td>${index + 1}</td>
        
        <td>${item.isUpdating ? <input type="text" data-index="${index}" value="${item.todo}"/> : item.todo}</td>

        <td><input onclick="toggleCompleted(${index})" type="checkbox" ${item.completed ? 'checked' : ""}  /></td>

        <td>
          ${item.isUpdating ? ` <button class="btn btn-success"
            onclick="saveTodo(${index})"><i class="fa-solid fa-file-pen"></i></button>`
             :
        <button class="btn btn-primary" onclick="setUpdating(${index})"><i class="fa-solid fa-pen"></i></button>}

        <button onclick="deleteTodo(${index})" class="btn btn-danger"><i class="fa-solid fa-trash"></i></button>
