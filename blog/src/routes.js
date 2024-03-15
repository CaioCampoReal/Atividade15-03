import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from './components/Login/login';
import Home from './components/Home';



function RoutesApp() {

    return(

        <BrowserRouter>

            <Routes>

                <Route path="/login" element={<Login/>} />
                <Route path="/" element={<Home/>} />

            </Routes>

        </BrowserRouter>

    );

}



export default RoutesApp;