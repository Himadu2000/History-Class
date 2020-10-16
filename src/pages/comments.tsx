import { graphql } from "gatsby"
import parse from "html-react-parser"
import { MDBCard, MDBCardBody, MDBRow } from "mdbreact"
import React from "react"
import TimeAgo from "timeago-react"
import Layout from "../components/layout"
import AddComment from "../components/pages/comments/addComment"
import SEO from "../components/seo"

interface props {
  data: {
    fauna: {
      allComments: {
        data: {
          uid: number
          image: string
          time: number
          name: string
          comment: string
        }[]
      }
    }
  }
}

const CommentsPage = ({ data }: props) => {
  const comments = data.fauna.allComments.data
  return (
    <>
      <Layout>
        <SEO title="Comments" />
        <MDBCard
          className="my-5 px-5 pt-4"
          style={{ fontWeight: 300, maxWidth: 600 }}
        >
          <MDBCardBody className="py-0">
            <MDBRow>
              <div className="mdb-feed">
                {comments &&
                  comments.map((comment, index) => (
                    <div key={index} className="news black-text">
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
                          <div className="date">
                            {comment.time ? (
                              <TimeAgo datetime={comment.time} />
                            ) : (
                              <TimeAgo datetime={new Date()} />
                            )}
                          </div>
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
