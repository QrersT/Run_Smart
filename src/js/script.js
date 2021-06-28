// Slider
$(".slider__wrapper").slick({
  autoplay: true,
  autoplaySpeed: 4000,
  prevArrow:
    "<button type='button' class='slick-prev'><img src='img/slider/left.png' /></button>",
  nextArrow:
    "<button type='button' class='slick-next'><img src='img/slider/right.png' /></button>",
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        arrows: false,
        dots: true,
      },
    },
  ],
});

// Mask input
$("input[name=phone]").mask("+38(099)-999-99-99");
/* $("input[name=name]").mask("99/99/9999"); */

// Modal
$("[data-modal=consultation]").on("click", function () {
  $(".overlay, #consultation").fadeIn();
});

$(".modal__close").on("click", function () {
  $(".overlay").fadeOut();
});

// Toggle Card
function toggleCard(className) {
  $(className).each(function (i) {
    $(this).on("click", function (e) {
      e.preventDefault();
      $(".catalog__item-front").eq(i).toggleClass("catalog__item-front_active");
      $(".catalog__item-back").eq(i).toggleClass("catalog__item-back_active");
    });
  });
}

toggleCard(".catalog__item-link");
toggleCard(".catalog__item-link_back");

// Tabs
$("ul.catalog__tabs").on("click", "li:not(.catalog__tab_active)", function () {
  $(this)
    .addClass("catalog__tab_active")
    .siblings()
    .removeClass("catalog__tab_active")
    .closest("div.catalog__wrapper")
    .find("div.catalog__products")
    .removeClass("catalog__products_active")
    .eq($(this).index())
    .addClass("catalog__products_active");
});
