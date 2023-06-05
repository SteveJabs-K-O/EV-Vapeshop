import _getUserCart from "../../model/_Products/_getUserCart.js";

const getUserCart = async (req, res) => {
    try {
        console.log(req.params);
        const { user_id } = req.body;
        const products = await _getUserCart(user_id);
        if (!products) return res.status(404).json({'message': 'No item'});
        return res.status(200).json({ message: 'User cart retrieved successfully', products });
    } catch (err) {
        console.error('Error fetching user cart: ', err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

export default getUserCart;