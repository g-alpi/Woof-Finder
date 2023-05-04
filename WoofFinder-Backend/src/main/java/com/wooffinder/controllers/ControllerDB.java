package com.wooffinder.controllers;

import java.util.*;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

import org.json.JSONObject;

import org.springframework.jdbc.core.JdbcTemplate;


@RestController
public class ControllerDB {

	@CrossOrigin(origins = "http://localhost:5173")
	@PostMapping("/login")
	public ResponseEntity<String> ejemplo(@RequestBody String mensaje) {

		System.out.println("Mensaje recibido desde el cliente: " + mensaje);

		JSONObject jsonObject = new JSONObject(mensaje);

		String page_request = jsonObject.getString("page_request");
		String roles = "Estandar";

		String response = "0";

		DriverManagerDataSource dataSource = new DriverManagerDataSource();

		dataSource.setUrl("jdbc:mysql://localhost:3306/woof_finder");
		dataSource.setUsername("woof");
		dataSource.setPassword("woof");

		JdbcTemplate jdbcTemplate = new JdbcTemplate(dataSource);

		System.out.println(page_request);

		
		JSONObject json = new JSONObject();
		
		if (page_request.equals("login")) {
			String email_login = jsonObject.getString("email_db");
			String user_password_login = jsonObject.getString("user_password_db");

			String sql_email_login = "SELECT COUNT(*) FROM Users WHERE email = ?";
			int count_email_login = jdbcTemplate.queryForObject(sql_email_login, Integer.class, email_login);

			System.out.println(page_request);
			if (count_email_login > 0) {
				System.out.println("El email " + email_login + " ya existe en la tabla usuarios");

				String password = jdbcTemplate.queryForObject("SELECT user_password FROM Users WHERE email = ?",
						String.class, email_login);
				Integer id = jdbcTemplate.queryForObject("SELECT users_id FROM Users WHERE email = ?",
						Integer.class, email_login);
				if (password.equals(user_password_login)) {
					json.put("id", id);
					json.put("response", "correct password");
					response = json.toString();
				} else {
					json.put("response", "incorrect password");
					response = json.toString();
				}

			} else {
				json.put("response", "Esta cuenta no existe");
				response = json.toString();
			}
		}

		if (page_request.equals("register")) {
			String username_register = jsonObject.getString("username_db");
			String email_register = jsonObject.getString("email_db");
			String user_password_register = jsonObject.getString("user_password_db");
			String phone_register = jsonObject.getString("phone_db");
			String address_register = jsonObject.getString("address_db");

			String sql_email_register = "SELECT COUNT(*) FROM Users WHERE email = ?";
			int count_email_register = jdbcTemplate.queryForObject(sql_email_register, Integer.class, email_register);

			if (count_email_register > 0) {
				System.out.println("El email " + email_register + " ya existe en la tabla usuarios");
				json.put("response", "este email ya esta registrado");
				response = json.toString();
			} else {
				System.out.println("El email " + email_register + " no existe en la tabla usuarios");
				String sql_registro = "INSERT INTO Users (username, roles, email, user_password, phone, adrress) VALUES (?, ?, ?,?,?,?)";
				jdbcTemplate.update(sql_registro, username_register, roles, email_register, user_password_register,
						phone_register, address_register);
				json.put("response", "registro exitoso");
				response = json.toString();
			}
		}
		
		if (page_request.equals("editar")) {
			String username_editar = jsonObject.getString("username_db");
			String email_editar = jsonObject.getString("email_db");
			String user_password_editar = jsonObject.getString("user_password_db");
			String phone_editar = jsonObject.getString("phone_db");
			String address_editar = jsonObject.getString("address_db");
			String id_editar = jsonObject.getString("id_db");

			String sql_editar = "UPDATE Users SET username=?,roles=?,email=?,user_password=?,phone=?,adrress=? WHERE users_id=?";
			jdbcTemplate.update(sql_editar, username_editar,roles,email_editar,user_password_editar,phone_editar,address_editar, id_editar);

			json.put("response", "cambio exitoso");
			response = json.toString();
			System.out.println("cambio exitoso");
			
		}
		
		if (page_request.equals("mostrar")) {
		    String id_mostrar = jsonObject.getString("id_db");
			
			final String QUERY="SELECT * FROM USERS;";
			List<Map<String,Object>> results=jdbcTemplate.queryForList(QUERY);
			
			for (int i=0;i<results.size();i++)
			{
				System.out.println(results.get(i).get("users_id"));
				if (id_mostrar.equals(results.get(i).get("users_id").toString()))
				{					
					json.put("username", results.get(i).get("username") );
					json.put("email", results.get(i).get("email") );
					json.put("user_password", results.get(i).get("user_password") );
					json.put("phone", results.get(i).get("phone") );
					json.put("address", results.get(i).get("adrress") );
					json.put("response", "muestra exitosa");
					response = json.toString();
				}
			}
		}

		System.out.println(response);
		return ResponseEntity.ok(response);
	}
}
