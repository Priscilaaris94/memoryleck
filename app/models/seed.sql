USE my_database;
REPLACE INTO user(uid, name, email, type)
VALUES ('41907LnJvXnVbWd', 'Aaron Carter', 'test226@gmail.co', 'tenant'),
('12374MkOcHmOaFw', 'Alec Baldwin', 'test833@gmail.co', 'landlord'),
('35757OmMbOfFxFf', 'Adele', 'test589@gmail.co', 'tenant'),
('93542UkFjVqQnGv', 'JK Rowling', 'test577@gmail.co', 'landlord'),
('83456GlWwCfEuIm', 'Howard Stern', 'test617@gmail.co', 'tenant'),
('48967IsZnRoYlOd', 'Kevin Hart', 'test972@gmail.co', 'landlord'),
('69372GpDuSoReZa', 'Dr. Phil', 'test663@gmail.co', 'tenant'),
('43145LxGvHiKpBu', 'Taylor Swift', 'test398@gmail.co', 'landlord'),
('60362QsPkLgPtGd', 'Beyonce', 'test364@gmail.co', 'tenant'),
('24128YdVmQgWkAk', 'The Weekend', 'test943@gmail.co', 'landlord'),
('42486SvRgWdExNh', 'Ed Sheeran', 'test169@gmail.co', 'tenant'),
('18305AnOnPwFjSj', 'Conor McGregor', 'test618@gmail.co', 'landlord'),
('70092WsNjBqTdEr', 'Chance the Rapper', 'test890@gmail.co', 'tenant'),
('37493PmBlXmFuCn', 'Skrillex', 'test385@gmail.co', 'landlord'),
('72505RbDjYnTcVa', 'Emma Stone', 'test339@gmail.co', 'tenant'),
('46014OlInMtFbAi', 'Rihanna', 'test504@gmail.co', 'landlord')
;


REPLACE INTO property(address_one, city, state, zip, beds, baths, sqfeet,
			price, status, landlord_id, tenant_id)
VALUES ('349 Peachtree Street', 'Atlanta', 'GA', 30301, 2, 2, 870, 1000, 'occupied', 2, 1),
('925 Peachtree Street', 'Atlanta', 'GA', 30302, 1, 2, 1160, 900, 'vacant', 2, NULL),
('538 Peachtree Street', 'Atlanta', 'GA', 30303, 1, 1, 670, 900, 'vacant', 2, NULL),
('478 Peachtree Street', 'Atlanta', 'GA', 30304, 2, 1, 620, 900, 'occupied', 4, 3),
('843 Peachtree Street', 'Atlanta', 'GA', 30305, 2, 2, 810, 800, 'vacant', 4, NULL),
('238 Peachtree Street', 'Atlanta', 'GA', 30306, 2, 2, 1150, 1100, 'vacant', 4, NULL),
('506 Peachtree Street', 'Atlanta', 'GA', 30307, 2, 2, 1000, 800, 'occupied', 6, 5),
('919 Peachtree Street', 'Atlanta', 'GA', 30308, 2, 1, 670, 900, 'vacant', 6, NULL),
('174 Peachtree Street', 'Atlanta', 'GA', 30309, 2, 1, 810, 1000, 'vacant', 6, NULL),
('180 Peachtree Street', 'Atlanta', 'GA', 30310, 1, 2, 1200, 900, 'occupied', 8, 7),
('281 Peachtree Street', 'Atlanta', 'GA', 30311, 2, 1, 570, 1200, 'occupied', 8, 9),
('466 Peachtree Street', 'Atlanta', 'GA', 30312, 1, 1, 850, 1200, 'vacant', 8, NULL)
;

INSERT INTO request(issue_title, issue_desc, date_started, contact_name, contact_phone, status, logged_by, property_id)
VALUES ('Larry David is upset about…', 'Lorem ipsum dolor sit amet consectetur adipiscing elit nascetur cras pretium molestie, odio et dictumst facilisi quisque venenatis mollis a vivamus montes purus, egestas cursus hac sollicitudin netus vel eget curabitur senectus convallis. ', '2018-02-24', 'Larry David', 7764324055, 'open', 1, 1),
('Chace Crawford is upset about…', 'Lorem ipsum dolor sit amet consectetur adipiscing elit nascetur cras pretium molestie, odio et dictumst facilisi quisque venenatis mollis a vivamus montes purus, egestas cursus hac sollicitudin netus vel eget curabitur senectus convallis. ', '2018-02-13', 'Chace Crawford', 8863832717, 'in progress', 1, 1),
('Mark Harmon is upset about…', 'Lorem ipsum dolor sit amet consectetur adipiscing elit nascetur cras pretium molestie, odio et dictumst facilisi quisque venenatis mollis a vivamus montes purus, egestas cursus hac sollicitudin netus vel eget curabitur senectus convallis. ', '2018-02-24', 'Mark Harmon', 5962434434, 'open', 3, 4),
('Jessica Alba is upset about…', 'Lorem ipsum dolor sit amet consectetur adipiscing elit nascetur cras pretium molestie, odio et dictumst facilisi quisque venenatis mollis a vivamus montes purus, egestas cursus hac sollicitudin netus vel eget curabitur senectus convallis. ', '2018-02-12', 'Jessica Alba', 2246277780, 'in progress', 3, 4),
('Owen Wilson is upset about…', 'Lorem ipsum dolor sit amet consectetur adipiscing elit nascetur cras pretium molestie, odio et dictumst facilisi quisque venenatis mollis a vivamus montes purus, egestas cursus hac sollicitudin netus vel eget curabitur senectus convallis. ', '2018-02-11', 'Owen Wilson', 8239936770, 'open', 5, 7),
('Toby Keith is upset about…', 'Lorem ipsum dolor sit amet consectetur adipiscing elit nascetur cras pretium molestie, odio et dictumst facilisi quisque venenatis mollis a vivamus montes purus, egestas cursus hac sollicitudin netus vel eget curabitur senectus convallis. ', '2018-02-10', 'Toby Keith', 6567648922, 'in progress', 5, 7),
('Lindsay Lohan is upset about…', 'Lorem ipsum dolor sit amet consectetur adipiscing elit nascetur cras pretium molestie, odio et dictumst facilisi quisque venenatis mollis a vivamus montes purus, egestas cursus hac sollicitudin netus vel eget curabitur senectus convallis. ', '2018-02-13', 'Lindsay Lohan', 5114303419, 'closed', 5, 7),
('Larry David is upset about…', 'Lorem ipsum dolor sit amet consectetur adipiscing elit nascetur cras pretium molestie, odio et dictumst facilisi quisque venenatis mollis a vivamus montes purus, egestas cursus hac sollicitudin netus vel eget curabitur senectus convallis. ', '2018-02-20', 'Larry David', 8135464227, 'in progress', 7, 10),
('Chace Crawford is upset about…', 'Lorem ipsum dolor sit amet consectetur adipiscing elit nascetur cras pretium molestie, odio et dictumst facilisi quisque venenatis mollis a vivamus montes purus, egestas cursus hac sollicitudin netus vel eget curabitur senectus convallis. ', '2018-02-9', 'Chace Crawford', 7860868953, 'open', 7, 10),
('Mark Harmon is upset about…', 'Lorem ipsum dolor sit amet consectetur adipiscing elit nascetur cras pretium molestie, odio et dictumst facilisi quisque venenatis mollis a vivamus montes purus, egestas cursus hac sollicitudin netus vel eget curabitur senectus convallis. ', '2018-02-22', 'Mark Harmon', 7650960575, 'closed', 7, 10)
;

INSERT INTO payment(date, tenant_id, property_id, amount, method)
VALUES ('2018-02-9', 1, 1, 900, 'Paypal'),
('2018-02-5', 1, 1, 800, 'Credit Card'),
('2018-02-17', 3, 4, 1200, 'Check'),
('2018-02-22', 3, 4, 1200, 'Paypal'),
('2018-02-18', 5, 7, 1100, 'Credit Card'),
('2018-02-5', 5, 7, 900, 'Check'),
('2018-02-25', 5, 7, 900, 'Paypal'),
('2018-02-10', 7, 10, 1200, 'Credit Card'),
('2018-02-16', 7, 10, 1100, 'Check'),
('2018-02-11', 7, 10, 800, 'Paypal')
;

