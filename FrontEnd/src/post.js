import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link, Outlet,useNavigate } from "react-router-dom";


function Post(){

    var [carts, setCarts]  = useState([]);
    var username=localStorage.getItem("username");

    function getCarts(){
        var userId = localStorage.getItem("loginid");
        axios.get("http://localhost:8081/user/getMyPosts" ).then((res)=> {
            setCarts(res.data);
        });
    }

    useEffect(getCarts, []);

    function approvedButton(id){
        var uploadeduserid;
        var postname;
        var postcontent;
        var date;
        var approved;
        var rejected;
        var id;
        carts.map(temp=>
            {
                if(temp.id == id){
                    uploadeduserid=temp.uploadeduserid;
                    postname=temp.postname;
                    postcontent=temp.postcontent;
                    date=temp.date;
                    approved=1;
                    rejected=0;
                    id=temp.id;

                }
            })

        
        axios.get("http://localhost:8081/user/updatePost?id="  +id+"&approved=" +approved+"&rejected="+rejected+ "&date="+date+"&postname=" +postname+"&postcontent="+postcontent+"&uploadeduserid="+uploadeduserid).then((res) => {
            alert("post was approved and it will be avaliabe in viewPosts");
            getCarts();
        });
    }


    function rejectedButton(){
        alert("post is not-approved and user should not able to post")

    }



    return(
        <div>
            <h1>Welcome : {username.toUpperCase()}</h1>
            <h1 className="productHead">List of all Posts</h1>
            <h2 className="productHead">Posts are currently waiting or rejected</h2>
            <hr></hr>
            
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>PostId</th>
                        <th>UserId</th>
                        <th>PostName</th>
                        <th>PostContent</th>
                        <th>date</th>
                        <th>Approved</th>
                        <th>Rejected</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        carts.map(temp => {
                            if(temp.approved == 0){
                            return(
                                <tr>
                                    <td>{temp.id}</td>
                                    <td>{temp.uploadeduserid}</td>
                                    <td>{temp.postname}</td>
                                    <td>{temp.postcontent}</td>
                                    <td>{temp.date}</td>
                                    <td><button type="submit" className="btn btn-success" onClick={()=>approvedButton(temp.id)}>Approve</button></td>
                                    <td><button type="submit" className="btn btn-danger" onClick={()=>rejectedButton(temp.id)}>Reject</button></td>


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
export default Post;