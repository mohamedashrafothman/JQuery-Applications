(function($){

    const slider_2 = {
        init: function(){
            this.renderHTML();
            this.setWidth();
            this.slide();
        },
        renderHTML: function(){
            this.$photoshow       = $('#photoshow');
            this.$photoshowLength = this.$photoshow.find('img').length;
        },
        setWidth: function(){
            this.$photoshow.css({
                "width": this.$photoshowLength*400+"px"
            });
        },
        slide: function(){
            for ( i = 0; i <= this.$photoshowLength - 1; i++) {
                this.$photoshow.animate({ "margin-left": i * (-400) + 'px' }, 1000).delay(2000);
            }
        }
    };
    setInterval(slider_2.init.bind(slider_2), 2000);
})(jQuery);