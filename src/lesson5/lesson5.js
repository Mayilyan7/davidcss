import React from 'react';
import "./lesson5.css"
const Lesson5 = () => {
    return (
        <div className="lesson5">
            <div className={"black"}>
                <div className={"bank"}>
                    <a href={"#"} target={"_blank"} id={"white"}>
                        First name
                    </a>
                    <div>
                        <input type="text" name="FirstName"/>
                    </div>
                </div>
                <div className={"bank"}>
                    <a href={"#"} target={"_blank"} id={"white"}>
                        Last Name
                    </a>
                    <div>
                        <input type="text" name="LastName"/>
                    </div>
                </div>
                <div className={"bank"}>
                    <a href={"#"} target={"_blank"} id={"white"}>
                        Password
                    </a>
                    <div>
                        <input type="password" name="Password"/>
                    </div>
                </div>
                <div className={"bank"}>
                    <a href={"#"} target={"_blank"} id={"white"}>
                        Yes or No?
                    </a>
                    <div>
                        <label htmlFor="yes">Yes</label>
                        <input type="radio" name="yes" value="Yes" id="yes"/>
                        <label htmlFor="no">No</label>
                        <input type="radio" name="yes" value="No" id="no"/>
                    </div>
                </div>
                <div className={"bank"}>
                    <a href={"#"} target={"_blank"} id={"white"}>
                        No or Yes?
                    </a>
                    <div>
                        <label htmlFor="yes">No</label>
                        <input type="radio" name="yes" value="No"/>
                        <label htmlFor="no">Yes</label>
                        <input type="radio" name="yes" value="Yes"/>
                    </div>
                </div>
                <div className={"bank"}>
                    <a href={"#"} target={"_blank"} id={"white"}>
                    Select Item
                    </a>
                    <div>
                        <select>
                            <option>lorem</option>
                            <option>lorem</option>
                            <option>lorem</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Lesson5;