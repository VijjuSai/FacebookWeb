React 
----------------------------------------
User stories

1. Login details

Email : suri

Password : 9898

Email : 666

Password : 777

2. User has to register with the following attributes

User attributes:

1-> name(pk)
2-> email
3-> password
4-> phone
5-> Gender

->If User logins then he will redirect to user dashboard.

[viewUsers,viewAllposts,addPost,reportUsers,chatWithOthers,getYourProfile,logout]
    |
[searchUsers in search bar][we are placed search bar in viewUsers so that user can search his friend] 

-> then he will redirect to user viewAllposts,


1. ViewUsers : Here we can view all users

2. ViewAllposts : Here we can view all posts which is posted by user

3. ReportUsers : Here one user can another user he can report the another user only once.

4. GetYourProfile : Here we can see the details of user who was logged in.

5. AddPost : Based on post name and post content we are adding our post after that it will goes to the admin for approval initially the message is in rejection 
             mode only after the admin approves the message it will redirect to view all posts incase he rejected we wont see the post.

6. ChatWithOthers : Here we can chat with others .

7. View Messages : Here I can see the messages received from other user.

8. ViewMyPosts : Here I can see  all my posts

---------------------------------------------------------------------------------------
Admin stories : 

1. Login details

Email : 123

Password : 999
Admin Restrict: we not made any admin restratation because of , if any user can restried in admin restritration then he can perform  crud operations
		so, in order to restrict these conditions we are not placed any admin restration in the webpage.In may famous websites we can't see any
		admin restration.But we performed restration for users.

Admin Login => after login  he can access --> [viewUsers,viewAllposts,reportedUsers,chatWithOthers,createGroups,
		            		   getYourProfile,deleteUser,logout]

1. ViewUsers : Here admin can view all  the users.

2. ViewAllPosts : Here admin can view all the posts which was posted by users after that admin has to perform two operations one is Approve or Reject/waiting
                  Incase if he approved means the post which was posted by user will visible to all users.

3. GetReportedUsers : Here Admin can view the reported users and he can unreport the users. Reported users are not visible in viewallusers.

4. GetYourProfile : Here we can see the details of admin.

5. DeleteUser : Admin can delete the user.

-> In this project we used BootStrap to create UI

-------------------------------------------------
SpringBoot : 
--------------------------------------------------
MicroServices :

1. Admin MicroService 			=> port num:8087

2. User MicroService  			=> port num:8082

3. Consumer MicroService 		=> port num:8081

4. Message MicroService			=> port num:8085

5. Eureka Server MicroService		=> port num:8099

---------------------------------------------------

6. React 				=>port num:3000
--------------------------------------------------

User MicroService : 

User Entity :

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

	    @OneToMany(mappedBy="fromuser",fetch=FetchType.EAGER)
	    @JsonIgnoreProperties("fromuser")
	    private List<Message> tomessage;
		
	    @OneToMany(mappedBy="touser",fetch=FetchType.EAGER)
	    @JsonIgnoreProperties("touser")
	    private List<Message> frommessage;
 --------------------------------------------------
 -> Here we are doing mapping operations between message entity and user entity and we are using 

 @OneToMany - One user can send message to many users so we are taking @OneToMany mapping

 @ManyToOne - One user can receive messages from different users so we are taking @ManyToOne mapping
----------------------------------------------------
Message Microservice :
 
 Message Entity : 

      @Id//Primary key
	@GeneratedValue
	private int id;
	private String content;
	private LocalDateTime date;
	@ManyToOne
	@JsonIgnoreProperties("frommessage")
	private User fromuser;
	@ManyToOne
	@JsonIgnoreProperties("tomessage")
	private User touser;
------------------------------------------------------
Follow of excution
step1 : open react project(jwtProj) 
step2 : open read.me file and get user or admin details
step3 : then run the project and open spring boot and run all the microservices
step4 : the  given proper valid credintails to login 
Step5 : if you want to register with new user , then click on registerd button on nav bar and regsiterd and then login and perfrom require operations you want
Step6 : login validataion avaible in login.js for admin it is avaible in adminLogin.js
sql file also attached 

we connected front end (react) to backEnd (springboot) through eurekha server and with the help of consumer rest controller file

open consumer microserver and open myrestcontroller file in that we have all our urls or apis functions to connect with react through 
@CrossOrigin(origins="http://localhost:3000")

Thanks for this beautiful journey by great learning....
