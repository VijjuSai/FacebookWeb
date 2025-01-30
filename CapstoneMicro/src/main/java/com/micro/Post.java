package com.micro;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;


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
public class Post {
	
	
	
	@Id
	@GeneratedValue
	private int id;
	//private String username;
	private int uploadeduserid;
	private String postname;
	private String postcontent; 
	private LocalDate date;
	private boolean approved; 
	private boolean rejected;
	
	
	



}
