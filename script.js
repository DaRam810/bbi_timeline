/*
$.js = function (el) {
    return $('[data-js=' + el + ']')
};

function carousel() {
  $.js('timeline-carousel').slick({
    infinite: false,
    arrows: true,
    dots: true,
    autoplay: false,
    speed: 1100,
    slidesToShow: 4,
    slidesToScroll:4,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
  });
}

carousel();*/



$.js = function (el) {
    return $('[data-js=' + el + ']')
};

function carousel() {
  $.js('timeline-carousel').slick({
    variableWidth:false,
    infinite: false,
    arrows: true,
    dots: true,
    autoplay: false,
    speed: 1100,
    slidesToShow: 4,
    slidesToScroll:4,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
  });
}

carousel();