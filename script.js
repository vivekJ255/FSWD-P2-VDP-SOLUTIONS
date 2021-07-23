let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('nav-toggle');
});

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('nav-toggle');
}



$(function () {
    $('#myDiv').floatingWhatsApp({
        phone: '9397304029',
        popupMessage: 'Hello, VDP SOLUTIONS here how can we help you? (9397304029)',
        showPopup: true
    });
});
