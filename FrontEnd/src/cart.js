import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link, Outlet,useNavigate } from "react-router-dom";


function Cart(){

    var [carts, setCarts]  = useState([]);
    var [getCoins, setCoins]  = useState([]);
    var username=localStorage.getItem("username");
    var coins=0;
    var total=0;

    function getCarts(){
        var userId = localStorage.getItem("loginid");
        axios.get("http://localhost:4000/cart?userId=" + userId).then((res)=> {
            setCarts(res.data);
        });
    }
    function getCoinsFromdb(){
        var userId = localStorage.getItem("loginid");
        axios.get("http://localhost:4000/users?id=" + userId).then((res)=> {
            setCoins(res.data);
        });
    }

    useEffect(getCarts, []);
    
    useEffect(getCoinsFromdb, []);
    

    function removeCart(cartId){
        axios.delete("http://localhost:4000/cart/" + cartId).then((res) => {
            alert("cart item is deleted");
            getCarts();
        });
    }
    

    //remove all the cart in single button
    carts.map(temp=>{
        total+=temp.price;
    })
    getCoins.map(temp=>{
        coins+=temp.supercoins;

    })
    if(total==0){
        total=100;
    }
    if(localStorage.getItem("login")==null){
        total=0;
    }
    
    return(
        <div>
            <h1>Welcome : {username}</h1>
            <h1 className="productHead">My Cart</h1>
            <hr></hr>
            
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Id</th>
                        <h>Name</h>
                        <th>Plates</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        carts.map(temp => {
                            return(
                                <tr>
                                    <td>{temp.id}</td>
                                    <td>{temp.name}</td>
                                    <td>{temp.noofplates}</td>
                                    <td>{temp.price}</td>
                                    
                                    <td>
                                        <button className="btn btn-sm btn-danger" type="button" onClick={() => removeCart(temp.id)}> Remove </button>
                                    </td>
                                </tr>
                            )
                            
                        })
                    }
                </tbody>
            </table>
            <div className="sai">
            <h3>You having supercoins of = {coins}</h3>
            <h3>You bill will reduced to TotalBill - supercoins</h3>
           
           
            <h3 className="total">Total Bill was = {total-coins}</h3></div>
            <Link to='/products'>BackToMenu</Link>
            <Outlet></Outlet>
        </div>
    )
}

export default Cart