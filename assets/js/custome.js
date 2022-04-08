// Fixed Navbar
$(window).on("scroll", function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 40) {
        $("#navigation").addClass("nav-fixed");
       
    } else {
        $("#navigation").removeClass("nav-fixed");
    }
});



// Owl Carousel
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:30,
        smartSpeed:1000,
        autoplay:true,
        autoplayTimeout:6000,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            750:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
  });


// Wow JS
new WOW().init();


// Magnific Pop Up
$(document).ready(function(){
    $('#gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery:{
          enabled:true
        }
    });
});
