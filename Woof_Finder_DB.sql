DROP DATABASE IF EXISTS woof_finder;
CREATE DATABASE IF NOT EXISTS woof_finder;
USE woof_finder;

CREATE TABLE IF NOT EXISTS Users(
	users_id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	username VARCHAR (255) NOT NULL,
	roles ENUM ("Administracion", "Estandar", "Organization"),
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
CREATE TABLE IF NOT EXISTS Breed(
	breed_id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	breed_type VARCHAR (255),
	species_breed_id INTEGER UNSIGNED,
	FOREIGN KEY (species_breed_id) 
		REFERENCES Species(species_id)
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
	users_pets_id INTEGER UNSIGNED,
	breed_id INTEGER unsigned,
    avatar_path VARCHAR(255),
	FOREIGN KEY (users_pets_id) REFERENCES Users(users_id),
	species_pet_id INTEGER UNSIGNED NOT NULL,
	FOREIGN KEY (species_pet_id) 
		REFERENCES Species(species_id),
    FOREIGN KEY (breed_id) 
		REFERENCES Breed(breed_id)	
);

CREATE TABLE IF NOT EXISTS Pets_Org(
	pets_org_id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    org_pets_org_id INTEGER UNSIGNED NOT NULL,
	FOREIGN KEY (org_pets_org_id) 
		REFERENCES Organizations(organizations_id),
	pets_pets_org_id INTEGER UNSIGNED,
	FOREIGN KEY (pets_pets_org_id) 
		REFERENCES Pets(pets_id)
);


CREATE TABLE IF NOT EXISTS Vaccines(
	vaccines_id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	vac_name VARCHAR (255),
	admin_date DATE,
	next_admin_date DATE,
	category VARCHAR (20),
	species_vac_id INTEGER UNSIGNED,
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

INSERT INTO Breed (breed_type, species_breed_id)
VALUES
("Labrador", 1),
("Collie", 1),
("Doge",1),
("Chihuahua",1),
("Siamese", 2),
("Persian", 2);

INSERT INTO Pets (pet_name, age, genre, size,avatar_path, illness, pet_description, pet_status, users_pets_id, species_pet_id,breed_id)
VALUES

("Fido", 2, "Macho", "Mediano", "fido.jpg", NULL, "Fido es un perro muy amigable y activo. Le encanta jugar a la pelota y salir a correr en el parque. También es muy cariñoso y le gusta estar cerca de las personas. Es un compañero ideal para alguien que busque un perro activo y leal.", "En adopcion", NULL, 1, 1),
("Max", 4, "Macho", "Grande", "max.jpg", "Ninguna", "Max es un perro tranquilo y le gusta dormir. Disfruta de los paseos al aire libre y es muy obediente. Es un compañero fiel y protector, ideal para una familia con niños.", "En adopcion", NULL, 1, 2),
("Luna", 1, "Hembra", "Pequeño", "luna.jpg", NULL, "Luna es una perrita muy cariñosa y juguetona. Le encanta jugar con peluches y dar largas caminatas. Es un compañera ideal para alguien que busque una perrita activa y divertida.", "En adopcion", 2, 1, 1),
("Negro", 3, "Macho", "Mediano", "negro.jpg", "Problemas de piel", "Negro es un perro muy tranquilo y le gusta estar cerca de las personas. Le encanta tomar el sol y recibir caricias. Es un compañero ideal para alguien que busque un perro cariñoso y relajado.", "En adopcion", NULL, 1, 2),
("Mishu", 1, "Hembra", "Pequeño", "mishu.jpg", NULL, "Mishu es una gatita muy juguetona y curiosa. Le encanta explorar su entorno y jugar con todo lo que encuentra. Es un compañera ideal para alguien que busque una gata activa y entretenida.", "En adopcion", NULL, 2, 5),
("Garfield", 5, "Macho", "Grande", "garfield.jpg", "Sobrepeso", "Garfield es un gato muy tranquilo y le gusta dormir. Es muy cariñoso y le gusta que le acaricien la barriga. Es un compañero ideal para alguien que busque un gato tranquilo y amoroso.", "En adopcion", 2, 2, 6),
("Simba", 0.5, "Hembra", "pequeño", "simba.jpg", "Sobrepeso", "Simba es una gata muy tranquila y le gusta dormir. Es muy curiosa y le gusta jugar con juguetes. Es un compañera ideal para alguien que busque una gata joven y divertida.", "En adopcion", 2, 2, 6),
("Doge", 9, "Hembra", "Pequeño","doge.jpg", NULL, "Doge es una perrita muy cariñosa y juguetona. Le encanta correr en el parque y jugar con otros perros. Es muy obediente y aprende rápidamente nuevos trucos. Está vacunada y esterilizada, y está buscando una familia amorosa que le brinde mucho amor y cuidados.", "En adopcion", NULL, 1, 3),
("Dogoberto", 7, "Macho", "Pequeño","dogoberto.jpg", NULL, "Dogoberto es un perrito muy dulce y simpático. Le encanta estar cerca de las personas y recibir cariño. Es muy inteligente y aprende rápidamente nuevos trucos. Está vacunado y esterilizado, y está buscando una familia amorosa que le brinde mucho amor y cuidados.", "En adopcion", NULL, 1, 3);

INSERT INTO Pets_Org (org_pets_org_id, pets_pets_org_id)
VALUES
(1, 1),
(2, 2),
(2, 3),
(2, 4),
(2, 5),
(2, 6);



INSERT INTO Vaccines (vac_name, admin_date, next_admin_date, category, species_vac_id) VALUES
("Vacuna contra el parvovirus", "2022-01-01", "2023-01-01", "General", 1),
("Vacuna contra la leptospirosis", "2022-01-01", "2023-01-01", "General", 1),
("Vacuna contra la rabia", "2022-01-01", "2023-01-01", "Obligatoria", 1),
("Vacuna contra el moquillo", "2022-01-01", "2023-01-01", "General", 1),
("Vacuna contra la tos de las perreras", "2022-01-01", "2023-01-01", "General", 1),
("Vacuna contra la panleucopenia felina", "2022-01-01", "2023-01-01", "General", 2),
("Vacuna contra la rinotraqueitis felina", "2022-01-01", "2023-01-01", "General", 2),
("Vacuna contra la calicivirus felino", "2022-01-01", "2023-01-01", "General", 2);