import React from "react"

//import { useStaticQuery, graphql } from "gatsby"

import "mdbreact"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../components/pages/gallery/gallery.sass"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Gallery" />
      <div className="imgContainer">
        <img
          src="https://mdbootstrap.com/img/Others/documentation/img(118)-mini.jpg"
          className="img-fluid z-depth-1"
          alt="women"
        />
        <img
          src="https://mdbootstrap.com/img/Others/documentation/img(118)-mini.jpg"
          className="img-fluid z-depth-1"
          alt="women"
        />
        <img
          src="https://mdbootstrap.com/img/Others/documentation/img(118)-mini.jpg"
          className="img-fluid z-depth-1"
          alt="women"
        />
        <img
          src="https://mdbootstrap.com/img/Others/documentation/img(118)-mini.jpg"
          className="img-fluid z-depth-1"
          alt="women"
        />
        <img
          src="https://mdbootstrap.com/img/Others/documentation/img(118)-mini.jpg"
          className="img-fluid z-depth-1"
          alt="women"
        />
        <img
          src="https://mdbootstrap.com/img/Others/documentation/img(118)-mini.jpg"
          className="img-fluid z-depth-1"
          alt="women"
        />
        <img
          src="https://mdbootstrap.com/img/Others/documentation/img(118)-mini.jpg"
          className="img-fluid z-depth-1"
          alt="women"
        />
        <img
          src="https://mdbootstrap.com/img/Others/documentation/img(118)-mini.jpg"
          className="img-fluid z-depth-1"
          alt="women"
        />
        <img
          src="https://mdbootstrap.com/img/Others/documentation/img(118)-mini.jpg"
          className="img-fluid z-depth-1"
          alt="women"
        />
      </div>
    </Layout>
  )
}

export default IndexPage
