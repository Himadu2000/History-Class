import { MDBBtn, MDBCol, MDBContainer, MDBInput, MDBRow } from "mdbreact"
import React, { useState } from "react"
import OrderSubmit from "./components/bookOrderSubmit"

const FormPage = () => {
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")

  return (
    <>
      <form
        className="black-text"
        onSubmit={event => OrderSubmit(event, phone, address)}
      >
        <p className="h5 text-center mb-4">Book Order</p>
        <p>Order our new book</p>
        <MDBContainer fluid>
          <MDBRow>
            <MDBCol size="4">
              <MDBInput
                label="Type your phone number"
                onChange={event => setPhone(event.currentTarget.value)}
                value={phone}
                icon="phone"
                group
                type="text"
                validate
              />
            </MDBCol>
            <MDBCol>
              <MDBInput
                label="Type your address"
                onChange={event => setAddress(event.currentTarget.value)}
                icon="envelope"
                group
                type="text"
                validate
              />
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        <div className="text-center">
          <MDBBtn type="submit">Order</MDBBtn>
        </div>
      </form>
    </>
  )
}

export default FormPage
