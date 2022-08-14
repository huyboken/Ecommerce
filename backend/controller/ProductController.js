const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Product = require("../Models/ProductModel");
const ErrorHandler = require("../utils/ErrorHandler");
const Features = require("../utils/Features");

// create Product --Admin
exports.createProduct = catchAsyncErrors(async (req, res, next) => {
    const product = await Product.create(req.body);
    res.status(201).json({
        success: true,
        product,
    });
});

// get All Product --Admin
exports.getAllProducts = async (req, res) => {
    const feature = new Features(Product.find(), req.query).search();
    // const products = await Product.find();
    const products = await feature.query;
    res.status(200).json({
        success: true,
        products,
    });
};

// update Product --Admin
exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
    let product = await Product.findById(req.params.id);
    if (!product) {
        return next(new ErrorHandler("Product is not found with this id", 404));
    }
    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: false,
        useUnified: false,
    });
    res.status(200).json({
        success: true,
        product,
    });
});

//delete Product --Admin
exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
    let product = await Product.findById(req.params.id);
    if (!product) {
        return next(new ErrorHandler("Product is not found with this id", 404));
    }
    await product.remove();
    res.status(200).json({
        success: true,
        message: "Product delete successfully",
    });
});

//get Single Product --Admin
exports.getSingleProduct = catchAsyncErrors(async (req, res, next) => {
    let product = await Product.findById(req.params.id);
    if (!product) {
        return next(new ErrorHandler("Product is not found with this id", 404));
    }
    res.status(200).json({
        success: true,
        product,
    });
});
