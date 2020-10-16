import { Client } from "faunadb"

const client = new Client({ secret: process.env.FAUNADB_KEY })

export const createComment = async (
  uid: string,
  image: string,
  name: string,
  comment: string
) =>
  await client.query((q: any) => {
    q.Create(q.Collection("comments"), {
      data: { uid, image, time: Date.now(), name, comment },
    })

    console.info("Comment has been added!")
  })

export default client.query
