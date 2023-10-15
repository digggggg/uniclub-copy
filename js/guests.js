// const guestWrapper = document.querySelector(".guest--rooms--wrapper");
console.log("loaded guest js");

const guestRoom = document.querySelectorAll(".guest--rooms--card");
const guestRoomHeaders = document.querySelectorAll(".guest--card--header");

if (guestRoomHeaders) {
    for (const headers of guestRoomHeaders) {
        headers.addEventListener("click", () => {
            console.log(headers.children, "This is the child");
            console.log(headers.parentElement, "This is the parent");
            const card = headers.parentElement;
            const icon = headers.children[0];
            card.classList.toggle("clicked");
            icon.classList.toggle("fa-plus");
            icon.classList.toggle("fa-minus");
            const cardContent = card.children[1];
            cardContent.classList.toggle("hide");
        });
    }
}

/*
need a div to hold the card title and the icon 
need a div to hold the text but as of right now it is off (display: none)
when clicked we target the styling of the first div and do work
then we toggle the 2nd div as shown or not
*/
