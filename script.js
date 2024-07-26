document.addEventListener('DOMContentLoaded', function(){
    //Select DOM Elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

   //Create the addTask Function
  addTask = () =>  {
     let taskText = taskInput.value.trim();
     if (taskText === '') {
        alert('Please enter a task.');
       } 
    else{
        //Task Creation and Removal
        let list = document.createElement('li')
        list.textContent = taskText;
        let removeBtn = document.createElement('button')
        removeBtn.textContent = "Remove";
        removeBtn.classList.add('remove-btn');

        // Assign an onclick event to the remove button
        removeBtn.onclick = function() {
            taskList.removeChild(list);
        };

        // Append the remove button to the <li> element
        list.appendChild(removeBtn);

        // Append the <li> element to taskList
        taskList.appendChild(list);

        // Clear the task input field
        taskInput.value = '';
     }

      //Attach Event Listeners
       addButton.addEventListener('click', addTask);
       taskInput.addEventListener('keypress', function(event){
        if (event.key === 'Enter') {
            addTask();
        }
     })
  }
  
})

document.addEventListener('DOMContentLoaded', function(){
    addTask();
})
