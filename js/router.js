// // this function adds the route to the users history in the session and changes the url
const route = (event) => {
    //event is the click of the link
    // window.event is deprecated but this way of routing breaks if the or statement is not included so idk
    event = event || window.event;
    console.log("This is the event object", event);
    console.log(
        "clicked, This is the event.currentTarget.href ===",
        event.currentTarget.href
    );
    let newPath =
        event.currentTarget.href == undefined
            ? event.currentTarget.data
            : event.currentTarget.href;

    event.preventDefault();
    // preventing the default link behavior so we can execute code before the user can go to the link
    window.history.pushState({}, "", newPath);
    // this allows us to look at the browser history stack and load the url to the page the user is trying to get to onto the stack
    // pushState only works with urls that are within the origin of the website, any pages the website has are fine external links are not
    // override the default link behavior to revolve around the custom app routes instead
    handleLocation();
};

const routes = {
    404: "/pages/404.html",
    "/": "/pages/index.html",
    "/about": "/pages/about.html",
    "/guests": "/pages/guests.html",
    "/banquets": "/pages/banquets.html",
    "/weddings": "/pages/weddings.html",
    "/login": "/pages/login.html",
    "/contact": "/pages/contact.html",
    "/rules": "/pages/rules.html",
};

const handleLocation = async () => {
    // grabbing the window pathname (current location)
    const path = window.location.pathname;
    // define what html to load and if path not specified throw the 404 page
    const route = routes[path] || routes[404];
    // need to grab the html and turn it into text
    const html = await fetch(route).then((data) => data.text());
    document.getElementById("main-page").innerHTML = html;
    switch (route) {
        case "/pages/index.html":
            loadHomeScript();
            break;
        case "/pages/guests.html":
            loadGuestScript();
            break;
    }
};

// script functions

function loadHomeScript() {
    // const oldScript = document.getElementsByTagName("script");
    // console.log("this is the old script", oldScript);
    const script = document.createElement("script");
    script.src = "/js/index.js";
    document.body.appendChild(script);
}

function loadGuestScript() {
    const script = document.createElement("script");
    script.src = "/js/guests.js";
    document.body.appendChild(script);
}

window.onpopstate = handleLocation;
// added route and routeHome functions to the window object
window.route = route;
// window.routeHome = routeHome();
handleLocation();
