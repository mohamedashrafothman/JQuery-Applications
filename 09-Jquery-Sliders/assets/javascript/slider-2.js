(function($){

    const slider_2 = {
        init: function(){
            slider_2.renderHTML();
            slider_2.setWidth();
            slider_2.slide();
        },
        renderHTML: function(){
            slider_2.$photoshow       = $('#photoshow');
            slider_2.$photoshowLength = slider_2.$photoshow.find('img').length;
        },
        setWidth: function(){
            slider_2.$photoshow.css({
                "width": slider_2.$photoshowLength*400+"px"
            });
        },
        slide: function(){
            for ( i = 0; i <= slider_2.$photoshowLength - 1; i++) {
                slider_2.$photoshow.animate({ "margin-left": i * (-400) + 'px' }, 1000).delay(2000);
            }
        }
    };
    setInterval(slider_2.init, 2000);
})(jQuery);