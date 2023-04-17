package com.react.demo.service;

import java.util.List;
import java.util.Optional;

import com.react.demo.model.Student;

public interface StudentService {
	public Student saveStudent(Student student);
	public Optional<Student> getStudentById(int id);
	public List<Student> getAllStudents();
	public String [] getColumNames();
	public String [] getAllTypes();
	public String login(String username, String paswd);
}
