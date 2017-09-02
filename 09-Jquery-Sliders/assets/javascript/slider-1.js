(function($) {
    const slider_1 = {
        init: function(){
            this.render();
            this.slide();
        },
        render: function(){
            this.$photoshow = $('#photoshow');
            this.$current   = this.$photoshow.find('div.current');
            this.$next      = this.$current.next();
        },
        slide: function(){
            if(this.$next.length === 0){
                this.$next = this.$photoshow.find('div:first');
            }
            this.$current.removeClass('current').addClass('prev');
            this.$next.css({
                    opacity: 0.0
                }).addClass('current').animate({
                        opacity: 1
                    },1000, function () {
                slider_1.$current.removeClass('prev');
            });
        }
    }
    setInterval(slider_1.init.bind(slider_1), 2000);
})(jQuery);