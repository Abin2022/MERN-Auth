import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import Tutor from "../models/tutorModel.js";

const protect = asyncHandler(async (req, res, next) => {
  let token;
  token = req.cookies.jwt;
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.tutor = await Tutor.findById(decoded.tutorId).select("-password");
      next();
    } catch (error) {
      res.status(401);
      throw new Error("invalid token");
    }
  } else {
    res.status(401);
    throw new Error("not authorized");
  }
});

export { protect };
