import React from "react";
import {BrowserRouter} from "react-router-dom";
import useRoutes from "./routes";
import {AuthContext} from "./context/auth.context";
import {useAuth} from "./hooks/auth.hook";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
    const {token, userID, login, logout} = useAuth()
    const isAuthenticated = !!token;
    const routes = useRoutes(isAuthenticated);

    return (
        <AuthContext.Provider value={{
            token, userID, login, logout, isAuthenticated
        }}>
            <BrowserRouter>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    closeOnClick
                    pauseOnFocusLoss
                    pauseOnHover
                />
                {routes}
            </BrowserRouter>
        </AuthContext.Provider>
    );
}

export default App;
