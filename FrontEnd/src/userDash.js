import React from "react";
import { Outlet,Link } from "react-router-dom";
import Post from "./post";
function UserDash(){
    var getUser=localStorage.getItem("username");
    return(
        <div>
        <h1>
            Welcome to facebook &emsp; {getUser.toUpperCase()}
        </h1>
        <div >
        <div className='navg'>
        <Link to ="/viewUserSearch" className='text'>viewUsers</Link>&nbsp;&nbsp;
        <Link to ="/usersAllPosts" className='text'>viewAllposts</Link>&nbsp;&nbsp;
        <Link to ="/usersReporting" className='text'>reportUsers</Link>&nbsp;&nbsp;
        <Link to ="/chatting" className='text'>chatWithOthers</Link>&nbsp;&nbsp;
        <Link to ="/addPost" className='text'>AddPost</Link>&nbsp;&nbsp;
        <Link to ="/getMyTotalLikes" className='text'>viewMyPosts</Link>&nbsp;&nbsp;
        <Link to ="/viewMyChatBox" className='text'>viewMessages</Link>&nbsp;&nbsp;
        <Link to ="/getYourProfile" className='text'>getYourProfile</Link>&nbsp;&nbsp;
        </div>
    
        <Outlet></Outlet>  
        
    </div>

    </div>
    )
}
export default UserDash;