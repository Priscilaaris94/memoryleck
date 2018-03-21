let orm = function(connection){

	////////////////////////////////////////////////////////////////
	// Generic CRUD

	this.selectDB = function(table, vals, cb){
		connection.query(`SELECT * FROM ${table} WHERE ?`, vals, function(err, res){
				console.log(err);
				console.log(res);
				cb(res);
			});
	}

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

	this.getPropertyID = function(property_id, cb){
		let query = `
		SELECT * 
		FROM property 
		WHERE property.id = ?
		;
		`;
		connection.query(query, property_id, function(err, res){
				console.log(err);
				console.log(res);
				cb(res);
		});
	}

	this.getTenantProperties = function(tenant_id, cb){
		let query = `
		SELECT *
		FROM property
		WHERE property.tenant_id = ?
		ORDER BY id DESC
		LIMIT 1
		;
		SELECT request.*
		FROM request
		WHERE property_id =
		(SELECT id
				FROM property
				WHERE property.tenant_id = ?
				ORDER BY id DESC
		        LIMIT 1
		)
		;
		SELECT payment.*
		FROM payment
		WHERE property_id =
		(SELECT id
				FROM property
				WHERE property.tenant_id = ?
				ORDER BY id DESC
		        LIMIT 1
		)
		;
		`;
		connection.query(query, [tenant_id, tenant_id, tenant_id], function(err, res){
			if(err || !res[0] || !res[0][0]){ return cb('error');}
			let tenantProperty = res[0][0];
			tenantProperty.requests = res[1];
			tenantProperty.payments = res[2];
			cb(tenantProperty);
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
		connection.query(query, [landlord_id, landlord_id, landlord_id], function(err, res){
			if(err || !res[0] || !res[0][0]){ return cb('error');}
			let landlordProperties = res[0];
			for(let property of landlordProperties){
				property.payments = res[1].filter(payment => payment.property_id == property.id);
				property.requests = res[2].filter(request => request.property_id == property.id);
			}
			cb(landlordProperties);
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
		let query = `
		INSERT INTO user 
		SET ?
		ON DUPLICATE KEY UPDATE ?
		`;
		let dedupe = {name: user.name, email: user.email, type: user.type};
		connection.query(query, [user, dedupe], function(err, res){
			console.log(err);
			console.log(res);
			cb(res);
		});
	}

}

module.exports = orm;