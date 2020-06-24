import "./components/Navbar.css"

$(function () {
    $('.hamburger-menu').on('click', function () {
        $('.toggle').toggleClass('open');
    })
});