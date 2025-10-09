let input = document.getElementById("taskInput");
let button = document.getElementById("addTask");
let list = document.getElementById("taskList");

function createTaskElement(taskText) {

    let li = document.createElement("li");
    li.textContent = taskText;

    li.addEventListener("click", function(event) {

        if (event.target !== removeButton) {
             li.classList.toggle("done");
        }
    });

    let removeButton = document.createElement("button");
    removeButton.textContent = "X";
    removeButton.classList.add("remove-btn"); 

    removeButton.addEventListener("click", function() {

        li.remove();
    });

    li.appendChild(removeButton);
    
    return li;
}

button.addEventListener("click", function() {
    
    let taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let taskElement = createTaskElement(taskText);

    list.appendChild(taskElement);

    input.value = "";
    
    input.focus(); 
});

input.addEventListener("keypress", function(event) {
    
    if (event.key === "Enter") {
        button.click();
    }
});