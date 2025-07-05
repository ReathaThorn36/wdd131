// Update copyright year
document.getElementById("year").textContent = new Date().getFullYear();

// Update last modified
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

// Toggle mobile menu
const menuButton = document.getElementById("menu");
const nav = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
  nav.classList.toggle("show");
  menuButton.textContent = nav.classList.contains("show") ? "✖" : "☰";
});
