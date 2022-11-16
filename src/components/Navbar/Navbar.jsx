
import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>


<nav className="navbar navbar-expand-lg nav position-relative">
  <div className="container p-3">
    <Link className="navbar-brand h1 text-white" to="">START REACT</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item  pe-2 icon">
          <Link className="nav-link fw-bolder text-white " to="portifolo"><h5>PORTFOLIO</h5></Link>
        </li>
        <li className="nav-item pe-2 icon">
          <Link className="nav-link fw-bolder text-white " to="about"><h5>ABOUT</h5></Link>
        </li>
        <li className="nav-item pe-2  icon">
          <Link className="nav-link fw-bolder text-white " to="movies"><h5>Movies</h5></Link>
        </li>
        <li className="nav-item icon">
          <Link className="nav-link fw-bolder text-white " to="contact"><h5>Contact</h5></Link>
        </li>
        
      </ul>

    </div>
  </div>
</nav>
    
    
    
    
    </>
  )
}
