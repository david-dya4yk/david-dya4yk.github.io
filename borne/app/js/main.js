$(
  (function () {
    // При открытии меню сделать проверку:
    // 1. Если сайдбар открыт - закрыть его
    // 2. Открыть меню

    // При открытии сайдбара сделать проверку:
    // 1. Если меню открыто - закрыть его
    // 2. Открыть сайдбар
    $(".header__btn").on("click", function () {
      $(".header__content").toggleClass("header__content--active");
      $("body").toggleClass("body__hidden");
      if($(".aside").hasClass("aside--active")){
        $(".aside").toggleClass("aside--active");
        $(".posts__btn").hasClass("posts__btn--active");
        $(".posts__btn").toggleClass("posts__btn--active");

      };
    });

    $(".posts__btn").on("click", function () {
      $(".aside").toggleClass("aside--active");
      $(".posts__btn").toggleClass("posts__btn--active");
      $("body").toggleClass("body__hidden");
      if($(".header__content").hasClass("header__content--active")){
        $(".header__content").toggleClass("header__content--active");
      };
    });


    new Swiper(".swiper", {
      direction: "vertical",
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        speed: 3000,
      },
      autoplay: {
        delay: 3000,
      },
    });

    new Swiper(".teams", {
      loop: false,
      slidesPerView: 'auto',
      slidesPerGroup: 1,
      spaceBetween: 50,
      containerModifierClass: "teams",
      slideClass: "teams-slide",
      wrapperClass: "teams-wrapper",

      breakpoints: {
        300:{
          slidesPerView: 2,
          spaceBetween: 10,
        },
        600:{
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1320: {
          slidesPerView: 2,
          spaceBetween: 50,
        }
      }
    });

    (function quantityProducts() {
      var $quantityArrowMinus = $(".single__minus");
      var $quantityArrowPlus = $(".single__plus");
      var $quantityNum = $(".single__num");
  
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

    $(".tabs__link").on("click", function (e) {
      e.preventDefault();
      $(".tabs__link").removeClass("tabs__link--active");
      $(this).addClass("tabs__link--active");
  
      $(".tabs__item").removeClass("tabs__item--active");
      $($(this).attr("href")).addClass("tabs__item--active");
    });
  

  



    Fancybox.bind("[data-fancybox]", {});
    var mixer = mixitup('.case');
  })() 
);
