import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link, Outlet,useNavigate } from "react-router-dom";
import './style.css'


function UserProfile(){

    var [carts, setCarts]  = useState([]);
    var username=localStorage.getItem("username");
    var getUseremail=localStorage.getItem("email");

    function getCarts(){
        var userId = localStorage.getItem("loginid");
        axios.get("http://localhost:8081/getAll/viewAllUsers").then((res)=> {
            setCarts(res.data);
        });
    }

    useEffect(getCarts, []);


    
    return(
        <div >
            <h1>Welcome : {username}</h1>
            <h1 className="productHead">Your Profile Details</h1>
            <hr></hr>
            <div className="profileDiv">
            {carts.map(temp=>{
                if(temp.email==getUseremail){
                return(
            
                <div className="myProfile">
                <p>UserId:{temp.id}</p>
                {console.log(temp.id)}
                <p>Username:{temp.name}</p>
                <p>Email:{temp.email}</p>
                <p> Password:{temp.password}</p>
                <p>gender:{temp.gender}</p>
                <p>phone:{temp.phone}</p>
                <p>reports:{temp.report}</p>
            </div>
        )}
            })}
            
            
            <button type="button" class="btn btn-primary"><Link to='/userDash'>Back</Link></button>
            </div>
        </div>
    )
}

export default UserProfile;