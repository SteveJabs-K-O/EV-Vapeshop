const validateName = (name: string, field: string) => {
    if (!name) {
        return `${field} is required`;
    } else if (!/^[a-zA-Z]+$/.test(name) ) {
        return 'It should only contain letters';
    } else if (name.length < 2) {
        return `at least 2 characters long ${field}`;
    } else {
        return '';
    }
};

const validateEmail = (email: string) => {
    if (!email) {
        return 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
        return 'Invalid email format';
    } else {
        return '';
    }
};

const validatePassword = (pass: string) => {
    if (pass.length < 4) return 'Minimum of 4 character long';
    return '';
}

const validatePassword2 = (pass1: string, pass2: string) => {
    if (pass1.length >= 4 && pass1 !== pass2) return "Password doesn't match";
    if (pass1.length > 4 && pass1 && !pass2) return 'repeat password';
    return '';
}



export { validateName, validateEmail, validatePassword, validatePassword2 };