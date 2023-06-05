import pool from "../config/db.js";

const _getVapes = async () => {
    try {
        const query = 'SELECT * FROM products WHERE category_id = ?'
        const value = [1];
        const products = await pool.execute(query, value);
        if (products.length === 0) return false;
        
        return products[0];
    } catch (err) {
        throw err;
    }

}

export default _getVapes;