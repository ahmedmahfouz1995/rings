import React, { useState } from 'react'
import Logo from "../../imgs/il_570xN.2546856727_q40j.jpg"
import user from "../../imgs/149071.png"
import cartImage from "../../imgs/images.png"
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
export default function Header(props) {
  const [userName,setUserName]=useState(null);
  const {count}=useSelector(
    (state) => state.cart
  );
  const [userImage,setuserImage]=useState(user);
  const Name = "";
  useEffect(() => {
  },[]);
  return (
    <header id="header" className="fixed-top d-flex align-items-center">
    <div className="container-fluid container-xl d-flex align-items-center justify-content-lg-between">

      <h1 className="logo me-auto me-lg-0"> <a href="index.html" className="logo me-auto me-lg-0"><img src={Logo} alt="" className="img-fluid"/></a></h1>
      <nav id="navbar" className="navbar order-last order-lg-0">
        <ul>
          <li><a className="nav-link scrollto active" href="/">Home</a></li>
          <li><a className="nav-link scrollto" href="/">About</a></li>
          <li><a className="nav-link scrollto" href="#gallery">Gallery</a></li>
          <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
        </ul>
      <div className="navbar order-last order-lg-0">
        <ul >
          <li><a className="nav-link scrollto" href="#hero">Our Team</a></li>
          <li><a className="nav-link scrollto" href="#about">Careers</a></li>
        </ul>
      </div>
      </nav>
      <div className="d-flex align-items-center" >
         {userName && <a className="nav-link scrollto mx-3" href="#hero">{{Name}}</a>
         } 
         {!userName && <a className="nav-link scrollto mx-3" href="/Contact">Log in</a>
         } 
          <a className="nav-link scrollto mx-3" href="#contact" ><h1 className="logo me-auto me-lg-0"> <img src={userImage} alt="" style={{width:"40px",height:"40px"}} className="img-fluid"/></h1></a>
        <div  className="logo me-auto me-lg-0"> <NavLink to={"/cart"}><p id='cartNum'>{count}</p></NavLink><img id='cart' src={cartImage} alt="" style={{width:"40px",height:"40px"}} className="img-fluid "/> </div>
      </div>  
      </div>
  </header>
  )
}
