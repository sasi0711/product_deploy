const Product = require('../model/Product')


exports.getAllProducts = async (req, res) =>{
    try{
        const products = await Product.find()
        res.json(products)
    }
    catch(err){
        res.status(500).json({msg : err.message})
    }
}

exports.getSingleProduct = async (req, res) =>{
    try {
        const product = await Product.findOne({proId: req.params.id})
        if(!product)
            return res.status(404).json({msg: 'Product Not found'})
        
        res.json(product)
    }
    catch(err){
        res.status(500).json({msg : err.message})
    }
}

exports.addProduct= async (req,res)=>{
    try{
        const product =await Product.findOne({proId: req.body.proId})
        if(!product){
            const addedproduct = await Product.create(req.body)
                res.json(addedproduct)
        }
        else{
            res.json({msg:'Product already exists'})
        }
    }
    catch(err){
        res.status(500).json({msg:err.message})
    }
}

exports.updateProduct =async (req,res)=>{
    try{
        const product = req.body
        const fetchedProduct = await Product.findOne({proId: product.proId})
        if(fetchedProduct){
            await Product.updateOne(product)
            res.json(fetchedProduct)
        }
        else{
            res.json({msg:'Product does not exists '})
        }
    }
    catch(err){
         res.status(500).json({msg:err.message}) 
    }
}

exports.deleteProduct = async (req,res)=>{
    try{
        const product = await Product.findOne({proId: req.params.id})
        if(product){
            await Product.deleteOne({proId: product.proId})
            res.json(product)
        }
        else{
            res.json({msg:'Product does not exists'})
        }
    }
    catch(err){
        res.status(500).json({msg:err.message})
    }
}
