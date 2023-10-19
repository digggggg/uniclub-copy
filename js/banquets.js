var jsLoaded = 0;

function loadHeaders() {
    const banquetsHeaders = document.querySelectorAll(
        ".banquets--card--header"
    );

    if (banquetsHeaders) {
        for (const headers of banquetsHeaders) {
            headers.addEventListener("click", () => {
                headers.classList.toggle("closed");
                const icon = headers.children[0];
                headers.classList.toggle("clicked");
                icon.classList.toggle("fa-plus");
                icon.classList.toggle("fa-minus");
                const cardContent = headers.parentElement.children[1];
                cardContent.classList.toggle("hide");
                if (!headers.classList.contains("closed")) {
                    const menuElementId =
                        headers.nextElementSibling.children[0].children[0].id;
                    const firstMenuListElement =
                        headers.nextElementSibling.children[0].children[0]
                            .children[0].id;
                    handleMenuSelection(menuElementId);
                    handleDinnerContent(menuElementId, firstMenuListElement);
                }
            });
        }
    }

    jsLoaded++;
}

async function handleDinnerContent(menuId, listId) {
    console.log("This is the menuId from hdc", menuId);
    let route;
    switch (menuId) {
        case "dinner":
            route = {
                dinnerA: "/pages/banquetsmenus/dinner/dinnerA.html",
                dinnerB: "/pages/banquetsmenus/dinner/dinnerB.html",
                dinnerC: "/pages/banquetsmenus/dinner/dinnerC.html",
            };
            break;
    }

    const path = route[listId];
    const html = await fetch(path).then((data) => data.text());
    document.getElementById("dinnerContent").innerHTML = html;
}

function handleMenuSelection(menuId) {
    // the first menu is default selected first
    // function takes in the previous selected item to toggle of the selection
    console.log("This is the menu id", menuId);
    const menuList = document.getElementById(menuId);

    menuList.addEventListener("click", function (event) {
        if (event.target.tagName === "LI") {
            const selectedItems = menuList.querySelectorAll(".selected");
            for (const item of selectedItems) {
                item.classList.remove("selected");
            }
            event.target.classList.add("selected");
            const listId = event.target.id;
            handleDinnerContent(menuId, listId);
        }
    });
}

function isLoaded(loaded) {
    if (loaded === 1) {
        return console.log("The banquet js is already loaded");
    }
    loadHeaders();
}

isLoaded(jsLoaded);
