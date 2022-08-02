$(document).ready(function () {

  if ($(".main-menu__list").length && $(".mobile-nav__container").length) {
    let navContent = document.querySelector(".main-menu__list").outerHTML;
    let mobileNavContainer = document.querySelector(".mobile-nav__container");
    mobileNavContainer.innerHTML = navContent;
  }
  if ($(".sticky-header__content").length) {
    let navContent = document.querySelector(".main-menu").innerHTML;
    let mobileNavContainer = document.querySelector(".sticky-header__content");
    mobileNavContainer.innerHTML = navContent;
  }
  if ($(".mobile-nav__toggler").length) {
    $(".mobile-nav__toggler").on("click", function (e) {
      e.preventDefault();
      $(".mobile-nav__wrapper").toggleClass("expanded");
      $("body").toggleClass("locked");
    });
  }
  //mobile screen closing menu
$('.mobile-nav__content .main-menu__list li a ').on('click',function(e){
 $('.mobile-nav__overlay').click();
 });
//cell number
 $("input[name=cellNumber]").keypress(function(e){

  if(this.value.length >= 10){
      return false;
  }
});
 
 if ($(".wow").length) {
  var wow = new WOW({
    boxClass: "wow", // animated element css class (default is wow)
    animateClass: "animated", // animation css class (default is animated)
    mobile: true, // trigger animations on mobile devices (default is true)
    live: true // act on asynchronously loaded content (default is true)
  });
  wow.init();
}
 // window load event

 
function thmSwiperInit() {
  // swiper slider
  if ($(".thm-swiper__slider").length) {
    $(".thm-swiper__slider").each(function () {
      let elm = $(this);
      let options = elm.data('swiper-options');
      let thmSwiperSlider = new Swiper(elm, options);
    });
  }

}



function thmOwlInit() {
  // owl slider

  if ($(".thm-owl__carousel").length) {
    $(".thm-owl__carousel").each(function () {
      let elm = $(this);
      let options = elm.data('owl-options');
      let thmOwlCarousel = elm.owlCarousel(options);
    });
  }

  if ($(".thm-owl__carousel--custom-nav").length) {
    $(".thm-owl__carousel--custom-nav").each(function () {
      let elm = $(this);
      let owlNavPrev = elm.data('owl-nav-prev');
      let owlNavNext = elm.data('owl-nav-next');
      $(owlNavPrev).on("click", function (e) {
        elm.trigger('prev.owl.carousel');
        e.preventDefault();
      })

      $(owlNavNext).on("click", function (e) {
        elm.trigger('next.owl.carousel');
        e.preventDefault();
      })
    });
  }



}
function thmTinyInit() {
  // tiny slider
  const tinyElm = document.querySelectorAll(".thm-tiny__slider");
  tinyElm.forEach(function (tinyElm) {
    const tinyOptions = JSON.parse(tinyElm.dataset.tinyOptions);
    let thmTinySlider = tns(tinyOptions);
  });
}

function projectMasonaryLayout() {
  if ($(".masonary-layout").length) {
    $(".masonary-layout").isotope({
      layoutMode: "masonry"
    });
  }
  if ($(".post-filter").length) {
    $(".post-filter li")
      .children(".filter-text")
      .on("click", function () {
        var Self = $(this);
        var selector = Self.parent().attr("data-filter");
        $(".post-filter li").removeClass("active");
        Self.parent().addClass("active");
        $(".filter-layout").isotope({
          filter: selector,
          animationOptions: {
            duration: 500,
            easing: "linear",
            queue: false
          }
        });
        return false;
      });
  }

  if ($(".post-filter.has-dynamic-filters-counter").length) {
    // var allItem = $('.single-filter-item').length;
    var activeFilterItem = $(".post-filter.has-dynamic-filters-counter").find(
      "li"
    );
    activeFilterItem.each(function () {
      var filterElement = $(this).data("filter");
      var count = $(".filter-layout").find(filterElement).length;
      $(this)
        .children(".filter-text")
        .append('<span class="count">(' + count + ")</span>");
    });
  }
}
// window scroll event

$(window).on("load", function () {
  if ($(".preloader").length) {
    $(".preloader").fadeOut();
  }
  thmSwiperInit();
  thmOwlInit();
  projectMasonaryLayout();



  if ($(".post-filter").length) {
    var postFilterList = $(".post-filter li");
    // for first init
    $(".filter-layout").isotope({
      filter: ".filter-item",
      animationOptions: {
        duration: 500,
        easing: "linear",
        queue: false
      }
    });
    // on click filter links
    postFilterList.on("click", function () {
      var Self = $(this);
      var selector = Self.attr("data-filter");
      postFilterList.removeClass("active");
      Self.addClass("active");

      $(".filter-layout").isotope({
        filter: selector,
        animationOptions: {
          duration: 500,
          easing: "linear",
          queue: false
        }
      });
      return false;
    });
  }

  if ($(".post-filter.has-dynamic-filter-counter").length) {
    // var allItem = $('.single-filter-item').length;

    var activeFilterItem = $(".post-filter.has-dynamic-filter-counter").find(
      "li"
    );

    activeFilterItem.each(function () {
      var filterElement = $(this).data("filter");
      var count = $(".filter-layout").find(filterElement).length;
      $(this).append("<sup>[" + count + "]</sup>");
    });
  }

  //Testimonials Two
  if ($(".listing-details__gallery .bxslider").length) {
    $(".listing-details__gallery .bxslider").bxSlider({
      nextSelector: ".listing-details__gallery #slider-next",
      prevSelector: ".listing-details__gallery #slider-prev",
      nextText: '<i class="icon-right-arrow1"></i>',
      prevText: '<i class="icon-right-arrow1 icon-prev"></i>',
      mode: "horizontal",
      auto: "true",
      speed: "1000",
      pagerCustom: ".listing-details__gallery .slider-pager .listing-details__thumb-box"
    });
  }
});


});

window.addEventListener('load', function(){
});
