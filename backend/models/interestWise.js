const mongoose = require('mongoose');

const interestSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true
    },
    users: [{
        type: Number
    }],
    events: [{
        type: Number
    }]
});

const InterestWise = mongoose.model('InterestWise', interestSchema);

module.exports = InterestWise;
