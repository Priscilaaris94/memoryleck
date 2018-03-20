
// For test, setting local storage user
// =============================================================

// landlord
// localStorage.setItem('user', 'bC8Ol7BDdoY6AZD10w2vRmU0Pab2'); 

// tenant
localStorage.setItem('user', 'FrvOxTPdylUgBDGEZOiyev458gh1'); 

// Form to Create a Property
// =============================================================

$("#form-post-property").on('submit', (event)=>{
	event.preventDefault();
	let property = {}
	for(let i of event.currentTarget){
		if(i.value){ property[i.name] = i.value; }
	}
	property.landlord_id = localStorage.getItem('user');

	console.log(property);
	$.post('/api/property',{property: JSON.stringify(property)})
	.then(r => console.log(r));
});

// Form to Update a Property
// =============================================================

$("#form-put-property").on('submit', (event)=>{
	event.preventDefault();
	let property = {}
	for(let i of event.currentTarget){
		if(i.value){ property[i.name] = i.value; }
	}
	property.id = '5';
	property.landlord_id = localStorage.getItem('user');

	console.log(property);
	$.ajax({
		url: '/api/property', 
		method: 'put',
		data: {
			property: JSON.stringify(property)
		},
		done: function(r){
			console.log(r);
		}
	});
});

// Form to Create/Update Payment
// =============================================================

$("#form-post-payment").on('submit', (event)=>{
	event.preventDefault();
	let payment = {}
	for(let i of event.currentTarget){
		if(i.value){ payment[i.name] = i.value; }
	}
	payment.tenant_id = localStorage.getItem('user');

	$.post('/api/payment',{payment: JSON.stringify(payment)})
	.then(r => console.log(r));
});

// Form to Delete Payment
// =============================================================

$("#form-delete-payment").on('submit', (event)=>{
	event.preventDefault();
	console.log(event);
	$.ajax({
		url: '/api/payment', 
		method: 'delete',
		data: {
			id: event.currentTarget.id.value
		},
		done: function(r){
			console.log(r);
		}
	});
});

// Form to Update Request
// =============================================================

$("#form-post-request").on('submit', (event)=>{
	event.preventDefault();
	let request = {}
	for(let i of event.currentTarget){
		if(i.value){ request[i.name] = i.value; }
	}
	request.logged_by = localStorage.getItem('user');
	request.updated_by = localStorage.getItem('user');

	console.log(request);

	$.post('/api/request', {request: JSON.stringify(request)})
	.then(r => console.log(r));
});


// Form to Update Request
// =============================================================

$("#form-put-request").on('submit', (event)=>{
	event.preventDefault();
	let request = {}
	for(let i of event.currentTarget){
		if(i.value){ request[i.name] = i.value; }
	}
	request.updated_by = localStorage.getItem('user');
	
	console.log(request);

	$.put('/api/request', {request: JSON.stringify(request)})
	.then(r => console.log(r));
});