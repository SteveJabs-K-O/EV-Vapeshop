import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'store',
});

// JUST TO CHECK IF IT IS CONNECTED TO THE SERVER
(async () => {
    try {
        const connection = await pool.getConnection();
        console.log('Successfully connected to database');        
        connection.release();
    } 
    catch (err) {
        console.error('Error connecting to database:', err);
    }
})();

export default pool;