import express from 'express';
const authRouter = express.Router();
import { register, login, logout } from '../controllers/authController.js';


authRouter.post('/register', register);
authRouter.post('/login', login);
authRouter.post('/logout', logout);

export default authRouter;