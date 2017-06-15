$(document).ready(function(){
	$('body').on('load', fetchBookmarks())
	// submit event
	$('#myForm').on('submit', saveBookmark);
	// save bookmark function
	function saveBookmark(e){
		// get form values
		var $siteName = $('#siteName').val();
		var $siteUrl = $('#siteURL').val();

		if(!validateForm($siteName, $siteUrl)){
			return flase;
		}

		var $bookmark = {
			name: $siteName,
			url: $siteUrl
		};

		if(localStorage.getItem('$bookmarks') === null){
			// init array
			var $bookmarks = [];
			$bookmarks.push($bookmark);
			//set to local storage
			// JSON.stringify()	- turn json into string
			localStorage.setItem('$bookmarks', JSON.stringify($bookmarks));
		}else{
			// get bookmarks from localStorage
			// JSON.parse() - Turn string into Json
			var $bookmarks = JSON.parse(localStorage.getItem('$bookmarks'));
			// add bookmark to array
			$bookmarks.push($bookmark);
			// reseted back to localStorage
			localStorage.setItem('$bookmarks', JSON.stringify($bookmarks));
		}

		$('#myForm').val('');
		//re-fetch bookmark
		fetchBookmarks();


		// prevent form from submitting
		e.preventDefault();
	};


	// delete function
	function deleteBookmark(url){
		//get bookmark from localStorage
		var $bookmarks = JSON.parse(localStorage.getItem('$bookmarks'));
		// loop throught bookmarks
		for(var i=0 ; i<$bookmarks.length ; i++){
			if($bookmarks[i].url === url){
				$bookmarks.splice(i, 1);
			}
		};
		localStorage.setItem('$bookmarks', JSON.stringify($bookmarks));
		//re-fetch bookmark

		fetchBookmarks();
	};



	// fetch bookmarks
	function fetchBookmarks(){
		// prevent form from submitting

		var $bookmarks = JSON.parse(localStorage.getItem('$bookmarks'));

		//get output id
		var $bookmarksResults = $('#bookmarksResults');
		// build output
		if($bookmarks !== null){
			$bookmarksResults.html('');
			for(var i=0 ; i< $bookmarks.length ; i++){

				var $name = $bookmarks[i].name;
				var $url = $bookmarks[i].url;

				console.log();
				$bookmarksResults.append(`
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
					deleteBookmark($url);
				});
			}
		}
	};

	// validate form
	function validateForm($siteName, $siteUrl){
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
});


// local storage Test, it's only store string so we need to parse object to string
// localStorage.setItem('test', 'Hello world');
// console.log(localStorage.getItem('test'));
// localStorage.removeItem('test');
// console.log(localStorage.getItem('test'));
// test if bookmarks is null
