let orm = function(connection){
	////////////////////////////////////////////////////////////////
	// Property Post and update
	this.postProperty = function(property, cb){
		connection.query(`INSERT INTO property SET ?`, property, function(err, res){
				console.log(err);
				console.log(res);
				cb();
			});
	}

	this.updateProperty = function(updates, property_id, cb){
		connection.query(`UPDATE property SET ? WHERE ?`, 
			[updates, {id: property_id}],
			function(err, res){
				console.log(err);
				console.log(res);
				cb();
			});
	}

	////////////////////////////////////////////////////////////////
	// Images
	this.postImage = function(image, cb){
		connection.query(`INSERT INTO image SET ?`, image, function(err, res){
			console.log(err);
			console.log(res);
			cb();
		});
	}

	////////////////////////////////////////////////////////////////
	// Property Queries

	this.getVacantProperty = function(cb){
		let query = `
		SELECT property.*, image.src 
		FROM property 
		LEFT OUTER JOIN image
		ON property.id = image.property_id
		WHERE property.tenant_id IS NULL
		AND property.status = 'vacant'
		;
		`;
		connection.query(query, function(err, res){
				console.log(err);
				console.log(res);
				cb(res);
		});
	}

	this.getTenantProperties = function(tenant_id, cb){
		let query = `
		SELECT property.*, image.src
		FROM property
		LEFT OUTER JOIN image
		ON property.id = image.id
		WHERE property.tenant_id = ?
		;
		SELECT request.*
		FROM property
		LEFT OUTER JOIN request
		ON property.id = request.property_id
		LEFT OUTER JOIN image
		ON property.id = image.id
		WHERE property.tenant_id = ?
		;
		SELECT payment.*
		FROM property
		LEFT OUTER JOIN payment 
		ON property.id = payment.property_id
		WHERE property.tenant_id = ?
		;
		`;
		connection.query(query, tenant_id, function(err, res){
			cb(res);
		});
	}

	this.getLandlordProperties = function(landlord_id, cb){
		let query = `
		SELECT *
		FROM property
		LEFT OUTER JOIN image
		ON property.id = image.id
		WHERE property.landlord_id = ?
		;
		SELECT payment.*
		FROM property
		LEFT OUTER JOIN payment 
		ON property.id = payment.property_id
		WHERE property.landlord_id = ?
		AND property.tenant_id = payment.tenant_id
		;
		SELECT request.*
		FROM property
		LEFT OUTER JOIN request
		ON property.id = request.property_id
		WHERE property.landlord_id = ?
		AND property.tenant_id = request.logged_by
		;
		`;
		connection.query(query, landlord_id, function(err, res){
			cb(res);
		});
	}
	

	////////////////////////////////////////////////////////////////
	// Maintenance Requests
	this.postRequest = function(request, cb){
		connection.query(`REPLACE INTO request SET ?`, request, function(err, res){
			console.log(err);
			console.log(res);
			cb();
		});
	}

	////////////////////////////////////////////////////////////////
	// Payments

	this.postPayment = function(payment, cb){
		connection.query(`REPLACE INTO payment SET ?`, payment, function(err, res){
			console.log(err);
			console.log(res);
			cb();
		});
	}

	////////////////////////////////////////////////////////////////
	// Users
	
	this.postUser = function(user, cb){
		connection.query(`REPLACE INTO user SET ?`, user, function(err, res){
			console.log(err);
			console.log(res);
			cb(res);
		});
	}

}

module.exports = orm;