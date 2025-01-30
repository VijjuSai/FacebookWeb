import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link, Outlet,useNavigate } from "react-router-dom";


function UserViewPosts(){

    var [carts, setCarts]  = useState([]);
    var [commentId, setComment]  = useState();
    var username=localStorage.getItem("username");
    var getID=localStorage.getItem("loginid");
    var likes=0;

    function getCarts(){
        var getID = localStorage.getItem("loginid");
        axios.get("http://localhost:8081/user/getMyPosts" ).then((res)=> {
            setCarts(res.data);
        });
    }

    useEffect(getCarts, []);


     function like(id){
        
        var postid;
        var postname;
        var comment;
        var likes=0;
        var userid;
       
        carts.map(temp=>{
            if(temp.id == id){
                return(
                postid=temp.id,
                postname=temp.postname,
                likes+=1,
                comment=commentId,
                userid=getID
                
        )}
        })
        axios.get("http://localhost:8081/user/likes/comments?postid="+postid+"&postname="+postname+"&likes="+likes+"&comment="+commentId+"&userid="+userid).then((response)=>{
        alert("you liked this post")
         }) }

     function comment(id){
        
            alert("you are commented succesfully")
          }
        
     

    
    return(
        <div>
            <h1>Welcome : {username.toUpperCase()}</h1>
            <h1 className="productHead">List of other users all Posts</h1>
            <hr></hr>
            
            <table className="table table-bordered">
                <thead>
                    <tr>
                        
                        <th>PostId</th>
                        <th>UserID</th>
                        <th>PostName</th>
                        <th>PostContent</th>
                        <th>date</th>
                        <th>Like</th>
                        <th>Comment</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        carts.map(temp => {
                            if(temp.approved == 1){
                            return(
                                <tr>
                                    <td>{temp.id}</td>
                                    <td>{temp.uploadeduserid}</td>
                                    <td>{temp.postname}</td>
                                    <td>{temp.postcontent}</td>
                                    <td>{temp.date}</td>
                                    <td><button type="submit" className="btn btn-success" onClick={()=>like(temp.id)}>Like</button></td>
                                    <td><input type="text" className="comment" value={commentId} onChange={e=>setComment(e.target.value)} placeholder="comment"></input><br></br>
                                    <td><button type="submit" className="btn btn-warning" onClick={()=>comment(temp.id)}>Comment</button></td></td>
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

export default UserViewPosts;