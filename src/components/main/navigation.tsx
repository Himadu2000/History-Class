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
import UserIcon from "./components/userIcon"

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleCollapse = () => {
    setIsOpen(!isOpen)
  }

  return (
    <MDBNavbar color="blue" dark expand="md">
      <MDBNavbarBrand>
        <strong>
          <Link to="/" className="white-text">
            History Class
          </Link>
        </strong>
      </MDBNavbarBrand>
      <MDBNavbarToggler onClick={toggleCollapse} />
      <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
        <MDBNavbarNav right>
          <MDBNavItem>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </MDBNavItem>
          <MDBNavItem>
            <Link to="/gallery" className="nav-link">
              Gallery
            </Link>
          </MDBNavItem>
          <MDBNavItem>
            <UserIcon />
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  )
}

export default NavBar
