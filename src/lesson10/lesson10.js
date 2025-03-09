import React from 'react';
// import classes from "./lesson10.module.css"
const Lesson10 = () => {
    return (
        <div className={classes.color}>
            <div className={classes.pingvin}>
                <div>
                    <ul className={classes.mejtex}>
                        <li>
                            <a href={"#"} target={"_self"} className={classes.spitak}>Home</a>
                        </li>
                        <li>
                            <a href={"#"} target={"_self"} className={classes.spitak}>News</a>
                        </li>
                        <li>
                            <a href={"#"} target={"_self"} className={classes.spitak}>Articles</a>
                        </li>
                        <li>
                            <a href={"#"} target={"_self"} className={classes.spitak}>Forum</a>
                        </li>
                        <li>
                            <a href={"#"} target={"_self"} className={classes.spitak}>Contact</a>
                        </li>
                        <li>
                            <a href={"#"} target={"_self"} className={classes.spitak}>About</a>
                        </li>
                    </ul>
                </div>
                 <div className={classes.dar}>
                    <div className={classes.drosh1}></div>
                    <div className={classes.drosh2}></div>
                    <div className={classes.drosh3}></div>
                 </div>
            </div>
            <div className={classes.night}></div>
            <div className={classes.tuxt}>
                <div className={classes.search}></div>
                <p>Search</p>
                <input type={"text"}/>
            </div>
            <div className={classes.rezin}>
            <div>
                <div>
                    <h1>Categories</h1>
                </div>
                <div>
                    <ul  className={classes.ket}>
                        <li>
                            <a href={"#"} target={"_self"} className={classes.spitak}>Acacia</a>
                        </li>
                        <li>
                            <a href={"#"} target={"_self"} className={classes.spitak}>Christmas Aconite</a>
                        </li>
                        <li>
                            <a href={"#"} target={"_self"} className={classes.spitak}>Elastic Momordica</a>
                        </li>
                        <li>
                            <a href={"#"} target={"_self"} className={classes.spitak}>Dragon-plant</a>
                        </li>
                        <li>
                            <a href={"#"} target={"_self"} className={classes.spitak}>Foxglove</a>
                        </li>
                        <li>
                            <a href={"#"} target={"_self"} className={classes.spitak}>Helenium</a>
                        </li>
                        <li>
                            <a href={"#"} target={"_self"} className={classes.spitak}>Persian Candy-tuft</a>
                        </li>
                        <li>
                            <a href={"#"} target={"_self"} className={classes.spitak}>Orange-blossom</a>
                        </li>
                    </ul>
                </div>
            </div>
                <div className={classes.product2}>
                    <div  className={classes.product}>
                        <div className={classes.mat}></div>
                        <div className={classes.mat3}>
                            <div>
                                <h3>Product Wedding Packages Description</h3>
                            </div>
                            <div className={classes.mat2}>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                            </div>
                            <div className={classes.mat4}>
                                <p>
                                    Price $520
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className={classes.mat}></div>
                            <div className={classes.mat3}>
                                <div>
                                    <h3>Product Wedding Packages Description</h3>
                                </div>
                                <div className={classes.mat2}>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                                </div>
                                <div className={classes.mat4}>
                                    <p>
                                        Price $520
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default Lesson10;