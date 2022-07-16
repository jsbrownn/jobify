import express from 'express'
const router = express.Router()
import authenticateUser from '../middleware/auth.js'
import {registerUser,login,updateUser} from '../controllers/authController.js'

router.route('/register').post(registerUser)
router.route('/login').post(login)
router.route('/updateUser').patch(authenticateUser,updateUser)


export default router