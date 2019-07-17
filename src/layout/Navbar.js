import React from 'react'
import PropTypes from 'prop-types';
import {BrowserRouter as Router,Route,Switch,Link} from "react-router-dom"

 function Navbar({title}) {
  return (
    <nav className ="navbar-nav navbar-expand-lg navbar-dark bg-dark mb-3 p-3">
    <a href="/" className="a.navbar-brand">{title}</a>
    <ul className="navbar-nav ml-auto">
    <li className ="nav-item active"> 
        <Link to="/" className="nav-link">Home </Link> 
    </li>  
    <li className ="nav-item active"> 
        <Link to="/add" className="nav-link">Add USer </Link> 
    </li>  
    <li className ="nav-item active"> 
        <Link to="/github" className="nav-link">Project Files</Link> 
    </li> 
   </ul>
   </nav>
  )
}
Navbar.defaultProps={
    title:" keine information",

}
    Navbar.proTypes={
        title: PropTypes.string.isRequired,
        
    }
export default Navbar;