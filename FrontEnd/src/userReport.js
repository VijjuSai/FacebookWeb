import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link, Outlet,useNavigate } from "react-router-dom";


function UserReportToAnotherUser(){

    var [carts, setCarts]  = useState([]);
    var username=localStorage.getItem("username");
    var userId = localStorage.getItem("loginid");
   

    function getCarts(){
        
        axios.get("http://localhost:8081/getAll/viewAllUsers" ).then((res)=> {
            setCarts(res.data);
        });
    }

    useEffect(getCarts, []);
    
    function removeCart(usersID){
        var name;
        var email;
        var password;
        var gender;
        var phone;
        var report=0;
        var id=usersID;
        carts.map(temp=>
            {
                if(temp.id == usersID){
                    id=usersID;
                    name=temp.name;
                    email=temp.email;
                    password=temp.password;
                    gender=temp.gender;
                    phone=temp.phone;
                    report+=1;

                }
            })
        axios.get("http://localhost:8081/increaseReportCount?id="+id+"&name=" +name+"&email=" +email+"&password=" +password+"&gender="+gender+"&phone="+phone+"&report="+report ).then((res) => {
            alert("User Reported succesfully");
            getCarts();
        });
    }

    
    return(
        <div>
            <h1>Welcome : {username}</h1>
            <h1 className="productHead">List of All Users</h1>
            <hr></hr>
            
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Gender</th>
                        <th>ReportUser</th>
                        <th>ReportUser</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        carts.map(temp => {
                            if(temp.id != userId){
                            return(
                                
                                <tr>
                                    <td>{temp.id}</td>
                                    <td>{temp.name}</td>
                                    <td>{temp.email}</td>
                                    <td>{temp.phone}</td>
                                    <td>{temp.gender}</td>
                                    <td>{temp.report}</td>
                                    
                                    <td>
                                        
                                        <button className="btn btn-sm btn-danger" type="button"  onClick={() => removeCart(temp.id)}> ReportUser </button>
                                    
                                    </td>
                                </tr>
                            )
                            }
                        })
                    }
                </tbody>
            </table>
            <button type="button" class="btn btn-primary"><Link to='/userDash'>Back</Link></button>
        </div>
        
    )
}

export default UserReportToAnotherUser;