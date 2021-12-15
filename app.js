
// ================
// hamgurger button
const menuApp = {};

menuApp.listOfMenu = document.querySelector('.menu-item');

menuApp.menuDiv = document.querySelector('.menu');
menuApp.hamburgerMenu = document.createElement('div');
menuApp.hamburgerMenu.innerHTML = `<span class="hamburger-btn"><i class="fas fa-bars"></i></span>`;
menuApp.menuDiv.appendChild(menuApp.hamburgerMenu);

// ===============
menuApp.hamburgerButton = document.querySelector('.fa-bars');
menuApp.hamburgerClick = function(){
menuApp.hamburgerButton.addEventListener('click', function(){
    menuApp.listOfMenu.classList.toggle('active');
});
}
menuApp.hamburgerClick();


// =====================
// scroll to top button

const ScrollToTop = {};
// select element in to variable
ScrollToTop.heroPage = document.querySelector('.hero-page');
ScrollToTop.rootElement = document.documentElement;

// add top font-awesome button on the html 
ScrollToTop.topButton = `<div class = "top-btn"> <span ><a href="#home" class='go-to-top-link '><i class="show fas fa-chevron-circle-up"></i></a></span></div>`;
ScrollToTop.heroPage.insertAdjacentHTML('afterend', ScrollToTop.topButton);

ScrollToTop.fontAwesome = document.querySelector('.fa-chevron-circle-up')

ScrollToTop.scrollUp = function(){
    if (ScrollToTop.rootElement.scrollTop > 200) {
        ScrollToTop.fontAwesome.classList.remove("show")
    }
    else {
        ScrollToTop.fontAwesome.classList.add("show")
    }
}
window.addEventListener('scroll', ScrollToTop.scrollUp);


// get in touch: click on get in Touch button pop up comment box.
const commentApp = {};

commentApp.facilitySection = document.querySelector('.facility-comment-form')
commentApp.getInTouchHeader= document.querySelector('.get-in-touch')
commentApp.closeButton = document.querySelector('.close-btn');
 
// add event listner to show comment form
commentApp.getInTouchHeader.addEventListener("click",function(){
    commentApp.facilitySection.classList.remove('show');
})
// add event listner to close comment form
commentApp.closeButton.addEventListener("click", function () {
    commentApp.facilitySection.classList.add('show');
})
                
