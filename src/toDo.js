import ItemObj from './item.js';
import checkItem from './check.js';

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
      ? '<input type="checkbox" checked>'
      : '<input type="checkbox" >'
    } <input type='text' class='item-edit' value='${item.description}'></div> <i class="option fa-solid fa-ellipsis-vertical"></i>`;
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

  updateIndex() {
    this.toDo = JSON.parse(localStorage.getItem('to-do'));
    this.toDo.map((item, i) => {
      item.index = i;
      localStorage.setItem('to-do', JSON.stringify(this.toDo));
      return '';
    });
  }

  UpdateCheck() {
    const checked = document.querySelectorAll('input[type="checkbox"]');
    checked.forEach((check, index) => {
      check.addEventListener('change', () => {
        this.toDo = checkItem(this.toDo, index);
      });
    });
  }

  removeItems() {
    this.toDo = JSON.parse(localStorage.getItem('to-do'));
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
      this.toDo.map((item) => {
        this.createItem(item);
        return '';
      });
      this.updateIndex();
      this.removeItems();
      this.updateItem();
      this.UpdateCheck();
    }
  }
}