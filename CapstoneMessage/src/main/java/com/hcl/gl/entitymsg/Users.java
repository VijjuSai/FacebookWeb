package com.hcl.gl.entitymsg;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
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
	    
	    //@OneToMany(mappedBy = "users" , fetch = FetchType.EAGER )
	   // private List<Post> posts;
	
		@OneToMany(mappedBy="fromuser",fetch=FetchType.EAGER)
		@JsonIgnoreProperties("fromuser")
		private List<Message> tomessage;
		
		@OneToMany(mappedBy="touser",fetch=FetchType.EAGER)
		@JsonIgnoreProperties("touser")
		private List<Message> frommessage;

}
