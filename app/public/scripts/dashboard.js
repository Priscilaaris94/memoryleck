(function() {
	$(document).ready(function(){
	/////////////////////////////////////////////////
	// Cleaning Up Date Formats from SQL
	let t;
	if(t = document.getElementsByClassName('payment-date').length){
		console.log(t);
		for(let i = 0; i < t; i++){
			console.log(document.getElementsByClassName('payment-date')[i]);
		}
	}
	
	/////////////////////////////////////////////////
	// Search
	$('#search-prop-field').on('keyup', function(event){
		console.log(event);
	});
	});
})();