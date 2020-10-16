import axios from "axios"
import { Link } from "gatsby"
import { useAuth } from "gatsby-theme-firebase"
import { MDBBtn, MDBInput } from "mdbreact"
import React, { useState } from "react"

const AddComment = () => {
  const [comment, setComment] = useState("")
  const { isLoading, isLoggedIn, profile } = useAuth()

  async function addComment() {
    const { uid, displayName, photoURL } = profile
    axios("")
  }

  if (isLoading) {
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
      return <Link to="/login">Log in to add a comment!</Link>
    }
  } else {
    return <p>Loading...</p>
  }
}

export default AddComment
