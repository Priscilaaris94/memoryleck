SELECT * FROM my_database.user;
SELECT * FROM my_database.property;
SELECT * FROM my_database.payment;
SELECT * FROM my_database.request;


-- all vacant properties
SELECT property.*, image.src 
FROM property 
LEFT OUTER JOIN image
ON property.id = image.property_id
WHERE property.tenant_id IS NULL
AND property.status = 'vacant'
;

-- all tenant's properties
-- example: tenant ID = 3
SELECT *
FROM property
LEFT OUTER JOIN payment 
ON property.id = payment.property_id
WHERE property.tenant_id = '92077MxCcJqOnWv'
;
SELECT *
FROM property
LEFT OUTER JOIN request
ON property.id = request.property_id
LEFT OUTER JOIN image
ON property.id = image.id
WHERE property.tenant_id = '92077MxCcJqOnWv'
;


-- all landlord's properties
-- example: landlord ID = 8
SELECT *
FROM property
LEFT OUTER JOIN payment 
ON property.id = payment.property_id
WHERE property.landlord_id = '19763AaXnOaDlDh'
AND property.tenant_id = payment.tenant_id
;
SELECT *
FROM property
LEFT OUTER JOIN request
ON property.id = request.property_id
WHERE property.landlord_id = '19763AaXnOaDlDh'
AND property.tenant_id = request.logged_by
;
SELECT *
FROM property
LEFT OUTER JOIN image
ON property.id = image.id
WHERE property.landlord_id = '19763AaXnOaDlDh'
;