var deleteLog = false;

		$(document).ready(function() {
	    	$('#pagepiling').pagepiling({
	    		menu: '#menu',
	    		anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8', 'page9', 'page10', 'page11', 'page12', 'page13'],
	    		loopTop: true,
	    		loopBottom: true,
	    		navigation: {
		            'textColor': '#f2f2f2',
		            'bulletsColor': '#ccc',
		            'position': 'right',
		            'tooltips': ['Page 1', 'Page 2', 'Page 3', 'Page 4']
		        },
			});
	    });