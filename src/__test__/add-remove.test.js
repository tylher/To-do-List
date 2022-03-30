/**
 * @jest-environment jsdom
 */

import AddRemove from '../to-do-methods/add-remove.js';

test('add new item', () => {
  window.localStorage = Storage.prototype;
  const todoObj = new AddRemove();
  todoObj.getTodo();
  todoObj.addItem('try');
  expect(todoObj.list).toHaveLength(1);
  expect(localStorage).toHaveLength(1);
});

test('remove item', () => {
  const todoObj = new AddRemove();
  todoObj.getTodo();
  todoObj.addItem('best');
  todoObj.addItem('pixels');
  todoObj.deleteItem('best');
  expect(todoObj.list).toHaveLength(2);
});