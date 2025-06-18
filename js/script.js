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
