/*
*   ------Simple Bookmarker------
*   Copyright (c) 2017 Mohamed Ashraf.
*   License under the MIT license.
*/
$(document).ready(function(){
	var bookmarkApp = {
		init: function(){
			this.fetchHTML();
			this.bindEvents();
			this.fetchBookmarks();
		},
		fetchHTML: function(){
			this.$form = $('#myForm');
			this.$bookmarksResults = $('#bookmarksResults');
		},
		bindEvents: function(){
			this.$form.on('submit', this.saveBookmark.bind(this));
		},
		saveBookmark: function(e){
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
		fetchBookmarks: function(){
			this.$bookmarks = JSON.parse(localStorage.getItem('this.$bookmarks')).sort(function(a, b){
				if(a.name < b.name) return -1;
				if(a.name > b.name) return 1;
				return 0;
			});
			if(this.$bookmarks !== null){
				this.$bookmarksResults.html('');
				for(var i=0 ; i<this.$bookmarks.length ; i++){
					var $name = this.$bookmarks[i].name;
					var $url = this.$bookmarks[i].url;
					this.$bookmarksResults.append(`
						<div class="well">
							<h3>${$name}
								<div class="floatRight">
									<a class="btn btn-default" target="_blank" href="${$url}">Visit</a>
									<a class="btn btn-danger">Delete</a>
								</div>
							</h3>
						</div>
						`);
					$('.btn-danger').on('click', function(){
						bookmarkApp.deleteBookmark(`${$url}`);
					});
				}
			}
		},
		deleteBookmark: function(url){
			this.$bookmarks = JSON.parse(localStorage.getItem('this.$bookmarks'));
			for(var i=0 ; i<this.$bookmarks.length ; i++){
				if(this.$bookmarks[i].url === url){
					bookmarkApp.$bookmarks.splice(i, 1);
				}
			}
			localStorage.setItem('this.$bookmarks', JSON.stringify(this.$bookmarks));
			bookmarkApp.fetchBookmarks();
		},
		validateForm: function($siteName, $siteUrl){
			if(!$siteName || !$siteUrl){
			alert('plese fill in the form');
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
	bookmarkApp.init();
});
