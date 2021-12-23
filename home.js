// get in touch: click on get-in-Touch header or help font-awesome button to pop-up comment box.
// create a variable and select html selector
const homeApp = {};


homeApp.facilitySection = document.querySelector('.facility-comment-form')
homeApp.getInTouchHeader= document.querySelector('.get-in-touch')
homeApp.closeButton = document.querySelector('.close-btn');
homeApp.overLay = document.querySelector('#overlay')
 
// add an event listner to show comment-form and overlay on background
homeApp.getInTouchHeader.addEventListener("click",function(){
    homeApp.facilitySection.classList.remove('showBox');
    homeApp.overLay.classList.add('show')
})
// add an event listner to close comment-form and overlay background
homeApp.closeButton.addEventListener("click", function () {
    homeApp.facilitySection.classList.add('showBox');
    homeApp.overLay.classList.remove('show')
})