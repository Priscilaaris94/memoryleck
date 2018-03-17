let orm = function(connection){
	////////////////////////////////////////////////////////////////
	// Property Post and update
	this.postProperty(property, cb){
		connection.query(`INSERT INTO property SET ?`, property, function(err, res){
				console.log(err);
				console.log(res);
				cb();
			});
	}

	this.updateProperty(updates, property_id, cb){
		connection.query(`UPDATE property SET ? WHERE ?`, 
			[updates, {id: property_id}],
			function(err, res){
				console.log(err);
				console.log(res);
				cb();
			});
	}

	////////////////////////////////////////////////////////////////
	// Property Queries

	this.getVacantProperty(cb){
		let query = `
		SELECT * 
		FROM property 
		LEFT OUTER JOIN image
		ON property.id = image.property
		WHERE status = 'vacant'
		`;
		connection.query(query, function(err, res){
				console.log(err);
				console.log(res);
				cb(res);
		});
	}

	this.getTenantProperties(tenant_id, cb){
		let query = `
		SELECT *
		FROM property
		LEFT OUTER JOIN request
		ON property.id = request.property_id
		LEFT OUTER JOIN payment 
		ON property.id = payment.property_id
		LEFT OUTER JOIN image
		ON property.id = image.id
		WHERE property.tenant = ${tenant_id}
		`;
		connection.query(query, function(err, res){
			cb(res);
		});
	}

	this.getLandlordProperties(landlord_id, cb){
		let query = `
		SELECT *
		FROM property
		LEFT OUTER JOIN request
		ON property.id = request.property_id
		LEFT OUTER JOIN payment 
		ON property.id = payment.property_id
		LEFT OUTER JOIN image
		ON property.id = image.id
		WHERE property.tenant = ${tenant_id}
		`;
		connection.query(query, function(err, res){
			cb(res);
		});
	}
	

	////////////////////////////////////////////////////////////////
	// Maintenance Requests
	this.postRequest(request, cb){
		connection.query(`REPLACE INTO request SET ?`, request, function(err, res){
			console.log(err);
			console.log(res);
			cb();
		});
	}

	////////////////////////////////////////////////////////////////
	// Images


	////////////////////////////////////////////////////////////////
	// Payments

	this.postPayment(payment, cb){
		connection.query(`REPLACE INTO payment SET ?`, payment, function(err, res){
			console.log(err);
			console.log(res);
			cb();
		});
	}

	////////////////////////////////////////////////////////////////
	// Users
	
	this.postUser(user, cb){
		connection.query(`REPLACE INTO user SET ?`, user, function(err, res){
			console.log(err);
			console.log(res);
			cb();
		});
	}

}

module.exports = orm;