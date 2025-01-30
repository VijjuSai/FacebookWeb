package com.wk8.admin;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;



@RestController
public class AdminController {
	@Autowired
	AdminImpl impl;
	
	
	@GetMapping("/login")
	public Admin loginVerfiy(String email,String password) {
		Admin verify= impl.login(email);
		if(verify.getPassword().equalsIgnoreCase(password)) {
			return verify;

	}
		return null;
		
	
	}
	
	@GetMapping("/logout")
	public String adminlogout() {
		return "Logout successfully";
	}
	
	@GetMapping("/getAdminDet")
	public List<Admin> getAllUsers() {
		return impl.getAllUser();
	}
	@GetMapping("/adminProfile")
	public List<Admin> getYourProfile(String email) {
		return impl.getContactWithType(email);
	}
	
	

}
