(function($) {
    const slider_1 = {
        init: function(){
            slider_1.render();
            slider_1.slide();
        },
        render: function(){
            slider_1.$photoshow = $('#photoshow');
            slider_1.$current   = slider_1.$photoshow.find('div.current');
            slider_1.$next      = slider_1.$current.next();
        },
        slide: function(){
            if(slider_1.$next.length === 0){
                slider_1.$next = slider_1.$photoshow.find('div:first');
            }
            slider_1.$current.removeClass('current').addClass('prev');
            slider_1.$next.css({
                    opacity: 0.0
                }).addClass('current').animate({
                        opacity: 1
                    },1000, function () {
                slider_1.$current.removeClass('prev');
            });
        }
    }
    setInterval(slider_1.init, 4000);
})(jQuery);