CREATE TABLE benutzer (
    id BIGSERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    passwort VARCHAR(255) NOT NULL,
    role VARCHAR(50) NOT NULL
);

INSERT INTO benutzer (email, passwort, role)
VALUES ('admin@gmail.com', 'admin', 'ADMIN')
ON CONFLICT (email) DO NOTHING;

IF NOT EXISTS (SELECT 1 FROM benutzer WHERE email = 'admin@gmail.com')
BEGIN
    INSERT INTO benutzer (email, password, role)
    VALUES ('admin@gmail.com', 'admin', 'ADMIN');
END;
