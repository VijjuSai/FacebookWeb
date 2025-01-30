import React from "react";
import { Outlet,Link } from "react-router-dom";
import './style.css'

function AdminDash(){

    return(
        <div>
            <h1>
                Welcome to AdminDashBoard
            </h1>
            <div >
            <div className='navg'>
            <Link to ="/viewAllUsers" className='text'>viewUsers</Link>&nbsp;&nbsp;
            <Link to ="/post" className='text'>requestedPosts</Link>&nbsp;&nbsp;
            <Link to ="/report" className='text'>gotReportedUsers</Link>&nbsp;&nbsp;
            <Link to ="/chatwithUsers" className='text'>chatwithUsers</Link>&nbsp;&nbsp;
            <Link to ="/getAdminMsg" className='text'>viewMessages</Link>&nbsp;&nbsp;
            <Link to ="/getAdmin" className='text'>getYourProfile</Link>&nbsp;&nbsp;
            <Link to ="/deleteUser" className='text'>deleteUser</Link>&nbsp;&nbsp;
            </div>
        
            <Outlet></Outlet>  
        </div>
    
        </div>
    )
}
export default AdminDash;