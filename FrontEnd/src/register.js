import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register(){

    var [email, setEmail] = useState();
    var [password, setPassword] = useState();
    var [name, setName] = useState();
    var [phone, setPhone] = useState();
    var [gender, setGender] = useState();
    var[error,errorMessage]=useState();
    var[errorPhone,errorMessaagePhone]=useState();
    var[errorPswd,errorMessagePSwd]=useState();
    var nav = useNavigate();


    function saveUser(){
        if(name.length <3 || name.length>8 ){
            errorMessage("name length should >3 and <8")
            alert("Enter proper length")

        }else if(password.length<3 || password.length>8){

            errorMessagePSwd ("Password length should >3 and <8")
            alert("Enter password in proper length")
    } else if  (name.localeCompare("Admin")  ==0 ){
        errorMessage("Please change name or Register with other name")
        alert("Please Register with other name")
    }
        else if(phone.length !=10 ){
            errorMessaagePhone("Enter 10 digit phone number")
            alert("Enter 10 digit vaild Phone Number")
        }
        else{
        var user = {
            "name":name,
            "email" : email,
            "password" : password,
            "phone":phone,
            "gender":gender,
            "report":0
            
        };
        axios.get("http://localhost:8081/user/register?&email="+email+"&gender="+gender+"&name="+name+"&password="+password+"&phone="+phone).then((res)=>{   
            alert("Registered succesfully -> Now you can login")
            nav('/login');
        });
    }
}

    return(
        
        <div className="float-container">
        <div className="float-child child1">
    <p class="clean">facebook</p>
    <p class="clean1">The place where you can connect with the digital world</p>
    </div>
        <div className="float-child child2 regi">
            
               <form action="action_page.php" method="post">
                        <div className="imagecontainer">
                          <img src="user.png" alt="Avatar" className="Avatar"></img>
                        </div>
                        <h1 className="drain">Register</h1>
                        <hr></hr>
                        <h3 className="text-danger">{errorMessage}</h3>
                        <div className="row input1">
                        <div className="col-md-4">
                        <div className="form-group">
                                
                                <input className="form-control vijju" required type="text" placeholder='Enter your name' onChange={e => (setName(e.target.value))} />
                            </div>
                            <span>{error}</span>
                            <div className="form-group">
                                
                                <input className="form-control vijju" required type="email" placeholder='Enter your email' onChange={e => (setEmail(e.target.value))} />
                            </div>
                            <span>{errorPswd}</span>
                            <div className="form-group">
                             
                                <input className="form-control vijju"  required type="password" placeholder='Enter password' onChange={e => (setPassword(e.target.value))} />
                            </div>
                            <span>{errorPhone}</span>
                            <div className="form-group">
                            
                            <input className="form-control vijju" type="text" placeholder="enter phone number" required onChange={e => (setPhone(e.target.value))} />
                        </div>
                        
                            <label for="gender" className="gen1 vijju">Gender :</label>                       
                        <select className="vijju" onChange={e => (setGender(e.target.value))} >
                            <option className="vijju">pleaseSelect</option>
                            <option className="vijju">male</option>
                            <option className="vijju">female</option>
                        </select>
                        <div className="form-group">
                            <button type="button" className="btn btn-primary btn2 vijju green" onClick={saveUser}>Register</button>
                        </div>
                        </div>
      
                    </div>
                    </form>
                </div>
        </div>      
    )
    
}

export default Register;