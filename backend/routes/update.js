const express = require('express')
const mongoose = require('mongoose')
const { ObjectId } = require('mongodb');
const router = express.Router()

module.exports = function (collection) {
    router.put('/update/:id', async (req, res) => {
        const id = mongoose.Types.ObjectId(req.params.id)
        const { body } = req
        if (!ObjectId.isValid(id)) {
            return res.status(400).send(`Invalid id: ${id}`)
        } try {
            const updatedRecord = collection.findOneAndUpdate({ _id: id }, { $set: body }, { new: true })
            console.log(`Successfully updated record: ${updatedRecord}`)
            res.status(200).send(`Successfully updated record: ${updatedRecord}`)
        } catch (error) {
            console.error(`Error updating record: ${error}`)
            res.status(400).send(`Error updating record: ${error}`)
        }
    })
    return router
}
