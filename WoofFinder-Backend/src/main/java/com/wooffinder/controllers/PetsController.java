package com.wooffinder.controllers;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/pet")
public class PetsController {
	@Autowired
	JdbcTemplate jdbcTemplate;

	@GetMapping("/all")
	@CrossOrigin
	public List<Map<String, Object>> getAllPets() {

		String query = "select pets_id, pet_name, age, genre, size,avatar_path, illness, pet_description, pet_status, users_pets_id, breed.breed_type, species.animal_type from pets\r\n"
				+ "inner join breed on pets.breed_id = breed.breed_id\r\n"
				+ "inner join species on pets.species_pet_id = species.species_id\r\n"
				+ "where pet_status!= \"Adoptado\";";

		List<Map<String, Object>> results = jdbcTemplate.queryForList(query);

		return results;
	}

	@CrossOrigin
	@GetMapping("/species")
	public List<Map<String, Object>> getAllSpecies() {

		String query = "select * from Species";

		List<Map<String, Object>> results = jdbcTemplate.queryForList(query);

		return results;
	}

	@CrossOrigin
	@GetMapping("/breeds")
	public List<Map<String, Object>> getAllBreeds() {

		String query = "select distinct breed_id, breed_type, species.animal_type from breed\r\n"
				+ "inner join species on breed.species_breed_id = species.species_id;";

		List<Map<String, Object>> results = jdbcTemplate.queryForList(query);

		return results;
	}

	@CrossOrigin
	@GetMapping("/vaccines")
	public List<Map<String, Object>> getAllvaccines() {

		String query = "select * from vaccines";

		List<Map<String, Object>> results = jdbcTemplate.queryForList(query);

		return results;
	}
	
	@CrossOrigin
	@PostMapping("/adopt")
	public ResponseEntity <String> handleAdopt(@RequestParam("user_id") int user_id, @RequestParam("pets_id") int petsId) {

		try {
			String query = "update Pets \r\n"
					+ "set users_pets_id = "+ user_id + ", pet_status = 'Adoptado'\r\n"
					+ "where pets_id = "+ petsId +" and pet_status = 'En adopcion';";
			jdbcTemplate.update(query);
			
			return ResponseEntity.ok("Adopciòn realizada con exito");
			
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
					.body("No se pudo completar la adopciòn" + e.getMessage());
		}
	
	}
	
	@CrossOrigin
	@PostMapping("/upload")
	public ResponseEntity<String> handleFileUpload(@RequestParam("animalType") int animalType,
			@RequestParam("name") String name, @RequestParam("breed") int breed, @RequestParam("age") int age,
			@RequestParam("genre") String genre, @RequestParam("size") String size,
			@RequestParam("illness") String illness, @RequestParam("description") String description,
			@RequestParam("avatar") MultipartFile avatar) {
		try {
			
			String query = "INSERT INTO Pets (pet_name, age, genre, size,avatar_path, illness, pet_description, pet_status, users_pets_id, species_pet_id,breed_id)\r\n"
					+ "VALUES ('" + name + "', " + age + ", '" + genre + "', '" + size + "','" + avatar.getOriginalFilename()
					+ "','"+illness+"', '"+description+"', \"En adopcion\", NULL,"+animalType+", "+breed+");";
			jdbcTemplate.update(query);
			
			Path path = Paths.get("..\\WoofFinder-Frontend\\public\\images\\" + avatar.getOriginalFilename());
			Files.write(path, avatar.getBytes());
			return ResponseEntity.ok("Archivo subido con éxito");
		} catch (IOException e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
					.body("Error al subir el archivo: " + e.getMessage());
		}
	}

}
