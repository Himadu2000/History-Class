import {
  MDBBtn,
  MDBContainer,
  MDBModal,
  MDBModalBody,
  MDBModalFooter,
  MDBModalHeader,
} from "mdbreact"
import React from "react"

interface props {
  modal: boolean
  setModal: Function
}

const ModalPage = (props: props) => {
  const { modal, setModal } = props

  const toggle = () => {
    setModal(!modal)
  }

  return (
    <MDBContainer>
      <MDBModal isOpen={modal} toggle={toggle}>
        <MDBModalHeader toggle={toggle}>Comment has been added!</MDBModalHeader>
        <MDBModalBody>
          Refresh the page to see your comment,
          <br />
          And thankyou for using historyclass.lk
          <br />
          We'll see into your comment!
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="secondary" onClick={toggle}>
            Close
          </MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
  )
}

export default ModalPage
