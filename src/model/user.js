const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    sex: {
        type: String,
        required: true
    }, 

    createdAt:{
        type: Date,
        default: Date.now
    }
})

mongoose.model('User' , userSchema)
module.exports = 'User'
