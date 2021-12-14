
// ================
// hamgurger button
const menuApp = {};

menuApp.menuDiv = document.querySelector('.menu');
menuApp.listOfMenu = document.querySelector('.menu-item');

menuApp.hamburgerMenu = document.createElement('div');
menuApp.hamburgerMenu.innerHTML = `<span class="hamburger-btn"><i class="fas fa-bars"></i></span>`;
menuApp.menuDiv.appendChild(menuApp.hamburgerMenu);

// ===============
menuApp.hamburgerButton = document.querySelector('.fas');
menuApp.hamburgerClick = function(){
menuApp.hamburgerButton.addEventListener('click', function(){
    menuApp.listOfMenu.classList.toggle('active');
});
}
menuApp.hamburgerClick();


// =====================
// scroll to top button
const createButtonGoToTop = document.createElement('div');
createButtonGoToTop.innerHTML = `<a class='go-to-top-link btn'>TOP </a>`;

const heroPage = document.querySelector('.hero-page');
console.log(createButtonGoToTop);








// get in touch: click on get in Touch button pop up comment box.

const getInTouchBox = document.querySelector('.getInTouch')
