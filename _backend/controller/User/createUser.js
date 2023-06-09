import { hashPass } from "../../utils/bcrypt.js";
import _createUser from "../../model/_User/_createUser.js";
import _findEmail from "../../model/_User/_findEmail.js";

const createUser = async (req, res) => {
    try {
        const { firstname, lastname, email, password } = req.body;
        const user = await _findEmail(email);

        if (user) return res.status(200).json({ "success": false, "message": 'Email already used' });

        const hashedPassword = await hashPass(password);
        const userData = {
            firstname,
            lastname,
            email,
            password: hashedPassword
        }
        await _createUser(userData);

        return res.status(201).json({ "success": true, "message": 'Successfully created' });
    } catch (err) {
        console.error('Error creating user:', err);
        return res.status(500).json({ "success": false, "message": 'Server error' });
    }
}

export default createUser;