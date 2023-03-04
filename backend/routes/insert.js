const express = require('express')
const router = express.Router()

module.exports = function (collection) {
  router.post('/insert', async (req, res) => {
    const existingEmail = await collection.findOne({
      'E-Mail ID': req.body['E-Mail ID']
    })
    const existingPhoneNo = await collection.findOne({
      'Phone Number': req.body['Phone Number']
    })
    if (!existingEmail && !existingPhoneNo) {
      console.log(req.body)
      // await collection.insertOne(req.body)

      // const obj = {
      //   "interests": [
      //     "trekking",
      //   ],
      //   "maxExpense": 5000,
      //   "prefLangs": "Hindi",
      //   "curTripsAndEvents": [667788],
      //   "prevTripsAndEvents": {
      //     334455: {
      //       "feedbackReceived": {
      //         "good": 3,
      //         "average": 2,
      //         "bad": 1
      //       }
      //     }
      //   }
      // }

      // const obj = {
      //   "334456": {
      //     "type": "trip",
      //     "destination": "Vasai",
      //     "travellers": ["1234", "5678"]
      //   }
      // }


      // const obj = {
      //   "trekking": {
      //     "users": ["1234"],
      //     "events": ["334455"]
      //   }
      // }

      await collection.insertOne(obj)
      console.log('Record inserted successfully.')
      res.status(200).send('Record inserted successfully.')
    } else {
      console.log('Record with the same E-Mail ID or Phone Number already exists, skipping insertion.')
      res.status(409).send('Record with the same E-Mail ID or Phone Number already exists, skipping insertion.')
    }
  })
  return router
}

