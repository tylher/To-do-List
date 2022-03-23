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
    } <p>${item.description}</p></div> <i class="option fa-solid fa-ellipsis-vertical"></i>`;
    this.listHolder.appendChild(li);
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

  removeItem() {
    this.remove.addEventListener('click', () => {
      console.log('delete');
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
      this.toDo.map((item) => {
        this.createItem(item);
        return '';
      });
      this.checkItem();
    }
  }
}