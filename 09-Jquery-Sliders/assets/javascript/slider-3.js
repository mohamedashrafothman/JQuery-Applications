(function ($) {

    const slider_3 = {
        init: function () {
            this.renderHTML();
            this.insertLastImage();
            this.setWidth();
            this.slide();
        },
        renderHTML: function () {
            this.$photoshow = $('#photoshow');
            this.$photoshowLength = this.$photoshow.find('img').length;
        },
        insertLastImage: function () {
            var firstImageSRC = this.$photoshow.find('img:first').attr('src');

            // check if the first image is the last image or not then add last image
            if (firstImageSRC !== this.$photoshow.find('img:last').attr('src')) {
                this.$photoshow.append('<img src="' + firstImageSRC + '">');
            }
        },
        setWidth: function () {
            this.$photoshow.css({
                "width": (this.$photoshowLength * 400) + "px"
            });
        },
        slide: function () {
            var lastImageMargin = (this.$photoshowLength-1) * -400+"px";

            if (this.$photoshow.css("margin-left") !== lastImageMargin){
                this.$photoshow.animate({ "margin-left": '-=400px' }, 1000).delay(2000);
            } else {
                this.$photoshow.css({"margin-left":'0px'} ).delay(2000);
            }
        }
    };
    setInterval(slider_3.init.bind(slider_3), 2000);
})(jQuery);