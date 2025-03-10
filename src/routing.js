import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router";
import Lesson1 from "./lesson1/lesson1";
import Lesson2 from "./lesson2/lesson2";
import Lesson3 from "./lesson3/lesson3";
import Lesson4 from "./lesson4/lesson4"
import Lesson5 from "./lesson5/lesson5";
import Lesson6 from "./lesson6/lesson6";
import Lesson7 from "./lesson7/lesson7";
import Lesson8 from "./lesson8/lesson8";
import Lesson9 from "./lesson9/lesson9";
import Lesson10 from "./lesson10/lesson10";
import Lesson11 from "./lesson11/lesson11";
import Lesson12 from "./lesson12/lesson12";
import Lesson13 from "./lesson13/lesson13";

const Routing = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Lesson1 />} />
                    <Route path="/lesson2" element={<Lesson2 />} />
                    <Route path="/lesson3" element={<Lesson3/>} />
                    <Route path="/lesson4" element={<Lesson4/>} />
                    <Route path="/lesson5" element={<Lesson5/>} />
                    <Route path="/lesson6" element={<Lesson6/>} />
                    <Route path="/lesson7" element={<Lesson7/>} />
                    <Route path="/lesson8" element={<Lesson8/>} />
                    <Route path="/lesson9" element={<Lesson9/>} />
                    <Route path="/lesson10" element={<Lesson10/>} />
                    <Route path="/lesson11" element={<Lesson11/>} />
                    <Route path="/lesson12" element={<Lesson12/>} />
                    <Route path="/lesson13" element={<Lesson13/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default Routing;