import { graphql } from "gatsby"
import { MDBLightbox, MDBSpinner } from "mdbreact"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

interface props {
  data: {
    allFlamelinkGalleryContent: {
      nodes: []
    }
  }
}

const IndexPage = ({ data }: props) => (
  <Layout>
    <SEO title="Gallery" />
    {typeof window !== "undefined" && data.allFlamelinkGalleryContent.nodes ? (
      <MDBLightbox
        md="4"
        images={data.allFlamelinkGalleryContent.nodes}
        noMargins
      />
    ) : (
      <MDBSpinner multicolor />
    )}
  </Layout>
)

export const query = graphql`
  {
    allFlamelinkGalleryContent {
      nodes {
        src
      }
    }
  }
`

export default IndexPage
