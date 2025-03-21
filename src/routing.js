import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Position from "./pages/Position";
import Lesson2 from "./pages/Lesson2";
import Lesson3 from "./pages/Lesson3";


const Routing = () => {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/position" element={<Position />} />
                    <Route path="/lesson2" element={<Lesson2 />} />
                    <Route path="/lesson3" element={<Lesson3 />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
};

export default Routing;