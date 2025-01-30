import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link, Outlet,useNavigate } from "react-router-dom";
function ViewMyMessages(){
   
    var[getMessagesfromdb,setMsg] =useState([]);
    
    var username=localStorage.getItem("username");
    var getCurrentUserID=localStorage.getItem("loginid");
    const date = new Date();
    let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let time=date.getTime();
        
        let currentDate = `${day}-${month}-${year}`;
        console.log(currentDate + time);
        function getMessages(){
            axios.get("http://localhost:8081/getmessage?id=" +getCurrentUserID ).then((res)=> {
                setMsg(res.data);
    
        });
        }
        useEffect(getMessages, []);

       
   // useEffect(getMessages, []);

    return(
        <div>
           <h3>You have recived some messages from your frineds</h3> 
           <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>From</th>
                        <th>Username : Meassage</th>
                        
                    </tr>
                </thead>
                <tbody>
                {
                        getMessagesfromdb.map(temp => {
                            //if(temp.touser.localeCompare(username)==0){
                                //if(temp.touser == username){
                                    var getname=temp.content;
                                    var getnamelen=getname.length;
                                    console.log("total msg" +getnamelen);
                                    var getmymsg;
                                    let text = "How are you doing today?";
                                    const myArray = getname.split(" ");
                                    const getNamebyarray =myArray[0];
                                    const getTrim=getNamebyarray.length + 3;
                                    const  getfullmsg=getname.slice(getTrim,)
                                   
                            return(
                                <tr>
                                    <td>{temp.date}</td>
                                    <td>{ getNamebyarray}</td>
                                    <td>{getfullmsg}</td>

                                  
                                </tr>
                            )
                            
                        })
                                        }
                                        
                                    </tbody>
                                </table>
                                <button type="button" class="btn btn-primary"><Link to='/userDash'>Back</Link></button>
                            </div>
                        )
                    }

export default ViewMyMessages;