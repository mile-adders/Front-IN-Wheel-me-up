/* eslint-disable no-unused-vars */
import React, { Component, Link } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBCollapse, MDBContainer,
  MDBHamburgerToggler } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import HamburgerToggler from 'react-bootstrap';

class NavbarPage extends Component {
state = {
  collapse1: false,
  collapseID: '',
}

toggleCollapse = collapseID => () => {
  this.setState(prevState => ({ collapseID: (prevState.collapseID !== collapseID ? collapseID : '') }));
}

toggleSingleCollapse = collapseId => {
  this.setState({
    ...this.state,
    [collapseId]: !this.state[collapseId],
  });
}

render() {
  return (   
    <nav className="nav-wrapper">
      <div className="container">
        <a href="/" className="brand-logo"><h4>Wheel-Me-Up</h4></a>
      </div>
      <ul className="right" >
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Log-In</Link></li>
        <li><Link to="/signup">Sign-Up</Link></li>
      </ul>
    </nav>
  );
}
}

export default NavbarPage;