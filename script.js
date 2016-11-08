/*document.addEventListener("DOMContentLoaded", function() {
	
});*/

$(document).ready(function (){

	 $('#carousel').carousel({
	 	pause: true,
	 	interval: false
	 });
	 
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