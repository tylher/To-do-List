import './style.css';

const toDo = [
  {
    description: 'Arrange room',
    completed: false,
    index: 1,
  },
  {
    description: 'Read a book',
    completed: false,
    index: 2,
  },
  {
    description: 'Study javascript',
    completed: false,
    index: 3,
  },
  {
    description: 'Work on personal project',
    completed: false,
    index: 4,
  },
  {
    description: 'Talk to friends',
    completed: false,
    index: 5,
  },
];

const listHolder = document.querySelector('.holder');

toDo.map((item) => {
  const li = document.createElement('li');
  li.classList.add('to-do-item');
  li.innerHTML = `<div>${
    item.completed
      ? '<i class="fa-solid fa-square-check"></i>'
      : '<i class="fa-solid fa-square"></i>'
  } <p>${item.description}</p></div> <i class="option fa-solid fa-ellipsis-vertical"></i>`;
  listHolder.appendChild(li);
  return '';
});
