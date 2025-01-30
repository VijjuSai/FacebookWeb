package com.micro;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.stereotype.Service;




@Service
public class UsersService {
		
	@Autowired
	UsersRepo repo;
	public Users  add(Users Userss) {
		return repo.save(Userss);
	}
	
	public void registerUser(String name,String email,String password,String phone,String gender) {
		Users u1=Users.builder().name(name).email(email).password(password)
				.gender(gender).phone(phone).report(0).build();
		repo.save(u1);
	}
	
	public void registerUser1(int id,String name,String email,String password,String phone,String gender) {
		Users u1=Users.builder().id(id).name(name).email(email).password(password)
				.gender(gender).phone(phone).report(0).build();
		repo.save(u1);
	}
	
	public void updateUserReportIncremeant(int id,String name,String email,String password,String phone,String gender,int report) {
		Users u1=Users.builder().id(id).name(name).email(email).password(password)
				.gender(gender).phone(phone).report(report).build();
		repo.save(u1);
	}
	
	
	
	public Users deleteUsers(Users Userss) {
		repo.delete(Userss);
		return (Userss);
	}
	public void deletebyID(int id) {
		repo.deleteById(id);
	}
	
	public Users login(String email) {
		   Users sample = new Users();
			sample.setEmail(email);

			ExampleMatcher exampleMatcher = ExampleMatcher.matching()
					.withMatcher("email", ExampleMatcher.GenericPropertyMatchers.exact())
					.withIgnorePaths("report", "name", "phone","gender","password","id");
			
			Example<Users> example = Example.of(sample, exampleMatcher);
			
			Optional<Users> contacts = repo.findOne(example);
			return contacts.get();
			
				
	}
	
	
	public List<Users> getAllUser(){
		return repo.findAll();
	}
	public Users updatePswsd(String email) {
		   Users sample = new Users();
			sample.setEmail(email);
			//sample.setPassword(password);
			ExampleMatcher exampleMatcher = ExampleMatcher.matching()
					.withMatcher("email", ExampleMatcher.GenericPropertyMatchers.exact())
					.withIgnorePaths("report", "name", "phone","gender","password","id");
			
			Example<Users> example = Example.of(sample, exampleMatcher);
			Optional<Users> z=repo.findOne(example);
			return z.get();
	}
	
	public Users updatePswsd1(int id) {
		   Users sample = new Users();
			sample.setId(id);
			//sample.setPassword(password); //it is like where condition in SQL 
			ExampleMatcher exampleMatcher = ExampleMatcher.matching()
					.withMatcher("id", ExampleMatcher.GenericPropertyMatchers.exact())
					.withIgnorePaths("report", "name", "phone","gender","password","email");
			
			Example<Users> example = Example.of(sample, exampleMatcher);
			Optional<Users> z=repo.findOne(example);
			return z.get();
	}
		public List<Users> getContactWithType(String email) 
		{
				
				//Step 1 : sample a object, which is like your requirement
			Users sample = new Users();
				sample.setEmail(email);
				
				//Step 2 : Where clause - condition
				ExampleMatcher exampleMatcher = ExampleMatcher.matching()
						.withMatcher("email", ExampleMatcher.GenericPropertyMatchers.exact())
						.withIgnorePaths("gender", "name", "phone","report","password","id");
				
				//step 3 : combine the sample object with the where clause
				Example<Users> example = Example.of(sample, exampleMatcher);
				
				//step 4 : findAll based on the example
				List<Users> contacts = repo.findAll(example);
			
				return contacts;
		}

		public Optional<Users> findbyIdUSer(int id) {
			
			return repo.findById(id);
		}
		
		
	}
