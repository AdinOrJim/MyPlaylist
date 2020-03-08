import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';
import logo from '../assets/logo2.png'

class Nav extends Component{
    render(){
        return(
           <>
  <Navbar  variant="dark" className="navbar">
    <Navbar.Brand className="logo">
      <img
        alt=""
        src={logo}
        width="20%"
        height="10%"
        className="d-inline-block align-top"
      />{' '}
      <span className="logoText">iVibe</span>
    </Navbar.Brand>
  </Navbar>
</>
        )
    }
}

export default Nav;