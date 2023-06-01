import pool from "../config/db.js";

const setRefreshToken = async (email, token) => {
    try {
        const query = 'UPDATE users SET refresh_token = ? WHERE email = ?';
        const values = [token, email];
        await pool.execute(query, values);
        
    } catch (err) {
        console.error('Error inserting refresh token:', err);
    }
}

export default setRefreshToken;