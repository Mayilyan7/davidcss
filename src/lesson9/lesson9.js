import React from 'react';
import classes from "./lesson9.module.css"
const Lesson9 = () => {
    return (
        <div className={classes.arj}>
            <div>
                <h1>Blog</h1>
            </div>
            <div className={classes.katu}>
                <div className={classes.gayl}></div>
                <div className={classes.shun}>
                    <h1>DONEC JUSTO URNA, MALESUADA A VIVERRA AC</h1>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type
                        specimen book. It has survived not only five centuries, but also the leap into
                    </p>
                    <input type={"button"} value={"More"} className={classes.aryuc}/>
                </div>
            </div>
            <div className={classes.katu}>
                <div className={classes.gayl}></div>
                <div className={classes.shun}>
                    <h1>MALESUADA A VIVERRA AC, PELLENTESQUE VITAE</h1>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type
                        specimen book. It has survived not only five centuries, but also the leap into
                    </p>
                    <input type={"button"} value={"More"} className={classes.aryuc}/>
                </div>
            </div>
            <div>
                <ul className={classes.heraxos}>
                    <li className={classes.chxol}>Start</li>
                    <li className={classes.chxol}>Prev</li>
                    <li className={classes.chxol}>1</li>
                    <li className={classes.chxol}>2</li>
                    <li className={classes.chxol}>3</li>
                    <li className={classes.chxol}>Next</li>
                    <li className={classes.chxol}>End</li>
                </ul>
            </div>
        </div>
    );
};

export default Lesson9;