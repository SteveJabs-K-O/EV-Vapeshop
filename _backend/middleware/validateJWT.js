import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const validateJWT = (req, res, next) => {
    const authHeader = req.headers['authorization'];  
    if (!authHeader) return res.status(401).json({ "message": 'Unauthorized' });
    
    // console.log(authHeader);    
    const token = authHeader.split(' ')[1];
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) {
            if (err.name === 'TokenExpiredError') {
                return res.status(401).json({ message: 'Token expired' });
            }
            return res.status(403).json({ message: 'Forbidden' });
        }
        // req.body.email = decoded.email;
        next();
    });
};

export default validateJWT;