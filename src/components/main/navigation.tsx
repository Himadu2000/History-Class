import React, { useState } from "react"

import { Link } from "gatsby"

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
  MDBContainer,
  MDBIcon,
} from "mdbreact"
import "./navigation.sass"

const NavbarPage = () => {
  const [collapseID, setCollapseID] = useState(false)
  const toggleCollapse = collapseID => () => setCollapseID(!collapseID)

  return (
    <MDBContainer className="navigationContainer">
      <MDBNavbar color="secondary-color" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">History Class</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={toggleCollapse("navbarCollapse3")} />
        <MDBCollapse id="navbarCollapse3" isOpen={collapseID} navbar>
          <MDBNavbarNav left>
            <Link to="/" className="item">
              Home
            </Link>
            <Link to="/gallery" className="item">
              Gallery
            </Link>
            <Link to="/login" className="item">
              Log In
            </Link>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <>
              <MDBDropdown>
                <MDBDropdownToggle className="dopdown-toggle" nav>
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg"
                    className="rounded-circle z-depth-0"
                    style={{ height: "35px", padding: 0 }}
                    alt="user-icon"
                  />
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default" right>
                  <MDBDropdownItem href="#!">My account</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Log In</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </MDBContainer>
  )
}

export default NavbarPage
