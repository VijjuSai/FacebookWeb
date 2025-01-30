package com.consumer;


import java.time.LocalDateTime;



import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

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

public class Message {

	
	private int id;
	private String content;
	private LocalDateTime date;
	private Users fromuser;
	private Users touser;
	
	
	
}
