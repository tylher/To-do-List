const checkItem = (todoList, index) => {
  todoList = JSON.parse(localStorage.getItem('to-do'));
  todoList[index].completed = !todoList[index].completed;
  localStorage.setItem('to-do', JSON.stringify(todoList));
  return todoList;
};

export default checkItem;
