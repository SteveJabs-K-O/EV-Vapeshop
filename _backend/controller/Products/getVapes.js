import _getVapes from "../../model/_Products/_getVapes.js";

const getVapes = async (_, res) => {
    try {
        const products = await _getVapes();
        return res.status(200).json(products);
    } catch (err) {
        console.error('Error fetching vape products:', err);
    }
}

export default getVapes;