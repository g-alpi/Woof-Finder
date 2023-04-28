package com.wooffinder.controllers;

import org.json.JSONObject;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerDB {
	
	@CrossOrigin(origins = "http://127.0.0.1:5500")
	@PostMapping("/login")

	public ResponseEntity<String> ejemplo(@RequestBody String mensaje) {
        System.out.println("Mensaje recibido desde el cliente: " + mensaje);
        // Aquí puedes hacer lo que quieras con el mensaje recibido
        
        JSONObject jsonObject = new JSONObject(mensaje);
        String username = jsonObject.getString("username_db");
        String rol = "Estandar";
        String email = jsonObject.getString("email_db");
        String user_password = jsonObject.getString("user_password_db");
        String phone = jsonObject.getString("phone_db");
        String address = jsonObject.getString("address_db");
        
        String response = "0";
        
        DriverManagerDataSource dataSource = new DriverManagerDataSource();
        
        dataSource.setUrl("jdbc:mysql://localhost:3306/woof_finder");
        dataSource.setUsername("woof");
        dataSource.setPassword("woof");
        
        JdbcTemplate jdbcTemplate = new JdbcTemplate(dataSource);
        
        String sql = "INSERT INTO Users (username, roles, email, user_password, phone, address) VALUES (?, ?, ?,?,?,?)";
        jdbcTemplate.update(sql, username, rol, email, user_password, phone, address);
        
        return ResponseEntity.ok(response);
    }
}

