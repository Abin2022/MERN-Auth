import express from "express";
const router = express.Router();
import { protect } from "../middleware/authMiddleware.js";
// import authenticateUser from '../middlewares/userAuthMiddleware.js';

import {
  authUser,
  registerUser,
  logOutUser,
  getUserProfile,
  updateUserProfile,
} from "../controllers/userController.js";


import { multerUploadUserProfile } from '../config/multerConfig.js';


router.post("/", registerUser);
router.post("/auth", authUser);
router.post("/logout", logOutUser);
// router
//   .route("/profile")
//   .get(protect, getUserProfile)
//   .put(protect, updateUserProfile);
  router.route('/profile').get( protect, getUserProfile ).put( protect, multerUploadUserProfile.single('profileImage'), updateUserProfile );


export default router;
