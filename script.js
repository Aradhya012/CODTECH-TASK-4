function markComplete() {

  let progress = localStorage.getItem("progress") || 0;

  progress++;

  localStorage.setItem("progress", progress);

  alert("Course marked as completed!");

}

const progressText = document.getElementById("progress-text");
const progressBar = document.getElementById("progress-bar");

if (progressText && progressBar) {

  let progress = localStorage.getItem("progress") || 0;

  progressText.innerHTML =
    `Courses Completed: ${progress}`;

  progressBar.value = progress;

}