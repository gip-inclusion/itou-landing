"use strict";var stickyNav=$("#header");function fixedNav(){$(window).scrollTop()>stickyNav.data("top")?stickyNav.addClass("is-fixed"):stickyNav.removeClass("is-fixed")}stickyNav.data("top",stickyNav.offset().top),$(window).on("load",function(){}),$(window).on("resize orientationchange",function(){}),$(window).on("scroll",function(){fixedNav()}),$("[data-toggle=burger]").on("click tap",function(i){i.preventDefault(),stickyNav.toggleClass("is-opened")});