'use strict';

$(document).ready(function(){
  const HEADER_HEIGHT = 369;

  const body = document.body;

  const header = document.querySelector('.js-header');
  const searchLink = document.querySelector('.js-search-link');
  const overlay = document.querySelector('.js-overlay');
  const search = document.querySelector('.js-search');
  const searchInput = document.querySelector('.js-search-input');
  const searchResult = document.querySelector('.js-result');
  const burgerMenu = document.querySelector('.burgermenu');
  const burgerMenuOpen = document.querySelector('.header__menu-btn');

  let bodyFixed = false;

  const setBodyFixed = () => {
    const scrollDistance = $(window).scrollTop();
    $(body).css('top', scrollDistance * -1).addClass('is-fixed');
  };
  
  const setBodyNotFixed = () => { 
    const scrollDistance = parseInt($(body).css('top'), 10);
    $(body).css('top', '').removeClass('is-fixed');
    $(window).scrollTop(-scrollDistance);
  };
  
  const toggleBodyFixed = () => {
    if (!bodyFixed) {
        setBodyFixed();
        bodyFixed = true;
    } else {
        setBodyNotFixed();
        bodyFixed = false;
    }
  };

  const closeSearch = () => {
    search.classList.remove('is-active');
    searchLink.classList.remove('is-active');
    header.classList.remove('is-search-active');
  }

  const closeBurgerMenu = () => {
    header.classList.remove('is-burgermenu-active');
    burgerMenu.classList.remove('is-active');
    setBodyNotFixed();
    bodyFixed = false;
  }

  burgerMenuOpen.addEventListener('click', function() {
    header.classList.toggle('is-burgermenu-active');
    burgerMenu.classList.toggle('is-active');
    toggleBodyFixed();
    closeSearch();
  });

  window.addEventListener('scroll', function() {
    if (document.documentElement.scrollTop > HEADER_HEIGHT) {
      header.classList.add('is-fixed');  
    } else if (!bodyFixed) {
      header.classList.remove('is-fixed');
    }
  });

  searchLink.addEventListener('click', function() {
    search.classList.toggle('is-active');
    searchLink.classList.toggle('is-active');
    header.classList.toggle('is-search-active');
    closeBurgerMenu();
  });
  
  searchInput.addEventListener('focus', function() {
    searchResult.classList.add('is-active');
    overlay.classList.add('is-active');
  });
  
  searchInput.addEventListener('blur', function() {
    searchResult.classList.remove('is-active');
    overlay.classList.remove('is-active');
  });
  
  $('.js-slider-big').slick({
    arrows: false,
    dots: true,
    asNavFor: '.js-slider-small',
    speed: 300
  });

  $('.js-slider-small').slick({
    arrows: false,
    asNavFor: '.js-slider-big',
    speed: 320
  });

});
