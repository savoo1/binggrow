$( document ).ready(function() {
  $(".testimonials").slick({
    slidesToShow: 1,
    arrows: true,
    infinite: true,
    dots: true,
  });
  
  $(".faq-card .question").click(function (e) {
      e.preventDefault();
    
      if ($(this).parent().hasClass("faq-card--active")) {
        $(this).parent().removeClass("faq-card--active");
        $(this).next().css("max-height", "0px");
      } else {
        $(this)
          .parent()
          .parent()
          .parent()
          .find(".faq-card--active .answer")
          .css("max-height", "0px");
        $(this)
          .parent()
          .parent()
          .parent()
          .find(".faq-card--active")
          .removeClass("faq-card--active");
        $(this).parent().addClass("faq-card--active");
        var heightinside = $(this).next().find(".inner").height() + 50;
        $(this)
          .next()
          .css("max-height", heightinside + "px");
      }
    });
  
  
  
  var rev = $(".portfolio-slider");
  rev.on("init", function (event, slick, currentSlide) {
      var cur = $(slick.$slides[slick.currentSlide]),
        next = cur.next(),
        prev = cur.prev().prev();
      prev.addClass("slick-sprev");
      next.addClass("slick-snext");
      cur.removeClass("slick-snext").removeClass("slick-sprev");
      slick.$prev = prev;
      slick.$next = next;
    })
    .on("beforeChange", function (event, slick, currentSlide, nextSlide) {
      //console.log('beforeChange');
      var cur = $(slick.$slides[nextSlide]);
      //console.log(slick.$prev, slick.$next);
      slick.$prev.removeClass("slick-sprev");
      slick.$next.removeClass("slick-snext");
      (next = cur.next()), (prev = cur.prev().prev());
      prev.prev();
      prev.next();
      prev.addClass("slick-sprev");
      next.addClass("slick-snext");
      slick.$prev = prev;
      slick.$next = next;
      cur.removeClass("slick-next").removeClass("slick-sprev");
    });
  
  rev.slick({
    speed: 1000,
    arrows: false,
    dots: false,
    focusOnSelect: false,
    infinite: true,
    centerMode: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    slidesPerRow: 1,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "0",
    autoplay: true,
    autoplaySpeed: 2000,
    swipe: true,
    customPaging: function (slider, i) {
      return "";
    },
    /*infinite: false,*/
  });  
});

$(".the-voolt-experience-slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: true,

  prevArrow: "<button type='button' class='slick-prev pull-left slick-arrows'> <svg xmlns='http://www.w3.org/2000/svg' width='36' height='36' viewBox='0 0 36 36' fill='#CAE4DB'><circle cx='18' cy='18' r='17.25' stroke='#202122' stroke-width='1.5'/><path d='M16.5263 12L11 18M11 18L16.5263 24M11 18H26' stroke='#202122' stroke-width='1.5' stroke-linecap='round'/></svg></button>",
  nextArrow:
    "<button type='button' class='slick-next pull-right slick-arrows'><svg xmlns='http://www.w3.org/2000/svg' width='36' height='36' viewBox='0 0 36 36' fill='#CAE4DB'><circle cx='18' cy='18' r='17.25' transform='rotate(180 18 18)' stroke='#202122' stroke-width='1.5'/><path d='M19.4737 24L25 18M25 18L19.4737 12M25 18L10 18' stroke='#202122' stroke-width='1.5' stroke-linecap='round'/></svg></button>",
});
