// Global object 
const myApp = {};

myApp.init = () => {
    myApp.hamburgerClick();  
}
// add hamburger button through js and add functionality: click pop menu bar in samll screen
// create a varibale and store html selector
myApp.listOfMenu = document.querySelector('.menu-item');
myApp.menuDiv = document.querySelector('.menu');

//  create div, inside div add hamburgerbutton
myApp.hamburgerMenu = document.createElement('div');
myApp.hamburgerMenu.innerHTML = `<span class="hamburger-btn"><i class="fas fa-bars"></i></span>`;
myApp.menuDiv.appendChild(myApp.hamburgerMenu);
myApp.hamburgerButton = document.querySelector('.fa-bars');

// add click eventlistner/ on click menu will open 
myApp.hamburgerClick = function(){
myApp.hamburgerButton.addEventListener('click', function(){
    myApp.listOfMenu.classList.toggle('active');
    });
}

// go to top button. create a variable and store selector 
myApp.heroPage = document.querySelector('.hero-page');
myApp.rootElement = document.documentElement;

// add top font-awesome button on the html by creating element 
myApp.topButton = `<div class = "top-btn"> <span ><a href="#home" class='go-to-top-link '><i class="show fas fa-chevron-circle-up"></i></a></span></div>`;
myApp.heroPage.insertAdjacentHTML('afterend', myApp.topButton);

myApp.fontAwesome = document.querySelector('.fa-chevron-circle-up')

// create condtion in function if window will move up after some height the button will appear 
myApp.scrollUp = function(){
    if (myApp.rootElement.scrollTop > 200) {
        myApp.fontAwesome.classList.remove("show")
    }
    else {
        myApp.fontAwesome.classList.add("show")
    }
}
// declare function in add an event listner to run functionality
window.addEventListener('scroll', myApp.scrollUp);


myApp.init();