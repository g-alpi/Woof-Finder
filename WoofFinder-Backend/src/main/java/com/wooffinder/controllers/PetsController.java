package com.wooffinder.controllers;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/pet")
public class PetsController {
	@Autowired
	JdbcTemplate jdbcTemplate;

	@GetMapping("/all")
	@CrossOrigin
	public List<Map<String, Object>> getAllPets() {

		String query = "select pets_id, pet_name, age, genre, size, illness, pet_description, pet_status, users_pets_id, breed.breed_type, species.animal_type from pets\r\n"
				+ "inner join breed on pets.breed_id = breed.breed_id\r\n"
				+ "inner join species on pets.species_pet_id = species.species_id\r\n"
				+ "where pet_status!= \"Adoptado\";";

		List<Map<String, Object>> results = jdbcTemplate.queryForList(query);

		return results;
	}
	@CrossOrigin
	@GetMapping("/species")
	public List<Map<String, Object>> getAllSpecies(){

		String query = "select * from Species";

		List<Map<String, Object>> results = jdbcTemplate.queryForList(query);

		return results;
	}
	
	@CrossOrigin
	@GetMapping("/breeds")
	public List<Map<String, Object>> getAllBreeds(){

		String query = "select distinct breed_type, species.animal_type from breed\r\n"
				+ "inner join species on breed.species_breed_id = species.species_id\r\n"
				+ "inner join pets on pets.breed_id = breed.breed_id;";

		List<Map<String, Object>> results = jdbcTemplate.queryForList(query);

		return results;
	}	
	
}
