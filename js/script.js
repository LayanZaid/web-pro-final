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



