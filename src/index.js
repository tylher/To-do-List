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
    }
]

const listHolder = document.querySelector('.holder')

toDo.map(( item) => {
    let li = document.createElement('li')
    li.classList.add('to-do-item')
    li.innerHTML=`${item.description}`
    listHolder.appendChild(li);
});