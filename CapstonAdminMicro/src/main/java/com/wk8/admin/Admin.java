package com.wk8.admin;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Getter
@Setter
public class Admin {
	
	private int id;
	@Column(nullable = false)
	private String name;
	@Id
	private String email;
	private String password;
	private String phone;

}
