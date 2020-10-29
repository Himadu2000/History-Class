import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import "../components/pages/home/index.sass"
import SEO from "../components/seo"

interface props {
  data: {
    allFlamelinkPapersContent: {
      nodes: {
        flamelink_id: string
        listNumber: string
        description: string
        category: {
          term: string
          paper: string
          grade: string
        }
        downloadFile: any
      }[]
    }
  }
}

const IndexPage = ({ data }) => {
  const Items = data.allFlamelinkPapersContent.nodes

  return (
    <Layout>
      <SEO title="Grade 11" />
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
  {
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
