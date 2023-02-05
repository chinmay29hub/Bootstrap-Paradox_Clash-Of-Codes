const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const uri = process.env.ATLAS_URI;
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const db = client.db('crudops');
  const collection = db.collection('crud');
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});