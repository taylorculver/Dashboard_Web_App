function messageAlert() {
	// clone alert button
	const clone = $("#alert-button").clone();
	// get message content 
	const message = $('#message').val();
	// get message content 
	const user = $('#user-search').val();
	if (message && user) {
		// Prompt Message
		alert("Your message was sent!")
		// scroll to top
		$('html, body').animate({ scrollTop: 0 }, 'fast');
	} else if (message == "" && user == "") {
		alert("Please add a message and a user")
	} else if (message == "") {
		alert("Please add a message")
	} else if (user == "") {
		alert("Please add a user")
	}
};