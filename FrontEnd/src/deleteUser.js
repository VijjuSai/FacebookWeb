import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link, Outlet,useNavigate } from "react-router-dom";


function DeleteUser(){

    var [carts, setCarts]  = useState([]);
    var username=localStorage.getItem("username");

    function getCarts(){
        var userId = localStorage.getItem("loginid");
        axios.get("http://localhost:8081/getAll/viewAllUsers" ).then((res)=> {
            setCarts(res.data);
        });
    }

    useEffect(getCarts, []);
    
    function removeCart(id){
        axios.get("http://localhost:8081/admin/deleteUserbyId?id=" + id).then((res) => {
            alert("User deleted succesfully");
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
                        <th>reports</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        carts.map(temp => {
                            return(
                                <tr>
                                    <td>{temp.id}</td>
                                    <td>{temp.name}</td>
                                    <td>{temp.email}</td>
                                    <td>{temp.phone}</td>
                                    <td>{temp.gender}</td>
                                    <td>{temp.report}</td>
                                    
                                    <td>
                                        <button className="btn btn-sm btn-danger" type="button" onClick={() => removeCart(temp.id)}> DeleteUser </button>
                                    </td>
                                </tr>
                            )
                            
                        })
                    }
                </tbody>
            </table>
            <button type="button" class="btn btn-primary"><Link to='/adminDash'>Back</Link></button>
    
        </div>
    )
}

export default DeleteUser;