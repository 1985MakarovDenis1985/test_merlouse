$('.slider_box').slick({
  dots: false,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  arrows: true,
  autoplay: true,
  autoplaySpeed: 5000,

prevArrow: '<button class="arrow_left" type="button"><i class="fas fa-chevron-left"></i></button>',
nextArrow: '<button class="arrow_right" type="button"><i class="fas fa-chevron-right"></i></button>'

});

$('.underslider_box_top').slick({
  dots: false,
  infinite: true,
  speed: 1100,
  slidesToShow: 1,
  adaptiveHeight: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 6000,
  fade: true,
});

$('.underslider_box_botton').slick({
  dots: false,
  infinite: true,
  speed: 1100,
  slidesToShow: 1,
  adaptiveHeight: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  cssEase: 'linear',
  fade: true,
});


$('.our_cook_box').slick({
  dots: false,
  infinite: false,
  speed: 2100,
  slidesToShow: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  cssEase: 'linear',
});




$('.our_cook_box_after').slick({
  dots: false,
  infinite: false,
  speed: 2100,
  slidesToShow: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  cssEase: 'linear',
  fade: true,
});
