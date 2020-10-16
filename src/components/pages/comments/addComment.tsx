import { Link } from "gatsby"
import { useAuth } from "gatsby-theme-firebase"
import { MDBBtn, MDBInput } from "mdbreact"
import React, { useState } from "react"
import { createComment } from "../home/faunaQuery"

const AddComment = () => {
  const [comment, setComment] = useState("")

  const { isLoggedIn, profile } = useAuth()

  async function addComment() {
    const { uid, displayName, photoURL } = profile
    await createComment(uid, photoURL, displayName, comment)
    alert("Comment added! Thankyou for using historyclass.lk")
  }

  if (isLoggedIn) {
    return (
      <>
        <MDBInput
          type="textarea"
          label="You can use html"
          value={comment}
          onChange={event => setComment(event.currentTarget.value)}
          background
        />
        <MDBBtn onClick={addComment}>Add a comment</MDBBtn>
      </>
    )
  } else {
    return (
      <Link to="/user/login">
        <MDBBtn>Log in to add a comment!</MDBBtn>
      </Link>
    )
  }
}

export default AddComment
