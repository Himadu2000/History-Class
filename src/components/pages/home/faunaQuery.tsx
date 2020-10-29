import { Client, query } from "faunadb"

const adminClient = new Client({
  secret: process.env.GATSBY_FAUNADB_KEY,
})

export const q = query

export const createComment = async (
  uid: string,
  image: string,
  name: string,
  comment: string
) =>
  await adminClient.query(
    q.Create(q.Collection("comments"), {
      data: { uid, image, time: new Date(), name, comment },
    })
  )

export default adminClient.query
