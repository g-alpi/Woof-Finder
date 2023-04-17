package com.react.demo.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.react.demo.model.Student;
import com.react.demo.service.StudentService;

@RestController
@RequestMapping("student")
@CrossOrigin
public class StudentController {
	
	@Autowired
	private StudentService studentService;
	
	@PostMapping("/add")
	public String addStudent(@RequestBody Student student) {
		studentService.saveStudent(student);
		return "New student is added";
	}
	
	@ResponseBody
	@GetMapping("/{id}")
	public Optional<Student> getStudentById(@PathVariable(value = "id") int id) {
		return studentService.getStudentById(id);
	}
	
	@ResponseBody
	@GetMapping("/all")
	public List<Student> getAllStudents() {
		return studentService.getAllStudents();
	}
	@GetMapping("/colums")
	public String[] getColumNames() {
		return studentService.getColumNames();
	}
	
	@GetMapping("/type")
	public String[] getAllTypes() {
		return studentService.getAllTypes();
	}
}
