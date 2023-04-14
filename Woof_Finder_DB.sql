DROP DATABASE IF EXISTS woof_finder;
CREATE DATABASE IF NOT EXISTS woof_finder;
USE woof_finder;

CREATE TABLE IF NOT EXISTS Users(
	users_id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	username VARCHAR (255) NOT NULL,
	roles ENUM ("Administration", "Estandar", "Organization"),
	email VARCHAR (255) UNIQUE NOT NULL,
	user_password CHAR(60) NOT NULL,
	phone VARCHAR (20) NOT NULL,
	adrress VARCHAR (255)
);

CREATE TABLE IF NOT EXISTS Organizations(
	organizations_id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	org_name VARCHAR (255) NOT NULL,
	org_description TEXT NOT NULL,
	org_email VARCHAR (255) UNIQUE NOT NULL,
	user_password VARCHAR (128) NOT NULL,
	org_phone VARCHAR (20) NOT NULL,
	org_address VARCHAR (255),
	users_org_id INTEGER UNSIGNED UNIQUE NOT NULL,
	FOREIGN KEY (users_org_id) 
		REFERENCES users(users_id)
);

CREATE TABLE IF NOT EXISTS Species(
	species_id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	animal_type ENUM ("Perro", "Gato")
);

CREATE TABLE IF NOT EXISTS Pets(
	pets_id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	pet_name VARCHAR (255) NOT NULL,
	age INTEGER NOT NULL,
	genre ENUM ("Hembra", "Macho"),
	size ENUM ("Pequeño", "Mediano", "Grande"),
	illness VARCHAR (255),
	pet_description TEXT,
	pet_status ENUM ("Adoptado", "En adopcion", "En acogida"),
	users_pets_id INTEGER,
	FOREIGN KEY (users_pets_id) REFERENCES Users(users_id),
	species_pet_id INTEGER UNSIGNED NOT NULL,
	FOREIGN KEY (species_pet_id) 
		REFERENCES Species(species_id)
);

CREATE TABLE IF NOT EXISTS Pets_Org(
	pets_org_id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    org_pets_org_id INTEGER UNIQUE NOT NULL,
	FOREIGN KEY (org_pets_org_id) 
		REFERENCES Organizations(organizations_id),
	pets_pets_org_id INTEGER UNIQUE NOT NULL,
	FOREIGN KEY (pets_pets_org_id) 
		REFERENCES Pets(pets_id)
);

CREATE TABLE IF NOT EXISTS Breed(
	breed_id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	breed_type VARCHAR (255),
	species_breed_id INTEGER UNSIGNED NOT NULL,
	FOREIGN KEY (species_breed_id) 
		REFERENCES Species(species_id)
);

CREATE TABLE IF NOT EXISTS Vaccines(
	vaccines_id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	vac_name VARCHAR (255),
	admin_date DATE,
	next_admin_date DATE,
	category VARCHAR (20),
	species_vac_id INTEGER UNSIGNED NOT NULL,
	FOREIGN KEY (species_vac_id) 
		REFERENCES Species(species_id)
);

-- Users

INSERT INTO Users (username, roles, email, user_password, phone, adrress)
VALUES
("maria123", "Administracion", "maria123@gmail.com", "password123", "555-1234", "123 Main St"),
("juan456", "Estandar", "juan456@yahoo.com", "password456", "555-5678", "456 Oak Ave"),
("carlos789", "Organization", "carlos789@hotmail.com", "password789", "555-9012", "789 Maple Ln");

INSERT INTO Organizations (org_name, org_description, org_email, user_password, org_phone, org_address, users_org_id)
VALUES
("Woof Adoption", "Organización dedicada a la adopción de perros", "woofadoption@gmail.com", "mypassword", "555-4321", "Calle A, Ciudad", 1),
("Gato Feliz", "Organización dedicada a la adopción de gatos", "gatofeliz@gmail.com", "mypassword", "555-8765", "Calle B, Ciudad", 2);

INSERT INTO Species (animal_type)
VALUES
("Perro"),
("Gato");

INSERT INTO Pets (pet_name, age, genre, size, illness, pet_description, pet_status, users_pets_id, species_pet_id)
VALUES
("Fido", 2, "Macho", "Mediano", NULL, "Fido es un perro muy amigable y activo", "En adopcion", NULL, 1),
("Max", 4, "Macho", "Grande", "Ninguna", "Max es un perro tranquilo y le gusta dormir", "En adopcion", NULL, 1),
("Luna", 1, "Hembra", "Pequeño", NULL, "Luna es una perrita muy cariñosa y juguetona", "En acogida", 2, 1),
("Negro", 3, "Macho", "Mediano", "Problemas de piel", "Negro es un perro muy tranquilo y le gusta estar cerca de las personas", "En adopcion", NULL, 1),
("Mishu", 1, "Hembra", "Pequeño", NULL, "Mishu es una gatita muy juguetona y curiosa", "En adopcion", NULL, 2),
("Garfield", 5, "Macho", "Grande", "Sobrepeso", "Garfield es un gato muy tranquilo y le gusta dormir", "Adoptado", 2, 2);

INSERT INTO Pets_Org (org_pets_org_id, pets_pets_org_id)
VALUES
(1, 1),
(2, 2),
(2, 3),
(2, 4),
(2, 5),
(2, 6);

INSERT INTO Breed (breed_type, species_breed_id)
VALUES
("Labrador", 1),
("Pitbull", 1),
("Siamese", 2),
("Persian", 2);

INSERT INTO Vaccines (vac_name, admin_date, next_admin_date, category, species_vac_id) VALUES
("Vacuna contra el parvovirus", "2022-01-01", "2023-01-01", "General", 1),
("Vacuna contra la leptospirosis", "2022-01-01", "2023-01-01", "General", 1),
("Vacuna contra la rabia", "2022-01-01", "2023-01-01", "Obligatoria", 1),
("Vacuna contra el moquillo", "2022-01-01", "2023-01-01", "General", 1),
("Vacuna contra la tos de las perreras", "2022-01-01", "2023-01-01", "General", 1),
("Vacuna contra la panleucopenia felina", "2022-01-01", "2023-01-01", "General", 2),
("Vacuna contra la rinotraqueitis felina", "2022-01-01", "2023-01-01", "General", 2),
("Vacuna contra la calicivirus felino", "2022-01-01", "2023-01-01", "General", 2);