package com.hcl.gl;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;


@SpringBootApplication
@EnableDiscoveryClient//to register as client in eureka server
public class CapstoneMessageApplication{

	public static void main(String[] args) {
		SpringApplication.run(CapstoneMessageApplication.class, args);
		System.out.println("Message working");
	}
		

	
}
