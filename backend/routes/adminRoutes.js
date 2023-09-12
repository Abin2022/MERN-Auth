

import express from 'express' 
const router   = express.Router()

import { authAdmin,
    registerAdmin,
    logoutAdmin,
    getAllUsers,
    updateUserData,
    deleteUserData,
 } from '../controllers/adminController.js'

 import {protect } from '../middleware/authAdminMiddleware.js'
 

router.post('/authAdmin' ,authAdmin);
 router.post('/admin' ,registerAdmin);
 router.post('/adminLogout' ,logoutAdmin);
 router.get('/usersList' ,getAllUsers);
 router.post('/delete-user',  deleteUserData);
//   router.route() put('/adminUpdateUserDetails' ,updateUserDetails);
router.put('/update-user', updateUserData);


export default router;
