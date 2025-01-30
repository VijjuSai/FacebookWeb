package com.consumer;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.client.ServiceInstance;
import org.springframework.cloud.client.loadbalancer.LoadBalancerClient;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;


@RestController
@CrossOrigin(origins="http://localhost:3000")
public class MyrestController {
		@Autowired
	    private LoadBalancerClient loadBalancerClient;
	    
	    public String serverCommunication(String servicename)
	    {
	        ServiceInstance instance =loadBalancerClient.choose(servicename);
	        return instance.getUri().toString();   
	    }
	    
	    @GetMapping("Login/Users/userLoginVerify")
	    public Users userLogin(String email,String password)
	    {
	        RestTemplate rt = new RestTemplate();
	        String servicename ="Cap-MS-Users";
	        String  microServiceUrl= serverCommunication(servicename);
	        Users userArray = rt.getForObject(microServiceUrl+"/user/login?email="+email+"&password="+password, Users.class);
	      
	        return userArray;
	    }
    
	    @GetMapping("Logout/userLogout")
	    public String userLogOut()
	    {
	        RestTemplate rt = new RestTemplate();
	        String servicename ="Cap-MS-Users";
	        String  microServiceUrl= serverCommunication(servicename);
	        String logout = rt.getForObject(microServiceUrl+"/user/logout", String.class);
	        
	        
	        return logout;
	    }
	    
	    @GetMapping("user/register")
	    public Users userRegistration(String name,String email,String password,String phone,String gender)
	    {
	        RestTemplate rt = new RestTemplate();
	        String servicename ="Cap-MS-Users";
	        String  microServiceUrl= serverCommunication(servicename);
	        Users regsiterUser = rt.getForObject(microServiceUrl+"/regsitration?name="+name+"&email="+email+"&password="+password+"&phone="+phone+"&gender="+gender, Users.class);
	   
	        return regsiterUser;
	    }
	    
	    @GetMapping("user/addPost")
	    public Post addPostToFacebook(int id,String postname,String postcontent)
	    {
	        RestTemplate rt = new RestTemplate();
	        String servicename ="Cap-MS-Users";
	        String  microServiceUrl= serverCommunication(servicename);
	        Post regsiterUser = rt.getForObject(microServiceUrl+"/addPost?userid="+id+"&postname="+postname+"&postcontent="+postcontent, Post.class);
	   
	        return regsiterUser;
	    }
	    @GetMapping("user/updatePost")
	    public Post getApprovedPost(int id, boolean approved,boolean rejected,String postname, String postcontent,int uploadeduserid)
	    {
	    	
	        RestTemplate rt = new RestTemplate();
	        String servicename ="Cap-MS-Users";
	        String  microServiceUrl= serverCommunication(servicename);
	        Post regsiterUser = rt.getForObject(microServiceUrl+"/getApproved?id="+id+"&approved="+approved+"&rejected="+rejected+"&date="+LocalDate.now()+"&postname="+postname+"&postcontent="+postcontent+"&uploadeduserid="+uploadeduserid, Post.class);
	   
	        return regsiterUser;
	    }
	    
	    
	    @GetMapping("increaseReportCount")
	    public Users updateReport(int id,String name,String email,String password,String phone,String gender,int report)
	    {
	        RestTemplate rt = new RestTemplate();
	        String servicename ="Cap-MS-Users";
	        String  microServiceUrl= serverCommunication(servicename);
	        Users regsiterUser = rt.getForObject(microServiceUrl+"/increaseReport?id="+id+"&name="+name+"&email="+email+"&password="+password+"&phone="+phone+"&gender="+gender+"&report="+report, Users.class);
	   
	        return regsiterUser;
	    }
	    
	    @GetMapping("user/getYourProfileDetails")
	    public List<Users> getProfileInfo(String email)
	    {
	        RestTemplate rt = new RestTemplate();
	        String servicename ="Cap-MS-Users";
	        String  microServiceUrl= serverCommunication(servicename);
	        Users[] userArray = rt.getForObject(microServiceUrl+"/userProfile?email="+email, Users[].class);
	        
	        List<Users> users = new ArrayList<Users>();
	        for(int i =0; i<userArray.length;i++)
	        {
	        	users.add(userArray[i]);
	            
	        }
	        return users;
	    }
	    
	   
	    @GetMapping("admin/getYourProfileDetails")
	    public List<Admin> getAdminProfileInfo(String email)
	    {
	        RestTemplate rt = new RestTemplate();
	        String servicename ="Admin-Micro-Service";
	        String  microServiceUrl= serverCommunication(servicename);
	        Admin[] userArray = rt.getForObject(microServiceUrl+"/adminProfile?email="+email, Admin[].class);
	        
	        List<Admin> users = new ArrayList<Admin>();
	        for(int i =0; i<userArray.length;i++)
	        {
	        	users.add(userArray[i]);
	            
	        }
	        return users;
	    }
	    
	    
	    @GetMapping("user/upadtePassword")
	    public Users enterYourEmailAndNewPassword(int id,String password)
	    {
	        RestTemplate rt = new RestTemplate();
	        String servicename ="Cap-MS-Users";
	        String  microServiceUrl= serverCommunication(servicename);
	        Users updatePswd = rt.getForObject(microServiceUrl+"/updatePswd?id="+id+"&password="+password, Users.class);
	        return updatePswd;
	    }
	   
	    
	    
	    @GetMapping("user/likes/comments")
	    public Likes getAlldataFromlikes(int postid,int userid,String postname,int likes,String comment)
	    {
	        RestTemplate rt = new RestTemplate();
	        String servicename ="Cap-MS-Users";
	        String  microServiceUrl= serverCommunication(servicename);
	        Likes regsiterUser = rt.getForObject(microServiceUrl+"/getLikes?postid="+postid+"&userid="+userid+"&postname="+postname+"&likes="+likes+"&comment="+comment, Likes.class);
	   
	        return regsiterUser;
	    }
	    
	   
	    
	    @GetMapping("getAll/viewAllUsers")
	    public List<Users> getAllUsersFromDb()
	    {
	        RestTemplate rt = new RestTemplate();
	        String servicename ="Cap-MS-Users";
	        String  microServiceUrl= serverCommunication(servicename);
	        Users[] userArray = rt.getForObject(microServiceUrl+"/viewAllUsers", Users[].class);
	        
	        List<Users> users = new ArrayList<Users>();
	        for(int i =0; i<userArray.length;i++)
	        {
	        	users.add(userArray[i]);
	            
	        }
	        return users;
	    }
	    
	    @GetMapping("user/getLikesforhispost")
	    public List<Likes> connectToLikesEntity()
	    {
	        RestTemplate rt = new RestTemplate();
	        String servicename ="Cap-MS-Users";
	        String  microServiceUrl= serverCommunication(servicename);
	        Likes[] userArray = rt.getForObject(microServiceUrl+"/getAllLikesfromdb", Likes[].class);
	        
	        List<Likes> users = new ArrayList<Likes>();
	        for(int i =0; i<userArray.length;i++)
	        {
	        	users.add(userArray[i]);
	            
	        }
	        return users;
	    }
	    
	    @GetMapping("admin/getAll")
	    public List<Admin> getAdminDetails()
	    {
	        RestTemplate rt = new RestTemplate();
	        String servicename ="Admin-Micro-Service";
	        String  microServiceUrl= serverCommunication(servicename);
	        Admin[] userArray = rt.getForObject(microServiceUrl+"/getAdminDet", Admin[].class);
	        
	        List<Admin> users = new ArrayList<Admin>();
	        for(int i =0; i<userArray.length;i++)
	        {
	        	users.add(userArray[i]);
	            
	        }
	        return users;
	    }
	    					
	    
	    
	    @GetMapping("Login/adminLoginVerify")
	    public Admin adminLogin(String email,String password)
	    {
	        RestTemplate rt = new RestTemplate();
	        String servicename ="Admin-Micro-Service";
	        String  microServiceUrl= serverCommunication(servicename);
	        Admin ProductsArray = rt.getForObject(microServiceUrl+"/login?email="+email+"&password="+password, Admin.class);
	        return ProductsArray;
	    }
	    
	    @GetMapping("Logout/adminLogout")
	    public String adminLogOut()
	    {
	        RestTemplate rt = new RestTemplate();
	        String servicename ="Admin-Micro-Service";
	        String  microServiceUrl= serverCommunication(servicename);
	        String logout = rt.getForObject(microServiceUrl+"/logout", String.class);
	        return logout;
	    }
	    
	    @GetMapping("admin/deleteUser")
	    public List<Users> removeUser(String email)
	    {
	        RestTemplate rt = new RestTemplate();
	        String servicename ="Cap-MS-Users";
	        String  microServiceUrl= serverCommunication(servicename);
	        Users[] userArray = rt.getForObject(microServiceUrl+"/deleteUser?email="+email, Users[].class);
	        
	        List<Users> users = new ArrayList<Users>();
	        for(int i =0; i<userArray.length;i++)
	        {
	        	users.add(userArray[i]);
	            
	        }
	        return users;
	    }
	    
	    @GetMapping("admin/deleteUserbyId")
	    public List<Users> deleteUser(int id)
	    {
	        RestTemplate rt = new RestTemplate();
	        String servicename ="Cap-MS-Users";
	        String  microServiceUrl= serverCommunication(servicename);
	        Users[] userArray = rt.getForObject(microServiceUrl+"/deleteByIduser?id="+id, Users[].class);
	        
	        List<Users> users = new ArrayList<Users>();
	        for(int i =0; i<userArray.length;i++)
	        {
	        	users.add(userArray[i]);
	            
	        }
	        return users;
	    }
	    
	    
	    @GetMapping("user/getMyPosts")
	    public List<Post> getMyPostsSofar()
	    {
	        RestTemplate rt = new RestTemplate();
	        String servicename ="Cap-MS-Users";
	        String  microServiceUrl= serverCommunication(servicename);
	        Post[] userArray = rt.getForObject(microServiceUrl+"/viewYourPost", Post[].class);
	        
	        List<Post> users = new ArrayList<Post>();
	        for(int i =0; i<userArray.length;i++)
	        {
	        	users.add(userArray[i]);
	            
	        }
	        return users;
	    }
	    
	    
	    
	    @GetMapping("/addmessage")
		public void add(String from,String to,String content){
				
	    	RestTemplate rt = new RestTemplate();
	        String servicename ="Message-Micro-Service";
	        String  microServiceUrl= serverCommunication(servicename);
			List msg = rt.getForObject( microServiceUrl+"/addmessage?from="+from+"&to="+to+"&content="+content,List.class);
			
			
		}
		
		@GetMapping("/getmessage")
		public List<Message> getMessage(int id)
		{
			
			RestTemplate rt = new RestTemplate();
	        String servicename ="Message-Micro-Service";
	        String  microServiceUrl= serverCommunication(servicename);
			Message[] str = rt.getForObject( microServiceUrl + "/getmessage?id="+id,Message[].class);
			
			List<Message> msgList=new ArrayList<Message>();
			
			msgList=Arrays.asList(str);
			
			return msgList;
		}
		
		
		
		@GetMapping("/getallmessage")
		public List<Message> get()
		{
			RestTemplate rt = new RestTemplate();
	        String servicename ="Message-Micro-Service";
	        String  microServiceUrl= serverCommunication(servicename);
			Message[] str = rt.getForObject( microServiceUrl + "/getall",Message[].class);
			
			List<Message> msgList=new ArrayList<Message>();
			msgList=Arrays.asList(str);
			return msgList;
			
		}
}












	
