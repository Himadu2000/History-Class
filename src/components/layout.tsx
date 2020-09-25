/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import PropTypes from "prop-types"
import React from "react"
import Footer from "./main/footer"
import Navigation from "./main/navigation"
import "./main/style.sass"

const Layout = ({ children }) => (
  <>
    <Navigation />
    <main id="layoutContent">{children}</main>
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
