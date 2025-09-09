const toggleTheme = document.getElementById("toggleTheme");
const html = document.documentElement; // seleciona o <html>

// Checa tema salvo
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  html.setAttribute("data-theme", savedTheme);
  toggleTheme.className = savedTheme === "dark" ? "bi bi-moon" : "bi bi-sun";
}

// Alterna tema
toggleTheme.addEventListener("click", () => {
  const currentTheme = html.getAttribute("data-theme");
  if (currentTheme === "dark") {
    html.setAttribute("data-theme", "light");
    toggleTheme.className = "bi bi-sun";
    localStorage.setItem("theme", "light");
  } else {
    html.setAttribute("data-theme", "dark");
    toggleTheme.className = "bi bi-moon";
    localStorage.setItem("theme", "dark");
  }
});
