const themeToggle = document.getElementById("clean_mode");
const body = document.body;

clean_mode.addEventListener("click", () => {
  body.classList.toggle("clean_mode");

  // Salvar a preferência no localStorage
  if (body.classList.contains("clean_mode")) {
    localStorage.setItem("theme", "clean");
  } else {
    localStorage.setItem("theme", "dark");
  }
});


window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "clean") {
      body.classList.add("clean_mode");
    }
  });