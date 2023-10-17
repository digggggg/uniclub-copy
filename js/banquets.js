var jsLoaded = 0;

function isLoaded(loaded) {
    if (loaded === 1) {
        return console.log("The banquet js is already loaded");
    }

    const banquetsHeaders = document.querySelectorAll(
        ".banquets--card--header"
    );

    if (banquetsHeaders) {
        for (const headers of banquetsHeaders) {
            headers.addEventListener("click", () => {
                console.log(headers.children, "This is the child");
                console.log(headers.parentElement, "This is the parent");
                const icon = headers.children[0];
                headers.classList.toggle("clicked");
                icon.classList.toggle("fa-plus");
                icon.classList.toggle("fa-minus");
                const cardContent = headers.parentElement.children[1];
                cardContent.classList.toggle("hide");
            });
        }
    }

    jsLoaded++;
}

isLoaded(jsLoaded);
