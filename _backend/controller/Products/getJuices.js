import _getJuices from "../../model/_Products/_getJuices.js"

const getJuices = async (_, res) => {
    try {
        const products = await _getJuices();
        return res.status(200).json(products);
    } catch (err) {
        console.error('Error fetching vape juices:', err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

export default getJuices;