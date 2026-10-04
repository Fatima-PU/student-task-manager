// Student Task Manager
console.log("Student Task Manager loaded");

const form = document.getElementById("task-form");
const titleInput = document.getElementById("task-title");
const descInput = document.getElementById("task-desc");
const searchBox = document.getElementById("search-box");
const taskList = document.getElementById("task-list");

let tasks = [];

function renderTasks() {
  const query = searchBox.value.trim().toLowerCase();
  const visibleTasks = tasks.filter(function (task) {
    return (
      task.title.toLowerCase().includes(query) ||
      task.description.toLowerCase().includes(query)
    );
  });

  taskList.innerHTML = "";

  if (tasks.length === 0) {
    taskList.innerHTML = "<p>No tasks yet.</p>";
    return;
  }

  if (visibleTasks.length === 0) {
    taskList.innerHTML = "<p>No tasks found.</p>";
    return;
  }

  visibleTasks.forEach(function (task) {
    const card = document.createElement("div");
    card.className = "task-card";

    const title = document.createElement("h3");
    title.textContent = task.title;

    const desc = document.createElement("p");
    desc.textContent = task.description;

    card.appendChild(title);
    card.appendChild(desc);
    taskList.appendChild(card);
  });
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  tasks.push({
    title: titleInput.value.trim(),
    description: descInput.value.trim()
  });
  form.reset();
  renderTasks();
});

searchBox.addEventListener("input", renderTasks);