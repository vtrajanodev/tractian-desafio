const express = require('express')
const app = express()
const mongoose = require('mongoose')
const requireDir = require('require-dir')
const cors = require('cors')
const bodyParser = require('body-parser')


app.use(express.json())
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization')
    next()
  })



//Database connection
mongoose.connect
('mongodb+srv://deploy:uploaddeploy@desafio.wpfvs.mongodb.net/desafio?retryWrites=true&w=majority' , 
{ useNewUrlParser: true,useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: true});
    

//Directory requests
requireDir('./src/model/')

//Routes definition
app.use('/' , require('./src/routes'))



app.listen(process.env.PORT || 8080)