const express = require('express')

const routes = express.Router()

const unidadeController = require('./controller/unidadeController')
const empresaController = require('./controller/empresaController')
const ativoController = require('./controller/ativoController')
const userController = require('./controller/userController')

/*-----------------------------------------------------------*/

//Agrupamento de rotas CRUD - Detalhamento Empresa. 
routes.get('/empresa' ,  empresaController.index)
routes.get('/empresas', empresaController.getByCompanyId)
routes.post('/empresa' , empresaController.register)
routes.put('/empresa/:id' , empresaController.updateCompany)
routes.delete('/empresa/:id' , empresaController.deleteCompany)


//Agrupamento de rotas CRUD - Detalhamento Unidades
routes.get('/unidade' ,  unidadeController.index)
routes.get('/unidade/:id' , unidadeController.getById)
routes.get('/unidades' , unidadeController.getByReq)
routes.put('/unidade/:id' , unidadeController.updateUnit)
routes.delete('/unidade/:id' , unidadeController.deleteUnit)
routes.post('/unidade' , unidadeController.registerUnit)

//Agrupamento de rotas CRUD - Detalhamento Ativos

routes.get('/ativo' , ativoController.index)
routes.get('/ativo/:id' , ativoController.getById)
routes.post('/ativo'  , ativoController.registerActive)
routes.put('/ativo/:id'  , ativoController.updateActive)
routes.delete('/ativo/:id'  , ativoController.deleteActive)

//Agrupamento de rotas CRUD - Cadastro de usuários

routes.get('/users/' , userController.index)
routes.get('/users/' , userController.getUserById)
routes.post('/users/' , userController.registerUser)
routes.put('/users/:id' , userController.updateUser)
routes.put('/users/:id' , userController.deleteUser)



module.exports = routes