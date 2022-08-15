const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../Models/UserModel");
const ErrorHandler = require("../utils/ErrorHandler");
const sendToken = require("../utils/JwtToken.js");
const sendMail = require("../utils/sendMail");
const crypto = require("crypto");

//Register user
exports.createUser = catchAsyncErrors(async (req, res, next) => {
    const { name, email, password } = req.body;
    const user = await User.create({
        name,
        email,
        password,
        avatar: {
            public_id: "https://test.com",
            url: "https://test.com",
        },
    });

    sendToken(user, 200, res);
});

//Login user
exports.loginUser = catchAsyncErrors(async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return next(new ErrorHandler("Please enter your email & password", 400));
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
        return next(
            new ErrorHandler("User is not found with this email & password", 401)
        );
    }

    const isPasswordMatch = await user.comparePassword(password);

    if (!isPasswordMatch) {
        return next(
            new ErrorHandler("User is not found with this email & password", 401)
        );
    }

    // const token = user.getJwtToken();
    // res.status(200).json({
    //     success: true,
    //     user,
    //     token,
    // });
    sendToken(user, 200, res);
});

//Logout user
exports.logoutUser = catchAsyncErrors(async (req, res, next) => {
    res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
    });

    res.status(200).json({
        success: true,
        message: "Logout success",
    });
});

//Forgot password
exports.forgotPassword = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
        return next(new ErrorHandler("User not found with this email", 404));
    }
    //get ResetPassword Token
    const resetToken = user.getResetToken();

    await user.save({
        validateBeforeSave: false,
    });

    const resetPasswordUrl = `${req.protocol}://${req.get(
        "host"
    )}/password/reset/${resetToken}`;

    const message = `Yout password reset token is :- \n\n ${resetPasswordUrl}`;

    try {
        await sendMail({
            email: user.email,
            subject: `Ecommerce Password Recovery`,
            message,
        });
        res.status(200).json({
            success: true,
            message: `Email send to ${user.email} succesfuly`,
        });
    } catch (error) {
        user.resetPasswordToken = undefined;
        user.resetPasswordTime = undefined;

        await user.save({
            validateBeforeSave: false,
        });

        return next(new ErrorHandler(error.message));
    }
});

//Reset password
exports.resetPassword = catchAsyncErrors(async (req, res, next) => {
    //Create token hash

    const resetPasswordToken = crypto
        .createHash("sha256")
        .update(req.params.token)
        .digest("hex");

    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordTime: { $gt: Date.now() },
    });

    if (!user) {
        return next(
            new ErrorHandler("Reset password url is valid or has been expired", 400)
        );
    }

    if (req.body.password !== req.body.confirmPassword) {
        return next(
            new ErrorHandler("Password is not matched with the new password")
        );
    }
    user.password = req.body.password;

    user.resetPasswordToken = undefined;
    user.resetPasswordTime = undefined;

    await user.save();

    sendToken(user, 200, res);
});

//get user detail
exports.userDetails = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findById(req.user.id);

    res.status(200).json({
        success: true,
        user,
    });
});
