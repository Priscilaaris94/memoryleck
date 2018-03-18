$("#form-post-property").on('submit', (event)=>{
	event.preventDefault();
	let property = {}
	for(let i of event.currentTarget){
		if(i.value){ property[i.name] = i.value; }
	}
	property.landlord_id = localStorage.getItem('user');

	$.post('/api/property',{property: JSON.stringify(property)})
	.then(r => console.log(r));
});
$("#form-post-payment").on('submit', (event)=>{
	event.preventDefault();
	let payment = {}
	for(let i of event.currentTarget){
		if(i.value){ payment[i.name] = i.value; }
	}
	property.tenant_id = localStorage.getItem('user');

	$.post('/api/payment',{payment: JSON.stringify(payment)})
	.then(r => console.log(r));
});
$("#form-post-request").on('submit', (event)=>{
	event.preventDefault();
	let request = {}
	for(let i of event.currentTarget){
		if(i.value){ request[i.name] = i.value; }
	}
	request.logged_by = localStorage.getItem('user');

	$.post('/api/request',{request: JSON.stringify(request)})
	.then(r => console.log(r));
});