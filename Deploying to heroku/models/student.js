const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    branch: {
        type: String,
        required: true
    },
    rollno: {
        type: Number,
        required: true
    }
})

module.exports = learner = mongoose.model('studentSchema',studentSchema);