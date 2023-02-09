const MongoClient = require('mongodb').MongoClient
const dotenv = require('dotenv')
dotenv.config()
const uri = process.env.ATLAS_URI
const connectToDB = async () => {
    const client = new MongoClient(uri, { useNewUrlParser: true })
    try {
        await client.connect()
        console.log('Successfully connected to database.')
        return client.db('crudops').collection('crud')
    } catch (error) {
        console.error('Error connecting to database: ', error)
    }
}

module.exports = connectToDB