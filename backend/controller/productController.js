const Product = require("../models/productModel.js");
const errorHandler = require("../utils/ErrorHandler.js");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Features = require("../utils/Features");


//create product-- for admin
exports.createProduct = catchAsyncErrors(  async (req,res,next) =>{
    const product = await Product.create(req.body);

    res.status(201).json({
        success: true,
        product,
    });  
});

//get all product -- admin
exports.getAdminAllProducts = catchAsyncErrors ( async (req,res, next) =>{
    const products = await Product.find();

    res.status(200).json({
        success: true,
        products,
    });
});


//get all product
exports.getAllProducts = catchAsyncErrors ( async (req,res) =>{
    const resultPerPage  = 8;
    const productsCount = await Product.countDocuments();

    const feature = new Features(Product.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage)
    ;
    const product = await feature.query;

    res.status(200).json({
        success: true,
        product,
        productsCount,
    
    });
});

//update product
exports.updateProduct = catchAsyncErrors( async (req,res,next) =>{
    let product  = await Product.findById(req.params.id);
    if(!product){
        return next(new errorHandler("product not found with id", 404));
    };
    product = await Product.findByIdAndUpdate(req.params.id,req.body,{
        new: true,
        runValidators: true,
        useUnified: false
    });
    res.status(200).json({
        success: true,
        product
    })
});

//delete product
exports.deleteProduct = catchAsyncErrors( async (req,res, next) =>{
    const product = await Product.findById(req.params.id);

    if(!product){
        return next(new errorHandler("product not found with id", 404));
    }

    await product.remove();
    res.status(200).json({
        success: true,
        message: "product delete complete"
    })
});

// product detail single
exports.getSingleProduct = catchAsyncErrors( async (req, res,next) =>{
    const product = await Product.findById(req.params.id);

    if(!product){
        return next(new errorHandler("product not found with id", 404));
    }
    res.status(200).json({
        success: true,
        product,
        productCount
    })
});



