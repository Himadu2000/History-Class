import { graphql } from "gatsby"
import parse from "html-react-parser"
import { MDBCard, MDBCardBody, MDBRow } from "mdbreact"
import React from "react"
import AddComment from "../components/pages/home/addComment"

const SocialPage = () => {
  const comments = [
    {
      uid: "100280",
      image: "https://mdbootstrap.com/img/Photos/Avatars/avatar-1-mini.jpg",
      time: "1 hour ago",
      name: "Dog",
      comment: "Cat",
    },
    {
      uid: "100280",
      image: "https://mdbootstrap.com/img/Photos/Avatars/avatar-1-mini.jpg",
      time: "1 hour ago",
      name: "Dog",
      comment: "Cat",
    },
  ]

  return (
    <>
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
                      <div className="date">{comment.time}</div>
                    </div>
                    <div className="feed-footer">{parse(comment.comment)}</div>
                  </div>
                </div>
              ))}
            </div>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
      <AddComment />
    </>
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

export default SocialPage
