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
const read = require('./routes/read')
// const insert = require('./routes/insert')
// const update = require('./routes/update')
// const del = require('./routes/delete')

app.listen(port, () => {
  console.log(`Server running on port ${port}.`)
  connectToDB().then(collection => {
    const readRoute = read(collection)
    // console.log(collection)
    // const insertRoute = insert(collection)
    // const updateRoute = update(collection)
    // const deleteRoute = del(collection)
    // app.use('/', insertRoute)
    // app.use('/', updateRoute)
    // app.use('/', deleteRoute)
    app.use('/', readRoute)
  }).catch(error => {
    console.error(`Error connecting to database: ${error}`)
  })
})