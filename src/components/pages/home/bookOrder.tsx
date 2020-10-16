import axios from "axios"
import { compress } from "compress-tag"
import { MDBBtn, MDBCol, MDBContainer, MDBInput, MDBRow } from "mdbreact"
import React, { useState } from "react"

const FormPage = () => {
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")

  async function formHandle() {
    const content = compress(`
            <h1>You have a book Order!</h1>
            <ul>
              <li>Phone: ${phone}</li>
              <li>Address: ${address}</li>
            </ul>
          `)

    const query = `mutation {
          sendMail(email: "himadusirimanna.1@gmail.com", subject: "You have a book order!", content: "${content}")
        }
        `

    try {
      const response = await axios({
        method: "POST",
        url: "https://ansi.herokuapp.com/graphql",
        data: JSON.stringify({
          query,
        }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      if (response.status == 200) {
        console.info(response.data)
        alert("Message Sent. Thank you for using historyclass.lk")
      } else {
        alert("Message failed to send. (Sorry for inconvenience)")
      }
    } catch (error) {
      console.error(error)
      alert("Message failed to send. (Sorry for inconvenience)")
    }
  }

  return (
    <>
      <form className="black-text" onSubmit={() => formHandle}>
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
