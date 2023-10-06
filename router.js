// this function adds the route to the users history in the session and changes the url
const route = (event) => {
    //event is the click of the link
    event.preventDefautlt();
    // preventing the default link behavior so we can execute code before the user can go to the link
    window.history.pushState({}, "", event.target.href);
    // this allows us to look at the browser history stack and load the url to the page the user is trying to get to onto the stack
    // pushState only works with urls that are within the origin of the website, any pages the website has are fine external links are not
};

const handleLocation = async () => {
    const path = window.location.pathname;
};

window.route = route;
