import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link, Outlet,useNavigate } from "react-router-dom";

function AdminChat(){
    var [carts, setCarts]  = useState([]);
    var [message, sendMsg]  = useState([]);
    var username=localStorage.getItem("username");
    var getCurrentUserID=localStorage.getItem("loginid");
    const date = new Date();
    let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let currentDate = `${day}-${month}-${year}`;
    function getCarts(){
        var userId = localStorage.getItem("loginid");
        axios.get("http://localhost:8081/getAll/viewAllUsers" ).then((res)=> {
            setCarts(res.data);
        });
    }

    useEffect(getCarts, []);

    function sendMsgToUser(name){
       
        axios.get("http://localhost:8081/addmessage?from=" +username+ "&to=" +name+ "&content=" +message).then((response)=>{
        alert("Msg sended to ->  " +name+ " -> successfully")
        sendMsg("");
    })
    }
    return(
        <div>
           <h3>Welcome to Messagner Here you can chat with Your friends</h3> 
           <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>SendMessage</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        carts.map(temp => {
                            if(temp.id != getCurrentUserID)
                            return(
                                <tr>
                                    <td>{temp.id}</td>
                                    <td>{temp.name}</td>
                                    <td><input type="text" placeholder="type message" value={message} onChange={e=>sendMsg(e.target.value)}></input>  &emsp; <button type="subumit"  className="btn btn-success" onClick={()=>sendMsgToUser(temp.name)}> Send</button> </td>
                                    
                                    
                                    
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
export default AdminChat;