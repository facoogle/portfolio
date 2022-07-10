import React from "react";
import "./Nav.css"
import { Link } from "react-router-dom";
export default function Nav(){
    return(
//      <div class="container">
//        <nav class="navbar navbar-expand-lg bg-light" >
//  <div class="container-fluid">
//    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
//      <span class="navbar-toggler-icon"></span>
//    </button>
//    <div class="collapse navbar-collapse" id="navbarNavDropdown">
//      <ul class="navbar-nav">
//        <li class="nav-item">
//          <a class="nav-link active" aria-current="page" href="#">Home</a>
//        </li>
//        <li class="nav-item">
//          <a class="nav-link" href="#">Proyectos</a>
//        </li>
//        <li class="nav-item">
//          <a class="nav-link" href="#">Curriculum</a>
//        </li>
//       
//      
//    </div>
//  
//
//</nav>
//</div>


<div className="container">      
<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <Link class="nav-item" to='/'>
        <span className="nav-link">
          Home
        </span>
      </Link>
      <Link class="nav-item" to='/proyects'>
        <span className='nav-link'>Proyectos</span>
      </Link>
      <Link class="nav-item" to='/cv'>
        <span className='nav-link'>CV</span>
      </Link>
      <Link class="nav-item" to='/contact'>
        <span className='nav-link'>Contact</span>
      </Link>
      </ul>
      
    </div>
  </div>
</nav>
</div>
  



 )
}


/* <div class="container">   
    <nav  className="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <Link class="nav-item" to='/'>
        <span className="nav-link">
          Home
        </span>
      </Link>
      <Link class="nav-item" to='/about'>
        <span className='nav-link'>Contact</span>
      </Link>
      </ul>
      </div>
        
      </div>
    </nav>
    </div> */