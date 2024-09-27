const todoList = [];

renderTodoList();

function Extractt() 
{
  const inputName = document.querySelector('.js-name');
  const name = inputName.value;

  const inputDuedate = document.querySelector('.js-dueDate');
  const dueDate = inputDuedate.value;
  
  todoList.push(
    {
      // name: name,
      // dueDate: dueDate
      name,
      dueDate
    }
  );
  
  
  inputName.value = null;
  inputDuedate.value = null;  // to remove the text in the input box after clicking "Add".

  renderTodoList();
}



function renderTodoList() {

  let todoListHTML = '';

  for(let i = 0; i < todoList.length; i++)
  {
    let tasks_object = todoList[i];
    // const name = tasks_object.name;
    // const duedate = tasks_object.duedate;
    const{ name, dueDate } = tasks_object;    // this code will replace the above two code.
    let html = `
      <div>${name}</div>

      <div>${dueDate}</div>
         
      <button class="delete-btn" onclick = "deletion(${i});">Delete</button> 
      `;   //generating HTML inside JS.
    todoListHTML += html;
  }

  document.querySelector('.js-div')
    .innerHTML = todoListHTML;
}


function deletion(i) {
  todoList.splice(i,1);
  renderTodoList();
}
