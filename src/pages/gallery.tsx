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
    query GetAllPapersForGallery {
      allFlamelinkPapersContent(sort: { fields: listNumber, order: ASC }) {
        edges {
          node {
            id
            description
            flamelink_id
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
  const listItems = Items.map(value => (
    <li key={value.node.flamelink_id}>
      {value.node.category.grade}
      {value.node.category.paper}
      {value.node.category.term}
      {value.node.description}
      {value.node.downloadFile.url}
    </li>
  ))

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
    id: value.node.flamelink_id,
    grade: value.node.category.grade,
    term: value.node.category.term,
    paper: value.node.category.paper,
    description: value.node.description,
    preview: (
      <MDBBtn
        label="Download"
        href={value.node.downloadFile.url}
        id="checkbox5"
      />
    ),

    download: (
      <MDBBtn
        label="Download"
        download={value.node.downloadFile.url}
        id="checkbox5"
      />
    ),
  }))

  return (
    <Layout>
      <SEO title="Home" />
      {listItems}
      <MDBCard narrow>
        <MDBCardHeader className="view view-cascade gradient-card-header blue-gradient d-flex justify-content-between align-items-center py-2 mx-4 mb-3">
          <div>
            <MDBBtn outline rounded size="sm" color="white" className="px-2">
              <i className="fa fa-th-large mt-0"></i>
            </MDBBtn>
            <MDBBtn outline rounded size="sm" color="white" className="px-2">
              <i className="fa fa-columns mt-0"></i>
            </MDBBtn>
          </div>
          <a href="#" className="white-text mx-3">
            Table name
          </a>
          <div>
            <MDBBtn outline rounded size="sm" color="white" className="px-2">
              <i className="fas fa-pencil-alt mt-0"></i>
            </MDBBtn>
            <MDBBtn outline rounded size="sm" color="white" className="px-2">
              <i className="fas fa-times mt-0"></i>
            </MDBBtn>
            <MDBBtn outline rounded size="sm" color="white" className="px-2">
              <i className="fa fa-info-circle mt-0"></i>
            </MDBBtn>
          </div>
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
