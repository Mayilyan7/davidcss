import React from 'react';
import classes from "./lesson13.module.css"
const Lesson13 = () => {
    return (
        <div className={classes.lesson13}>
            <div className={classes.lar1}>
                <div>
                    <a href={"#"} target={"_self"} className={classes.home}>Home</a>
                </div>
                <div>
                    <a href={"#"} target={"_self"} className={classes.home}>About</a>
                </div>
                <div>
                    <a href={"#"} target={"_self"} className={classes.home}>Courses</a>
                </div>
                <div>
                    <a href={"#"} target={"_self"} className={classes.home}>Contact</a>
                </div>
            </div>
            <div>
                <div className={classes.lar2}>
                    <label htmlFor={"First Name"}>First Name</label>
                    <input type="text" placeholder="First Name" className={classes.border} id={"First Name"}/>
                </div>
                <div className={classes.lar2}>
                    <label htmlFor={"Last Name"}>Last Name</label>
                    <input type="text" placeholder="Last Name" className={classes.border} id={"Last Name"}/>
                </div>
                <div className={classes.lar3}>
                    <label htmlFor={"Email"}>Email</label>
                    <input type="text" placeholder="Email" className={classes.border} id={"Email"}/>
                </div>
                <div className={classes.lar4}>
                    <p>Gender</p>
                    <div className={classes.text2}>
                        <input type={"radio"}/>Male
                        <input type="radio"/>Female
                    </div>
                </div>
                <div className={classes.lar4}>
                        <p>Select Course</p>
                    <div className={classes.text}>
                        <input type={"checkbox"}/>PHP
                        <input type={"checkbox"}/>Javascript
                        <input type={"checkbox"}/>Html/CSS
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Lesson13;