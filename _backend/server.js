import express from 'express';
import pool from "./config/db.js";



const port = 5174;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
