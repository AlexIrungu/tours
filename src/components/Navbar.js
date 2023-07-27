import React from "react";
import { Link } from 'react-router-dom'

function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    {/* <Link to="navbar-brand" >Navbar</Link> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" to="/" aria-current="page" >Danil Tours</Link>
        </li>
        <li className="nav-item">
          <Link  className="nav-link" to="/home" >Home</Link>
        </li>
        <li className="nav-item">
          <Link  className="nav-link" to="/about" >About</Link>
        </li>
        <li className="nav-item">
          <Link  className="nav-link" to="/service" >Service</Link>
        </li>
        <li className="nav-item">
          <Link  className="nav-link" to="/gallery" >Gallery</Link>
        </li>
        <li className="nav-item">
          <Link  className="nav-link" to="/faq" >Faq</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact" >ContactUs</Link>
        </li>
       
       
      </ul>
      
    </div>
  </div>
</nav>
    )

}

export default Navbar
