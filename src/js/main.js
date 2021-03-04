$('.marketing__slider').slick({
    dots: true,
    arrows: false,
    centerMode: true,
    slidesToShow: 1,
    variableWidth: true,
    responsive: [
        {
          breakpoint: 620,
          settings: {
            variableWidth: false,
            centerMode: false,
            slidesToShow: 1,
          }
        }
      ]
});

$('.main-header__button-menu').on('click', function() {
   $('.main-header__navigation').toggleClass('main-header--active');
   $(this).toggleClass('main-header__button-menu--active');
});