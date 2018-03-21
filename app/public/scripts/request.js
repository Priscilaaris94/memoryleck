(function(){
	/////////////////////////////////////////////////
	// submit request form based on user type and dynamically check if request has existing id

	$('form').on('submit', (event)=>{
		event.preventDefault();
		let request = {}, 
			x, 
			uid = event.currentTarget.getAttribute('data-uid')
			type = event.currentTarget.getAttribute('data-user');
		for(let i of event.currentTarget){
			if(i.value){ request[i.name] = i.value; }
		}
		if(x = event.currentTarget.getAttribute('data-id')){
			request.id = x;
			request.updated_by = uid;
		} else {
			request.updated_by = request.logged_by = uid;
		}

		$.post('/api/request/',{request: JSON.stringify(request)})
		.then(() => {
			window.location.href = `/${type}/home/${uid}`;
		});
	});

})();