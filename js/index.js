console.log("This is the main page and I have loaded the index.js script");

// targeting the burger menu
const menuToggle = document.querySelector(".burger--toggle");
// targeting the nav menu
const navMenu = document.querySelector(".nav-menu");

// adding and event listener to the burger menu for a click event
// on the click event the navMenu's classList toggles "show-menu"
// if that location has no show-menu class it is added and if it does it is removed
menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show-menu");
});
