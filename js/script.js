$(document).ready(function() {

    /* BURGER ICON FUNCTIONALITY */

    $(".icon").click(function() {
        $(".icon").toggleClass("active");
        $(".menu-mobile").toggleClass("block");
    });

    /* SMOOTH SCROLLING */

    $("a").on('click', function(event) {

        if (this.hash !== "") {
          event.preventDefault();
    
          var hash = this.hash;
    
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 750, function(){
       
            window.location.hash = hash;
          });
        }
      });

    /* SET NAVBAR TO SOLID */

    $(window).on('scroll', function() {
        if($(window).scrollTop()){
            $('nav').addClass('solid');
        }
        else {
            $('nav').removeClass('solid');
        }
    
    });

    /* SET SOLID NAVBAR FOR MOBILE */

    $(window).resize(function() {
        if ($(window).width() < 768) {
           $("nav").addClass("mobile");
        }
       else {
          $("nav").removeClass("mobile");
       }
      });

    /* MAKE MENU DISAPPEAR AFTER CLICKING A LINK */
    
    
});