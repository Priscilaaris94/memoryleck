$("#form-post-property").on('submit', (event)=>{
	event.preventDefault();
	let property = {}
	for(let i of event.currentTarget){
		if(i.value){ property[i.name] = i.value; }
	}
	property.landlord_id = localStorage.getItem('user');
	console.log('Form submitted : form-post-property ... ', property);

	$.post('/api/property',{property: JSON.stringify(property)})
	.then(r => console.log(r));
});
$("#form-post-payment").on('submit', (event)=>{
	event.preventDefault();
});
$("#form-post-request").on('submit', (event)=>{
	event.preventDefault();
});