import axios from "axios"
import { compress } from "compress-tag"
import { FormEvent } from "react"

async function formHandle(event: FormEvent, phone: string, address: string) {
  event.preventDefault()
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
    if (phone !== "" && address !== "") {
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
    } else {
      alert("Please fill in the form!")
    }
  } catch (error) {
    console.error(error)
    alert("Message failed to send. (Sorry for inconvenience)")
  }
}

export default formHandle
