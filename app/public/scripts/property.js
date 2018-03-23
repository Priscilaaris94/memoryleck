(function(){
	/////////////////////////////////////////////////
	// if property is vacant, hide the tenant field 
	function checkVacant(){
		if($('[name="status"]').val() === 'occupied'){
			$('#tenant-picker').show();
		} else {
			$('#tenant-picker').hide();
			$('[name="tenant_id"]').val('');
		}
	}
	
	$('[name="status"]').on('change load', (event)=>{
		checkVacant();
	});
	checkVacant();


	/////////////////////////////////////////////////
	// submit property form based on user = landlord and dynamically check if property has existing id

	$('form').on('submit', (event)=>{
		event.preventDefault();
		let property = {}, x;
		for(let i of event.currentTarget){
			if(i.value){ property[i.name] = i.value; }
		}
		property.landlord_id = event.currentTarget.getAttribute('data-uid');
		if(x = event.currentTarget.getAttribute('data-id')){
			property.id = x;
		}

		$.ajax({
			url: '/api/updateproperty/',
			type: 'POST',
        	enctype: 'multipart/form-data',
        	data: property
        })
		.then(r => {
			window.location.href = r;
		});
	});

})();