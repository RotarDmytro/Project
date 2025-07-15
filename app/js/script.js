$(document).ready(function() {
  $('.slider').slick({
    slidesToShow: 1,
    arrows: false,
    dots: true,
    slidesToScroll: 1,
    infinite: true,
    dotsClass: 'slick-dots'
  });
});

var burger = document.querySelector('.header__hamburger a svg');
var burger_active = document.querySelector('.header__hamburger');
var menu = document.querySelector('.header__menu__bottom');
var body = document.querySelector('body');
var overlay = document.querySelector('.overlay');

burger.addEventListener('click', function() {
    menu.classList.toggle('show');
    burger_active.classList.toggle('show');
    body.classList.toggle('no-scroll');
    overlay.classList.toggle('show');
});

overlay.addEventListener('click', function() {
    menu.classList.toggle('show');
    burger_active.classList.toggle('show');
    body.classList.toggle('no-scroll');
    overlay.classList.toggle('show');
});
