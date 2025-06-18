function saveTodo(index) {
  const input = document.querySelector(input[data-index="${index}"])
  todos[index].todo = input.value.trim()
  todos[index].isUpdating = false;
  localStorage.setItem('todos', JSON.stringify(todos))
  displayTodos()