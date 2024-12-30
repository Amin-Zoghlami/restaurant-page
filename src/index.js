import "./style.css";
import showHome from "./home.js"
import showMenu from "./menu.js"
import showAbout from "./about.js"

showHome();

const content = document.getElementById("content");
function clearContent() {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
}

const homeButton = document.getElementById("home-button");
homeButton.addEventListener("click", () => {
    clearContent();
    showHome();
});


const menuButton = document.getElementById("menu-button");
menuButton.addEventListener("click", () => {
    clearContent();
    showMenu();
});

const aboutButton = document.getElementById("about-button");
aboutButton.addEventListener("click", () => {
    clearContent();
    showAbout();
});

console.log("Greetings, World");