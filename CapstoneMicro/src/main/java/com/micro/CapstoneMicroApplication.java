package com.micro;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class CapstoneMicroApplication  {
	
	@Autowired
	UsersService impl;

	public static void main(String[] args) {
		SpringApplication.run(CapstoneMicroApplication.class, args);
		System.out.println("Users MicroServices Running succesufully");
	}

}
