'use strict';

let burger = document.querySelector('.header__burger');
let headerList = document.querySelector('.header__list');
let headerTitle = document.querySelector('.header__title');
let up = document.querySelector('.up');


burger.onclick = function() {
    headerList.classList.toggle('active');
    burger.classList.toggle('active');
};

$('.up').click(function() {
    $('html, body').animate({
        scrollTop: 0
    }, 1000);
});

window.addEventListener('click', menuLock);

function menuLock(event) {
    if (!event.target.closest('.header__menu')
    && burger.classList.contains('active')) {
        headerList.classList.remove('active');
        burger.classList.remove('active');
    }
};