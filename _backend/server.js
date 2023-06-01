import express from 'express';
import pool from "./config/db.js"; // just to log database status - for debugging purposes
import apiRoutes from './router/apiRoute.js';
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT || 5174;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', apiRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});