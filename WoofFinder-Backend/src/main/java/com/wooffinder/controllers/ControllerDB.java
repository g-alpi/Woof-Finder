package com.wooffinder.controllers;


import java.util.*;


import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.web.bind.annotation.*;

import org.json.JSONObject;

import org.springframework.jdbc.core.JdbcTemplate;

import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.context.annotation.Bean;
import javax.sql.DataSource;



@RestController
public class ControllerDB {
	
	@CrossOrigin(origins = "http://127.0.0.1:5500")
	@PostMapping("/login")

	public ResponseEntity<String> ejemplo(@RequestBody String mensaje) {
	//public void recibirMensaje(@RequestBody String mensaje) {
        System.out.println("Mensaje recibido desde el cliente: " + mensaje);
        // Aquí puedes hacer lo que quieras con el mensaje recibido
        
        JSONObject jsonObject = new JSONObject(mensaje);
        String username = jsonObject.getString("username_db");
        String roles = "Estandar";
        String email = jsonObject.getString("email_db");
        String user_password = jsonObject.getString("user_password_db");
        String phone = jsonObject.getString("phone_db");
        String address = jsonObject.getString("address_db");
        
        
        String nombre="john";
        
        String respuesta = "0";
        //System.out.println(jsonObject.getClass().getName());
        //System.out.println(valor.getClass().getName());
        
        
        DriverManagerDataSource dataSource = new DriverManagerDataSource();
        
        dataSource.setUrl("jdbc:mysql://localhost:3306/woof_finder9");
        dataSource.setUsername("root");
        dataSource.setPassword("admin");
        
        JdbcTemplate jdbcTemplate = new JdbcTemplate(dataSource);
        
        String sql = "INSERT INTO Users (username, roles, email, user_password, phone, address) VALUES (?, ?, ?,?,?,?)";
        jdbcTemplate.update(sql, username, roles, email, user_password, phone, address);
        
        return ResponseEntity.ok(respuesta);
        
        

    }
}

