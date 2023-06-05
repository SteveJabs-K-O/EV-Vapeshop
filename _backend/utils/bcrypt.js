import bcrypt from 'bcrypt';


const comparePass = async (pass, hashedPass) => {
    try {
        const match = await bcrypt.compare(pass, hashedPass);
        return match;
    } catch (err) {
        console.error('Error comparing passwords:', err);
    }
};

const hashPass = async (pass) => {
    try {
        const saltRounds = 10;
        const hashedPass = await bcrypt.hash(pass, saltRounds);
        return hashedPass;
    } catch (err) {
        console.error('Error hashing password: ', err);
        throw err;
    }
};

export { comparePass, hashPass };