const todoList = [{
  name:'make dinner',
  dueDate:'8-2-2024',
},{
  name: 'watch youtube',
  dueDate: '8-2-2024',
},{
  name:'wash dishes',
  dueDate: '8-2-2024',
}];

renderTodoList();

function renderTodoList(){

  let todoListHtml = '';

  for(let i = 0; i < todoList.length; i ++){
    const todoObject = todoList[i];
    //const name = todoObject.name;
    //const dueDate = todoObject.dueDate;
    // this is called destructering, it is alternative shortcut to write the sam eobject above and it is the same thing as the object above to save the data onto variable.

    const {name, dueDate} = todoObject;
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button onclick="
    todoList.splice(${i}, 1);
    renderTodoList();
    " class="todo-delete-button">Delete</button>
    `
    ;
    
    todoListHtml += html;
  }


  document.querySelector('.js-todo-list')
  .innerHTML = todoListHtml;

}

function addTodo(){
const inputElement = document.querySelector('.js-name-input');
const name = inputElement.value;

const dueDateInput = document.querySelector('.js-due-date-input');
const dueDate = dueDateInput.value;

todoList.push({
  //name: name,
  //dueDate: dueDate, this is called shorthand property for make it shortcut for his object.
  name,
  dueDate
});


inputElement.value = '';

renderTodoList();

}