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

		String query = "select * from pets";

		List<Map<String, Object>> results = jdbcTemplate.queryForList(query);

		return results;
	}
	@GetMapping("/filters")
	public List<Map<String, Object>> getAllFilters(){

		String query = "select * from pets";

		List<Map<String, Object>> results = jdbcTemplate.queryForList(query);

		return results;
	}
	
}
