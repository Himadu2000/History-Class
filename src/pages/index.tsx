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

import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { useStaticQuery, graphql } from "gatsby"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query GetAllPapers {
      allFlamelinkPapersContent(sort: { fields: listNumber, order: ASC }) {
        edges {
          node {
            description
            category {
              grade
              paper
              term
            }
            number
            downloadFile {
              url
            }
          }
        }
      }
    }
  `)
  const Items = data.allFlamelinkPapersContent.edges

  const data_columns = {
    columns: [
      {
        label: "ID",
        field: "id",
        sort: "asc",
      },
      {
        label: "Grade",
        field: "grade",
        sort: "asc",
      },
      {
        label: "Term",
        field: "term",
        sort: "asc",
      },
      {
        label: "Paper",
        field: "paper",
        sort: "asc",
      },
      {
        label: "Description",
        field: "description",
        sort: "asc",
      },
      {
        label: "Preview",
        field: "preview",
        sort: "asc",
      },
      {
        label: "Download",
        field: "download",
        sort: "asc",
      },
    ],
  }
  const data_rows = Items.map(value => ({
    id: value.node.number,
    grade: value.node.category.grade,
    term: value.node.category.term,
    paper: value.node.category.paper,
    description: value.node.description,
    preview: (
      <MDBBtn
        label="Download"
        href={value.node.downloadFile.url}
        id="checkbox5"
        size="sm"
      >
        Preview
      </MDBBtn>
    ),

    download: (
      <MDBBtn
        label="Download"
        download={value.node.downloadFile.url}
        id="checkbox5"
        size="sm"
      >
        Download
      </MDBBtn>
    ),
  }))

  return (
    <Layout>
      <SEO title="Home" />
      <MDBCard narrow>
        <MDBCardHeader className="view view-cascade gradient-card-header blue-gradient d-flex justify-content-between align-items-center py-2 mx-4 mb-3">
          <p className="white-text mx-3">Papers</p>
        </MDBCardHeader>
        <MDBCardBody cascade>
          <MDBTable btn fixed>
            <MDBTableHead columns={data_columns.columns} />
            <MDBTableBody rows={data_rows} />
          </MDBTable>
        </MDBCardBody>
      </MDBCard>
    </Layout>
  )
}

export default IndexPage
