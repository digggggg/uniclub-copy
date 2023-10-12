// const guestWrapper = document.querySelector(".guest--rooms--wrapper");

const guestRoom = document.querySelector(".guest--rooms--card");

console.log("Loaded the guests js");

guestRoom.addEventListener("click", () => {
    guestRoom.classList.toggle("clicked");
    console.log("clicked");
});
