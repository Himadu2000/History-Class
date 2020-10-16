import { graphql } from "gatsby"
import { MDBLightbox } from "mdbreact"
import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

interface props {
  data: {
    flamelinkGalleryContent: {
      url: string
      alt: string
    }[]
  }
}

const IndexPage = ({ data }: props) => {
  const [heading, setHeading] = useState<any>([
    {
      src:
        "https://firebasestorage.googleapis.com/v0/b/history-class.appspot.com/o/flamelink%2Fmedia%2F7Q6epfACjVuPBKklcmgJ_photo1.webp?alt=media&token=5d6964ce-051c-4b1d-a1a9-329808d07242",
    },
    {
      src:
        "https://firebasestorage.googleapis.com/v0/b/history-class.appspot.com/o/flamelink%2Fmedia%2FLD4Ek4CHywSns0lVQ9tK_photo2.webp?alt=media&token=c92fc21e-fff2-4792-91bb-6bd73aa1d6a2",
    },
    {
      src:
        "https://firebasestorage.googleapis.com/v0/b/history-class.appspot.com/o/flamelink%2Fmedia%2FsooxC3njuiQlSR0ooaPo_photo3.webp?alt=media&token=fecffdef-2f6a-488b-a921-29a11419a41b",
    },
  ])

  useEffect(() => {
    const items = []
    console.log(data.flamelinkGalleryContent)
    // data.flamelinkGalleryContent.map(item => {
    //   items.push({ src: item.url })
    // })
    // setHeading()
    console.log(items)
  }, [])

  return (
    <Layout>
      <SEO title="Gallery" />
      {typeof window !== "undefined" ? (
        <MDBLightbox md="4" images={heading} noMargins />
      ) : null}
    </Layout>
  )
}

export const query = graphql`
  {
    flamelinkGalleryContent {
      url
      # alt
    }
  }
`

export default IndexPage
