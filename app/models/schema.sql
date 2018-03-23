DROP SCHEMA IF EXISTS my_database;
CREATE DATABASE IF NOT EXISTS my_database;
USE my_database;
CREATE TABLE user (
    name VARCHAR(255),
    email VARCHAR(255),
    uid VARCHAR(255) NOT NULL,
    type ENUM('landlord', 'tenant') DEFAULT 'tenant',
	PRIMARY KEY (uid),
    CONSTRAINT user_type UNIQUE(uid, type)
);

CREATE TABLE property (
	id INT NOT NULL AUTO_INCREMENT,
	address_one VARCHAR(255),
	address_two VARCHAR(255),
	city VARCHAR(255),
	state VARCHAR(255),
	zip INT,
	beds INT,
	baths INT,
	sqfeet INT,
	price INT,
	img_1 VARCHAR(255),
	img_2 VARCHAR(255),
	img_3 VARCHAR(255), 
	status VARCHAR(255),
	landlord_id VARCHAR(255),
	tenant_id VARCHAR(255),
	PRIMARY KEY (id),
	FOREIGN KEY (landlord_id) REFERENCES user(uid),
	FOREIGN KEY (tenant_id) REFERENCES user(uid)
);

CREATE TABLE request (
	id INT NOT NULL AUTO_INCREMENT,
	issue_title VARCHAR(255),
	issue_desc VARCHAR(255),
	date_started VARCHAR(255),
	contact_name VARCHAR(255),
	contact_phone VARCHAR(255),
	logged_by VARCHAR(255),
	updated_by VARCHAR(255) NULL,
	property_id INT,
	status ENUM('open', 'in progress', 'closed'),
	PRIMARY KEY (id),
	FOREIGN KEY (logged_by) REFERENCES user(uid),
	FOREIGN KEY (updated_by) REFERENCES user(uid),
	FOREIGN KEY (property_id) REFERENCES property(id)
);

CREATE TABLE payment (
	id INT NOT NULL AUTO_INCREMENT,
	date DATE NOT NULL,
	tenant_id VARCHAR(255),
	property_id INT,
	amount INT,
	method VARCHAR(255),
	PRIMARY KEY (id),
	FOREIGN KEY (property_id) REFERENCES property(id),
	FOREIGN KEY (tenant_id) REFERENCES user(uid),
    CONSTRAINT single_payment UNIQUE(date, property_id)
);