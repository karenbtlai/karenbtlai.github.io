/*document.addEventListener("DOMContentLoaded", function() {
	
});*/

$(document).ready(function (){

	 
	 
	var isExpanded = $("#btn-aboutme").attr("aria-expanded");
	isExpanded = false;

    $("#btn-aboutme").click(function (){

    	if (isExpanded == false) {
	        $('html, body').animate({
	            scrollTop: $("#projects").offset().top + 100
	        }, 1000);

	   	 	isExpanded = true;
	   
	    } else {
	    	$('html, body').animate({
	            scrollTop: $("#projects").offset().top +180
	        }, 800);

	    	isExpanded = false;
	    }
   	});

});

//(creds to Bramus @ https://codepen.io/bramus)
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
			if (($animatable.offset().top + $animatable.height() - 400) < offset) {
        $animatable.removeClass('animatable').addClass('animated');
			}
    });

	};
  
  // Hook doAnimations on scroll, and trigger a scroll
	$(window).on('scroll', doAnimations);
  $(window).trigger('scroll');

});

