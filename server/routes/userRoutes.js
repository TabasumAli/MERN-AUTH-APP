import express from 'express';
const userRouter = express.Router();
import { getUserProfile } from '../controllers/userController.js';
import { userAuth } from '../middleware/userAuth.js';


userRouter.get('/profile', userAuth, getUserProfile);



export default userRouter;