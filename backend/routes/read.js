const express = require('express')
const router = express.Router();

module.exports = function (collection) {
  router.get('/read', async (req, res) => {
    try {
      const records = await collection.find().toArray()
      res.status(200).send(records)
      console.log('Data received.')
    } catch (error) {
      res.status(500).send('Error fetching records: ', error)
    }
  })
  return router
}
