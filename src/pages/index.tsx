import React from "react"

import { useStaticQuery, graphql } from "gatsby"

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
      <table>
        <tbody>
          <tr>
            <th>Paper</th>
            <th>Description</th>
            <th>Download</th>
          </tr>
          {Items.map(value => (
            <tr key={value.flamelink_id}>
              <td>{value.listNumber}</td>
              <td>{value.description}</td>
              <td>
                <a href={value.downloadFile.map(v => v.url)}>Open</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  )
}

export default IndexPage
