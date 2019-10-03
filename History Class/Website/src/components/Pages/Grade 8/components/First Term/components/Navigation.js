import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBContainer
} from "mdbreact";

class NavbarPage extends Component {
  state = {
    collapseID: ""
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  render() {
    return (
      <MDBContainer>
        <MDBNavbar color='secondary-color' dark expand='md'>
          <MDBNavbarBrand>
            <strong className='white-text'>Papers</strong>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse("navbarCollapse3")} />
          <MDBCollapse
            id='navbarCollapse3'
            isOpen={this.state.collapseID}
            navbar>
            <MDBNavbarNav left>
              <MDBNavItem active>
                <MDBNavLink to='/Grade/8/Term/ST/Papers/PP'>
                  Grade 8 First Term
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to='/Grade/8/Term/ST/Papers/PP'>
                  Provincial Papers
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to='/Grade/8/Term/ST/Papers/PP'>
                  Western Province
                </MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </MDBContainer>
    );
  }
}

export default NavbarPage;
