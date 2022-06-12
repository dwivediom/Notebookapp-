import React,{useEffect} from 'react'
import { Link ,useLocation, useNavigate } from "react-router-dom";


function Navbar() {
  let location= useLocation(); 
  const navigate = useNavigate()
  const handlelogout=()=>{
      navigate("/login")
      localStorage.clear();
  }
 
  return (
    <div>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#!">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/"?"active":""}`} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/about"?"active":""}`} to="/about">about</Link>
        </li>
   
      </ul>
    </div>
    {!localStorage.getItem("token")?<div><Link className="btn btn-primary mx-3" to="/login" role="button">Login </Link>
    <Link  className="btn btn-primary mx-3" to="/signup" role="button"> Sign up </Link></div>
    : <button onClick={handlelogout} className='btn btn-primary'> logout</button>}
  </div>
</nav>


    </div>
  )
}

export default Navbar