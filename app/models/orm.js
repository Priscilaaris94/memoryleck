let orm = function(connection){

	////////////////////////////////////////////////////////////////
	// Generic insert and updates (in good ORM spirit)

	this.insertDB = function(table, vals, cb){
		connection.query(`INSERT INTO ${table} SET ?`, vals, function(err, res){
				console.log(err);
				console.log(res);
				cb(res);
			});
	}

	this.updateDB = function(table, vals, key, cb){
		connection.query(`UPDATE ${table} SET ? WHERE ?`, 
			[vals, key],
			function(err, res){
				console.log(err);
				console.log(res);
				cb(res);
			});
	}

	////////////////////////////////////////////////////////////////
	// Property Post and update

	this.postProperty = function(property, cb){
		connection.query(`INSERT INTO property SET ?`, property, function(err, res){
				console.log(err);
				console.log(res);
				cb(res);
			});
	}

	this.updateProperty = function(updates, property_id, cb){
		connection.query(`UPDATE property SET ? WHERE ?`, 
			[updates, {id: property_id}],
			function(err, res){
				console.log(err);
				console.log(res);
				cb(res);
			});
	}

	////////////////////////////////////////////////////////////////
	// Property Queries

	this.getVacantProperty = function(cb){
		let query = `
		SELECT * 
		FROM property 
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
		SELECT property
		FROM property
		WHERE property.tenant_id = ?
		;
		SELECT request.*
		FROM property
		LEFT OUTER JOIN request
		ON property.id = request.property_id
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
			connection.query(`SELECT type FROM user WHERE uid = ?`, request.updated_by, function(err, res){
				console.log(err);
				console.log(res);
				cb(res);
			});
		});
	}

	this.putRequest = function(request, cb){
		connection.query(`REPLACE INTO request SET ? WHERE id = ?`, [request, request.id], function(err, res){
			console.log(err);
			console.log(res);
			connection.query(`SELECT type FROM user WHERE uid = ?`, request.updated_by, function(err, res){
				console.log(err);
				console.log(res);
				cb(res);
			});
		});
	}

	////////////////////////////////////////////////////////////////
	// Payments

	this.postPayment = function(payment, cb){
		connection.query(`REPLACE INTO payment SET ?`, payment, function(err, res){
			console.log(err);
			console.log(res);
			cb(res);
		});
	}

	this.putPayment = function(payment, cb){
		connection.query(`REPLACE INTO payment SET ? WHERE id = ?`, [payment, payment.id], function(err, res){
			console.log(err);
			console.log(res);
			cb(res);
		});
	}

	this.deletePayment = function(paymentid, cb){
		connection.query(`DELETE FROM payment WHERE id = ?`, paymentid, function(err, res){
			console.log(err);
			console.log(res);
			cb(res);
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