const express = require('express')
const app = express()

const insert = collection => {
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

module.exports = insert