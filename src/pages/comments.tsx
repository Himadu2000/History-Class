import { graphql } from "gatsby"
import parse from "html-react-parser"
import { MDBCard, MDBCardBody, MDBRow } from "mdbreact"
import React from "react"
import { format } from "timeago.js"
import Layout from "../components/layout"
import AddComment from "../components/pages/comments/addComment"
import SEO from "../components/seo"

const CommentsPage = ({ data }) => {
  const comments = [
    {
      uid: "100280",
      image: "https://mdbootstrap.com/img/Photos/Avatars/avatar-1-mini.jpg",
      time: "1602825986558",
      name: "Dog",
      comment: "Cat",
    },
    {
      uid: "100280",
      image: "https://mdbootstrap.com/img/Photos/Avatars/avatar-1-mini.jpg",
      time: "1602825986558",
      name: "Dog",
      comment: "Cat",
    },
  ]

  return (
    <>
      <Layout>
        <SEO title="404: Not found" />
        <MDBCard
          className="my-5 px-5 pt-4"
          style={{ fontWeight: 300, maxWidth: 600 }}
        >
          <MDBCardBody className="py-0">
            <MDBRow>
              <div className="mdb-feed">
                {comments.map(comment => (
                  <div className="news">
                    <div className="label">
                      <img
                        src={comment.image}
                        alt={comment.name}
                        className="rounded-circle z-depth-1-half"
                      />
                    </div>
                    <div className="excerpt">
                      <div className="brief">
                        <div className="name">{comment.name}</div>
                        <div className="date">{format(comment.time)}</div>
                      </div>
                      <div className="feed-footer">
                        {parse(comment.comment)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
        <AddComment />
      </Layout>
    </>
  )
}

export const query = graphql`
  {
    fauna {
      allComments {
        data {
          image
          time
          name
          comment
        }
      }
    }
  }
`

export default CommentsPage
