const createItem = (item) => {
  const listHolder = document.querySelector('.holder');
  const li = document.createElement('li');
  li.classList.add('to-do-item');
  li.innerHTML = `<div>${item.completed
    ? '<input type="checkbox" checked>'
    : '<input type="checkbox" >'
  } <input type='text' class='item-edit' value='${item.description}'></div> <div><i class="option fa-solid fa-ellipsis-vertical"></i><i class="fa-solid fa-trash-can"></i></div>`;
  listHolder.appendChild(li);
};

export default createItem;