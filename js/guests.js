// const guestWrapper = document.querySelector(".guest--rooms--wrapper");
console.log("loaded guest js");

const guestRoom = document.querySelectorAll(".guest--rooms--card");
console.log(guestRoom);
let guestRoomCount = 1;
if (guestRoom) {
    for (const card of guestRoom) {
        card.addEventListener("click", () => {
            card.classList.toggle("clicked");
        });
    }
    // guestRoom.addEventListener("click", () => {
    //     guestRoom.classList.toggle("clicked");
    //     console.log("clicked");
    // });
}
