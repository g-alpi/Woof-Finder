package com.react.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Student {
	private @Id @GeneratedValue(strategy = GenerationType.IDENTITY)int id;
	private String name;
	private String surname;
	private String mail;
	private String type;
	public Student(int id, String name, String surname, String mail, String type) {
		this.id = id;
		this.name = name;
		this.surname = surname;
		this.mail = mail;
		this.type = type;
	}

	public Student() {
	}
	
}
