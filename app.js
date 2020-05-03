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

  e.preventDefault();
}
