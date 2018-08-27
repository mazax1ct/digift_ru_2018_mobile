//активация кнопки "наверх"
$(window).scroll(function () {
  if ($(this).scrollTop() > 30) {
    $('.header').addClass('scrolled');
    $('.js-to-top').addClass('is-active');
  } else {
    $('.header').removeClass('scrolled');
    $('.js-to-top').removeClass('is-active');
  }
});

//скролл наверх при нажитии кнопки "наверх"
$('.js-to-top').click(function () {
  $('body, html').animate({
      scrollTop: 0
  }, 300);
  return false;
});

$(document).ready(function() {
  //слайдер карточек
  if ($('.js-cards-slider').length) {
    $('.js-cards-slider').slick({
      adaptiveHeight: true,
      arrows: false,
      infinite: false,
      edgeFriction: 0,
      dots: true,
      variableWidth: true
    });
  }

  //открытие/закрытие главного меню
  $(".js-menu-opener").click(function() {
    $(this).toggleClass("is-active");
    $("body").toggleClass("overflow");
    $(".header").toggleClass("is-open");
    return false;
  });

  //форма
  $('.js-input').each(function( index ) {
    if ($(this).val() != 0) {
      $(this).addClass('changed');
    } else {
      $(this).removeClass('changed');
    }

    $(this).blur(function() {
      if ($(this).val() != 0) {
        $(this).addClass('changed');
      } else {
        $(this).removeClass('changed');
      }
    });
  });

  //замена ссылок в контактах
  if($('.js-change-link').length){
    $('.js-change-link').each(function( index ) {
      var replaceText = $(this).attr('data-link');
      $(this).html(replaceText);
    });
  }

  //карточки - аккордеоны
  $(".accordion__title-block").click(function() {
    var item = $(this).parent('.accordion');
    var list = item.parent('.accordions');
    if(item.hasClass('is-open')){
      item.removeClass('is-open');
    } else {
      list.find('.accordion').removeClass("is-open");
      item.addClass('is-open');
    }
    return false;
  });

  //заголовки - аккордеоны
  $(".accordion-title__title").click(function() {
    $(this).parent('.accordion-title').toggleClass('is-open');
    return false;
  });

  //меню в футере - аккордеоны
  $(".footer-menu__title").click(function() {
    $(this).parent('.footer-menu').toggleClass('is-open');
    return false;
  });
});
