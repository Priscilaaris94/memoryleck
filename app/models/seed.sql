USE my_database;
REPLACE INTO user(uid, name, email, type)
VALUES ('bC8Ol7BDdoY6AZD10w2vRmU0Pab2', 'Land Lord', 'memleaklandlord@gmail.com', 'landlord'),
('32742WfNdFnUbXf', 'Aaron Carter', 'test688@gmail.co', 'tenant'),
('42794ZqBlMwElWa', 'Alec Baldwin', 'test896@gmail.co', 'landlord'),
('29860XsDeKnLpFt', 'Adele', 'test101@gmail.co', 'tenant'),
('FrvOxTPdylUgBDGEZOiyev458gh1', 'JK Rowling', 'test505@gmail.co', 'landlord'),
('13101QfSsPvKtVm', 'Howard Stern', 'test167@gmail.co', 'tenant'),
('21734GhQlKcTvCi', 'Kevin Hart', 'test620@gmail.co', 'landlord'),
('34233MkElLxNmEr', 'Dr. Phil', 'test840@gmail.co', 'tenant'),
('70686OeXtDfOmTu', 'Taylor Swift', 'test203@gmail.co', 'landlord')
;


REPLACE INTO property(address_one, city, state, zip, beds, baths, sqfeet,
			price, status, landlord_id, tenant_id)
VALUES ('219 Peachtree Street', 'Atlanta', 'GA', 30301, 1, 2, 720, 1100, 'occupied', 'bC8Ol7BDdoY6AZD10w2vRmU0Pab2', 'FrvOxTPdylUgBDGEZOiyev458gh1'),
('118 Peachtree Street', 'Atlanta', 'GA', 30302, 2, 1, 860, 1200, 'vacant', 'bC8Ol7BDdoY6AZD10w2vRmU0Pab2', NULL),
('824 Peachtree Street', 'Atlanta', 'GA', 30303, 1, 2, 1030, 1200, 'vacant', 'bC8Ol7BDdoY6AZD10w2vRmU0Pab2', NULL),
('531 Peachtree Street', 'Atlanta', 'GA', 30304, 1, 2, 680, 1000, 'occupied', 'bC8Ol7BDdoY6AZD10w2vRmU0Pab2', 'FrvOxTPdylUgBDGEZOiyev458gh1')
;

INSERT INTO request(issue_title, issue_desc, date_started, contact_name, contact_phone, status, logged_by, updated_by, property_id)
VALUES ('Aaron Carter is upset about…', 'Lorem ipsum dolor sit amet consectetur adipiscing elit nascetur cras pretium molestie, odio et dictumst facilisi quisque venenatis mollis a vivamus montes purus, egestas cursus hac sollicitudin netus vel eget curabitur senectus convallis. ', '2018-02-17', 'Aaron Carter', 1309467124, 'open', 'FrvOxTPdylUgBDGEZOiyev458gh1', 'FrvOxTPdylUgBDGEZOiyev458gh1', 1),
('Alec Baldwin is upset about…', 'Lorem ipsum dolor sit amet consectetur adipiscing elit nascetur cras pretium molestie, odio et dictumst facilisi quisque venenatis mollis a vivamus montes purus, egestas cursus hac sollicitudin netus vel eget curabitur senectus convallis. ', '2018-02-15', 'Alec Baldwin', 2725506829, 'in progress', 'FrvOxTPdylUgBDGEZOiyev458gh1', 'FrvOxTPdylUgBDGEZOiyev458gh1', 1),
('Adele is upset about…', 'Lorem ipsum dolor sit amet consectetur adipiscing elit nascetur cras pretium molestie, odio et dictumst facilisi quisque venenatis mollis a vivamus montes purus, egestas cursus hac sollicitudin netus vel eget curabitur senectus convallis. ', '2018-02-16', 'Adele', 5510767075, 'open', 'FrvOxTPdylUgBDGEZOiyev458gh1', 'FrvOxTPdylUgBDGEZOiyev458gh1', 1),
('JK Rowling is upset about…', 'Lorem ipsum dolor sit amet consectetur adipiscing elit nascetur cras pretium molestie, odio et dictumst facilisi quisque venenatis mollis a vivamus montes purus, egestas cursus hac sollicitudin netus vel eget curabitur senectus convallis. ', '2018-02-1', 'JK Rowling', 9567258403, 'in progress', 'FrvOxTPdylUgBDGEZOiyev458gh1', 'FrvOxTPdylUgBDGEZOiyev458gh1', 4),
('Howard Stern is upset about…', 'Lorem ipsum dolor sit amet consectetur adipiscing elit nascetur cras pretium molestie, odio et dictumst facilisi quisque venenatis mollis a vivamus montes purus, egestas cursus hac sollicitudin netus vel eget curabitur senectus convallis. ', '2018-02-17', 'Howard Stern', 4224778288, 'open', 'FrvOxTPdylUgBDGEZOiyev458gh1', 'FrvOxTPdylUgBDGEZOiyev458gh1', 4),
('Kevin Hart is upset about…', 'Lorem ipsum dolor sit amet consectetur adipiscing elit nascetur cras pretium molestie, odio et dictumst facilisi quisque venenatis mollis a vivamus montes purus, egestas cursus hac sollicitudin netus vel eget curabitur senectus convallis. ', '2018-02-16', 'Kevin Hart', 5322932914, 'in progress', 'FrvOxTPdylUgBDGEZOiyev458gh1', 'FrvOxTPdylUgBDGEZOiyev458gh1', 4)
;

INSERT INTO payment(date, tenant_id, property_id, amount, method)
VALUES ('2018-02-5', 'FrvOxTPdylUgBDGEZOiyev458gh1', 1, 1100, 'Paypal'),
('2018-02-7', 'FrvOxTPdylUgBDGEZOiyev458gh1', 1, 1100, 'Credit Card'),
('2018-02-17', 'FrvOxTPdylUgBDGEZOiyev458gh1', 1, 1000, 'Check'),
('2018-02-15', 'FrvOxTPdylUgBDGEZOiyev458gh1', 4, 900, 'Paypal'),
('2018-02-1', 'FrvOxTPdylUgBDGEZOiyev458gh1', 4, 900, 'Credit Card')
;

