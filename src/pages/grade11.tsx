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

interface paper {
  flamelink_id: string
  listNumber: string
  description: string
  category: {
    term: string
    paper: string
    grade: string
  }
  downloadFile: any
}
;[]

const Grade11Page = ({ data }: props) => {
  function toGrade11() {
    const papers = data.allFlamelinkPapersContent.nodes
    const sortedPapers = []
    const grade11Papers = []
    papers.map((paper, index) => {
      sortedPapers.push(papers[index])
    })
    sortedPapers.map(paper => {
      if (paper.category.grade == "O/L") {
        grade11Papers.push(paper)
      }
    })
    return grade11Papers
  }

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
          {toGrade11().map((paper: paper, index) => (
            <tr key={index}>
              <td>{index}</td>
              <td>{paper.description}</td>
              <td>
                <a href={paper.downloadFile.map((v: { url: string }) => v.url)}>
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

export default Grade11Page
