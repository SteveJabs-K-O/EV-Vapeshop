import _getAccessories from "../../model/_Products/_getAccessories.js";

const getAccessories = async (_, res) => {
    try {
        const products = await _getAccessories();
        return res.status(200).json(products);
    } catch (err) {
        console.error('Error fetching vape accessories:', err);
    }
}

export default getAccessories;