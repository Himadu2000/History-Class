/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact"

import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

const Layout = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <MDBFooter
        color="blue-grey"
        className="page-footer font-small lighten-5 pt-0"
      >
        <div style={{ backgroundColor: "#21d192" }}>
          <MDBContainer>
            <MDBRow className="py-4 d-flex align-items-center">
              <MDBCol
                md="6"
                lg="5"
                className="text-center text-md-left mb-4 mb-md-0"
              >
                <h6 className="mb-0 white-text">
                  Get connected with us on social networks!
                </h6>
              </MDBCol>
              <MDBCol md="6" lg="7" className="text-center text-md-right">
                <a className="fb-ic ml-0" href="https://www.lalith.dx.am">
                  <i className="fab fa-facebook-f white-text mr-lg-4"> </i>
                </a>
                <a className="tw-ic" href="https://www.lalith.dx.am">
                  <i className="fab fa-twitter white-text mr-lg-4"> </i>
                </a>
                <a className="gplus-ic" href="https://www.lalith.dx.am">
                  <i className="fab fa-google-plus-g white-text mr-lg-4"> </i>
                </a>
                <a className="li-ic" href="https://www.lalith.dx.am">
                  <i className="fab fa-linkedin-in white-text mr-lg-4"> </i>
                </a>
                <a className="ins-ic" href="https://www.lalith.dx.am">
                  <i className="fab fa-instagram white-text mr-lg-4"> </i>
                </a>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
        <MDBContainer className="mt-5 mb-4 text-center text-md-left">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mb-4 dark-grey-text">
              <h6 className="text-uppercase font-weight-bold">
                <strong>Company name</strong>
              </h6>
              <hr
                className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px" }}
              />
              <p>Paragraph</p>
            </MDBCol>
            <MDBCol md="2" lg="2" xl="2" className="mb-4 dark-grey-text">
              <h6 className="text-uppercase font-weight-bold">
                <strong>Products</strong>
              </h6>
              <hr
                className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px" }}
              />
              <p>
                <a href="#!" className="dark-grey-text">
                  Example
                </a>
              </p>
              <p>
                <a href="#!" className="dark-grey-text">
                  Example
                </a>
              </p>
              <p>
                <a href="#!" className="dark-grey-text">
                  Example
                </a>
              </p>
              <p>
                <a href="#!" className="dark-grey-text">
                  Example
                </a>
              </p>
            </MDBCol>
            <MDBCol md="3" lg="2" xl="2" className="mb-4 dark-grey-text">
              <h6 className="text-uppercase font-weight-bold">
                <strong>Useful links</strong>
              </h6>
              <hr
                className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px" }}
              />
              <p>
                <a href="#!" className="dark-grey-text">
                  Account
                </a>
              </p>
              <p>
                <a href="#!" className="dark-grey-text">
                  Become
                </a>
              </p>
              <p>
                <a href="#!" className="dark-grey-text">
                  Rates
                </a>
              </p>
              <p>
                <a href="#!" className="dark-grey-text">
                  Help
                </a>
              </p>
            </MDBCol>
            <MDBCol md="4" lg="3" xl="3" className="mb-4 dark-grey-text">
              <h6 className="text-uppercase font-weight-bold">
                <strong>Contact</strong>
              </h6>
              <hr
                className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px" }}
              />
              <p>
                <i className="fa fa-home mr-3" /> Colombo, Example 01022, Sri
                Lanka
              </p>
              <p>
                <i className="fa fa-envelope mr-3" /> gampolagelalith@gmail.com
              </p>
              <p>
                <i className="fa fa-phone mr-3" /> + 94 773 434 354
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()}/{new Date().getMonth()} /
            {new Date().getDay()} Copyright:
            <a href="http://www.historyclass.lk"> HistoryClass.lk</a>
          </MDBContainer>
        </div>
      </MDBFooter>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
