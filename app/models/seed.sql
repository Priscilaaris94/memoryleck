USE my_database;
REPLACE INTO user(uid, name, email, type)
VALUES ('92077MxCcJqOnWv', 'Aaron Carter', 'test596@gmail.co', 'tenant'),
('92112AlAiYnQjMa', 'Alec Baldwin', 'test592@gmail.co', 'landlord'),
('24967JqKdOdYoKk', 'Adele', 'test934@gmail.co', 'tenant'),
('95148TvLsRjJkVu', 'JK Rowling', 'test666@gmail.co', 'landlord'),
('90712RqQdImZpIl', 'Howard Stern', 'test541@gmail.co', 'tenant'),
('55145XoQqEhTdKv', 'Kevin Hart', 'test321@gmail.co', 'landlord'),
('45302XnWvTbRdXt', 'Dr. Phil', 'test643@gmail.co', 'tenant'),
('19763AaXnOaDlDh', 'Taylor Swift', 'test838@gmail.co', 'landlord'),
('53357FkZjScKvMu', 'Beyonce', 'test172@gmail.co', 'tenant'),
('29272BeHuMuUmCu', 'The Weekend', 'test479@gmail.co', 'landlord'),
('34671OuGkXuIwNo', 'Ed Sheeran', 'test795@gmail.co', 'tenant'),
('90287FqIqRgElJt', 'Conor McGregor', 'test725@gmail.co', 'landlord'),
('11752BfLeYjOhZi', 'Chance the Rapper', 'test312@gmail.co', 'tenant'),
('67623QwUaUqVbRl', 'Skrillex', 'test439@gmail.co', 'landlord'),
('93311BlDiOjPhCd', 'Emma Stone', 'test553@gmail.co', 'tenant'),
('24884MuFkBmJhEa', 'Rihanna', 'test682@gmail.co', 'landlord')
;


REPLACE INTO property(address_one, city, state, zip, beds, baths, sqfeet,
			price, status, landlord_id, tenant_id)
VALUES ('451 Peachtree Street', 'Atlanta', 'GA', 30301, 2, 2, 1130, 1100, 'occupied', '19763AaXnOaDlDh', '92077MxCcJqOnWv'),
('987 Peachtree Street', 'Atlanta', 'GA', 30302, 1, 2, 800, 800, 'vacant', '19763AaXnOaDlDh', NULL),
('274 Peachtree Street', 'Atlanta', 'GA', 30303, 2, 2, 800, 900, 'vacant', '19763AaXnOaDlDh', NULL),
('514 Peachtree Street', 'Atlanta', 'GA', 30304, 1, 2, 760, 1100, 'occupied', '95148TvLsRjJkVu', '24967JqKdOdYoKk'),
('366 Peachtree Street', 'Atlanta', 'GA', 30305, 2, 1, 1090, 1100, 'vacant', '90712RqQdImZpIl', NULL),
('259 Peachtree Street', 'Atlanta', 'GA', 30306, 1, 1, 630, 900, 'vacant', '55145XoQqEhTdKv', NULL),
('727 Peachtree Street', 'Atlanta', 'GA', 30307, 2, 2, 570, 1000, 'occupied', '95148TvLsRjJkVu', '90712RqQdImZpIl'),
('884 Peachtree Street', 'Atlanta', 'GA', 30308, 1, 1, 1180, 1200, 'vacant', '95148TvLsRjJkVu', NULL),
('472 Peachtree Street', 'Atlanta', 'GA', 30309, 1, 1, 730, 800, 'vacant', '95148TvLsRjJkVu', NULL),
('607 Peachtree Street', 'Atlanta', 'GA', 30310, 1, 2, 760, 800, 'occupied', '92112AlAiYnQjMa', '45302XnWvTbRdXt'),
('889 Peachtree Street', 'Atlanta', 'GA', 30311, 1, 2, 1090, 1200, 'occupied', '92112AlAiYnQjMa', '34671OuGkXuIwNo'),
('170 Peachtree Street', 'Atlanta', 'GA', 30312, 1, 1, 1090, 1100, 'vacant', '92112AlAiYnQjMa', NULL)
;

INSERT INTO request(issue_title, issue_desc, date_started, contact_name, contact_phone, status, logged_by, property_id)
VALUES ('Larry David is upset about…', 'Lorem ipsum dolor sit amet consectetur adipiscing elit nascetur cras pretium molestie, odio et dictumst facilisi quisque venenatis mollis a vivamus montes purus, egestas cursus hac sollicitudin netus vel eget curabitur senectus convallis. ', '2018-02-14', 'Larry David', 7735638265, 'open', '92077MxCcJqOnWv', 1),
('Chace Crawford is upset about…', 'Lorem ipsum dolor sit amet consectetur adipiscing elit nascetur cras pretium molestie, odio et dictumst facilisi quisque venenatis mollis a vivamus montes purus, egestas cursus hac sollicitudin netus vel eget curabitur senectus convallis. ', '2018-02-11', 'Chace Crawford', 4611451529, 'in progress', '92077MxCcJqOnWv', 1),
('Mark Harmon is upset about…', 'Lorem ipsum dolor sit amet consectetur adipiscing elit nascetur cras pretium molestie, odio et dictumst facilisi quisque venenatis mollis a vivamus montes purus, egestas cursus hac sollicitudin netus vel eget curabitur senectus convallis. ', '2018-02-12', 'Mark Harmon', 9734851276, 'open', '24967JqKdOdYoKk', 4),
('Jessica Alba is upset about…', 'Lorem ipsum dolor sit amet consectetur adipiscing elit nascetur cras pretium molestie, odio et dictumst facilisi quisque venenatis mollis a vivamus montes purus, egestas cursus hac sollicitudin netus vel eget curabitur senectus convallis. ', '2018-02-23', 'Jessica Alba', 3329495967, 'in progress', '24967JqKdOdYoKk', 4),
('Owen Wilson is upset about…', 'Lorem ipsum dolor sit amet consectetur adipiscing elit nascetur cras pretium molestie, odio et dictumst facilisi quisque venenatis mollis a vivamus montes purus, egestas cursus hac sollicitudin netus vel eget curabitur senectus convallis. ', '2018-02-17', 'Owen Wilson', 9509143040, 'open', '90712RqQdImZpIl', 7),
('Toby Keith is upset about…', 'Lorem ipsum dolor sit amet consectetur adipiscing elit nascetur cras pretium molestie, odio et dictumst facilisi quisque venenatis mollis a vivamus montes purus, egestas cursus hac sollicitudin netus vel eget curabitur senectus convallis. ', '2018-02-10', 'Toby Keith', 7833627907, 'in progress', '90712RqQdImZpIl', 7),
('Lindsay Lohan is upset about…', 'Lorem ipsum dolor sit amet consectetur adipiscing elit nascetur cras pretium molestie, odio et dictumst facilisi quisque venenatis mollis a vivamus montes purus, egestas cursus hac sollicitudin netus vel eget curabitur senectus convallis. ', '2018-02-16', 'Lindsay Lohan', 1866760669, 'closed', '90712RqQdImZpIl', 7),
('Larry David is upset about…', 'Lorem ipsum dolor sit amet consectetur adipiscing elit nascetur cras pretium molestie, odio et dictumst facilisi quisque venenatis mollis a vivamus montes purus, egestas cursus hac sollicitudin netus vel eget curabitur senectus convallis. ', '2018-02-11', 'Larry David', 8300065650, 'in progress', '45302XnWvTbRdXt', 10),
('Chace Crawford is upset about…', 'Lorem ipsum dolor sit amet consectetur adipiscing elit nascetur cras pretium molestie, odio et dictumst facilisi quisque venenatis mollis a vivamus montes purus, egestas cursus hac sollicitudin netus vel eget curabitur senectus convallis. ', '2018-02-15', 'Chace Crawford', 6962649018, 'open', '45302XnWvTbRdXt', 10),
('Mark Harmon is upset about…', 'Lorem ipsum dolor sit amet consectetur adipiscing elit nascetur cras pretium molestie, odio et dictumst facilisi quisque venenatis mollis a vivamus montes purus, egestas cursus hac sollicitudin netus vel eget curabitur senectus convallis. ', '2018-02-13', 'Mark Harmon', 2021640097, 'closed', '45302XnWvTbRdXt', 10)
;

INSERT INTO payment(date, tenant_id, property_id, amount, method)
VALUES ('2018-02-4', '92077MxCcJqOnWv', 1, 1200, 'Paypal'),
('2018-02-12', '92077MxCcJqOnWv', 1, 1200, 'Credit Card'),
('2018-02-17', '24967JqKdOdYoKk', 4, 1200, 'Check'),
('2018-02-19', '24967JqKdOdYoKk', 4, 1100, 'Paypal'),
('2018-02-13', '24967JqKdOdYoKk', 7, 1100, 'Credit Card'),
('2018-02-21', '45302XnWvTbRdXt', 7, 800, 'Check'),
('2018-02-14', '45302XnWvTbRdXt', 7, 800, 'Paypal'),
('2018-02-05', '53357FkZjScKvMu', 10, 800, 'Credit Card'),
('2018-02-15', '53357FkZjScKvMu', 10, 1000, 'Check'),
('2018-02-22', '53357FkZjScKvMu', 10, 1000, 'Paypal')
;

