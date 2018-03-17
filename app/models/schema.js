const sql = require('mysql');
// require('dotenv').config();
// const connection = sql.createConnection({
//   host: process.env.JAWS_CONFIG_host,
//   port: process.env.JAWS_CONFIG_port,
//   user: process.env.JAWS_CONFIG_user,
//   password: process.env.JAWS_CONFIG_password,
//   database: process.env.JAWS_CONFIG_database,
//   multipleStatements: true
// });

const connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "password1",
  database: "my_db",
  multipleStatements: true
});

let query = `
CREATE DATABASE IF NOT EXISTS my_database;
USE my_database;
CREATE TABLE user (
	id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255),
    email VARCHAR(255),
    uid VARCHAR(255),
    type ENUM('landlord', 'tenant') DEFAULT 'tenant',
	PRIMARY KEY (id),
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
	status VARCHAR(255),
	owner_id INT,
	tenant_id INT,
	PRIMARY KEY (id),
	FOREIGN KEY (owner_id) REFERENCES user(id),
	FOREIGN KEY (tenant_id) REFERENCES user(id)
);

CREATE TABLE request (
	id INT NOT NULL AUTO_INCREMENT,
	issue_title VARCHAR(255),
	issue_desc VARCHAR(255),
	date_started VARCHAR(255),
	contact_name VARCHAR(255),
	contact_phone VARCHAR(255),
	logged_by INT,
	property INT,
	status ENUM('open', 'in progress', 'closed'),
	PRIMARY KEY (id),
	FOREIGN KEY (logged_by) REFERENCES user(id),
	FOREIGN KEY (property) REFERENCES property(id)
);

CREATE TABLE image (
	id INT NOT NULL AUTO_INCREMENT,
	src VARCHAR(255),
	property INT,
	PRIMARY KEY (id),
	FOREIGN KEY (property) REFERENCES property(id)
);

CREATE TABLE payment (
	id INT NOT NULL AUTO_INCREMENT,
	date DATE NOT NULL,
	tenant INT,
	property INT,
	amount INT,
	method VARCHAR(255),
	PRIMARY KEY (id),
	FOREIGN KEY (property) REFERENCES property(id),
	FOREIGN KEY (tenant) REFERENCES user(id),
    CONSTRAINT single_payment UNIQUE(date, property)
);
`;

connection.query(query, (err, res)=>{
	console.log(res);
	connection.end();
});