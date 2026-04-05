if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
        navigator.serviceWorker
        .register("/sw.js")
        .then(res => console.log("Service worker registered"))
        .catch(err => console.log("Service worker not registered", err));
    });
}

const updateVisibility = () => {
const hash = window.location.hash || "#Recommendations";
const sections = document.querySelectorAll('.resourcePgSect');

sections.forEach(section => {
    if (section.id === hash.substring(1)) {
    section.style.display = 'block';
    } else {
    section.style.display = 'none';
    }
});
};

window.addEventListener('DOMContentLoaded', updateVisibility);
window.addEventListener('hashchange', updateVisibility);