const todoForm = document.querySelector("#todo-form");
const todoFormInput = todoForm.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let todos = [];

const saveTodos = () => {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
};

const removeTodo = (event) => {
  event.preventDefault();
  const li = event.target.parentNode;
  const id = li.id;
  li.remove();
  todos = todos.filter((todo) => todo.id !== parseInt(id));
  saveTodos();
};

const showTodo = (todo) => {
  const li = document.createElement("li");
  li.id = todo.id;
  li.classList.add("list_item");
  const span = document.createElement("span");
  span.innerText = todo.text;
  li.appendChild(span);
  const btn = document.createElement("button");
  btn.innerText = "X";
  btn.addEventListener("click", removeTodo);
  li.appendChild(btn);
  todoList.appendChild(li);
};

const addTodo = (event) => {
  event.preventDefault();
  const id = Date.now();
  const text = todoFormInput.value;
  const todo = { id: id, text: text };
  todoFormInput.value = "";
  showTodo(todo);
  todos.push(todo);
  saveTodos();
};

todoForm.addEventListener("submit", addTodo);

const todosStr = localStorage.getItem(TODOS_KEY);
if (todosStr) {
  todos = JSON.parse(localStorage.getItem(TODOS_KEY));
  todos.forEach(showTodo);
}
