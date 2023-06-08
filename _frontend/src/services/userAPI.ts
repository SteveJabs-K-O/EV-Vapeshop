import axios, { AxiosResponse } from "axios";

export interface UserData {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
}

export interface SignupResponse {
    success: boolean;
    message?: string;
}

const signup = async (userData: UserData) => {
    try {
        const res: AxiosResponse<SignupResponse> = await axios.post('http://localhost:5174/user/signup', userData);
        return res;
    } catch (error: any) {
        console.error(error.message);
    }
};

const login = () => {

};


export { signup };