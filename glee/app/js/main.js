$(function () {


  $(".filter__btn").on("click", function () {
    $("aside").toggleClass("aside--menu");
    $("body").toggleClass("body--overflow");
  });``


  $(".related__inner").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    appendArrows: $(".related__arrows"),
    prevArrow: '<button type="button" class="related__prev">Previous</button>',
    nextArrow: '<button type="button" class="related__next">Next</button>',
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 432,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".tabs__link").on("click", function (e) {
    e.preventDefault();
    $(".tabs__link").removeClass("tabs__link--active");
    $(this).addClass("tabs__link--active");

    $(".tabs__item").removeClass("tabs__item--active");
    $($(this).attr("href")).addClass("tabs__item--active");
  });

  (function quantityProducts() {
    var $quantityArrowMinus = $(".quantity-arrow-minus");
    var $quantityArrowPlus = $(".quantity-arrow-plus");
    var $quantityNum = $(".quantity-num");

    $quantityArrowMinus.click(quantityMinus);
    $quantityArrowPlus.click(quantityPlus);

    function quantityMinus() {
      if ($quantityNum.val() > 1) {
        $quantityNum.val(+$quantityNum.val() - 1);
      }
    }

    function quantityPlus() {
      $quantityNum.val(+$quantityNum.val() + 1);
    }
  })();

  $(".detalis__box").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".detalis__items",
  });
  $(".detalis__items").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".detalis__box",
    dots: false,
    focusOnSelect: true,
    arrows: false,
    vertical: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
        },
      }
    ],
  });

  $(".shop__btn").on("click", function () {
    $(".shop__btn").removeClass("shop__btn--active");
    $(this).addClass("shop__btn--active");
  });

  $(".button__list").on("click", function () {
    $(".shop__item").addClass("shop__item--list");
    $(".product").addClass("product--list");
  });

  $(".button__grid").on("click", function () {
    $(".shop__item").removeClass("shop__item--list");
    $(".product").removeClass("product--list");
  });

  $(".price__slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 1000,
    from: 100,
    to: 500,
    min_interval: 100,
    prefix: "$",
  });

  $(".rateyo").rateYo({
    rating: 4,
    starWidth: "12px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true,
    spacing: "8px",
  });

  $(".slider").slick({
    arrows: false,
    dots: true,
  });
  const controls = {
    controls: {
      scope: "local",
    },
  };
  const mixitup1 = document.querySelector(".mixitup-1");
  const mixitup2 = document.querySelector(".mixitup-2");
  if (mixitup1) mixitup(".mixitup-1", controls);
  if (mixitup2) mixitup(".mixitup-2", controls);
});
