package com.wk8.admin;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.stereotype.Service;

@Service
public class AdminImpl {
	@Autowired
	AdminRepo repo;
	
	public Admin login(String email) {
		   Admin sample = new Admin();
			sample.setEmail(email);

			ExampleMatcher exampleMatcher = ExampleMatcher.matching()
					.withMatcher("email", ExampleMatcher.GenericPropertyMatchers.exact())
					.withIgnorePaths("id", "name", "phone","password");
			
			Example<Admin> example = Example.of(sample, exampleMatcher);
			
			
			
			Optional<Admin> contacts = repo.findOne(example);
			return contacts.get();
			}

	public List<Admin> getAllUser(){
		return repo.findAll();
	}
	
	public List<Admin> getContactWithType(String email) {
		
		//Step 1 : sample a object, which is like your requirement
	Admin sample = new Admin();
		sample.setEmail(email);
		
		//Step 2 : Where clause - condition
		ExampleMatcher exampleMatcher = ExampleMatcher.matching()
				.withMatcher("email", ExampleMatcher.GenericPropertyMatchers.exact())
				.withIgnorePaths("name", "phone","password","id");
		
		//step 3 : combine the sample object with the where clause
		Example<Admin> example = Example.of(sample, exampleMatcher);
		
		//step 4 : findAll based on the example
		List<Admin> contacts = repo.findAll(example);
	
		return contacts;
	}

	
	
	
}

