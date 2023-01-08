// jshint esversion:6
const navSlide = () => {
const burger = document.querySelector('.burger');
const nav = document.querySelector('.links');



burger.addEventListener('click', () => {
nav.classList.toggle('nav-active');
burger.classList.toggle('toggle');
});


}
navSlide();

const arrow1 = document.getElementById('down-logo2');
const arrow = document.getElementById('down-logo1');
const submenu = document.getElementById('sub');
const submenu1 = document.getElementById('sub1');
const links = document.querySelector('.submenu1');
const links1 = document.querySelector('.submenu');


links.addEventListener('click', () => {
  submenu.classList.toggle('sub-active');
  arrow.classList.toggle('arrows');
});

links1.addEventListener('click', () => {
  submenu1.classList.toggle('sub-active');
  arrow1.classList.toggle('arrows');
});
