(function() {
	$(document).ready(function(){
		/////////////////////////////////////////////////
		// Clean Dates
		let dateCells = $('td.payment-date');
		for(let i = 0, x = dateCells.length; i < x; i++){
			let newtext = $(dateCells[i]).text().trim().slice(0, 16);
			newtext += '<span class="moment-count">' + moment(newtext).fromNow() + '</span>';
			$(dateCells[i]).html( newtext );
		}
	});
})();