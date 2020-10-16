const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')


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

empresaSchema.plugin(mongoosePaginate)
mongoose.model('Empresa' , empresaSchema)
module.exports = 'Empresa'
