import React from 'react';
import mirg3 from "../assets/images/mirg3.jpg";

const PageLesson1 = () => {
    return (
        <div>
            <div className={'new'}>
                <div>
                    <p className={'text2'}>
                        New Technologies
                    </p>
                    <img src={mirg3} className={'nkar'}/>
                    <p className={'text2'}>
                        Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry.
                    </p>
                    <div className={'text4'}>
                        <div className={'text4'}>
                            <input type={"button"} value={'Read More'} className={'button'}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageLesson1;