import jwt from 'jsonwebtoken';

const generateAccessToken = (email) => {
    return jwt.sign({ "email": email }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1hr' });
};

const generateRefreshToken = (email) => {
    return jwt.sign({ "email": email }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '1d' });
};

export { generateAccessToken, generateRefreshToken };