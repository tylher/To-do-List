import './style.css';
import ToDo from './toDo.js';

const enter = document.querySelector('.fa-arrow-right-to-bracket');
const toDoObj = new ToDo();
toDoObj.getTodo();
enter.addEventListener('click', () => {
  const newItem = document.querySelector('input');
  if (newItem.value) {
    toDoObj.addItem(newItem.value);
    newItem.value = '';
  }
});
toDoObj.removeItems();
toDoObj.refreshList();