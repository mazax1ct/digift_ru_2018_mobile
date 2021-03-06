//компенсация высоты окна при скрытии адресной строки
window.onresize = function(){
    document.body.height = window.innerHeight;
}

window.onresize();

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
      speed: 100,
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
  $(".js-accordion-opener").click(function() {
    $(this).parent('.accordion-title').toggleClass('is-open');
    return false;
  });

  //открытие левого меню
  $(".js-left-menu-opener").click(function() {
    $('body').addClass('overflow');
    $(this).addClass('is-active');
    $('.left-menu').fadeIn(200).addClass('is-open');;
    setTimeout(function() {
      $('.left-menu__list').addClass('is-open');
    }, 200);
    return false;
  });

  //закрытие левого меню
  $('.left-menu').click(function(event) {
    if (event.target.tagName !== 'A') {
      $('.left-menu__list').removeClass('is-open');
      setTimeout(function() {
        $('.left-menu').fadeOut(200).removeClass('is-open');
        $('body').removeClass('overflow');
        $(this).removeClass('is-active');
        $('.js-left-menu-opener').removeClass('is-active');
      }, 200);
      return false;
    }
  });

  //меню в футере - аккордеоны
  $(".footer-menu__title").click(function() {
    $(this).parent('.footer-menu').toggleClass('is-open');
    return false;
  });

  //открытие формы скачивания кейса
  $('.js-case-form-opener').click(function() {
    $('body').addClass('overflow');
    $('.case-form').fadeIn(200).addClass('is-open');
    setTimeout(function() {
      $('.case-form__form-block').addClass('is-open');
    }, 300);
    return false;
  });

  //закрытие формы скачивания кейса
  $('.js-case-form-closer').click(function() {
    $('.case-form__form-block').removeClass('is-open');
    setTimeout(function() {
      $('.case-form').fadeOut(200).removeClass('is-open');
      $('body').removeClass('overflow');
    }, 300);
    return false;
  });
});
