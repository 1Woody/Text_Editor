var burger = document.querySelector('.burger');
var nav = document.querySelector('.nav-text');

burger.addEventListener('click', menu);

function menu(){
    nav.classList.toggle('nav-active');
    //burger animation
    burger.classList.toggle('toggle');
}

