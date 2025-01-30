package com.consumer;




import java.util.List;
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
public class Likes {
	
	
	
	private int id;
	private int postid;
	private int userid;
	private String postname;
	private int likes;
	private String comment;  
	
}
