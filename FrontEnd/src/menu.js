import React, { useEffect, useState } from 'react';
import {BrowserRouter, Routes, Route, Link, Outlet} from 'react-router-dom';


import Register from './register';

import Login from './login';


import Home from './home';
import './style.css'

import Logout from './logout';
import AdminDash from './adminDash';
import AdminLogin from './adminlogin';
import ViewUsers from './viewUsers';
import Post from './post';
import ReportUser from './reportUser';
import DeleteUser from './deleteUser';
import UserDash from './userDash';
import UserViewPosts from './usersAllPost';
import SearchUsers from './usersSearch';
import UserReportToAnotherUser from './userReport';
import UserProfile from './getUserProfile';
import AddPost from './addPost';
import GetAdmin from './seeAdminProfile';
import ViewMyPostandLikes from './viewMyPost';
import Chat from './userChatting';
import ViewMyMessages from './viewmymsg';
import AdminChat from './adminChat';
import AdminViewMsg from './adminviewmsg';



function Menu(){

  var [isLogin, setIsLogin] = useState(0);

  function checkLogin(){
    if( localStorage.getItem("login") == null ){
      setIsLogin(0);
    }
    else{
      setIsLogin(1);
    }
  }

  useEffect(checkLogin, []);

  return(

    <div className='container'>
      <BrowserRouter>
        
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
              <li className="nav-item">

              <Link className="nav-link" to="/">Home</Link>
              </li>
                              
                
                 
                {
                  isLogin == 0 &&
                  <li className="nav-item">
                    <Link className="nav-link" to="/register">Register</Link>
                  </li>
                }
                {
                  isLogin == 0 &&
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                  </li>
                }
                {
                  isLogin == 1 &&
                  <li className="nav-item">
                    <Link className="nav-link" to="/logout">Logout</Link>
                  </li>
                }
                <a className="navbar-brand hrfff heading" href="#" >&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; facebook.com</a>
                
                
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path='/' element={<Home></Home>} ></Route>
          <Route path='/userDash' element={<UserDash></UserDash>} ></Route>
          <Route path='/post' element={<Post></Post>} ></Route>
          <Route path='/viewMyChatBox' element={<ViewMyMessages></ViewMyMessages>} ></Route>
          <Route path='/addPost' element={<AddPost></AddPost>} ></Route>
          <Route path='/getMyTotalLikes' element={<ViewMyPostandLikes></ViewMyPostandLikes>} ></Route>
          <Route path='/login' element={<Login></Login>} ></Route>
          <Route path='/deleteUser' element={<DeleteUser></DeleteUser>} ></Route>
          <Route path='/report' element={<ReportUser></ReportUser>} ></Route>
          <Route path='/chatwithUsers' element={<AdminChat></AdminChat>} ></Route>
          <Route path='/getAdminMsg' element={<AdminViewMsg></AdminViewMsg>} ></Route>
          <Route path='/logout' element={<Logout></Logout>} ></Route>
          <Route path='/register' element={<Register></Register>} ></Route>
          <Route path='/adminDash' element={<AdminDash></AdminDash>} ></Route>
          <Route path='/adminLogin' element={<AdminLogin></AdminLogin>} ></Route>
          <Route path='/viewAllUsers' element={<ViewUsers></ViewUsers>} ></Route>
          <Route path='/getAllPosts' element={<Post></Post>} ></Route>
          <Route path='/viewUserSearch' element={<SearchUsers></SearchUsers>} ></Route>
          <Route path='/usersAllPosts' element={<UserViewPosts></UserViewPosts>} ></Route>
          <Route path='/usersReporting' element={<UserReportToAnotherUser></UserReportToAnotherUser>} ></Route>
          <Route path='/chatting' element={<Chat></Chat>} ></Route>
          <Route path='/getAdmin' element={<GetAdmin></GetAdmin>} ></Route>
          
          <Route path='/getYourProfile' element={<UserProfile></UserProfile>} ></Route>
        </Routes>
      </BrowserRouter>

      </div>

)

}

export default Menu;