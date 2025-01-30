import React from 'react';
import Login from'./login';
function Logout(){
    localStorage.removeItem("login");
    localStorage.removeItem("loginid");
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    return(
        <Login></Login>
    )
}
export default Logout;