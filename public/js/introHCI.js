'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// your code here
	$(".listBtn").click(clickLikeBtn);
}

function clickLikeBtn() {
	e.preventDefault();
	ga.('create', 'UA-XXXXX-Y', 'auto');
	ga('send', 'event', 'signup', 'click');
}