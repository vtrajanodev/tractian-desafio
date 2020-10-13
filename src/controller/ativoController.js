const mongoose = require('mongoose')
const Ativo = mongoose.model('Ativo')

module.exports = {
    
    async index(req , res){

        const showAll = await Ativo.find()
        
        return res.json(showAll)

    },

    async getById(req, res){
        
        const pegarPeloId = await Ativo.findById(req.params.id)

        return res.json(pegarPeloId)

    },

    async registerActive(req, res){
       
        const {name, img, description, model} = req.body

        const { unidade } = req.query

        const active = Ativo.create({name, img, description, model, unidade: unidade})
        
        return res.json(active)
    },
    
    async register(req, res){
        const registerUnit = await Ativo.create(req.body)

        return res.json(registerUnit)
        
    }, 

    async updateActive(req, res){
        const updateProduct = await Ativo.findByIdAndUpdate(req.params.id , req.body , {new: true})

        return res.json(updateProduct)
    },
    
    async deleteActive(req, res){
        await Ativo.findByIdAndDelete(req.params.id)

        return res.json('Produto deletado!')
    }

}