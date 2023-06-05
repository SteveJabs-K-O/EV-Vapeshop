import { Router } from 'express';
import createUser from '../controller/user/createUser.js';
import loginUser from '../controller/user/login.js';
import getAllProducts from '../controller/products/getAllProducts.js';
import getVapes from '../controller/products/getVapes.js';
const router = Router();

router.post('/user/signup', createUser);
router.post('/user/login', loginUser);
router.get('/all-products', getAllProducts);
router.get('/vapes', getVapes);



export default router;