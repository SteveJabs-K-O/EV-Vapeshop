import { FormEvent, useState } from "react";
import { validateName, validateEmail, validatePassword, validatePassword2 } from "../utils/inputValidation";


const Signup = () => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [fnameError, setFnameError] = useState('');
    const [lnameError, setLnameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passError, setPassError] = useState('');
    const [pass2Error, setPass2Error] = useState('');

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const fnameErr = validateName(firstname, 'Firstname');
        const lnameErr = validateName(lastname, 'Lastname');
        const emailErr = validateEmail(email);
        const passErr = validatePassword(password); 
        const pass2Err = validatePassword2(password, password2); 
        setFnameError(fnameErr);
        setLnameError(lnameErr);
        setEmailError(emailErr);
        setPassError(passErr);
        setPass2Error(pass2Err);
    }

 
    return(
        <div className="flex h-screen w-full items-center justify-center bg-gray-800 bg-cover bg-no-repeat" style={{backgroundImage:"url('/smoke-bg.gif')"}}>
            <div className="rounded-xl bg-black bg-opacity-80 px-12 py-4 shadow-lg backdrop-blur-md max-sm:px-8 border-2 border-gray-400">
                <div className="mb-4 flex flex-col items-center">
                    <h1 className="mb-2 text-2xl font-extrabold tracking-wider">Signup</h1>
                </div>
                <form onSubmit={handleSubmit} method="POST">
                    <div className="mb-4 text-lg">
                        <input 
                            className="rounded-md text-white border-2 py-1 px-2 bg-white bg-opacity-10" 
                            type="text" 
                            name="firstname" 
                            placeholder="firstname"
                            value={firstname}
                            onChange={(e) => setFirstname(e.target.value)}
                        />
                        {fnameError && <div className='text-red-500' style={{ fontSize: '16px' }}>{fnameError}</div>}
                    </div>
                    <div className="mb-4 text-lg">
                        <input 
                            className="rounded-md text-white border-2 py-1 px-2 bg-white bg-opacity-10" 
                            type="text" 
                            name="lastname" 
                            placeholder="lastname" 
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}
                        />
                        {lnameError && <div className='text-red-500' style={{ fontSize: '16px' }}>{lnameError}</div>}
                    </div>
                    <div className="mb-4 text-lg">
                        <input 
                            className="rounded-md text-white border-2 py-1 px-2 bg-white bg-opacity-10" 
                            type="text" 
                            name="email" 
                            placeholder="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {emailError && <div className='text-red-500' style={{ fontSize: '16px' }}>{emailError}</div>}
                    </div>
                    <div className="mb-4 text-lg">
                        <input 
                            className="rounded-md text-white border-2 py-1 px-2 bg-white bg-opacity-10" 
                            type="Password" 
                            name="password" 
                            placeholder="password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {passError && <div className='text-red-500' style={{ fontSize: '16px' }}>{passError}</div>}
                    </div>
                    <div className="mb-4 text-lg">
                        <input 
                            className="rounded-md text-white border-2 py-1 px-2 bg-white bg-opacity-10" 
                            type="Password" 
                            name="password" 
                            placeholder="confirm password" 
                            value={password2}
                            onChange={(e) => setPassword2(e.target.value)}
                        />
                        {pass2Error && <div className='text-red-500' style={{ fontSize: '16px' }}>{pass2Error}</div>}
                    </div>
                    <span><a href="/login" className="hover:text-gray-400 my-0 underline">Already have account?</a></span>
                    <div className="mt-4 flex justify-center text-lg text-black">
                        <button type="submit" className="rounded-md bg-white bg-opacity-20 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-gray-800 border">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup;