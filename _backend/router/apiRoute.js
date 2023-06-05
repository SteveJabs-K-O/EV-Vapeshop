import { Router } from 'express';
import createUser from '../controller/user/createUser.js';
import loginUser from '../controller/User/login.js';
import getAllProducts from '../controller/Products/getAllProducts.js';
import getVapes from '../controller/Products/getVapes.js';
import getAccessories from '../controller/Products/getAccessories.js';
import getJuices from '../controller/Products/getJuices.js';
import getUserCart from '../controller/Products/getUserCart.js';
const router = Router();

router.post('/user/signup', createUser);
router.post('/user/login', loginUser);
router.get('/all-products', getAllProducts);
router.get('/vapes', getVapes);
router.get('/accessories', getAccessories);
router.get('/vape-juice', getJuices);
router.post('/:name/cart', getUserCart);

export default router;