/* the classes that exist due to materialize are black, secondary-content */

// Define UI Vars
const form = document.querySelector("#task-form"); //or could use getElementById
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const fitler = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
  // Add task event
  form.addEventListener("submit", addTask);
  // Remove task event
  taskList.addEventListener("click", removeTask);
  // Clear task event
  clearBtn.addEventListener("click", clearTasks);
  // Filter tasks event
  fitler.addEventListener("keyup", filterTasks);
}

// Add Task
function addTask(e) {
  // this will take an event since it's an event handler
  if (taskInput.value == "") {
    alert("Add a task");
  }

  // Create li element
  const li = document.createElement("li");
  // Add class
  li.className = "collection-item";
  // Create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  // Create new link element
  const link = document.createElement("a");
  // Add class
  link.className = "delete-item secondary-content"; // in materialize if you want to have something to the right we use secondary=content class
  // Add icon html
  link.innerHTML = '<i class = "fa fa-remove"></i>';
  // Append the link to the li
  li.appendChild(link);

  // Append li to ul
  taskList.appendChild(li);

  // Clear input
  taskInput.value = "";

  e.preventDefault();
}

// Remove Task
function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are You Sure?")) {
      e.target.parentElement.parentElement.remove();
    }
  }
}

// Clear Tasks
function clearTasks() {
  // taskList.innerHTML = ""; -> equals nothing - this is one way or loop through while loop and remove each one & this is faster
  //Faster
  while (taskList.firstChild) {
    // while there's still something in the list(resource link in tips)
    taskList.removeChild(taskList.firstChild);
  }
}

// Filter tasks
function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll(".collection-item").forEach(function(task) {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
}
