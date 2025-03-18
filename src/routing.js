import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Position from "./pages/Position";


const Routing = () => {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/position" element={<Position />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
};

export default Routing;