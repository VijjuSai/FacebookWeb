package com.micro;



import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.UniqueConstraint;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Setter
@Getter
@Entity
@NoArgsConstructor
@AllArgsConstructor  
@Builder
public class Users {
	
	
	@Id
	@GeneratedValue
	private int id;
	private String name;
	@Column(unique = true)
	private String email;
	private String password;
	private String phone;
	private String gender;  
	private int report;
	 
	
}