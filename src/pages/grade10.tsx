import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import "../components/pages/home/index.sass"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const Items = data.allFlamelinkPapersContent.nodes

  return (
    <Layout>
      <SEO title="Grade 10" />
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

export const query = graphql`
  query Grade10 {
    allFlamelinkPapersContent(
      sort: { fields: listNumber, order: ASC }
      filter: {}
    ) {
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
`

export default IndexPage
