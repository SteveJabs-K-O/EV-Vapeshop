
const Login = () => {
    return (
        <div className="flex h-screen w-full items-center justify-center bg-gray-800 bg-cover bg-no-repeat" style={{backgroundImage:"url('/smoke-bg.gif')"}}>
            <div className="rounded-xl bg-black bg-opacity-80 px-12 py-4 shadow-lg backdrop-blur-md max-sm:px-8 border-2 border-gray-400">
                <div className="mb-4 flex flex-col items-center">
                    <h1 className="mb-2 text-2xl font-extrabold tracking-wider">Login</h1>
                </div>
                <form action="#">
                    <div className="mb-4 text-lg">
                        <input className="rounded-md text-white border-2 py-1 px-2 bg-white bg-opacity-10" type="text" name="email" placeholder="Email" />
                    </div>
                    <div className="mb-4 text-lg">
                        <input className="rounded-md text-white border-2 py-1 px-2 bg-white bg-opacity-10" type="Password" name="password" placeholder="password"/>
                    </div>
                    <span><a href="/signup" className="hover:text-gray-400 my-0 underline">Create account</a></span>
                    <div className="mt-4 flex justify-center text-lg text-black">
                        <button type="submit" className="rounded-md bg-white bg-opacity-20 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-gray-800 border">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;