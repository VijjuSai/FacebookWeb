import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link, Outlet,useNavigate } from "react-router-dom";


function SearchUsers(){

    var [carts, setCarts]  = useState([]);
    var username=localStorage.getItem("username");
    const[search,setSearch]= useState('');

    function getCarts(){
        var userId = localStorage.getItem("loginid");
        axios.get("http://localhost:8081/getAll/viewAllUsers" ).then((res)=> {
            setCarts(res.data);
        });
    }

    useEffect(getCarts, []);
    
    function removeCart(cartId){
        axios.delete("http://localhost:4000/users/" + cartId).then((res) => {
            alert("User deleted succesfully");
            getCarts();
        });
    }
   
    function myFunction() {
        
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td")[1];
          if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
            } else {
              tr[i].style.display = "none";
            }
          }       
        }
      }
     
      

    
    return(
        <div>
            <h1>Welcome : {username}</h1>
            <h1 className="productHead">List of All Users</h1>
            <hr></hr>
            
            <input type="text" id="myInput" onChange={()=>myFunction()} placeholder="Search for names.." title="Type in a name"></input>
            
      <br/>
     
            <table className="table table-bordered" id="myTable">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Phone</th>
                        <th>Gender</th>
                        <th>reports</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        carts.map(temp => {
                            if(temp.report == 0){
                            return(
                                <tr>
                                    <td>{temp.id}</td>
                                    <td>{temp.name}</td>
                                    <td>{temp.email}</td>
                                    <td>{temp.password}</td>
                                    <td>{temp.phone}</td>
                                    <td>{temp.gender}</td>
                                    <td>{temp.report}</td>
                                    
                                    
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

export default SearchUsers;