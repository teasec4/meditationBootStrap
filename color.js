let bodyColor = document.getElementById('body')
let navColor = document.getElementById('nav')
let buttonClose = document.getElementById('buttonClose')

button2.addEventListener('click', function () {
    bodyColor.className = "bg-light";
    navColor.className = "navbar navbar-expand-md navbar-dark fixed-top bg-secondary";
})

buttonClose.addEventListener('click', function () {
    bodyColor.className = "bg-body3";
    navColor.className = "navbar navbar-expand-md navbar-dark fixed-top bg-body2";

})