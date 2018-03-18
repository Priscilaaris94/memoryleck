$('#form-post-property').on('submit', function(event) {
	event.preventDefault();
	console.log(event);
	// let property = event.
});
$("#form-post-property").on('submit', (event)=>{
	event.preventDefault();
	console.log('Form submitted : form-post-property ... ', event);
	for(let i of event.currentTarget){
		console.log(i.name + ' ' + i.value);
	}
});
$("#form-post-payment").on('submit', (event)=>{
	event.preventDefault();
	console.log('Form submitted : form-post-payment ... ', event);
	for(let i of event.currentTarget){
		console.log(i.name + ' ' + i.value);
	}
});
$("#form-post-request").on('submit', (event)=>{
	event.preventDefault();
	console.log('Form submitted : form-post-request ... ', event);
	for(let i of event.currentTarget){
		console.log(i.name + ' ' + i.value);
	}
});