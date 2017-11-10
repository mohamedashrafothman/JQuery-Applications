/*
*   ------Simple Bookmarker------
*   Copyright (c) 2017 Mohamed Ashraf.
*   License under the MIT license.
*/
$(document).ready(function(){
    var app = {
        $stopAnimation: 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
        $addAnimation: 'animated fadeIn',
        $deleteAnimation: 'animated fadeOut',
        $shakeAnimation: 'animated shake',
        init(){
            this.fetchHTML();
            this.bindEvents();
            this.fetchBookmarks();
        },
        fetchHTML(){
            this.$form = $('#myForm');
            this.$bookmarksResults = $('#bookmarksResults');
        },
        bindEvents(){
            this.$form.on('submit', this.saveBookmark.bind(this));
        },
        saveBookmark(e){
            e.preventDefault();
            this.$siteName = this.$form.find('#siteName').val();
            this.$siteUrl = this.$form.find('#siteURL').val();
            if(!this.validateForm(this.$siteName, this.$siteUrl)){
                return false;
            }
            this.$bookmark = {
                name: this.$siteName,
                url: this.$siteUrl
            };
            if(localStorage.getItem('this.$bookmarks') === null){
                this.$bookmarks = [];
                this.$bookmarks.push(this.$bookmark);
                localStorage.setItem('this.$bookmarks', JSON.stringify(this.$bookmarks));
            }else{
                // console.log();
                this.$bookmarks = JSON.parse(localStorage.getItem('this.$bookmarks'));
                this.$bookmarks.push(this.$bookmark);
                localStorage.setItem('this.$bookmarks', JSON.stringify(this.$bookmarks));
            }
            this.$form.trigger("reset");
            this.fetchBookmarks();
        },
        fetchBookmarks(){
            this.$bookmarks = JSON.parse(localStorage.getItem('this.$bookmarks'));
            if(this.$bookmarks !== null){
                this.$bookmarksResults.html('');
                for(var i=0 ; i<this.$bookmarks.length ; i++){
                    var $name = this.$bookmarks[i].name;
                    var $url = this.$bookmarks[i].url;
                    this.$bookmarksResults.append(`
                        <div class="card text-black bg-light">
                            <h3>${$name}
                                <div class="floatRight">
                                    <a class="btn btn-default" target="_blank" href="${$url}">Visit</a>
                                    <a class="btn btn-danger">Delete</a>
                                </div>
                            </h3>
                        </div>
                        `).find('.card').addClass(this.$addAnimation).one(this.$stopAnimation, function() {
                            $('.card').removeClass(this.$addAnimation);
                        });
            
                    $('.btn-danger').on('click', ()=> {
                        $('.btn-danger').closest('.card').addClass(this.$deleteAnimation).one(this.$stopAnimation, ()=> {
                           $(this).removeClass(this.$deleteAnimation);
                        app.deleteBookmark(`${$url}`);
                        });
                    });
                }
            }
        },
        deleteBookmark(url){
            this.$bookmarks = JSON.parse(localStorage.getItem('this.$bookmarks'));
            for(var i=0 ; i<this.$bookmarks.length ; i++){
                if(this.$bookmarks[i].url === url){
                    app.$bookmarks.splice(i, 1);
                }
            }
            localStorage.setItem('this.$bookmarks', JSON.stringify(this.$bookmarks));
            app.fetchBookmarks();
        },
        validateForm($siteName, $siteUrl){
            if(!$siteName || !$siteUrl){
                app.$form.find('#siteName')
                .addClass(this.$shakeAnimation)
                .one(this.$stopAnimation,()=> {
                        app.$form.find('#siteName').removeClass(this.$shakeAnimation);
                    });
                app.$form.find('#siteURL')
                .addClass(this.$shakeAnimation)
                .one(this.$stopAnimation,()=> {
                        app.$form.find('#siteURL').removeClass(this.$shakeAnimation);
                    });
                return false;
            }
            var regex = new RegExp(/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi);
            if (!$siteUrl.match(regex)) {
              alert("Please use valied url");
              return false;
            }
        return true;
        }
    };
    app.init();
});