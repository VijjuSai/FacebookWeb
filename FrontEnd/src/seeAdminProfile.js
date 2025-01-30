import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link, Outlet,useNavigate } from "react-router-dom";
function GetAdmin(){
    var [carts, setCarts]  = useState([]);
    var username=localStorage.getItem("username");
    var adminemail=localStorage.getItem("email");

    function getCarts(){
        var userId = localStorage.getItem("loginid");
        axios.get("http://localhost:8081/admin/getAll").then((res)=> {
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
                if(temp.email==adminemail){
                return(
            
                <div className="myProfile">
                <p>AdminId:{temp.id}</p>
                {console.log(temp.id)}
                <p>AdminName:{temp.name}</p>
                <p>Email:{temp.email}</p>
                <p>Password:{temp.password}</p>
            
            </div>
        )}
            })}
            
            
            <button type="button" class="btn btn-primary"><Link to='/adminDash'>Back</Link></button>
            </div>
        </div>
    )
}
export default GetAdmin;