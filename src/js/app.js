/* START global variables */
const todos = [];
const todoList = document.querySelector('#todoList');
const todoForm = document.querySelector('#createTodo');
const formCheck = document.querySelector('#todoCompleted');
const formInput = document.querySelector('#todoItem');

/* END global variables */

/* START init */

const pimerTodo = {
  description: 'Terminar examen 1 de cells',
  done: false,
};

todos.push(pimerTodo);

/* END init */

/* START functions */
const createTodos = function () {
  const fragment = document.createDocumentFragment();
  for (todo of todos) {
    const item = document.createElement('li');
    item.classList.add('list-group-item');
    const chkbox = document.createElement('input');
    chkbox.classList.add('orm-check-input');
    chkbox.classList.add('me-1');
    chkbox.type = 'checkbox';
    chkbox.checked = todo.done;
    item.appendChild(chkbox);
    item.insertAdjacentText('beforeend', todo.description);
    fragment.appendChild(item);
  }
  todoList.appendChild(fragment);
};

const addTodo = function (todo) {
  const item = document.createElement('li');
  item.classList.add('list-group-item');
  const chkbox = document.createElement('input');
  chkbox.classList.add('orm-check-input');
  chkbox.classList.add('me-1');
  chkbox.type = 'checkbox';
  chkbox.checked = todo.done;
  item.appendChild(chkbox);
  item.insertAdjacentText('beforeend', todo.description);
  todoList.appendChild(item);
};

/* END functions */

// Create first todo
createTodos();

/* START events */
todoForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const newTodo = {
    description: formInput.value,
    done: formCheck.checked,
  };
  addTodo(newTodo);
});
/* END events */
