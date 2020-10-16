import { Link } from "gatsby"
import { useAuth } from "gatsby-theme-firebase"
import { MDBBtn, MDBInput, MDBSpinner } from "mdbreact"
import React, { useState } from "react"
import { createComment } from "../home/faunaQuery"
import Modal from "./modal"

const AddComment = () => {
  const [comment, setComment] = useState("")
  const [modal, setModal] = useState(false)

  const { isLoading, isLoggedIn, profile } = useAuth()

  async function addComment() {
    const { uid, displayName, photoURL } = profile
    await createComment(uid, photoURL, displayName, comment)
  }

  if (isLoading) {
    if (isLoggedIn) {
      return (
        <>
          <Modal modal={modal} setModal={setModal} />
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
    return <MDBSpinner multicolor />
  }
}

export default AddComment
