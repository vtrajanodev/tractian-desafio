const mongoose = require('mongoose')
const Unidade = mongoose.model('Unidade')
const Empresa = mongoose.model('Empresa')

module.exports = {
    
    async indexCompany(req , res){

        const showAll = await Empresa.find()
        
        return res.json(showAll)

    } ,

    async getByCompanyReq(req, res){
        
        const  { empresa }  = req.query

        const getUnidades = await Unidade.find({empresa: empresa})

        return res.json(getUnidades)

    },

    async registerCompany(req, res){
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
