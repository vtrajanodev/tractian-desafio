const express = require('express')
const app = express()
const mongoose = require('mongoose')
const requireDir = require('require-dir')
const cors = require('cors')


app.use(express.json())
app.use(cors());


//Database connection
mongoose.connect
('mongodb+srv://deploy:uploaddeploy@desafio.wpfvs.mongodb.net/desafio?retryWrites=true&w=majority' , 
{ useNewUrlParser: true,useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: true});
    

//Directory requests
requireDir('./src/model/')

//Routes definition
app.use('/' , require('./src/routes'))



app.listen(process.env.PORT || 8080)