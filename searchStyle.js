// get in touch: click on get-in-Touch header or help font-awesome button to pop-up comment box.
// create a variable and select html selector
const searchApp = {};


searchApp.searchHiddenWindow = document.querySelector('.search-style-hidden-window');
searchApp.searchButton = document.querySelector('.search-button');
searchApp.closeButton = document.querySelector('.search-close-btn');
searchApp.overLay = document.querySelector('#overlay')

// add an event listner to show comment-form and overlay on background
searchApp.searchButton.addEventListener("click", function () {
    searchApp.searchHiddenWindow.classList.remove('showBox');
    searchApp.overLay.classList.add('show');
})
// add an event listner to close comment-form and overlay background
searchApp.closeButton.addEventListener("click", function () {
    searchApp.searchHiddenWindow.classList.add('showBox');
    searchApp.overLay.classList.remove('show');
})