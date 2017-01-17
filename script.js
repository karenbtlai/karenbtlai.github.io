/*document.addEventListener("DOMContentLoaded", function() {
	
});*/

$(document).ready(function (){

	 
	 
	var isExpanded = $("#btn-aboutme").attr("aria-expanded");
	isExpanded = false;
	//console.log(isExpanded);

    $("#btn-aboutme").click(function (){

    	if (isExpanded == false) {
	        $('html, body').animate({
	            scrollTop: $("#projects").offset().top -200
	        }, 1000);

	    isExpanded = true;
	    //console.log(isExpanded);

	    } else {
	    	isExpanded = false;
	    }
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
			if (($animatable.offset().top + $animatable.height() - 400) < offset) {
        $animatable.removeClass('animatable').addClass('animated');
			}
    });

	};
  
  // Hook doAnimations on scroll, and trigger a scroll
	$(window).on('scroll', doAnimations);
  $(window).trigger('scroll');

});

