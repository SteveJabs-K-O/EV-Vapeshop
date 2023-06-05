import _getAllProducts from "../../model/_getAllProducts.js";

const getAllProducts = async (_, res) => {
    try {
        const products = await _getAllProducts();
        return res.status(200).json(products);
    } catch (err) {
        console.error('Error fetching all products:', err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

export default getAllProducts;