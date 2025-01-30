package com.consumer;

import java.time.LocalDate;
import lombok.AllArgsConstructor;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor

public class Users {
	private int id;
	private String name;
	private String email;
	private String password;
	private String phone;
	private String gender;
	private int report;
	

}