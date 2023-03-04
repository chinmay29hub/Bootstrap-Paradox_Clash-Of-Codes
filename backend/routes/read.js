const express = require('express');
const router = express.Router();

module.exports = function (collection) {
  router.get('/read', async (req, res) => {
    try {
      const interestWiseCollection = collection[2];
      const intrExists = await interestWiseCollection.findOne({ "trekking": { $exists: true } });
      if (intrExists) {
        Object.entries(intrExists).map((i, value) => {
          res.send(i, ": ", value)
        })
        // res.status(200).send(intrExists);
        // res.status(200).send(users);
      } else {
        res.status(200).send("Trekking does not exist in interestWise collection");
      }
      // const interestWiseCollection = collections[2];
      // const trekkingObject = await interestWiseCollection.findOne({ _id: "trekking" });
      // const userCollection = collections[0];
      // const users = await userCollection.find({ _id: { $in: trekkingObject.users } }).toArray();
      // res.status(200).send(users);
    } catch (error) {
      res.status(500).send(`Error fetching records: ${error}`);
    }
  });

  return router;
}
