/*
*   JQuery SlideShow
*   Copyright (c) 2017 Mohamed Ashraf.
*   License under the MIT license.
*/

$(document).ready(function(){
	var slider = {
		init: function(auto = false){
			slider.renderHTML();
			slider.bindEvents();
			slider.ShowSlide(1);
			if(auto===true){
				slider.AutomaticSlide();
			}
		},
		renderHTML: function(){
			slider.$nextArrow 	= $('.next');
			slider.$prevArrow 	= $('.prev');
			slider.$dots 		= $('.dot');
			slider.$slides 	= $('.mySlide');	// select first slide div
			slider.$slideIndex 	= slider.$slides.first().length;	// equal '1'
		},
		bindEvents: function(){
			// 'Next' and 'Previes' buttons events
			slider.$prevArrow.on('click', function(){slider.MoveSlide(-1);});
			slider.$nextArrow.on('click', function(){slider.MoveSlide(1);});
			
			// 'Dots' buttons events
			slider.$dots.eq(0).on('click', function(){slider.CurrentSlide(1);});
			slider.$dots.eq(1).on('click', function(){slider.CurrentSlide(2);});
			slider.$dots.eq(2).on('click', function(){slider.CurrentSlide(3);});
			slider.$dots.eq(3).on('click', function(){slider.CurrentSlide(4);});

		},
		ShowSlide: function(n){
			var i;
			if(n>slider.$slides.length){slider.$slideIndex = 1;} 
			if(n<1){slider.$slideIndex = slider.$slides.length;}
			
			
			slider.$slides.each(function(){
				slider.$slides.css({display:'none'});
			});
			slider.$dots.each(function(){
				slider.$dots.addClass('').removeClass('active');
			});

			slider.$slides.eq(slider.$slideIndex-1).css({display:'block'});
			slider.$dots.eq(slider.$slideIndex-1).addClass('active');
		},
		MoveSlide: function(n){
			slider.ShowSlide(slider.$slideIndex += n);
		},
		CurrentSlide: function(n){
			slider.ShowSlide(slider.$slideIndex = n);
		}, 
		AutomaticSlide: function(){
			var i;
			slider.$slides.each(function(){
				slider.$slides.css({display:'none'});
			});
			slider.$dots.each(function(){
				slider.$dots.addClass('').removeClass('active');
			});

			slider.$slideIndex++;
			
			if(slider.$slideIndex>slider.$slides.length){slider.$slideIndex = 1;} 
			slider.$slides.eq(slider.$slideIndex-1).css({display:'block'});
			slider.$dots.eq(slider.$slideIndex-1).addClass('active');

			setTimeout(slider.AutomaticSlide, 2500);
			}


	};
	
	slider.init(auto = false); // set "auto" by True to enable automatic slideshow
});