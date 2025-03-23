import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const Routing = () => {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/lesson1" element={<HomePage />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
};

export default Routing;