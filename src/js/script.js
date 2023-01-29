const menu = document.querySelector("nav");
const openMenuButton = document.getElementById("menu-button");
const closeMenuButton = document.getElementById("menu-close")

openMenuButton.addEventListener("click", () => {
    menu.classList.add("open");
});

closeMenuButton.addEventListener("click", () => {
    menu.classList.remove("open");
});