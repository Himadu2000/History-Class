import React from "react"

import {
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBInput,
  MDBBtn,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdbreact"

import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../components/pages/home/index.sass"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query GetAllPapers {
      allFlamelinkPapersContent(sort: { fields: listNumber, order: ASC }) {
        nodes {
          flamelink_id
          listNumber
          description
          category {
            term
            paper
            grade
          }
          downloadFile {
            url
          }
        }
      }
    }
  `)
  const Items = data.allFlamelinkPapersContent.nodes

  return (
    <Layout>
      <SEO title="Home" />
      <ul></ul>
      <table>
        <tr>
          <th>Paper</th>
          <th>Description</th>
          <th>Download</th>
        </tr>
        {Items.map(value => (
          <tr>
            <td>{value.listNumber}</td>
            <td>{value.description}</td>
            <td>
              <a href={value.downloadFile.url} download>
                Download
              </a>
            </td>
          </tr>
        ))}
      </table>
    </Layout>
  )
}

export default IndexPage
