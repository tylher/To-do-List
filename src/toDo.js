import ItemObj from './item.js';

export default class ToDo {
  constructor() {
    this.toDo = [];
    this.listHolder = document.querySelector('.holder');
    this.itemInput = document.querySelector('input');
    this.enter = document.querySelector('.fa-arrow-right-to-bracket');
    this.remove = document.querySelector('.btn');
  }

  createItem(item) {
    const li = document.createElement('li');
    li.classList.add('to-do-item');
    li.innerHTML = `<div>${item.completed
      ? '<i class="btn-check fa-solid fa-square-check"></i>'
      : '<i class="btn-check fa-solid fa-square"></i>'
    } <input type='text' class='item-edit' value='${item.description
    }'></div> <div><i class="option fa-solid fa-ellipsis-vertical"></i><i class="fa-solid fa-trash-can"></i></div>`;
    this.listHolder.appendChild(li);
  }

  updateItem() {
    const itemEdit = document.querySelectorAll('.item-edit');
    itemEdit.forEach((item, index) => {
      item.addEventListener('focusout', () => {
        this.toDo = JSON.parse(localStorage.getItem('to-do'));
        this.toDo[index].description = item.value;
        localStorage.setItem('to-do', JSON.stringify(this.toDo));
      });
      return '';
    });
  }

  deleteItem() {
    const delIcons = document.querySelectorAll('.fa-trash-can');
    delIcons.forEach((del, i) => {
      del.addEventListener('click', () => {
        this.toDo = this.toDo.filter((item) => item.index !== i);
        localStorage.setItem('to-do', JSON.stringify(this.toDo));
        this.listHolder.innerHTML = '';
        this.getTodo();
      });
    });
  }

  addItem() {
    this.enter.addEventListener('click', () => {
      if (this.itemInput.value) {
        this.toDo = JSON.parse(localStorage.getItem('to-do'));
        const newItem = this.itemInput;
        const listItem = new ItemObj(this.toDo.length, newItem.value);
        this.toDo.push(listItem);
        localStorage.setItem('to-do', JSON.stringify(this.toDo));
        newItem.value = '';
        this.listHolder.innerHTML = '';
        this.getTodo();
      }
    });
  }

  checkItem() {
    const checked = document.querySelectorAll('.btn-check');
    this.toDo = JSON.parse(localStorage.getItem('to-do'));
    checked.forEach((check, index) => {
      check.addEventListener('click', () => {
        this.toDo[index].completed = !this.toDo[index].completed;
        this.listHolder.innerHTML = '';
        localStorage.setItem('to-do', JSON.stringify(this.toDo));
        this.getTodo();
      });
    });
  }

  updateIndex() {
    this.toDo = JSON.parse(localStorage.getItem('to-do'));
    this.toDo.map((item, i) => {
      item.index = i;
      localStorage.setItem('to-do', JSON.stringify(this.toDo));
      return '';
    });
  }

  removeItem() {
    this.remove.addEventListener('click', () => {
      this.toDo = this.toDo.filter((item) => item.completed === false);
      localStorage.setItem('to-do', JSON.stringify(this.toDo));
      this.listHolder.innerHTML = '';
      this.getTodo();
    });
  }

  getTodo() {
    if (!localStorage.getItem('to-do')) {
      localStorage.setItem('to-do', JSON.stringify(this.toDo));
    } else {
      this.toDo = JSON.parse(localStorage.getItem('to-do'));
      this.toDo.map((item, index) => {
        this.createItem(item);
        const itemEdit = document.querySelectorAll('.item-edit');
        if (item.completed === true) {
          itemEdit[index].style.textDecoration = 'line-through';
        }
        return '';
      });
      this.updateIndex();
      this.checkItem();
      this.updateItem();
      this.deleteItem();
    }
  }
}
