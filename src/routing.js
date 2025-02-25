import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router";
import Lesson1 from "./lesson1/lesson1";
import Lesson2 from "./lesson2/lesson2";

const Routing = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Lesson1 />} />
                    <Route path="/lesson2" element={<Lesson2 />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default Routing;