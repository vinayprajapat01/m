const icon = document.querySelector(".icon");
const nav = document.querySelector("nav");

icon.addEventListener("click", () => {
    icon.classList.toggle("closed");
    nav.classList.toggle("show");
});