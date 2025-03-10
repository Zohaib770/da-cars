
INSERT INTO benutzer (email, passwort, role)
VALUES ('admin@gmail.com', '$2a$10$wWy61t9rwpY6XzXjHtoVe.byVTM79QdEG990m9c7p4AcEHfj69eNe', 'ADMIN');

INSERT INTO kfzaufbereitungpreise (id, autopflege, kleinbus_preis, pkw_preis, van_suv_preis) 
VALUES 
('1', 'aussenreinigung_nasswaesche', '1', '14.99', '17.99'),
('2', 'aussenreinigung_felgen', '2', '19.99', '24.99'),
('3', 'aussenreinigung_motor', '3', '29.99', '34.99'),
('4', 'aussenwaesche_shampoo', '4', '19.99', '29.99'),
('5', 'Innenreinigung_standard_text', '5', '19.99', '29.99'),
('6', 'Innenreinigung_intensive_text', '6', '39.99', '49.99'),
('7', 'lackpflege_politur', '7', '7', '59.99'),
('8', 'lackpflege_schleife', '8', '49.99', '59.99'),
('9', 'lackpflege_versiegelung', '9', '49.99', '59.99'),
('10', 'lackpflege_24', '10', '49.99', '59.99'),
('11', 'lackpflege_36', '11', '59.99', '69.99'),
('12', 'stoff_textil', '12', '24.99', '34.99'),
('13', 'motorwaesche_text', '13', '29.99', '39.99'),
('14', 'scheinwerfer_reparatur_text', '14', '29.99', '39.99'),
('15', 'glasversiegelung_text', '15', '49.99', '59.99'),
('16', 'ozonbehandlung_text', '16', '49.99', '59.99'),
('17', 'polsterreparatur_text', '17', '49.99', '59.99'),
('18', 'komplett_aufbereitung_text', '18', '49.99', '59.99');
