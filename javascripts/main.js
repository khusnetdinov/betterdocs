(function(window, document, classie) {
  'use strict';

  var topButton = document.getElementsByClassName('top-button')[0];

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      topButton.style.display = 'block';
    } else {
      topButton.style.display = 'none';
    }
  }

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  window.topFunction = topFunction;
  window.onscroll = function() {
    scrollFunction();
  };

  var sidebarMenu = document.getElementsByClassName('menu')[0],
      openMenuCtrl = document.querySelector('.action--open'),
      closeMenuCtrl = document.querySelector('.action--close');

  function openMenu() {
    classie.add(sidebarMenu, 'menu--open');
  }

  function closeMenu() {
    classie.remove(sidebarMenu, 'menu--open');
  }

  openMenuCtrl.addEventListener('click', openMenu);
  closeMenuCtrl.addEventListener('click', closeMenu);

  function localizationFunction() {
    var select = document.getElementById('localization'),
        locale = select.options[select.selectedIndex].value,
        locationStrings = window.location.pathname.split('/'),
        currentLink = locationStrings[locationStrings.length - 1];

    if (locale === 'en') {
      window.location.pathname = '/' + currentLink;
    } else {
      window.location.pathname = '/' + locale + '/' + currentLink;
    }
  }

  window.localizationFunction = localizationFunction;
})(window, window.document, window.classie);
