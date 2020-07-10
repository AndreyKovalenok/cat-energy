"use strict";

window.onload = function() {
  var menu = document.querySelector(".header-menu");
  var menuTop = menu.querySelector(".header-menu__top");
  var menuNav = menu.querySelector(".header-menu__nav");
  var headerMenuBtn = document.createElement("button");
  headerMenuBtn.classList.add("header-menu__toggle");
  var toggleLine = document.createElement("span");
  toggleLine.classList.add("header-menu__toggle-line");
  headerMenuBtn.appendChild(toggleLine);
  menuTop.appendChild(headerMenuBtn);

  menuNav.classList.add("header-menu__nav--disabled");

  headerMenuBtn.addEventListener("click", function() {
    menuNav.classList.toggle("header-menu__nav--disabled");
    this.classList.toggle("header-menu__toggle--active");
  });

  var orderBtn = document.querySelectorAll(".products__btn");
  if (orderBtn.length) {
    for (var i = 0; i < orderBtn.length; i++) {
      orderBtn[i].addEventListener("click", function (evt) {
        evt.preventDefault();
      });
    }
  }

  var moreBtn = document.querySelector(".products__more-button");
  if (moreBtn) {
    moreBtn.addEventListener("click", function (evt) {
      evt.preventDefault();
    });
  }
};
