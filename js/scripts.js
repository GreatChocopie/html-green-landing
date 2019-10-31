var topMenu = document.querySelector(".top-menu");
var menuButtonOpen = topMenu.querySelector(".top-menu__toggle");
var menuButtonClose = topMenu.querySelector(".top-menu__button-close");
var menuOpen = topMenu.querySelector(".top-menu__wrapper");
var menuItem1 = topMenu.querySelector(".top-menu__item-1");
var menuItem2 = topMenu.querySelector(".top-menu__item-2");
var menuItem3 = topMenu.querySelector(".top-menu__item-3");
var menuItem4 = topMenu.querySelector(".top-menu__item-4");
var menuItem5 = topMenu.querySelector(".top-menu__item-5");




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






window.addEventListener('scroll', function (e) {
  var nav = document.getElementById('nav');
  var logoWhite = document.querySelector(".top-menu__logo");
  var logoBlack = document.querySelector(".top-menu__logo--black");
  var navToogle = document.querySelector(".top-menu__toggle");

  var navNavigation = document.querySelector(".top-menu__navigation");
  if (document.documentElement.scrollTop || document.body.scrollTop > window.innerHeight) {
    nav.classList.add('nav-colored');
    nav.classList.remove('nav-transparent');
    logoWhite.classList.add('top-menu__logo-none');
    logoBlack.classList.add('top-menu__logo-block');
    navToogle.classList.add('top-menu__toggle--black');
    navNavigation.classList.add('top-menu__navigation--black');

  } else {
    nav.classList.add('nav-transparent');
    nav.classList.remove('nav-colored');
    logoWhite.classList.remove('top-menu__logo-none');
    logoBlack.classList.remove('top-menu__logo-block');

    navToogle.classList.remove('top-menu__toggle--black')
    navNavigation.classList.remove('top-menu__navigation--black');

  }
});


/**
   Проверяет, выше ли текущий элемент чем область экрана
*/
function isScrolledElemHigher(elem) {
  var docViewTop = document.documentElement.scrollTop;
  var docViewBottom = docViewTop + window.innerHeight;

  var elemTop = elem.getBoundingClientRect().top + document.documentElement.scrollTop
  var elemBottom = elemTop + elem.clientHeight;

  return (elemBottom <= docViewBottom);
}

function updateMenu() {
  var menu_items = document.querySelectorAll('.top-menu__item a');

  // Идем в цикле по всем элементам
  menu_items.forEach(function (elem) {
    // Удаляем старые классы активности
    elem.classList.remove('top-menu__item-a--current');
  });

  // Идем в цикле по всем элементам c конца!
  for (var i = menu_items.length - 1; i >= 0; i--) {
    var elem = menu_items[i];

    var href_value = elem.getAttribute('href'); // тут будет #home например

    // Для привязки <a id='home'>
    // var href_target = document.querySelector(href_value);

    // Для привязки <a name='home'>
    var href_target = document.querySelector('a[name=' + href_value.substr(1) + ']');
    // substr для удаления решетки

    if (isScrolledElemHigher(href_target)) {
      // Добавляем класс активности к найденному элементу
      elem.classList.add('top-menu__item-a--current');
      break; // прекращаем обход
    }
  }
}

// Привязываем к событию прокрутки страницы
window.addEventListener('scroll', updateMenu);