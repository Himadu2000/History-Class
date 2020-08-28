import { Link } from "gatsby"
import {
  MDBCollapse,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBNavItem,
} from "mdbreact"
import React, { useState } from "react"

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleCollapse = () => {
    setIsOpen(!isOpen)
  }

  return (
    <MDBNavbar color="blue" dark expand="md">
      <MDBNavbarBrand>
        <strong className="white-text">
          <Link to="/" style={{ color: "white" }}>
            History Class
          </Link>
        </strong>
      </MDBNavbarBrand>
      <MDBNavbarToggler onClick={toggleCollapse} />
      <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
        <MDBNavbarNav left></MDBNavbarNav>
        <MDBNavbarNav right>
          <MDBNavItem>
            <Link to="/" className="item">
              Home
            </Link>
            <Link to="/gallery" className="item">
              Gallery
            </Link>
            <Link to="/login" className="item">
              Log In
            </Link>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  )
}

export default NavBar
