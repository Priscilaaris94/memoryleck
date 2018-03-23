(function() {
	$(document).ready(function(){
		/////////////////////////////////////////////////
		// Clean Dates
		let dateCells = $('td.payment-date');
		for(let i = 0, x = dateCells.length; i < x; i++){
			$(dateCells[i]).text( $(dateCells[i]).text().replace(' 00:00:00 GMT-0500 (Eastern Standard Time)','') );
		}
	});
})();