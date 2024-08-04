// scripts.js
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
      button.addEventListener('click', event => {
          window.open('https://www.curseforge.com/minecraft/mc-mods/the-empyrium', '_blank');
      });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.discord');
  buttons.forEach(button => {
      button.addEventListener('click', event => {
          window.open('https://discord.gg/a5wsbWwETY', '_blank');
      });
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.youtube');
  buttons.forEach(button => {
      button.addEventListener('click', event => {
          window.open('https://youtube.com/@nottrymito?si=kBCCDnCilYRlh2ej', '_blank');
      });
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.instagram');
  buttons.forEach(button => {
      button.addEventListener('click', event => {
          window.open('https://www.instagram.com/martimfm1/', '_blank');
      });
  });
});


$(function () {
  // Smooth Scroll
  $('a.smoth-scroll').on('click', function (event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top - 60
    }, 1000);
    event.preventDefault();
  });

  // Sticky header and scroll detection
  var lastScrollTop = 0;
  $(window).on('scroll', function () {
    var sections = $('section');
    var currentSection = '';

    sections.each(function () {
      var section = $(this);
      var rect = section[0].getBoundingClientRect();
      if (rect.top <= 50 && rect.bottom >= 50) {
        currentSection = section.attr('id');
      }
    });

    switch (currentSection) {
      case 'home':
        $('#sticky-header').css('background-color', 'blue');
        break;
      case 'portfolio':
        $('#sticky-header').css('background-color', 'green');
        break;
      case 'me':
        $('#sticky-header').css('background-color', 'red');
        break;
      default:
        $('#sticky-header').css('background-color', 'black'); // Cor padrão
    }

    var st = $(this).scrollTop();
    if (st > lastScrollTop) {
      // Scroll para baixo
      $('#sticky-header').removeClass('slideDown').addClass('slideUp');
    } else {
      // Scroll para cima
      $('#sticky-header').removeClass('slideUp').addClass('slideDown');
    }
    lastScrollTop = st;
  });
});