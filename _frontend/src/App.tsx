import { lazy, Suspense, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Loading from "./components/common/Loading";

const Signup = lazy(() => import("./components/pages/Signup"));
const Login = lazy(() => import('./components/pages/Login'));

function App() {

    return (
        <Suspense fallback={<Loading />}>
            <Routes>
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />}  />
            </Routes>
        </Suspense>
    )
}

export default App;
