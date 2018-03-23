(function(){
	/////////////////////////////////////////////////
	// submit payment form based on user = tenant and dynamically check if payment has existing id

	$('form').on('submit', (event)=>{
		event.preventDefault();
		let payment = {}, x;
		for(let i of event.currentTarget){
			if(i.value){ payment[i.name] = i.value; }
		}
		payment.tenant_id = event.currentTarget.getAttribute('data-uid');
		payment.property_id = event.currentTarget.getAttribute('data-property');
		if(x = event.currentTarget.getAttribute('data-id')){
			payment.id = x;
		}
		$.post('/api/payment/',{payment: JSON.stringify(payment)})
		.then(() => {
			window.location.href = "/tenant/home/" + payment.tenant_id;
		});
	});

})();