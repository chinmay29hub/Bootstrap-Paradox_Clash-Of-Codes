const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

module.exports = function (collection) {
    router.delete('/delete/:id', async (req, res) => {
        console.log(req.params.id)
        try {
            const result = await collection.deleteOne({ _id: mongoose.Types.ObjectId(req.params.id) })
            if (!result.deletedCount)
                return res.status(404).send({ error: 'Record not found.' })
            return res.send({ message: 'Record deleted successfully.' })
        } catch (error) {
            console.error('Error deleting record: ', error)
            return res.status(500).send({ error: 'Error deleting record.' })
        }
    })
    return router
}

