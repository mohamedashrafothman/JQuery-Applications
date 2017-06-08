$(document).ready(function(){
	var accordion={
		init: function(){
			this.cacheDom();
			this.bindEvents();
		},
		cacheDom: function(){
			accordion.$accordion = $('.accordion');
			accordion.$h1 = accordion.$accordion.find('h1');
			accordion.$ul = accordion.$accordion.find('ul ul');
		},
		bindEvents: function(){
			accordion.$h1.on('click', function(){
				// slide up all sections
				accordion.$ul.slideUp();
				// slide down the link list under the h3 that clicked, only if it closed
				if(!$(this).next().is(":visible"))
				{
					$(this).next().slideDown();
				}
			});
		}
	};

	// activate accordion
	accordion.init();
});
