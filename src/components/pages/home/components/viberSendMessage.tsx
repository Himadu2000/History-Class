import axios from "axios"

const viberMessenger = async (phone: string, address: string) => {
  await axios.post("https://chatapi.viber.com/pa/set_webhook", {
    uri: "https://historyclass.lk",
  })

  await axios("https://chatapi.viber.com/pa/send_message", {
    method: "POST",
    headers: {
      "X-Viber-Auth-Token":
        "4c4c5d8e6d000a38-1dd6df60542fd10e-fdeee35c9ad0e30f",
    },
    params: {
      receiver: "S2ALCptZl6BKcons2BItqA==",
      type: "text",
      sender: { name: "historyclass.lk" },
      text: `You have a book order, phone:${phone}, address:${address}`,
    },
  })
}

export default viberMessenger
