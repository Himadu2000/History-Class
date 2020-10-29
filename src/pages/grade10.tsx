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

const Grade10Page = ({ data }) => {
  function toGrade10() {
    const papers = data.allFlamelinkPapersContent.nodes
    const sortedPapers = []
    const grade10Papers = []
    papers.map((paper, index) => {
      sortedPapers.push(papers[index])
    })
    sortedPapers.map(paper => {
      if (paper.category.grade == "Grade 10") {
        grade10Papers.push(paper)
      }
    })
    return grade10Papers
  }

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
          {toGrade10().map((value, index) => (
            <tr key={index}>
              <td>{index}</td>
              <td>{value.description}</td>
              <td>
                <a href={value.downloadFile.map((v: { url: string }) => v.url)}>
                  Open
                </a>
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

export default Grade10Page
