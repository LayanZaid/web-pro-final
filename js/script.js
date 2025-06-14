const from = document.getElementById('add-form');
const addInput = document.querySelector('#add-input')
const todos = JSON.parse(localStorage.getItem("todos")) || []
function addTodo(e) {
  e.preventDefault();
