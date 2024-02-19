$( document ).ready(function() {

  $(".range-slider-phone").slick({
    slidesToShow: 1,
    arrows: true,
    infinite: true,
    dots: true,
    centerMode: true,
    variableWidth: true,
    centerPadding: "0",
    draggable: false,
    swipe: false,
  });
  
  var changeslider = $(".change-slider");
changeslider.on("init", function (event, slick, currentSlide) {
    var cur = $(slick.$slides[slick.currentSlide]),
      next = cur.next(),
      prev = cur.prev();
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
    (next = cur.next()), (prev = cur.prev());
    prev.prev();
    prev.next();
    prev.addClass("slick-sprev");
    next.addClass("slick-snext");
    slick.$prev = prev;
    slick.$next = next;
    cur.removeClass("slick-next").removeClass("slick-sprev");
  })
        changeslider.slick({
        slidesToShow: 1,
        arrows: true,
        infinite: true,
        dots: true,
        centerMode: true,
        variableWidth: true,
        centerPadding: "0",
        draggable: false,
        swipe: false,
        autoplay: true,
        autoplaySpeed: 2000,
      });

      $( ".slider" ).on( "input", function(e) {
        const sliderPos = e.target.value;
        $(this).parent().parent().find(".foreground-img").css('width', `${sliderPos}%`)
        $(this).parent().parent().find(".slider-button").css('left', `calc(${sliderPos}% - 18px)`)

        $(this).parent().parent().find(".tag-c-slider").addClass("tag-c-slider--remove");
        $(this).parent().parent().find(".you-can-slide-it").addClass("tag-c-slider--remove");
      } );
});


