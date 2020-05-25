$(function () {

  $('.slider__inner').slick({
    // asNavFor: '.slider-nav',
    arrows: true,
    prevArrow: '<button class="slick-arrow slick-prev"><img src="images/arrow-prev.svg" alt=""></button>',
    nextArrow: '<button class="slick-arrow slick-next"><img src="images/arrow-next.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 940,
        settings: {
          arrows: false,
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 920,
        settings: {
          arrows: false,
          slidesToShow: 1,
        }
      },
    ]
  });

  $('.slider-nav').slick({
    slidesToShow: 6,
    slidesToScroll: 6,
    asNavFor: '.slider__inner',
    focusOnSelect: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 985,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 920,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 4,
        }
      },
    ]
  });

  $('.header__menu-btn').on('click', function () {
    $('.header__menu > ul').slideToggle();
  });


});