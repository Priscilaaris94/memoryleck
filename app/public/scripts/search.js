(function() {
	$(document).ready(function(){
		/////////////////////////////////////////////////
		// Search
		$('form').on('submit', function(event){
			event.preventDefault();
		});
		$('#search-prop-field').on('keyup', function(event){
			console.log(event);
			let searchtext = event.currentTarget.value;

			fetch('/api/property')
			.then(b => b.json())
			.then( d => {
				let results;
				if(searchtext.length > 0 ){
					let regex = new RegExp(searchtext, 'gmi');
					results = d.filter(property =>{
						console.log(property);
						return property.address_one.match(regex) || property.city.match(regex) ||  String(property.zip).match(regex);
					}).map(property =>{
						return createPropFragment(property);
					});
				} else {
					results = d.map(property =>{
						return createPropFragment(property);
					});
				}
				$('#search-results').html(results.join());
			});
		});

		let createPropFragment = function(property){
			return `
				<div class="row featurette">
					<div class="col-md-7">
						<a href="/property/${property.id}">
							<h2 class="featurette-heading">
								${property.address_one}<br>
								<span class="text-muted">${property.city}, ${property.state} ${property.zip}</span>
							</h2>
							<p class="lead">
								Beds: ${property.beds}
								Baths: ${property.baths}
								SqFeet: ${property.sqfeet}<br>
								Monthly Rent: ${property.price}<br>
							</p>
						</a>
					</div>
					<div class="col-md-5">
						<img class="featurette-image img-fluid mx-auto" src="${property.img_1}" />
					</div>
				</div>
				<hr class="featurette-divider" />
			`;
		}
	});
})();