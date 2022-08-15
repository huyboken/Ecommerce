const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../Models/UserModel");

//Register user
exports.createUser = catchAsyncErrors(async (req, res, next) => {
    const { name, email, password } = req.body;
    const user = await User.create({
        name,
        email, password,
        avatar: {
            public_id: "https://test.com",
            url: "https://test.com"
        }
    });
    const token = user.getJwtToken()
    res.status(201).json({
        success: true,
        token
    })
})