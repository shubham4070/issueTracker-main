// Schema for the project 
const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    /*   Each post will in a database and has reference to user id    */
    author: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },
    // include the array of all comments for each post schema
    issues: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Issue"
        }

    ],
}, {
    timestamps: true,
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;