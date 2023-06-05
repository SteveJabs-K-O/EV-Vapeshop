import pool from "../../config/db.js";

const _getUserCart = async (id) => {
    try {
        const query = `SELECT p.product_id, p.product_name, p.product_price, p.stock 
            FROM products as p JOIN products_in_cart pic ON p.product_id = pic.product_id 
            JOIN cart as c ON pic.cart_id = c.cart_id 
            JOIN users as u ON c.user_id = u.user_id 
            WHERE u.user_id = ?`;
        const value = [id];

        const products = await pool.execute(query, value);
        if (products.length === 0) return false;

        return products[0];
    } catch (err) {
        throw err.message;
    }
}

export default _getUserCart;