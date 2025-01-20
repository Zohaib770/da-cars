
INSERT INTO benutzer (email, passwort, role)
VALUES ('admin@gmail.com', '$2a$10$wWy61t9rwpY6XzXjHtoVe.byVTM79QdEG990m9c7p4AcEHfj69eNe', 'ADMIN');

INSERT INTO kfzaufbereitungpreise (id, dienste, dienste_beschreibung, kleinbus_preis, pkw_preis, van_suv_p_preis) 
VALUES 
('1', 'aussenreinigung', 'aussenreinigung_text', '10.00', '10.00', '10.00'),
('2', 'aussenwaesche', 'aussenwaesche_shampoo', '39.99', '19.99', '29.99'),
('3', 'lackpflege', 'lackpflege_politur', '69.99', '49.99', '59.99'),
('4', 'lackpflege', 'lackpflege_schleife', '69.99', '49.99', '59.99'),
('5', 'lackpflege', 'lackpflege_versiegelung', '69.99', '49.99', '59.99'),
('6', 'lackpflege', 'lackpflege_24', '69.99', '49.99', '59.99'),
('7', 'lackpflege', 'lackpflege_36', '69.99', '49.99', '59.99'),
('8', 'innenreinigung', 'Innenreinigung_standard', '39.99', '19.99', '29.99'),
('9', 'innenreinigung', 'Innenreinigung_intensive', '39.99', '19.99', '29.99'),
('10', 'stoff_textil', 'stoff_textil', '44.99', '24.99', '34.99'),
('11', 'motorwaesche', 'motorwaesche_text', '49.99', '29.99', '39.99'),
('12', 'komplett_aufbereitung_inkl_motor', 'komplett_aufbereitung_inkl_motor', '139.99', '99.99', '119.99'),
('13', 'glasversiegelung', 'glasversiegelung_text', '69.99', '49.99', '59.99');

