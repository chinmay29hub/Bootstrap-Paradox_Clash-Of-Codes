const mongoose = require('mongoose')
const express = require('express');
const router = express.Router();

module.exports = function (collection) {
  router.get('/read', async (req, res) => {
    try {
      const interestWiseCollection = collection[2];
      const intrExists = await interestWiseCollection.findOne({ "trekking": { $exists: true } });
      if (intrExists) {
        let users = []
        let events = []

        const userDetails = async () => {
          const userPromises = intrExists['trekking']['users'].map(async (item) => {
            const user = await collection[0].findOne({ "username": item })
            return user
          })
          users = await Promise.all(userPromises)
        }

        const eventDetails = async () => {
          const eventPromises = intrExists['trekking']['events'].map(async (item) => {
            const event = await collection[1].findOne({ "_id": mongoose.Types.ObjectId(item) })
            return event
          })
          events = await Promise.all(eventPromises)
        }

        await Promise.all([userDetails(), eventDetails()])

        res.status(200).send({ users, events })

      } else {
        res.status(200).send("Interest does not exist in interestWise collection.");
      }
    } catch (error) {
      res.status(500).send(`Error fetching records: ${error}`);
    }
  });

  return router;
}
