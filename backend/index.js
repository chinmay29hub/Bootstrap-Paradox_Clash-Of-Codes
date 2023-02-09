const express = require('express')
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient
const dotenv = require('dotenv')
dotenv.config()
const uri = process.env.ATLAS_URI
// const connectToDB = require('./routes/connect')
// const read = require('./routes/read')
// const insert = require('./routes/insert')
const app = express()
const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
}
app.use(express.json())
app.use(cors(corsOptions))
const port = process.env.PORT || 5000

let collection

const connectToDB = async () => {
  const client = new MongoClient(uri, { useNewUrlParser: true })
  try {
    await client.connect()
    const db = client.db('crudops')
    collection = db.collection('crud')
    console.log('Successfully connected to database.')
  } catch (error) {
    console.error('Error connecting to database: ', error)
  }
}

const read = () => {
  app.get('/', async (req, res) => {
    try {
      const records = await collection.find().toArray()
      res.json(records)
      console.log('Data received.')
    } catch (error) {
      res.status(500).send('Error fetching records: ', error)
    }
  })
}

const insert = () => {
  app.post('/', async (req, res) => {
    const existingEmail = await collection.findOne({ 'E-Mail ID': req.body['E-Mail ID'] })
    const existingRollNo = await collection.findOne({ 'Roll Number': req.body['Roll Number'] })
    const existingPhoneNo = await collection.findOne({ 'Phone Number': req.body['Phone Number'] })
    if (!existingEmail && !existingRollNo && !existingPhoneNo) {
      await collection.insertOne(req.body)
      console.log('Record inserted successfully.')
    } else {
      console.log('Record with the same E-Mail ID, Roll Number or Phone Number already exists, skipping insertion.')
    }
    res.send('Data received and processed.')
  })
}

connectToDB()
// read()
insert()

app.listen(port, () => {
  // connectToDB().then(collection => {
  //   // read(collection)
  //   insert(collection)
  // }).catch(error => {
  //   console.error(`Error connecting to database: ${error}`)
  // })
  console.log(`Server running on port ${port}.`)
})