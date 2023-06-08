import { FormEvent, ChangeEvent, useState, useEffect } from "react";
import { validateName, validateEmail, validatePassword, validatePassword2 } from "../utils/inputValidation";
import { signup, Response } from "../../services/userAPI";

const Signup = () => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        password2: ''
    });

    const [formErrors, setFormErrors] = useState<{
        firstname: string;
        lastname: string;
        email?: string; // to type email that so that it may set to string || undefined 
        password: string;
        password2: string;
    }>({
        firstname: '',
        lastname: '',
        email: undefined,
        password: '',
        password2: ''
    });

    const [successPrompt, setSuccessPrompt] = useState<string | undefined>('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value
        }));
    };
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const { firstname, lastname, email, password, password2 } = formData;

        const errors = {
            firstname: validateName(firstname, 'Firstname'),
            lastname: validateName(lastname, 'Lastname'),
            email: validateEmail(email),
            password: validatePassword(password),
            password2: validatePassword2(password, password2)
        }

        setFormErrors(errors);

        const hasError = Object.values(errors).some((error) => error !== '');
        if (!hasError) { // if all input are valid and no errors
            try {
                const res = await signup({
                    firstname: formData.firstname,
                    lastname: formData.lastname,
                    email: formData.email,
                    password: formData.password
                });

                const responseData = res?.data as Response;
                if (responseData.success) setSuccessPrompt(responseData.message);
                if (!responseData.success) { // ->> to set email error if email is already taken
                    setFormErrors((prevFormErrors) => ({
                        ...prevFormErrors,
                        email: responseData.message
                    })); 
                }

                setFormData({ // -> to reset all input fields after a successful signup
                    firstname: '',
                    lastname: '',
                    email: '',
                    password: '',
                    password2: ''
                });
            } catch (error) {
                console.error(error);
            }    
        }
    };

    useEffect(() => {
        if (successPrompt) {
            const timer  = setTimeout(() => {
                setSuccessPrompt('');
            }, 1500); // success prompt 1.5seconds before it fades out

            return () => {
                clearTimeout(timer);
            };
        }
    }, [successPrompt]);
 
    return(
        <div className="flex flex-col h-screen w-full items-center justify-center bg-gray-800 bg-cover bg-no-repeat " style={{backgroundImage:"url('/smoke-bg.gif')"}}>
        {successPrompt && (
            <div className="absolute top-0 z-50 w-full flex justify-center mt-6 bg-g">
                <div className="bg-green-400 text-green-900 rounded-md py-2 px-4">
                    <span>{successPrompt}</span>
                </div>
            </div>
        )}
            <div className="absolute rounded-xl bg-black bg-opacity-80 px-12 py-4 shadow-lg backdrop-blur-md max-sm:px-8 border-2 border-gray-400">
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
                            value={formData.firstname}
                            onChange={handleChange}
                        />
                        {formErrors.firstname && <div className='text-red-500' style={{ fontSize: '16px' }}>{formErrors.firstname}</div>}
                    </div>
                    <div className="mb-4 text-lg">
                        <input 
                            className="rounded-md text-white border-2 py-1 px-2 bg-white bg-opacity-10" 
                            type="text" 
                            name="lastname" 
                            placeholder="lastname" 
                            value={formData.lastname}
                            onChange={handleChange}
                        />
                        {formErrors.lastname && <div className='text-red-500' style={{ fontSize: '16px' }}>{formErrors.lastname}</div>}
                    </div>
                    <div className="mb-4 text-lg">
                        <input 
                            className="rounded-md text-white border-2 py-1 px-2 bg-white bg-opacity-10" 
                            type="text" 
                            name="email" 
                            placeholder="email" 
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {formErrors.email && <div className='text-red-500' style={{ fontSize: '16px' }}>{formErrors.email}</div>}
                    </div>
                    <div className="mb-4 text-lg">
                        <input 
                            className="rounded-md text-white border-2 py-1 px-2 bg-white bg-opacity-10" 
                            type="Password" 
                            name="password" 
                            placeholder="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        {formErrors.password && <div className='text-red-500' style={{ fontSize: '16px' }}>{formErrors.password}</div>}
                    </div>
                    <div className="mb-4 text-lg">
                        <input 
                            className="rounded-md text-white border-2 py-1 px-2 bg-white bg-opacity-10" 
                            type="Password" 
                            name="password2" 
                            placeholder="confirm password"
                            value={formData.password2}
                            onChange={handleChange}
                        />
                        {formErrors.password2 && <div className='text-red-500' style={{ fontSize: '16px' }}>{formErrors.password2}</div>}
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