const mongoose = require('mongoose');

const tripsAndEventsSchema = new mongoose.Schema({
    type: {
        type: String
    },
    destination: {
        type: String
    },
    travellers: [{
        type: Number
    }],
});

const TripsAndEvents = mongoose.model('TripsAndEvents', tripsAndEventsSchema);

module.exports = TripsAndEvents;
