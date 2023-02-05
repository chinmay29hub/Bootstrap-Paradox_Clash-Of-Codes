const express = require('express')
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient
const dotenv = require('dotenv')
const app = express()
dotenv.config()
const uri = process.env.ATLAS_URI
const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
}

app.use(express.json())

app.use(cors(corsOptions))

const port = process.env.PORT || 5000

const connectToDB = async () => {
  const client = new MongoClient(uri, { useNewUrlParser: true })
  try {
    await client.connect()
    const db = client.db('crudops')
    const collection = db.collection('crud')
    console.log("Successfully connected to database.")
    app.post('/', async (req, res) => {
      const existingEmail = await collection.findOne({ 'E-Mail ID': req.body['E-Mail ID'] })
      const existingRollNo = await collection.findOne({ 'Roll Number': req.body['Roll Number'] })
      const existingPhoneNo = await collection.findOne({ 'Phone Number': req.body['Phone Number'] })
      if (!existingEmail && !existingRollNo && !existingPhoneNo) {
        await collection.insertOne(req.body)
        console.log("Record inserted successfully.")
      } else {
        console.log("Record with the same E-Mail ID, Roll Number or Phone Number already exists, skipping insertion.")
      }
      res.send("Data received and processed.")
    })
  } catch (error) {
    console.error("Error connecting to database: ", error)
  }
}

connectToDB()

app.listen(port, () => {
  console.log(`Server running on port ${port}.`)
})