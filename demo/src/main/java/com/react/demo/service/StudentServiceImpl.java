package com.react.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.react.demo.model.Student;
import com.react.demo.repository.StudentRepository;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class StudentServiceImpl implements StudentService {

	@Autowired
	private StudentRepository studentRepository;
	
	
	public Student saveStudent(Student student) {
		return studentRepository.save(student);
	}


	@Override
	public Optional<Student> getStudentById(int id) {
		return studentRepository.findById(id);
	}


	@Override
	public List<Student> getAllStudents() {
		return studentRepository.findAll();
	}


	@Override
	public String[] getColumNames() {
		return studentRepository.getColumNames();
	}


	@Override
	public String[] getAllTypes() {
		return studentRepository.getAllTypes();
	}


	@Override
	public String login(String username, String paswd) {
		// TODO Auto-generated method stub
		return null;
	}
	
	
	
	

	
}
