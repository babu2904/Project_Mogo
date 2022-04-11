$(document).ready(function() {

               
			$("#owl-demo1").owlCarousel({
          autoPlay:5000, //Set AutoPlay to 3 seconds
          items: 1,
          //singleItem :true,
		  navigation:true,
		  navigationText : false,
		  pagination : true,
		  lazyLoad:true,
            slideSpeed : 1000,
            paginationSpeed : 1000,
            //singleItem : true,
            rewindNav : true,
            rewindSpeed: 1000,
            itemsDesktop: [1199,1],
          itemsDesktopSmall: [979,1],
          itemsTablet: [768,1],
          itemsMobile:[767,1],
      });


  });


 $(document).ready(function() {

               
            $("#owl-demo2").owlCarousel({
          autoPlay:5000, //Set AutoPlay to 3 seconds
          items: 1,
          //singleItem :true,
          navigation:true,
          navigationText : false,
          pagination : true,
          lazyLoad:true,
            slideSpeed : 1500,
            paginationSpeed : 1500,
            //singleItem : true,
            rewindNav : true,
            rewindSpeed: 1000,
      });


  });

$(document).ready(function() {

               
            $("#owl-demo3").owlCarousel({
          autoPlay:5000, //Set AutoPlay to 3 seconds
          items: 4,
          //singleItem :true,
          navigation:true,
          navigationText : false,
          pagination : true,
          lazyLoad:true,
            slideSpeed : 1500,
            paginationSpeed : 1500,
            //singleItem : true,
            rewindNav : true,
            rewindSpeed: 1000,
             itemsDesktop: [1199,3],
            itemsDesktopSmall: [979,3],
            itemsTablet: [768,2],
            itemsMobile:[767,1],
      });


  });


$(document).ready(function() {

               
            $("#owl-demo4").owlCarousel({
          autoPlay:5000, //Set AutoPlay to 3 seconds
          items: 1,
          //singleItem :true,
          navigation:true,
          navigationText : false,
          pagination : true,
          lazyLoad:true,
            slideSpeed : 1500,
            paginationSpeed : 1500,
            //singleItem : true,
            rewindNav : true,
            rewindSpeed: 1000,
      });


  });





$(document).ready(function() {

     $(window).on("scroll", function(){
          var babu = $(window).scrollTop();

          if (babu >= 120) {
              $('.header').addClass('fixed');
          }

          else {
              $('.header').removeClass('fixed');
          }
      });
    

    var $element = $('.banner-slider');
            if ($element.length > 0) {
                $element.bxSlider({
                controls: true,
                pager: true,
                auto: true,
                mode: 'fade',
                infiniteLoop:'false',
                pause: 6000,
                //speed: 3000,
                //autoHover: true,
                //stopAuto: false,
                //keyboardEnabled:true,
                //easing:ease-in-out,
                });
            };


            $(window).scroll(function(){
            if ($(this).scrollTop() > 100) {
                $('.scrollToTop').fadeIn();
            } else {
                $('.scrollToTop').fadeOut();
            }
        });
        //Click event to scroll to top
        $('.scrollToTop').click(function(){
            /*alert("kjshdfgk");*/
            $('html, body').animate({scrollTop : 0},800);
            return false;
        });
   
    
});




jQuery(function($) {
     
     // Function which adds the 'animated' class to any '.animatable' in view
     var doAnimations = function() {
       
       // Calc current offset and get all animatables
       var offset = $(window).scrollTop() + $(window).height(),
           $animatables = $('.animatable');
       
       // Unbind scroll handler if we have no animatables
       if ($animatables.size() == 0) {
         $(window).off('scroll', doAnimations);
       }
       
       // Check all animatables and animate them if necessary
           $animatables.each(function(i) {
          var $animatable = $(this);
               if (($animatable.offset().top + $animatable.height() - 100) < offset) {
           $animatable.removeClass('animatable').addClass('animated');
               }
       });

       };
     
     // Hook doAnimations on scroll, and trigger a scroll
       $(window).on('scroll', doAnimations);
     $(window).trigger('scroll');

    });






jQuery('#mogo-slider').carousel({
    interval: 5000
})