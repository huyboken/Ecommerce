const express = require("express");
const {
    createOrder,
    getSingleOrder,
    getAllOrders,
    getAdmimAllOrder,
    updateAdminOrder,
    deleteOrder,
} = require("../controller/OrderController");
const { isAuthenticatedUser, authorizenRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/order/new").post(isAuthenticatedUser, createOrder);

router.route("/order/:id").get(isAuthenticatedUser, getSingleOrder);

router.route("/orders/me").get(isAuthenticatedUser, getAllOrders);

router
    .route("/admin/orders")
    .get(isAuthenticatedUser, authorizenRoles("admin"), getAdmimAllOrder);

router
    .route("/admin/order/:id")
    .put(isAuthenticatedUser, authorizenRoles("admin"), updateAdminOrder)
    .delete(isAuthenticatedUser, authorizenRoles("admin"), deleteOrder);

module.exports = router;
