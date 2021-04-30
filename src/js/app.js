/* START global variables */
const todos = [];
const todoList = document.querySelector('#todoList');
const todoForm = document.querySelector('#createTodo');
const formCheck = document.querySelector('#todoCompleted');
const formInput = document.querySelector('#todoItem');
const errorMsg = document.querySelector('#errorMsg');
const spinner = document.querySelector('.spinner-border');

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

const validateInput = function (text) {
  if (text.length > 0 && text.length <= 20) {
    return true;
  }
  return false;
};

const invalidInput = function (isInvalid) {
  if (isInvalid) {
    formInput.classList.add('is-invalid');
    errorMsg.classList.remove('hidden');
  } else {
    formInput.classList.remove('is-invalid');
    errorMsg.classList.add('hidden');
  }
};

/* END functions */

// Create first todo
createTodos();

/* START events */
todoForm.addEventListener('submit', function (e) {
  e.preventDefault();
  if (validateInput(formInput.value)) {
    invalidInput(false);
    const newTodo = {
      description: formInput.value,
      done: formCheck.checked,
    };
    addTodo(newTodo);
    formInput.value = '';
  } else {
    invalidInput(true);
  }
});
/* END events */

/* START http request */
fetch('https://restcountries.eu/rest/v2/name/Mexico')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    spinner.classList.add('hidden');
    const img = document.querySelector('#car-img');
    img.src = data[0].flag;
    const title = document.querySelector('.card-title');
    console.log(data[0]);
    title.textContent = data[0].name;
    const subtitle = document.querySelector('.card-subtitle');
    subtitle.textContent = data[0].capital;
    const body = document.querySelector('.card-text');
  });

/* END httpm request */
