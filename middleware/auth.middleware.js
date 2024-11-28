import jwt from "jsonwebtoken";
import { User } from "../models/Admin.Model.js";

export const verifyJWT = async (req, res, next) => {
    try {
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "");

        if (!token) {
            const error = new Error("Unauthorized request");
            error.statusCode = 401;
            return next(error);
        }

        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

        const user = await User.findById(decodedToken?._id).select("-password -refreshToken");

        if (!user) {
            const error = new Error("Invalid Access Token");
            error.statusCode = 401;
            return next(error); 
        }

        req.user = user;
        next(); 
    } catch (error) {
        error.statusCode = 401; 
        error.message = error.message || "Invalid access token";
        next(error);
    }
};

