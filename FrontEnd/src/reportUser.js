import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link, Outlet,useNavigate } from "react-router-dom";


function ReportUser(){

    var [carts, setCarts]  = useState([]);
    var username=localStorage.getItem("username");

    function getCarts(){
        var userId = localStorage.getItem("loginid");
        axios.get("http://localhost:8081/getAll/viewAllUsers" ).then((res)=> {
            setCarts(res.data);
        });
    }

    useEffect(getCarts, []);
    
    function removeCart(cartId){
        var name;
        var email;
        var password;
        var gender;
        var phone;
        var report;
        var id;
        carts.map(temp=>
            {
                if(temp.id == cartId){
                    id=temp.id;
                    name=temp.name;
                    email=temp.email;
                    password=temp.password;
                    gender=temp.gender;
                    phone=temp.phone;
                    report=0;

                }
            })

              
                axios.get("http://localhost:8081/increaseReportCount?id=" +id+ "&email="+email+"&gender="+gender+"&name="+name+"&password="+password+"&phone="+phone + "&report=" +report ).then((res) => {
                    alert("User Reveled succesfully");
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
                        <th>UserId</th>
                        <h>Name</h>
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
                            if(temp.report == 1){
                            return(
                                <tr>
                                    <td>{temp.id}</td>
                                    <td>{temp.name}</td>
                                    <td>{temp.email}</td>
                                    <td>{temp.phone}</td>
                                    <td>{temp.gender}</td>
                                    <td>{temp.report}</td>
                                    
                                    
                                    <td>
                                        <button className="btn btn-sm btn-success" type="button" onClick={() => removeCart(temp.id)}> RevealUser </button>
                                    </td>
                                </tr>
                            )
                            }  
                        })
                    }
                </tbody>
            </table>
            <button type="button" class="btn btn-primary"><Link to='/adminDash'>Back</Link></button>
        </div>
        
    )
}

export default ReportUser;