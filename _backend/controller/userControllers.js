import { _createUser, _findEmail } from '../model/userModels.js';
import bcrypt from 'bcrypt';

const createUser = async (req, res) => {
    try {
        const { firstname, lastname, email, password } = req.body;
        const user = await _findEmail(email);

        if (!user) return res.status(400).json({ message: 'Email already used' });

        const saltRounds  = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const userData = {
            firstname,
            lastname,
            email,
            password: hashedPassword
        }

        await _createUser(userData);
        return res.json({ message: 'Successfully created' });

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
            console.log('INVALID EMAIL');
            res.status(404).json({ message: 'Invalid Email' });
        }
        else if (user && !passwordMatch) {    
            console.log('WRONG PASS');
            res.status(401).json({ message: 'Wrong Password' }); 
        }
        else if (user && passwordMatch) {
            console.log('USER LOGIN');
            res.status(200).json({ message: 'User Logged In', user: user });
        }

    } catch (err) {
        console.error('Error login user:', err);
    }
}


export { createUser, loginUser };