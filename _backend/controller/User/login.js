import { generateRefreshToken, generateAccessToken } from "../../utils/tokenGenerators.js";
import { comparePass } from "../../utils/bcrypt.js";
import setRefreshToken from "../../model/setRefreshToken.js";
import _findEmail from "../../model/_User/_findEmail.js";

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await _findEmail(email);

        let responseData = {};
        
        const passwordMatch = user ? await comparePass(password, user.password): '';
        if (!user) {   
            responseData = { "success": false, "message": 'Invalid Email' };                      
            res.status(404).json(responseData);
        }
        else if (user && !passwordMatch) {  
            responseData = { "success": false, "message": 'Wrong Password' };  
            res.status(401).json(responseData); 
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
        return res.status(500).json({ "success": false, "message": 'Internal Server Error' });
    }
}

export default loginUser;