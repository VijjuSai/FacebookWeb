package com.micro;


import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;

import javax.ws.rs.GET;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;




@RestController
public class Mycontroller {
	@Autowired
	UsersService impl;
	@Autowired
	PostService ser;
	@Autowired
	LikesService insert;
	
	@GetMapping("/")
	@ResponseBody
	public String WelcomePage() {
		return "Welcome to Facebook.com";
	}
	
	@GetMapping("user/login")
	public Users loginVerfiy(String email,String password) {
		Users verify= impl.login(email);
		if(verify.getPassword().equalsIgnoreCase(password)) {
			return verify;

	}
		return null;
	}
	
	@GetMapping("user/logout")
	public String userLogout() {
		return "Logout successfully";
	}
	
	@GetMapping("/regsitration")
	public Users register(String name,String email,String password,String phone,String gender) {
		impl.registerUser(name, email, password, phone,gender);
		return impl.updatePswsd(email);
	}
	
	@GetMapping("/increaseReport")
	public Users increaseCount(int id,String name,String email,String password,String phone,String gender,int report) {
		impl.updateUserReportIncremeant(id,name, email, password, phone,gender,report);
		return impl.updatePswsd(email);
	}
	
	@GetMapping("/userProfile")
	public List<Users> getYourProfile(String email) {
		return impl.getContactWithType(email);
	}
	
	@GetMapping("/updatePswd")
	public Users updatepswd(int id,String password) {
		Users store=impl.updatePswsd1(id);
		if(store != null) {
			impl.registerUser1(store.getId(),store.getName(),
					store.getEmail(),password,
					store.getPhone(),store.getGender());
			return impl.updatePswsd1(id);
		}
		else {
			return null;
			
		}
		
	
	}

	@GetMapping("/viewAllUsers")
	public List<Users> getAllUsers() {
		return impl.getAllUser();
	}
	
	@GetMapping("/addPost")
	public Post  insertPost(int userid,String postname,String postcontent) {
		//SimpleDateFormat sdf = new SimpleDateFormat("dd-MM-yyyy");
		//String date = sdf.format(new Date());
		
		
		Post p1=Post.builder().uploadeduserid(userid).postcontent(postcontent).postname(postname)
				.date(LocalDate.now()).approved(false).rejected(false).build();
		return ser.addPost(p1);
		
	}
	
	@GetMapping("/getApproved")
	public Post updateIt(int id, boolean approved,boolean rejected,String date,String postname, String postcontent,int uploadeduserid) {
	
		ser.updatePost(id, approved, rejected, LocalDate.now(), postname, postcontent, uploadeduserid);
		
		return ser.getPostDetails(id);
	}
	
	@GetMapping("/viewYourPost")
	public List<Post> getAllPostsForCurrentUser() {
		return ser.getAllPosts();
	}
	
	@GetMapping("/deleteUser")
	public List<Users> delete(String email) {
		Users u=Users.builder().email(email).build();
		impl.deleteUsers(u);
		return impl.getAllUser();
	}
	@GetMapping("/deleteByIduser")
	public List<Users> deletebyIds(int id) {
		Users u=Users.builder().id(id).build();
		impl.deletebyID(id);
		return impl.getAllUser();
	}

	@GetMapping("/getLikes")
	public Likes getLiked(int postid,int userid,String postname,int likes,String comment) {
		
		Likes l1=Likes.builder().postid(postid).userid(userid).postname(postname).likes(likes).comment(comment).date(LocalDateTime.now()).build();
		return insert.getTotal(l1);
		
		
	}
	 
	@GetMapping("/getAllLikesfromdb")
	public List<Likes> getLikesandcomments() {
		return insert.getAllHistory();
	}
	
	
}
