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
        <MDBNavbar color='red' dark expand='md'>
          <MDBNavbarBrand>
            <strong className='white-text'>Term</strong>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse("navbarCollapse3")} />
          <MDBCollapse
            id='navbarCollapse3'
            isOpen={this.state.collapseID}
            navbar>
            <MDBNavbarNav left>
              <MDBNavItem>
                <MDBNavLink to='/Grade/6/'>Grade 6 Section</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to='/Grade/6/Term/LWP'>
                  Lesson Wise Papers
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to='/Grade/6/Term/FT'>First term</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to='/Grade/6/Term/FT'>Second Term</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to='/Grade/6/Term/FT'>Third Term</MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </MDBContainer>
    );
  }
}

export default NavbarPage;
