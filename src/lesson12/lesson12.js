import React from 'react';
// import classes from "./lesson12.module.css"
const Lesson12 = () => {
    return (
        <div>
            <div className={classes.heder}>
                <div>
                    <a href={"#"} target={"_self"} className={classes.heder1}>Home</a>
                </div>
                <div>
                    <a href={"#"} target={"_self"} className={classes.heder1}>User login</a>
                </div>
            </div>
            <div className={classes.main}>
                <div className={classes.chap}>
                    <div className={classes.travel1}>
                        <h1 className={classes.travel2}>Traveljoy</h1>
                    </div>
                    <div className={classes.home}>
                        <div>
                            <a href={"#"} target={"_self"} className={classes.heder1}>Home</a>
                        </div>
                        <div>
                            <a href={"#"} target={"_self"} className={classes.heder1}>About</a>
                        </div>
                        <div>
                            <a href={"#"} target={"_self"} className={classes.heder1}>Gallery</a>
                        </div>
                        <div>
                            <a href={"#"} target={"_self"} className={classes.heder1}>Blog</a>
                        </div>
                        <div>
                            <a href={"#"} target={"_self"} className={classes.heder1}>Contact</a>
                        </div>
                        <div className={classes.flex}>
                            <div className={classes.fc}></div>
                            <div className={classes.twitter}></div>
                            <div className={classes.whatsapp}></div>
                            <div className={classes.instagram}></div>
                        </div>
                    </div>
                    <div className={classes.pat}>
                        <div>
                        <div className={classes.nkar}></div>
                        <div>
                            <p className={classes.text1}>Lorem ipsum</p>
                        </div>
                            <div className={classes.nkar1}>
                                <p className={classes.text2}>
                                    Lorem Ipsum is simply
                                    dummy text of the printing and typesetting industry
                                </p>
                                <div className={classes.button}>
                                    <div className={classes.dolar}>$334</div>
                                    <div>
                                        <input type={"button"} value={"More"}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className={classes.nkar}></div>
                            <div>
                                <p className={classes.text1}>Lorem ipsum</p>
                            </div>
                            <div className={classes.nkar1}>
                                <p className={classes.text2}>Lorem Ipsum is simply
                                    dummy text of the printing and typesetting industry
                                </p>
                                <div className={classes.button}>
                                    <div className={classes.dolar}>$334</div>
                                    <div>
                                        <input type={"button"} value={"More"}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className={classes.nkar}></div>
                            <div>
                                <p className={classes.text1}>Lorem ipsum</p>
                            </div>
                            <div className={classes.nkar1}>
                                <p className={classes.text2}>Lorem Ipsum is simply
                                    dummy text of the printing and typesetting industry
                                </p>
                                <div className={classes.button}>
                                    <div className={classes.dolar}>$334</div>
                                    <div>
                                        <input type={"button"} value={"More"}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className={classes.nkar}></div>
                            <div>
                                <p className={classes.text1}>Lorem ipsum</p>
                            </div>
                            <div className={classes.nkar1}>
                                <p className={classes.text2}>Lorem Ipsum is simply
                                    dummy text of the printing and typesetting industry
                                </p>
                                <div className={classes.button}>
                                    <div className={classes.dolar}>$334</div>
                                    <div>
                                        <input type={"button"} value={"More"}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.footer}>
                <p className={classes.footer1}>Travel Joy (C) 2013 | Privacy Policy</p>
            </div>
        </div>
    );
};

export default Lesson12;