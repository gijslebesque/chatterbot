
var chatbot = {

	userMessage: function (input) {
    	return $(	`<div class="messages user-messages">
						<p class="user-res-text">${input}</p>
						<img src="./images/avatar_2.png" >
					</div>`
				).insertBefore( "form" );
	},

	robotMessage: function  (input) {
   	 	return $( 	`<div class="messages robot-messages">
						<img src="./images/avatar.svg" >
						<p class="user-res-text">${input}</p>
					</div>`
				).insertBefore( "form" );
	},

	getRandomIndex: function (max){
		return Math.floor(Math.random() * Math.floor(max))
	},

	response: {
		greeting: [ "Hello there", "How are you", "How is it going?" ],
		bye: 		["Bye", "Later", "Well, goodby now"],
		identity:["I am the terminator", "I don't know yet what or who I am", "I am just a simple and I should have been hooked up with the advanced google api"],
		film: ["I like films", "My favourite is Shawshank Redemption", "Actually my favourite is Pulp Fiction"],
		default: ["I don't know what you mean", "I don't understand", "Can you rehrase the question?"]
	}
	
}
$(document).ready(function(){
	$("form").submit(function(e){
		e.preventDefault();
	})
})

