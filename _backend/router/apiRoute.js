import { Router } from 'express';
import { createUser, loginUser } from '../controller/userControllers.js';
const router = Router();

router.post('/user/signup', createUser);
router.post('/user/login', loginUser);


export default router;