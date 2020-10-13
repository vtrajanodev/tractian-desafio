const mongoose = require('mongoose')
const { addListener } = require('nodemon')
const { update, getById } = require('./ativoController')
const User = mongoose.model('User')


module.exports = {
    
    async index(req , res){

        const showAll = await User.find()
        
        return res.json(showAll)

    } ,

    async getUserById(req, res){
        
        

        const getUserById = await User.findById(req.params.update)

        return res.json(getUserById)

    },

    async registerUser(req, res){
        const registerUnit = await User.create(req.body)

        return res.json(registerUnit)
        
    } , 

    async updateUser(req, res){
        const updateUser = await User.findByIdAndUpdate(req.params.id , req.body , {new: true})

        return res.json(updateUser)
    },
    
    async deleteUser(req, res){
        await User.findByIdAndDelete(req.params.id)

        return res.json('Usuário deletado!')
    }

}
