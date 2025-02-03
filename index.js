const express = require('express')
const app = express();
const mongoose = require('mongoose')
const productRouter = require('./Routes/ProductRoutes')

app.use(express.json())

app.listen('1848', ()=> console.log('server running on 1848'))

mongoose.connect('mongodb://localhost:27017/sample')
    .then(()=> console.log('database connected..'))
    .catch((err) => console.log(err))

app.use("", productRouter);

