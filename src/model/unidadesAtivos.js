const mongoose = require('mongoose')

const unidadeSchema = new mongoose.Schema({

    name: String, 
    description: String,
    empresa: { type: mongoose.Schema.Types.ObjectId, ref: 'Empresa'},

})

const ativoSchema = new mongoose.Schema({

    unidade: { type: mongoose.Schema.Types.ObjectId, ref: 'Unidade'},
       
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

    createdAt:{
        type: Date,
        default: Date.now
    }
})



mongoose.model('Unidade' , unidadeSchema)
mongoose.model('Ativo' , ativoSchema)
