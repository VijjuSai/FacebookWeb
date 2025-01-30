import React from 'react';
import {useEffect,useState} from 'react';
import axios from 'axios';
import './style.css'
import { useNavigate} from 'react-router-dom';
//import './css/logincss.css'

//import {useHistory} from 'react-router-dom';

function AdminLogin(){
    

    var [carts, setCarts]  = useState([]);
    var username=localStorage.getItem("username");
    var [email, setEmail] = useState();
    var [password, setPassword] = useState();
    var [errorMessage, setErrorMessage] = useState();
    var nav = useNavigate();

    function getCarts(){
        var userId = localStorage.getItem("loginid");
        axios.get("http://localhost:8081/admin/getAll" ).then((res)=> {
            setCarts(res.data);
        });
    }

    useEffect(getCarts, []);

    function checkLogin(){
       carts.map(temp =>{
        if(temp.email == email && temp.password == password){
            localStorage.setItem("login", 1);
            localStorage.setItem("loginid",temp.id)
            localStorage.setItem("username",temp.name)
            localStorage.setItem("email",temp.email)
            console.log(temp.name);
            nav('/adminDash')


        }else if(temp.email =="" && temp.password ==""){
            setErrorMessage("Invalid email and password");
                return;

        }else{
            setErrorMessage("Invalid email and password");
            return;

        }
       })
    }


    return(
        <div className="float-container">

        <div className="float-child child1">

    <p class="clean">facebook</p>

    <p class="clean1">The place where you can connect with the digital world</p>

    </div>

        <div className="float-child child2">
               <form action="action_page.php" method="post">

                        <div className="imagecontainer">

                          <img src="user.png" alt="Avatar" className="Avatar"></img>

                        </div>

                        <h1 className="drain">Login</h1>
                        <h3 className="text-danger">{errorMessage}</h3>

                        <div className="row input1">

                        <div className="col-md-4">

                            <div className="form-group">

                                <input className="form-control vijju" required type="email" placeholder='Enter your email' onChange={e => (setEmail(e.target.value))} />

                            </div>

                            <div className="form-group">

                                <input className="form-control vijju"  required type="password" placeholder='Enter password' onChange={e => (setPassword(e.target.value))} />

                            </div>

                            <div className="form-group">

                                <button type="button" className="btn btn-primary btn1 vijju" onClick={checkLogin}>Login</button>

                            </div>

                        </div>

                      </div>                

                </form>

                </div>

               

                </div>

           

        )  
}


export default AdminLogin;

