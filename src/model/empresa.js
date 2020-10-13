const mongoose = require('mongoose')

const empresaSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    }, 
    
    createdAt:{
        type: Date,
        default: Date.now
    }
})

mongoose.model('Empresa' , empresaSchema)
module.exports = 'Empresa'
