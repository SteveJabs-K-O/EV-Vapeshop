import pool from "../../config/db.js";

const _findEmail = async (email) => {
    try {
        const query = 'SELECT * FROM users WHERE email = ? LIMIT 1'; 
        const [user] = await pool.execute(query, [email]);
        if(user.length === 0) return false;
        return user[0];
    } catch (err) {
        console.error('Error finding email:', err);
        throw err;
    }
}

export default _findEmail;