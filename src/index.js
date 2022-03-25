import './style.css';
import ToDo from './toDo.js';

const toDoObj = new ToDo();
toDoObj.getTodo();
toDoObj.addItem();
toDoObj.removeItems();
toDoObj.refreshList();