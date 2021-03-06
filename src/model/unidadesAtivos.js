const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

const unidadeSchema = new mongoose.Schema({

    name: String, 
    adress: String,
    description: String,
    empresa: { type: mongoose.Schema.Types.ObjectId, ref: 'Empresa'},

})

const ativoSchema = new mongoose.Schema({

    unidade: { type: mongoose.Schema.Types.ObjectId, ref: 'Unidade', required: true},
       
    img: {
        type: String,
       
    },

    name: {
        type: String,
       
    },

    description: {
        type: String,
        
    }, 

    model: {
        type: String,
        
    }, 

    healthStatus: {
        type: Number,
    }, 

    status:{
        type: String,
    },

    createdAt:{
        type: Date,
        default: Date.now
    }
    
})

unidadeSchema.plugin(mongoosePaginate)
ativoSchema.plugin(mongoosePaginate)
mongoose.model('Unidade' , unidadeSchema)
mongoose.model('Ativo' , ativoSchema)
