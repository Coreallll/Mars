"use strict";

//Popup
var popupBtn = document.querySelector('.popup-btn');
var closePopupBtn = document.querySelector('.popup__close');
var popup = document.querySelector('.popup');
var popupContent = document.querySelector('.popup__content');
popupBtn.addEventListener('click', function () {
  popup.classList.add('popup--open');
  if (headerNav.classList.contains('header__nav--active')) headerNav.classList.remove('header__nav--active');
});
closePopupBtn.addEventListener('click', function () {
  popup.classList.remove('popup--open');
}); //Parallax mousemove

window.onload = function () {
  var parallax = document.querySelector('.body');

  if (parallax) {
    var setMouseParallaxStyle = function setMouseParallaxStyle() {
      var distX = coordXprocent - positionX;
      var distY = coordYprocent - positionY;
      positionX = positionX + distX * speed;
      positionY = positionY + distY * speed;
      background.style.transform = "translate(".concat(positionX / forBack, "%, ", 0, "%)");

      if (document.documentElement.clientWidth < 1441) {
        background.style.transform = "translate(".concat(0, "%, ", 0, "%)");
      }

      requestAnimationFrame(setMouseParallaxStyle);
    };

    var background = document.querySelector('.back-stars');
    var forBack = 20;
    var speed = 0.05;
    var positionX = 0,
        positionY = 0;
    var coordXprocent = 0,
        coordYprocent = 0;
    setMouseParallaxStyle();
    parallax.addEventListener('mousemove', function (e) {
      var parallaxWidth = parallax.offsetWidth;
      var parallaxHeight = parallax.offsetHeight;
      var coordX = e.pageX - parallaxWidth / 2;
      var coordY = e.pageY - parallaxWidth / 2;
      coordXprocent = coordX / parallaxWidth * 100;
      coordYprocent = coordY / parallaxHeight * 100;
    });
  }
}; //Навигация


var burgerBtn = document.querySelector('.burger');
var closeNav = document.querySelector('.nav-close');
var headerNav = document.querySelector('.header__nav');

var toggleHeaderNav = function toggleHeaderNav() {
  headerNav.classList.toggle('header__nav--active');
};

burgerBtn.addEventListener('click', function (e) {
  e.stopPropagation();
  toggleHeaderNav();
});
closeNav.addEventListener('click', function () {
  headerNav.classList.remove('header__nav--active');
});
document.addEventListener('click', function (e) {
  var target = e.target;
  var itsHeaderNav = target == headerNav || headerNav.contains(target);
  var itsBurgerBtn = target == burgerBtn;
  var headerNavActive = headerNav.classList.contains('header__nav--active');

  if (!itsHeaderNav && !itsBurgerBtn && headerNavActive) {
    toggleHeaderNav();
  }
}); //Замена title под IE

(function replaceTitle() {
  var userAgent = window.navigator.userAgent;
  var msie = userAgent.indexOf("MSIE ");
  var mainTitle = document.querySelector('.main-title');
  var ieTitle = document.querySelector('.ie-title');

  if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
    mainTitle.classList.add('hero__title--off');
    ieTitle.classList.add('ie-title--active');
  }

  ;
})();