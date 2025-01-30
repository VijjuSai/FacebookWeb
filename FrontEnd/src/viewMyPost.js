import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link, Outlet,useNavigate } from "react-router-dom";


function ViewMyPostandLikes(){

    var [carts, setCarts]  = useState([]);
    var [getLikes, setLikes]  = useState([]);
    var [commentId, setComment]  = useState();
    var username=localStorage.getItem("username");
    var getUserID=localStorage.getItem("loginid");
    var getAllLikesCount=0;

    function getCarts(){
        var userId = localStorage.getItem("loginid");
        axios.get("http://localhost:8081/user/getMyPosts"  ).then((res)=> {
            setCarts(res.data);
        });
    }
    function getLikesEntity(){
        var userId = localStorage.getItem("loginid");
        axios.get("http://localhost:8081/user/getLikesforhispost"  ).then((res)=> {
            setLikes(res.data);
        });
    }

 

    

    useEffect(getCarts, []);
    useEffect(getLikesEntity, []);
    

    return(
        <div>
            <h1>Welcome : {username}</h1>
            <h1 className="productHead">List of My Posts</h1>
            <hr></hr>
            
            <table className="table table-bordered">
                <thead>
                    <tr>
                        
                        <th>PostId</th>
                        <th>UserID</th>
                        <th>PostName</th>
                        <th>PostContent</th>
                        <th>date</th>
                        <th>Aprroved/Rejected</th>
                        <th>TotalLikes</th>
                        

                    </tr>
                </thead>
                <tbody>
                    {
                        carts.map(temp => {
                            if(temp.uploadeduserid == getUserID){
                                if(temp.approved == 1){
                                    temp.approved="approved";
                                }
                                else{
                                    temp.approved="rejected/waiting";
                                }
                            
                            return(
                                 getAllLikesCount=0,
                                <tr>
                                     
                                    <td>{temp.id}</td>
                                   
                                    {getLikes.map(temp1=>{
                                       
                                        if(temp.id == temp1.postid){
                                            getAllLikesCount+=temp1.likes
                                        }
                                    })}
                                    
                                    <td>{getUserID}</td>
                                    <td>{temp.postname}</td>
                                    <td>{temp.postcontent}</td>
                                    <td>{temp.date}</td>
                                    <td>{temp.approved}</td>
                                    <td>{getAllLikesCount}</td>
                                    
                                    
                                   
                                    
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

export default ViewMyPostandLikes;
