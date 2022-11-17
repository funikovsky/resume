const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
  menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
  menu.classList.remove('active');
});

const counter = document.querySelectorAll('.readines__percent'),
  filler = document.querySelectorAll('.slider__filler');

counter.forEach((item, index) => {
  filler[index].style.width = item.innerHTML;
});
