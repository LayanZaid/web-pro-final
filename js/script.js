function saveTodo(index) {
  const input = document.querySelector(input[data-index="${index}"])
  todos[index].todo = input.value.trim()
  todos[index].isUpdating = false;
  localStorage.setItem('todos', JSON.stringify(todos))
  displayTodos()
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Your work has been saved",
    showConfirmButton: false,
    timer: 3000
  });
}
displayTodos()
from.addEventListener('submit', addTodo)
function filterTodos(status) {
  let filtered = todos;

  if (status === "done") {
    filtered = todos.filter(todo => todo.completed);
  } else if (status === "todo") {
    filtered = todos.filter(todo => !todo.completed);
  }
  displayFilteredTodos(filtered);
}

function displayFilteredTodos(filteredList) {
  let result = '';
  filteredList.forEach((item, index) => {
    result += `
      <tr>
        <td>${index + 1}</td>
        <td>${item.isUpdating ? <input type="text" data-index="${index}" value="${item.todo}"/> : item.todo}</td>
        <td><input onclick="toggleCompleted(${index})" type="checkbox" ${item.completed ? 'checked' : ""} /></td>
        <td>
        ${item.isUpdating ? <button class="btn btn-success" onclick="saveTodo(${index})"><i class="fa-solid fa-file-pen"></i></button>
        : <button class="btn btn-primary" onclick="setUpdating(${index})"><i class="fa-solid fa-pen"></i></button>}
          <button onclick="deleteTodo(${index})" class="btn btn-danger"><i class="fa-solid fa-trash"></i></button>
        </td>
      </tr>
    `;
  });
  document.getElementById('todos').innerHTML = result;
}

function deleteDoneTasks() {
  const newList = todos.filter(todo => !todo.completed);
  todos.length = 0;
  todos.push(...newList);
  localStorage.setItem("todos", JSON.stringify(todos));
  displayTodos();
}

function deleteAllTasks() {
  todos.length = 0;
  localStorage.setItem("todos", JSON.stringify(todos));
  displayTodos();