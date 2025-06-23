import express from 'express';
import loginUser from '../controllers/UserLogIn.js';
import registerUser from '../controllers/UserRegister.js';

const router = express.Router();

router.post('/login', loginUser);
router.post('/register', registerUser);

export default router;