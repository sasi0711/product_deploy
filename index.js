const express = require('express')
const app = express();
const mongoose = require('mongoose')
const productRouter = require('./Routes/ProductRoutes')

app.use(express.json())

app.listen('1848', ()=> console.log('server running on 1848'))

mongoose.connect('mongodb+srv://sasi071811:sasi KUMAR071811@mycluster.mr37s.mongodb.net/?retryWrites=true&w=majority&appName=MyCluster)
    .then(()=> console.log('database connected..'))
    .catch((err) => console.log(err))

app.use("", productRouter);

