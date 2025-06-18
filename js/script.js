function saveTodo(index) {
  const input = document.querySelector(input[data-index="${index}"])
  todos[index].todo = input.value.trim()