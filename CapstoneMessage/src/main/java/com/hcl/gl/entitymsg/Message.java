package com.hcl.gl.entitymsg;


import java.time.LocalDateTime;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

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
@Entity
public class Message {

	@Id//Primary key
	@GeneratedValue
	private int id;
	private String content;
	private LocalDateTime date;
	@ManyToOne
	@JsonIgnoreProperties("frommessage")
	private Users fromuser;
	@ManyToOne
	@JsonIgnoreProperties("tomessage")
	private Users touser;
	
	
	
}
