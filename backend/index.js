const express = require('express')
const cors = require('cors')
const app = express()
const corsOptions = {
  origin: 'https://mern-crud-app-altajvirani.netlify.app',
  optionsSuccessStatus: 200
}
app.use(express.json())
app.use(cors(corsOptions))
const port = process.env.PORT || 5000
const connectToDB = require('./routes/connect')
const insert = require('./routes/insert')
const read = require('./routes/read')
// const update = require('./routes/update')
const del = require('./routes/delete')

app.listen(port, () => {
  console.log(`Server running on port ${port}.`)
  connectToDB().then(collection => {
    const insertRoute = insert(collection)
    const readRoute = read(collection)
    const deleteRoute = del(collection)
    app.use('/', insertRoute)
    app.use('/', readRoute)
    app.use('/', deleteRoute)
  }).catch(error => {
    console.error(`Error connecting to database: ${error}`)
  })
})