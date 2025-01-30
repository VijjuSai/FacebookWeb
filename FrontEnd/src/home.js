import React from "react";
import { Link ,useNavigate} from "react-router-dom";
import './style.css'

function Home(){

  var nav=useNavigate();
  
    if(localStorage.getItem("login") != null){
      alert("you can logout and go to home page")
      nav('./userDash')
    }else{
    return (

        <div className="float-container">

        <div className="float-child child1">

        <p class="clean">facebook</p>

        <p class="clean1">The place where you can connect with the digital world</p>
        
        </div>
        <div className="float-child child2 home">
                <div className="imagecontainer">
                  <img src="user.png" alt="Avatar" className="Avatar"></img>
                </div>
                <h1 className="drain">Login</h1>
                <div className="row input1">

                <div className="col-md-4">
                <Link to="login" className="saiNath myMan">UserLogin</Link><br></br>
                <Link to="adminLogin" className="saiNath myMan">Adminlogin</Link><br></br>
                    

                </div>

              </div>                
        </div>
        </div>
)  

    }
  }

export default Home;