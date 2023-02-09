const express = require('express')
const cors = require('cors')
const app = express()
const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
}
app.use(express.json())
app.use(cors(corsOptions))
const port = process.env.PORT || 5000
const connectToDB = require('./routes/connect')
// const read = require('./routes/read')
const insert = require('./routes/insert')

connectToDB().then(collection => {
  // const readRoute = read(collection)
  // app.use('/', readRoute);
  const insertRoute = insert(collection)
  app.use('/', insertRoute);
}).catch(error => {
  console.error(`Error connecting to database: ${error}`)
})

app.listen(port, () => {
  console.log(`Server running on port ${port}.`)
})