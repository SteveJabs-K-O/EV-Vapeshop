import pool from "../../config/db.js";

const _getJuices = async () => {
    try {
        const query = 'SELECT * FROM products WHERE category_id = ?'
        const value = [3];
        const products = await pool.execute(query, value);
        if (products.length === 0) return false;

        return products[0];
    } catch (err) {
        throw err;
    }

}

export default _getJuices;