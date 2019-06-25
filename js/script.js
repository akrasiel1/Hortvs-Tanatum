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


    /* MAKE MENU DISAPPEAR AFTER CLICKING A LINK */
    $(".menu-mobile a").click(function() {
      $(".menu-mobile").toggleClass("block")
      $(".icon").toggleClass("active")
    });
    
});