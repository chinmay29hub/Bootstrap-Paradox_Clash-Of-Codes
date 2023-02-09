const express = require('express')
const app = express()

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

module.exports = read