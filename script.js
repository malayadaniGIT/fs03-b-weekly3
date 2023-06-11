// const todoInput = document.getElementById('todoInput');
// const addButton = document.getElementById('btn');
// const todoList = document.getElementById('todoList');

// // Function to create a new todo item
// function create(text) {
//     const listItem = document.createElement('li');
//     listItem.textContent = text;

//     const crossSymbol = document.createElement('table');
//     crossSymbol.style.backgroundColor='grey'
//     crossSymbol.textContent = '❌';
//     crossSymbol.className = 'cross';
//     crossSymbol.addEventListener('click', markAsCompleted);

//     listItem.appendChild(crossSymbol);
//     return listItem;
// }

// // Function to add a new todo
// function addTodo() {
//     const add = todoInput.value.trim();
//     if (add !== '') {
//         const todoItem = create(add);
//         todoList.appendChild(todoItem);
//         todoInput.value = '';
//     }
// }

// // Function to mark a todo item as completed
// function markAsCompleted(event) {
//     const listItem = event.target.parentNode;
//     listItem.classList.toggle('completed');
//     event.target.textContent = '✅';
// }

// // Event listener for the add button
// addButton.addEventListener('click', addTodo);

// // Event listener for the enter key
// todoInput.addEventListener('keypress', function(event) {
//     if (event.key === 'Enter') {
//         addTodo();
//     }
// });







const input = document.getElementById('input');
const button = document.getElementById('btn');
const divItems = document.getElementById('divItems');

// Function to create a new todo item
function create(text) {
    const row = document.createElement('div');
    row.className = 'item-row';

    const emojiCell = document.createElement('div');
    emojiCell.className = 'emoji-cell';

    const textCell = document.createElement('div');
    textCell.className = 'text-cell';
    textCell.textContent = text;

    const crossCell = document.createElement('div');
    const crossSymbol = document.createElement('span');
    crossSymbol.textContent = '❌';
    crossSymbol.className = 'cross';
    crossSymbol.addEventListener('click', function() {
        markAsCompleted(row, textCell, emojiCell);
    });

    crossCell.appendChild(crossSymbol);

    row.appendChild(emojiCell);
    row.appendChild(textCell);
    row.appendChild(crossCell);

    return row;
}

// Function to add a new todo
function addTodo() {
    const add = input.value.trim();
    if (add !== '') {
        const todoRow = create(add);
        divItems.appendChild(todoRow);
        input.value = '';
    }
}

// Function to mark a todo item as completed
function complete(){
    
}

// Event listener for the add button
button.addEventListener('click', addTodo);

// Event listener for the enter key
input.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTodo();
    }
});
