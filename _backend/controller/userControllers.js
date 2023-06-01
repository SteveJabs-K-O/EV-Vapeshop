import { generateAccessToken, generateRefreshToken } from '../utils/tokenGenerators.js';
import { _createUser, _findEmail } from '../model/userModels.js';
import setRefreshToken from '../model/setRefreshToken.js';
import bcrypt from 'bcrypt';

const createUser = async (req, res) => {
    try {
        const { firstname, lastname, email, password } = req.body;
        const user = await _findEmail(email);

        if (user) return res.status(400).json({ "success": false, "message": 'Email already used' });

        const saltRounds  = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const userData = {
            firstname,
            lastname,
            email,
            password: hashedPassword
        }

        await _createUser(userData);
        return res.json({ "success": true, "message": 'Successfully created' });

    } catch (err) {
        console.error('Error creating user:', err);
    }
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await _findEmail(email);
        
        const passwordMatch = user ? await bcrypt.compare(password, user.password): '';
        if (!user) {                          
            res.status(404).json({ "success": false, "message": 'Invalid Email' });
        }
        else if (user && !passwordMatch) {    
            res.status(401).json({ "success": false, "message": 'Wrong Password' }); 
        }
        else if (user && passwordMatch) {
            console.log('USER LOGIN');

            const accessToken = generateAccessToken(user.email);
            const refreshToken = generateRefreshToken(user.email);
            await setRefreshToken(email, refreshToken);
 
            // to make the refreshToken in http only to make it more safer
            res.cookie('jwt', refreshToken, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 });
            res.status(200).json({
                        "success": true,
                        "data": {
                        "message": 'User Logged In',
                        "user": {
                            "email": user.email,
                    },
                        "accessToken": accessToken
                    }
                }
            );
        }

    } catch (err) {
        console.error('Error login user:', err);
        res.status(500).json({ "success": false, "message": 'Internal Server Error' });
    }
}


export { createUser, loginUser };