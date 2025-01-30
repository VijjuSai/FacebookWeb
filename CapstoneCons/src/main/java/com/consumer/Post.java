package com.consumer;

import java.time.LocalDate;




import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter

@NoArgsConstructor
@AllArgsConstructor  
@Builder
public class Post {
	
	
	
	
	private int id;
	//private String username;
	private int uploadeduserid;
	private String postname;
	private String postcontent; 
	private LocalDate date;
	private boolean approved;
	private boolean rejected; 
	



}
