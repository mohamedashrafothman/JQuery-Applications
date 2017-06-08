$(document).ready(function(){
	var resize= {
		init: function(){
			resize.renderHTML();
			resize.bindEvents();
		},
		renderHTML: function(){
			resize.$smal = $("#small");
			resize.$medium = $('#medium');
			resize.$large = $("#large");
			resize.$hyperLink = $('a');
		},
		bindEvents: function(){
			resize.$smal.on('click', function(e){
				e.preventDefault();
				$("h1").animate({"font-size":"24px"});
			    $("h2").animate({"font-size":"16px"});
			    $("p").animate({"font-size":"12px", "line-height":"16px"});
			});
			resize.$medium.on('click', function(e){
				e.preventDefault();
				$("h1").animate({"font-size":"36px"});
			    $("h2").animate({"font-size":"24px"});
			    $("p").animate({"font-size":"14px", "line-height":"20px"});
			});
			resize.$large.on('click', function(e){
				e.preventDefault();
				$("h1").animate({"font-size":"48px"});
			    $("h2").animate({"font-size":"30px"});
			    $("p").animate({"font-size":"16px", "line-height":"20px"});
			});
			resize.$hyperLink.on('click', function(e){
				e.preventDefault();
				$('a').removeClass('selected');
				$(this).addClass('selected');
			});
		},

	};
	resize.init();
});
