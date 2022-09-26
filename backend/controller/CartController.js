const Wishlist = require("../Models/WishListModel");
const Cart = require("../Models/CartModel");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHandler = require("../utils/ErrorHandler");

//Add to wishlist
exports.addToWishlist = catchAsyncErrors(async (req, res, next) => {
    const {
        productName,
        quantity,
        productImage,
        productPrice,
        userId,
        productId,
        Stock,
    } = req.body;
    const wishList = await Wishlist.create({
        productName,
        quantity,
        productImage,
        productPrice,
        userId,
        productId,
        Stock,
    });
    res.status(200).json({
        success: true,
        wishList,
    });
});

//Get wishlist data
exports.getWishListData = catchAsyncErrors(async (req, res, next) => {
    const wishlistData = await Wishlist.find({ userId: req.user.id });
    res.status(200).json({
        success: true,
        wishlistData,
    });
});

//remove wishlist data
exports.removeWishListData = catchAsyncErrors(async (req, res, next) => {
    const wishlistData = await Wishlist.findById(req.params.id);

    if (!wishlistData) {
        return next(new ErrorHandler("No wishlistdata found with this id", 404));
    }
    await wishlistData.remove();

    res.status(200).json({
        success: true,
        message: "Item removed from wishlist",
    });
});

//Get cart data
exports.getCartData = catchAsyncErrors(async (req, res, next) => {
    const cartData = await Cart.find({ userId: req.user.id });

    res.status(200).json({
        success: true,
        cartData,
    });
});

//Add to cart
exports.addTocart = catchAsyncErrors(async (req, res, next) => {
    const {
        productName,
        quantity,
        productImage,
        productPrice,
        userId,
        productId,
        Stock,
    } = req.body;

    const cart = await Cart.create({
        productName,
        quantity,
        productImage,
        productPrice,
        userId,
        productId,
        Stock,
    });

    res.status(200).json({
        success: true,
        cart,
    });
});

//Update cart
exports.updateCart = catchAsyncErrors(async (req, res, next) => {
    const { quantity } = req.body;

    const cart = await Cart.findByIdAndUpdate(req.params.id);

    if (!cart) {
        return next(new ErrorHandler("No cart found with this id", 404));
    }

    await cart.update({
        quantity,
    });
    res.status(200).json({
        success: true,
        quantity
    });
});

//Remove cart
exports.removeCart = catchAsyncErrors(async (req, res, next) => {
    const cartData = await Cart.findById(req.params.id);

    if (!cartData) {
        return next(new ErrorHandler("Items is not found with this id", 404));
    }

    await cartData.remove();

    res.status(200).json({
        success: true,
        message: "Item removed from cart",
    });
});
