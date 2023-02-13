const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

const connectToDB = () => {
    return new Promise((resolve, reject) => {
        mongoose.set('strictQuery', true);
        mongoose.connect(process.env.ATLAS_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: 'crudops'
        })
        const db = mongoose.connection

        db.once('open', () => {
            console.log('Successfully connected to database.')
            const collection = db.collection('crud')
            resolve(collection)
        })

        db.on('error', (error) => {
            console.error('Error connecting to database: ', error)
            reject(error)
        })
    })
}

module.exports = connectToDB