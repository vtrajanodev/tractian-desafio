const mongoose = require('mongoose')
const { addListener } = require('nodemon')
const { update } = require('./ativoController')
const Unidade = mongoose.model('Unidade')
const Ativo = mongoose.model('Ativo')
const Empresa = mongoose.model('Empresa')

module.exports = {
    
    async index(req , res){

        const showAll = await Empresa.find()
        
        return res.json(showAll)

    } ,

    async getByCompanyId(req, res){
        
        const  { empresa }  = req.query

        const getUnidades = await Unidade.find({empresa: empresa})

        return res.json(getUnidades)

    },

    async register(req, res){
        const registerUnit = await Empresa.create(req.body)

        return res.json(registerUnit)
        
    } , 

    async updateCompany(req, res){
        const updateCompany = await Empresa.findByIdAndUpdate(req.params.id , req.body , {new: true})

        return res.json(updateCompany)
    },
    
    async deleteCompany(req, res){
        await Empresa.findByIdAndDelete(req.params.id)

        return res.json('Empresa deletada!')
    }

}
