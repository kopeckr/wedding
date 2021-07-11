'use strict';

console.log('funguju');

// const navElm = document.querySelector('menu');
// const navAllElm = document.querySelectorAll('menu a');

// const showNav = () => {
//   navElm.classList.toggle('header__hamburger--btn--opened');
// };

// // navBtn.addEventListener('click', showNav);

// const navBtn = document.querySelector('#header__hamburger--btn');
// navBtn.addEventListener('click', showNav);

// navAllElm.forEach((elm) => {
//   elm.addEventListener('click', showNav);
// });

// header__hamburger--btn--opened

// const hamburger = document.querySelector('.navbar__hamburger');
// const navMenu = document.querySelector('.navbar__menu');

// hamburger.addEventListener('click', mobileMenu);

// function mobileMenu() {
//   hamburger.classList.toggle('active');
//   navMenu.classList.toggle('active');
// }

const hamburger = document.querySelector('.navbar__hamburger');
const navMenu = document.querySelector('.navbar__menu');

hamburger.addEventListener('click', mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
}

const navLink = document.querySelectorAll('.menu__link');

navLink.forEach((n) => n.addEventListener('click', closeMenu));

function closeMenu() {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}
