const mongoose = require('mongoose')
const Ativo = mongoose.model('Ativo')

module.exports = {
    
    async indexActive(req , res){

        const showAll = await Ativo.find()
        
        return res.json(showAll)

    },

    async getActiveById(req, res){
        
        const pegarPeloId = await Ativo.findById(req.params.id)

        return res.json(pegarPeloId)

    },

    async getByActiveReq(req, res){

        const { unidade } = req.query

        console.log(unidade)

        const getUnitById = await Ativo.find({unidade: unidade})

        return res.json(getUnitById)

    },

    async registerActive(req, res){
       
        const {name, img, description, model, healthStatus, status} = req.body

        const { unidade } = req.query

        const active = Ativo.create({name, img, healthStatus, status, description, model, unidade: unidade})
        
        return res.json(active)
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