const express = require("express");
const {
    getWishListData,
    addToWishlist,
    removeWishListData,
    addTocart,
    updateCart,
    getCartData,
    removeCart,
} = require("../controller/CartController");
const { isAuthenticatedUser } = require("../middleware/auth");
const router = express.Router();

router.route("/wishlist").get(isAuthenticatedUser, getWishListData);
router.route("/addToWishlist").post(isAuthenticatedUser, addToWishlist);
router
    .route("/removeWishlist/:id")
    .delete(isAuthenticatedUser, removeWishListData);

router.route("/addToCart").post(isAuthenticatedUser, addTocart);
router.route("/cart/update/:id").put(isAuthenticatedUser, updateCart);
router.route("/cart").get(isAuthenticatedUser, getCartData);
router.route("/removeCart/:id").delete(isAuthenticatedUser, removeCart);

module.exports = router;
