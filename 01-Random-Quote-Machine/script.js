/*
*   Random Quotes Program
*   Copyright (c) 2017 Mohamed Ashraf.
*   License under the MIT license.
*/

$(document).ready(function(){
	var quoteMachine = {
		colors: ['#1abc9c','#2ecc71','#3498db','#9b59b6','#f1c40f',
             	'#e67e22','#e74c3c','#9b59b6','#f1c40f','#e74c3c'],
		init: function(){
			this.cacheDom();
			this.bnidEvents();
			this.getQuotes();
		},
		cacheDom: function(){
			//buttons
			this.$buttons 			= $('.quote-buttons-container');
			this.$twitterButton 	= this.$buttons.find('#tweet-quotes');
			this.$newQuoteButton 	= this.$buttons.find('#new-quotes');

			//containers
			this.$quoteContainer 	= $('.quote-container');
			this.$textContainer 	= this.$quoteContainer.find('.quote-text');
			this.$author 			= this.$quoteContainer.find('.quote-author-container');
		},
		bnidEvents: function(){
			this.$twitterButton.on('click', this.tweet.bind(this));
			this.$newQuoteButton.on('click', this.getQuotes.bind(this));
		},
		getQuotes: function(){
			this.quotes  = ['The best way to remember your wife\'s birthday is to forget it once.',
                      		'She\'s too young for Medicare and too old for me to care.',
                      		'Gray hair is God\'s graffiti.',
                      		'I lived in Miami for a while, in a section with a lot of really old people. The average age in my apartment house was dead.',
                      		'Good Americans, when they die, go to Paris.',
                      		'We had a very successful trip to Russia we got back.',
                      		'Enjoy life. Think of all the women who passed up dessert on the Titanic.',
                      		'Everybody should believe in something, I believe I\'ll have another drink.',
                      		'I know lots more old drunks than old doctors.',
                      		'I\'m a one-drink woman, two at the most, three I\'m under the table, four I\'m under the host.'
                     		];
			this.authors = ['- E. Joseph Cossman','- Anonymous','- Bill Cosby','- Gabe Kaplan','- T. G. Appleton',
                      		'- Bob Hope','- Anonymous','- Anonymous','- Joe E. Lewis','- Anonymous'];


			this.$randomNm = Math.floor(Math.random()*this.quotes.length);
			this.$randomQuote = this.quotes[this.$randomNm];
			this.$randomAuthor = this.authors[this.$randomNm];

		    this.render();

			$('body').css({'background-color': this.colors[this.$randomNm]});
			$(this.$newQuoteButton).css({'background-color': this.colors[this.$randomNm]});
			$(this.$author).css({'color': this.colors[this.$randomNm]});
			$(this.$textContainer ).css({'color': this.colors[this.$randomNm]});
			$(this.$quoteContainer).find('.quote-text-container>i').css({'color': this.colors[this.$randomNm]});

		},
		render: function(){
			this.$textContainer.text(this.$randomQuote);
			this.$author.text(this.$randomAuthor);
		},
		tweet: function(){
			window.open('https://twitter.com/intent/tweet?text='+'"'+this.$randomQuote+'" '+this.$randomAuthor);
		}

	};
	quoteMachine.init();
});
