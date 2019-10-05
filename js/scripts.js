var topMenu = document.querySelector(".top-menu");
var menuButtonOpen = topMenu.querySelector(".top-menu__toggle");
var menuButtonClose = topMenu.querySelector(".top-menu__button-close");
var menuOpen = topMenu.querySelector(".top-menu__wrapper");
var menuItem1 = topMenu.querySelector(".top-menu__item-1");
var menuItem2 = topMenu.querySelector(".top-menu__item-2");
var menuItem3 = topMenu.querySelector(".top-menu__item-3");
var menuItem4 = topMenu.querySelector(".top-menu__item-4");
var menuItem5 = topMenu.querySelector(".top-menu__item-5");


var faq1 = document.querySelector(".faq__item-1");
var faq1ButtonOpen = faq1.querySelector(".faq__item-icon--opened");
var faq1Answer = faq1.querySelector(".faq__item-answer");
var faq1ButtonClose = faq1.querySelector(".faq__item-icon--closed");
var faq1AskOpen = faq1.querySelector(".faq__item-ask");

var faq2 = document.querySelector(".faq__item-2");
var faq2ButtonOpen = faq2.querySelector(".faq__item-icon--opened");
var faq2Answer = faq2.querySelector(".faq__item-answer");
var faq2ButtonClose = faq2.querySelector(".faq__item-icon--closed");
var faq2AskOpen = faq2.querySelector(".faq__item-ask");

var faq3 = document.querySelector(".faq__item-3");
var faq3ButtonOpen = faq3.querySelector(".faq__item-icon--opened");
var faq3Answer = faq3.querySelector(".faq__item-answer");
var faq3ButtonClose = faq3.querySelector(".faq__item-icon--closed");
var faq3AskOpen = faq3.querySelector(".faq__item-ask");

var faq4 = document.querySelector(".faq__item-4");
var faq4ButtonOpen = faq4.querySelector(".faq__item-icon--opened");
var faq4Answer = faq4.querySelector(".faq__item-answer");
var faq4ButtonClose = faq4.querySelector(".faq__item-icon--closed");
var faq4AskOpen = faq4.querySelector(".faq__item-ask");

menuButtonOpen.addEventListener("click", function (evt) {
  evt.preventDefault();
  menuOpen.classList.add("top-menu__wrapper--open");
});
menuButtonClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  menuOpen.classList.remove("top-menu__wrapper--open");
});
menuItem1.addEventListener("click", function (evt) {

  menuOpen.classList.remove("top-menu__wrapper--open");
});
menuItem2.addEventListener("click", function (evt) {
  menuOpen.classList.remove("top-menu__wrapper--open");
});
menuItem3.addEventListener("click", function (evt) {

  menuOpen.classList.remove("top-menu__wrapper--open");
});
menuItem4.addEventListener("click", function (evt) {

  menuOpen.classList.remove("top-menu__wrapper--open");
});
menuItem5.addEventListener("click", function (evt) {

  menuOpen.classList.remove("top-menu__wrapper--open");
});







faq1ButtonOpen.addEventListener("click", function (evt) {
  evt.preventDefault();
  faq1Answer.classList.add("faq__item-answer--show");
  faq1ButtonClose.classList.add("faq__item-answer--show");
  faq1ButtonOpen.classList.add("faq__item-icon--closed");

});
faq1ButtonClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  faq1Answer.classList.remove("faq__item-answer--show");
  faq1ButtonClose.classList.remove("faq__item-answer--show");
  faq1ButtonOpen.classList.remove("faq__item-icon--closed");

});

faq2ButtonOpen.addEventListener("click", function (evt) {
  evt.preventDefault();
  faq2Answer.classList.add("faq__item-answer--show");
  faq2ButtonClose.classList.add("faq__item-answer--show");
  faq2ButtonOpen.classList.add("faq__item-icon--closed");

});
faq2ButtonClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  faq2Answer.classList.remove("faq__item-answer--show");
  faq2ButtonClose.classList.remove("faq__item-answer--show");
  faq2ButtonOpen.classList.remove("faq__item-icon--closed");

});

faq3ButtonOpen.addEventListener("click", function (evt) {
  evt.preventDefault();
  faq3Answer.classList.add("faq__item-answer--show");
  faq3ButtonClose.classList.add("faq__item-answer--show");
  faq3ButtonOpen.classList.add("faq__item-icon--closed");

});
faq3ButtonClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  faq3Answer.classList.remove("faq__item-answer--show");
  faq3ButtonClose.classList.remove("faq__item-answer--show");
  faq3ButtonOpen.classList.remove("faq__item-icon--closed");

});

faq4ButtonOpen.addEventListener("click", function (evt) {
  evt.preventDefault();
  faq4Answer.classList.add("faq__item-answer--show");
  faq4ButtonClose.classList.add("faq__item-answer--show");
  faq4ButtonOpen.classList.add("faq__item-icon--closed");

});
faq4ButtonClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  faq4Answer.classList.remove("faq__item-answer--show");
  faq4ButtonClose.classList.remove("faq__item-answer--show");
  faq4ButtonOpen.classList.remove("faq__item-icon--closed");

});



window.addEventListener('scroll', function (e) {
  var nav = document.getElementById('nav');
  var logoWhite = document.querySelector(".top-menu__logo");
  var logoBlack = document.querySelector(".top-menu__logo--black");
  var navToogle1 = document.querySelector(".top-menu__toggle-span1");
  var navToogle2 = document.querySelector(".top-menu__toggle-span2");
  var navToogle3 = document.querySelector(".top-menu__toggle-span3");
  if (document.documentElement.scrollTop || document.body.scrollTop > window.innerHeight) {
    nav.classList.add('nav-colored');
    nav.classList.remove('nav-transparent');
    logoWhite.classList.add('top-menu__logo-none');
    logoBlack.classList.add('top-menu__logo-block');
    navToogle1.classList.add('top-menu__toggle-span--black');
    navToogle1.classList.remove('top-menu__toggle-span--white');
    navToogle2.classList.add('top-menu__toggle-span--black');
    navToogle2.classList.remove('top-menu__toggle-span--white');
    navToogle3.classList.add('top-menu__toggle-span--black');
    navToogle3.classList.remove('top-menu__toggle-span--white');
  } else {
    nav.classList.add('nav-transparent');
    nav.classList.remove('nav-colored');
    logoWhite.classList.remove('top-menu__logo-none');
    logoBlack.classList.remove('top-menu__logo-block');
    navToogle1.classList.add('top-menu__toggle-span--white');
    navToogle1.classList.remove('top-menu__toggle-span--black');
    navToogle2.classList.add('top-menu__toggle-span--white');
    navToogle2.classList.remove('top-menu__toggle-span--black');
    navToogle3.classList.add('top-menu__toggle-span--white');
    navToogle3.classList.remove('top-menu__toggle-span--black');

  }
});