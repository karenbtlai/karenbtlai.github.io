
/*$(document).ready(function() {
	$('#fullpage').fullpage({
		verticalCentered: false,

		//to avoid problems with css3 transforms and fixed elements in Chrome, as detailed here: https://github.com/alvarotrigo/fullPage.js/issues/208
		css3:false
	});
});*/

		$(document).ready(function() {
			$('#fullpage').fullpage({
				verticalCentered: false,

				//to avoid problems with css3 transforms and fixed elements in Chrome, as detailed here: https://github.com/alvarotrigo/fullPage.js/issues/208
				css3:false,
				'verticalCentered': false,
				'css3': true,
				'sectionsColor': ['#F0F2F4', '#fff', '#fff', '#fff'],
				'navigation': true,
				'navigationPosition': 'right',
				'navigationTooltips': ['fullPage.js', 'Powerful', 'Amazing', 'Simple'],

				'afterLoad': function(anchorLink, index){
					if(index == 2){
						$('#iphone3, #iphone2, #iphone4').addClass('active');
					}
				},

				'onLeave': function(index, nextIndex, direction){
					
						if (index == 3 && direction == 'down'){
							$('.section').eq(index -1).removeClass('moveDown').addClass('moveUp');
						}
						else if(index == 3 && direction == 'up'){
							$('.section').eq(index -1).removeClass('moveUp').addClass('moveDown');
						}
						else if(index == 5 && direction == 'down'){
							$('.section').eq(index -1).removeClass('moveUp').addClass('moveDown');
						}
						else if(index == 5 && direction == 'up'){
							$('.section').eq(index -1).removeClass('moveUp').addClass('moveDown');
						}
						else if(index == 7 && direction == 'down'){
							$('.section').eq(index -1).removeClass('moveUp').addClass('moveDown');
						}
						else if(index == 7 && direction == 'up'){
							$('.section').eq(index -1).removeClass('moveUp').addClass('moveDown');
						}

						$('.staticImg1').toggleClass('active', (index == 2 && direction == 'down' ) || (index == 4 && direction == 'up'));
						$('.staticImg1').toggleClass('moveDown', nextIndex == 4);
						$('.staticImg1').toggleClass('moveUp', index == 4 && direction == 'up');

						$('.staticImg3').toggleClass('active', (index == 4 && direction == 'down' ) || (index == 6 && direction == 'up'));
						$('.staticImg3').toggleClass('moveDown', nextIndex == 6);
						$('.staticImg3').toggleClass('moveUp', index == 6 && direction == 'up');

						$('.staticImg2').toggleClass('active', (index == 6 && direction == 'down' ) || (index == 8 && direction == 'up'));
						$('.staticImg2').toggleClass('moveDown', nextIndex == 8);
						$('.staticImg2').toggleClass('moveUp', index == 8 && direction == 'up');
									
				},

				
			});
		});