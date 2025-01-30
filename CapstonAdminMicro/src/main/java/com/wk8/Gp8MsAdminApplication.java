package com.wk8;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class Gp8MsAdminApplication {

	public static void main(String[] args) {
		SpringApplication.run(Gp8MsAdminApplication.class, args);
		System.out.println("Admin micro service running");
	}

}
