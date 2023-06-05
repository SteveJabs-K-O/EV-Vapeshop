import pool from "../../config/db.js";

const _getAllProducts = async () => {
    try {  
        const query = 'SELECT * FROM products';
        const products = await pool.execute(query);
        if (products.length === 0) return false;
        return products[0];
    } catch (err) {
        throw new Error('Error fetching all products:' + err.message);
    }
}

export default _getAllProducts;