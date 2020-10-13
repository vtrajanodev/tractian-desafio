const mongoose = require('mongoose')
const { addListener } = require('nodemon')
const empresa = require('../model/empresa')
const { registraUnidade } = require('./ativoController')
const Unidade = mongoose.model('Unidade')
const Ativo = mongoose.model('Ativo')
const Empresa = mongoose.model('Empresa')

module.exports = {
    
    async index(req , res){

        const showAll = await Unidade.find()
        
        return res.json(showAll)

    } ,

    async getById(req, res){
        const getUnitById = await Unidade.findById(req.params.id)

        return res.json(getUnitById)

    },

    async getByReq(req, res){

        const {unidade} = req.query

        const getUnitById = await Ativo.find({unidade: unidade})

        return res.json(getUnitById)

    },

    async registerUnit(req, res){

        const {name , description} = req.body
       
        const {empresa} = req.query

        const unit = await Unidade.create({name, description, empresa: empresa,})

        res.json(unit)
    },  
  
    
    async updateUnit(req, res){
        const updateProduct = await Unidade.findByIdAndUpdate(req.params.id , req.body , {new: true})

        return res.json(updateProduct)
    },
    
    async deleteUnit(req, res){
        await Unidade.findByIdAndDelete(req.params.id)

        return res.json('Produto deletado!')
    }

}