const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

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


userSchema.plugin(mongoosePaginate)
mongoose.model('User' , userSchema)
module.exports = 'User'

