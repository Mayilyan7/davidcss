import React from 'react';
import './lesson1.scss'
import HomePageHeader from "../HomePageHeader/HomePageHeader";
import Nav from "../Nav/Nav";
import Page1 from "../Page1/Page1";
import Page2 from "../Page2/Page2";
import Page3 from "../Page3/Page3";
import Page4 from "../Page4/Page4";
const Lesson1 = () => {
    return (
        <div className={"lesson1"}>
            <HomePageHeader />
            <Nav />
            <Page1 />
            <Page2 />
            <Page3 />
            <Page4 />
        </div>
    );
};

export default Lesson1;