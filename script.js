// Sticky Navbar functionality (optional, for additional features like changing styles when sticky)
window.onscroll = function() { stickyNavbar() };

let navbar = document.querySelector(".navbar");
let sticky = navbar.offsetTop;

function stickyNavbar() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("is-sticky");
    } else {
        navbar.classList.remove("is-sticky");
    }
}
// JavaScript Document