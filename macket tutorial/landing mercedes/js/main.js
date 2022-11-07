$(function () {
  $(".design-slider").slick({
    dots: false,
    slidesToShow: 4,
    variableWidth: true,
    prevArrow:
      '<img class="arrow arrow-left" src="./images/slider/slider__decorations/arrow__left.svg" alt=""/>',
    nextArrow:
      '<img class="arrow arrow-right" src="./images/slider/slider__decorations/arrow__right.svg" alt=""/>',
  });
});
