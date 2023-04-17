package com.react.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.react.demo.model.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student, Integer> {
	
	@Query(value="DESCRIBE student",
			nativeQuery = true)
	String [] getColumNames();	
	
	@Query(value = "SELECT DISTINCT type FROM student",
			nativeQuery = true)
	String[] getAllTypes();

}
