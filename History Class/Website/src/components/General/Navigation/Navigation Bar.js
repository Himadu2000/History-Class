import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon
} from "mdbreact";
import "./Navigation.css";
const history = require("history").createBrowserHistory();
class NavbarPage extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <MDBNavbar color='default-color' dark expand='md' className='Main'>
        <MDBNavbarBrand>
          <strong className='white-text'>Hello</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id='navbarCollapse3' isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem>
              <MDBNavLink to='/'>Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to='/Grade/6'>Grade 6</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to='/Grade/7'>Grade 7</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to='/Grade/8'>Grade 8</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to='/Grade/9'>Grade 9</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to='/Grade/10'>Grade 10</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to='/Grade/OL'>O/L</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to='/Grade/AL'>A/L</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to='/Photos'>Photos</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem />
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <MDBIcon icon='user' />
                </MDBDropdownToggle>
                <MDBDropdownMenu className='dropdown-default'>
                  <MDBDropdownItem href='http://himadusirimannagame.atwebpages.com/'>
                    User
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink onClick={() => history.go(+1)} to=''>
                Go Foward
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink onClick={() => history.go(-1)} to=''>
                Go Back
              </MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default NavbarPage;
