import React from 'react'
import PropTypes from 'prop-types';
import {BrowserRouter as Router,Route,Switch,Link} from "react-router-dom"

 function Navbar(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <li> 
          <Link to="/">Home </Link>
          </li>
      <li> 
          <Link to="/add">Add User </Link>
          </li>
    <li> 
          <Link to="/github">Project Files </Link></li>
    </div>
  )
}
Navbar.defaultProps={
    title:" keine information",


}
    Navbar.proTypes={
        title: PropTypes.string.isRequired,
        
    }
export default Navbar;