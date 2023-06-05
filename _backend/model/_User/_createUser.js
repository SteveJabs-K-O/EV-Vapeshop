import pool from "../../config/db.js";

const _createUser = async (userData) => {
    try {
        const { firstname, lastname, email, password } = userData;

        const query = 'INSERT INTO users (user_id, admin, firstname, lastname, email, password, refresh_token, created_at, updated_at) VALUES (default, 0, ?, ?, ?, ?, null, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP())' 
        const values = [firstname, lastname, email, password];

        await pool.execute(query, values);
    } catch (err) {
        console.error('Error creating user:', err);
        throw err;
    }
}

export default _createUser;