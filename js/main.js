const searchBtnEl = document.querySelector('.search-btn');
const BgOverlayEl = document.querySelector('.bg-overlay');
const searchFormEl = document.querySelector('.search');
const headerEl = document.querySelector('.header');
const navigationEl = document.querySelector('.header__nav-list');
const closeMenuIconEl = document.querySelector('.close-menu-icon');
const OpenMenuIconEl = document.querySelector('.open-menu-icon');

// FAQ SELECTORS
const questionEl = document.querySelectorAll('.faq__question');
const answerEl = document.querySelectorAll('.faq__answer');
const faqIconEl = document.querySelectorAll('.faq__icon');

const bodyEl = document.querySelector('body');

searchBtnEl.addEventListener('click', function () {
  BgOverlayEl.classList.add('popup');
  searchFormEl.classList.add('popup');
});

BgOverlayEl.addEventListener('click', function () {
  BgOverlayEl.classList.remove('popup');
  searchFormEl.classList.remove('popup');
  headerEl.classList.remove('nav-open');
  bodyEl.style = 'overflow: auto;';
});

OpenMenuIconEl.addEventListener('click', function () {
  headerEl.classList.add('nav-open');
  BgOverlayEl.classList.add('popup');
  bodyEl.style = 'overflow: hidden;';
});

closeMenuIconEl.addEventListener('click', function () {
  headerEl.classList.remove('nav-open');
  bodyEl.style = 'overflow: auto;';
  BgOverlayEl.classList.remove('popup');
});

//////////////////////////////////////////////
//The frequently ask question scripts
questionEl[0].addEventListener('click', function () {
  answerEl[0].classList.toggle('show-answer');
  faqIconEl[0].classList.toggle('rotate-faq-icon');
});
questionEl[1].addEventListener('click', function () {
  answerEl[1].classList.toggle('show-answer');
  faqIconEl[1].classList.toggle('rotate-faq-icon');
});
questionEl[2].addEventListener('click', function () {
  answerEl[2].classList.toggle('show-answer');
  faqIconEl[2].classList.toggle('rotate-faq-icon');
});
questionEl[3].addEventListener('click', function () {
  answerEl[3].classList.toggle('show-answer');
  faqIconEl[3].classList.toggle('rotate-faq-icon');
});
questionEl[4].addEventListener('click', function () {
  answerEl[4].classList.toggle('show-answer');
  faqIconEl[4].classList.toggle('rotate-faq-icon');
});
questionEl[5].addEventListener('click', function () {
  answerEl[5].classList.toggle('show-answer');
  faqIconEl[5].classList.toggle('rotate-faq-icon');
});
