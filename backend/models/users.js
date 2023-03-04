const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    interests: [{
        type: String
    }],
    maxExpense: {
        type: Number
    },
    prefLangs: {
        type: String
    },
    curTripsAndEvents: [{
        type: Number
    }],
    prevTripsAndEvents: {
        type: Map,
        of: new mongoose.Schema({
            feedbackReceived: {
                good: {
                    type: Number
                },
                average: {
                    type: Number
                },
                bad: {
                    type: Number
                },
            },
        }),
    },
    username: [{
        type: String,
        unique: true
    }],
    password: [{
        type: String,
    }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;
