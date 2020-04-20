import React from "react"

import { MDBRow, MDBCol, MDBContainer } from "mdbreact"

import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { useStaticQuery, graphql } from "gatsby"
import "../components/pages/gallery/gallery.sass"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="imgContainer">
        <img
          src="https://mdbootstrap.com/img/Others/documentation/img(118)-mini.jpg"
          className="img-fluid z-depth-1"
          alt=""
        />{" "}
        <img
          src="https://mdbootstrap.com/img/Others/documentation/img(118)-mini.jpg"
          className="img-fluid z-depth-1"
          alt=""
        />{" "}
        <img
          src="https://mdbootstrap.com/img/Others/documentation/img(118)-mini.jpg"
          className="img-fluid z-depth-1"
          alt=""
        />{" "}
        <img
          src="https://mdbootstrap.com/img/Others/documentation/img(118)-mini.jpg"
          className="img-fluid z-depth-1"
          alt=""
        />{" "}
        <img
          src="https://mdbootstrap.com/img/Others/documentation/img(118)-mini.jpg"
          className="img-fluid z-depth-1"
          alt=""
        />
      </div>
    </Layout>
  )
}

export default IndexPage
