export default class AddRemove {
  constructor() {
    this.list = [];
  }

  addItem(item) {
    this.list = JSON.parse(localStorage.getItem('todo'));
    this.list.push(item);
    localStorage.setItem('todo', JSON.stringify(this.list));
    this.getTodo();
  }

  deleteItem(name) {
    this.list = this.list.filter((item) => item !== name);
    localStorage.setItem('todo', JSON.stringify(this.list));
    this.getTodo();
  }

  getTodo() {
    if (!localStorage.getItem('todo')) {
      localStorage.setItem('todo', JSON.stringify(this.list));
    } else {
      this.list = JSON.parse(localStorage.getItem('todo'));
    }
  }
}