import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link, Outlet,useNavigate } from "react-router-dom";
import './style.css';
function AddPost(){


     
    var[postName,addPostName]=useState([]);
    var[newContent,addContent]=useState([]);
    var getName=localStorage.getItem("username");
    var getUserId=localStorage.getItem("loginid");
    const date = new Date();
    let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let currentDate = `${day}-${month}-${year}`;

    var nav=useNavigate();
    function addProducts(){
        if( localStorage.getItem("login") == null ){
            alert("No login found. Please login/register");
            nav("/login");
            return; //stop the function execution
        }
        else{
        
        axios.get("http://localhost:8081/user/addPost?id=" +getUserId+"&postname=" +postName +"&postcontent=" +newContent).then((response)=>{
          alert("Post added succesfully")
           
        });}
}
   return(
    <div className="addPots">
    <h1 className="addPostsIndb">Add Post</h1>
    <div className="row addpostman">
                            <div className="col-md-4 col-12 addProd">
                                <div className="card">
                                    <div className="card-body">
                                    <label>PostName:</label><br></br>
                                        <input type="text" className="sai" placeholder="enter Post name"  value={postName} onChange={e=>addPostName(e.target.value)}></input><br></br>  
                                        <label>PostConetnet:</label>
                                        <input type="text" className="sai"  placeholder="enter Post content"  value={newContent} onChange={e=>addContent(e.target.value)}></input><br></br>                          
                                        <button type="button" className="btn btn-success addP" onClick={addProducts}>AddPost</button><br></br>
                                    </div>
                                </div>
                            </div>
            </div>
            <button type="button" class="btn btn-primary"><Link to='/userDash'>Back</Link></button>
   
    </div>
   )
   }

export default AddPost;