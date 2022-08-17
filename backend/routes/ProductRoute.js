const express = require("express");
const {
    getAllProducts,
    createProduct,
    updateProduct,
    deleteProduct,
    getSingleProduct,
    deleteReview,
    createProductReview,
    getSingleProductViews,
} = require("../controller/ProductController");
const { isAuthenticatedUser, authorizenRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/products").get(getAllProducts);

router
    .route("/product/new")
    .post(isAuthenticatedUser, authorizenRoles("admin"), createProduct);

router
    .route("/product/:id")
    .put(isAuthenticatedUser, authorizenRoles("admin"), updateProduct)
    .delete(isAuthenticatedUser, authorizenRoles("admin"), deleteProduct)
    .get(getSingleProduct);

router.route("/product/review").post(isAuthenticatedUser, createProductReview);

router
    .route("/reviews")
    .get(getSingleProductViews)
    .delete(isAuthenticatedUser, authorizenRoles("admin"), deleteReview);

module.exports = router;
