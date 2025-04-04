import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import Header from "./Lesson1/Header/Header";
import Footer from "./Lesson1/Footer/Footer";
import InputPage from "./pages/InputPage";
import JsPage from "./pages/JsPage";

const Routing = () => {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/lesson1" element={<HomePage />} />
                    <Route path="/lesson2" element={<InputPage/>} />
                    <Route path="/lesson3" element={<JsPage/>} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
};

export default Routing;