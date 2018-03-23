let orm = function(connection){

  ////////////////////////////////////////////////////////////////
  // Generic CRUD

  this.selectDB = function(table, vals, cb){
    connection.query(`SELECT * FROM ${table} WHERE ?`, vals, function(err, res){
        // console.log(err);
        // console.log(res);
        cb(res);
      });
  }

  this.insertDB = function(table, vals, cb){
    connection.query(`INSERT INTO ${table} SET ?`, vals, function(err, res){
        // console.log(err);
        // console.log(res);
        cb(res);
      });
  }

  this.upsertDB = function(table, vals, cb){
    let query = `
    INSERT INTO ${table} 
    SET ?
    ON DUPLICATE KEY UPDATE ?
    `;
    let dedupe = {};
    for(let i in vals){
      if(i !== 'id'){ dedupe[i] = vals[i] }
    }
    connection.query(query, [vals, dedupe], function(err, res){
      // console.log(err);
      // console.log(res);
      cb(res);
    });
  }

  this.deleteDB = function(table, key, cb){
    connection.query(`DELETE FROM ${table} WHERE id = ?`, 
      key,
      function(err, res){
        // console.log(err);
        // console.log(res);
        cb(res);
      });
  }

  ////////////////////////////////////////////////////////////////
  // Property Post and update

  this.postProperty = function(property, cb){
    connection.query(`INSERT INTO property SET ?`, property, function(err, res){
        // console.log(err);
        // console.log(res);
        cb(res);
      });
  }

  this.updateProperty = function(updates, property_id, cb){
    connection.query(`UPDATE property SET ? WHERE ?`, 
      [updates, {id: property_id}],
      function(err, res){
        // console.log(err);
        // console.log(res);
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
        // console.log(err);
        // console.log(res);
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
        // console.log(err);
        // console.log(res);
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

}

module.exports = orm;