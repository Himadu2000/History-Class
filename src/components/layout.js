/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

import PropTypes from "prop-types"

import Navigation from "./main/navigation"
import Footer from "./main/footer"

import "./main/style.sass"
import "./main/style.css"

const Layout = ({ children }) => {
  return (
    <>
      <Navigation id="navigationContainer" />
      <main id="layoutContent">{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
