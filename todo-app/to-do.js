let tasks = [];  
let input = document.getElementById('input'); 
let tasklist = document.getElementById('ta');
let inpbtn = document.getElementById('inputbutton');


function add() {

  inpbtn.addEventListener('click', (e) => {
    e.preventDefault()

    const inpvalue = input.value;

    if (inpvalue === "") {
        alert("enter valid task");

    } else {
        tasks.push(inpvalue.trim());
        console.log(tasks)      
      render();// Re-render the task list after data change
    }
  });
}


function render() {

  // Clear input field after adding a task
  input.value = '';

  // Remove all existing <li> elements before redrawing
  tasklist.innerHTML = "";

  // Loop through tasks array to build UI from scratch
  tasks.forEach((task, index) => {

    const rmvbtn = document.createElement('button');
    rmvbtn.textContent = "remove";

    rmvbtn.addEventListener('click', () => {
      tasks.splice(index, 1);
      console.log(tasks);

      // Re-render UI so remaining tasks are displayed
      render();
    });

    let li = document.createElement('li');
    let checkboxicon=document.createElement('input')
    checkboxicon.type='checkbox'
    li.textContent = task;
    li.append(rmvbtn);
        li.append(checkboxicon);

    // Add the task item to the task list
    tasklist.append(li);
  });
}

add();

