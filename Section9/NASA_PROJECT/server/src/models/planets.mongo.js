const mongoose = require('mongoose');

const planetsSchema = new mongoose.Schema({
    keplerName: {
        type: String, 
        required: True,
    },
});


module.exports = mongoose.model('Planet', planetsSchema);