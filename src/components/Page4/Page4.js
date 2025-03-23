import React from 'react';
import './page4.scss'
import mirg3 from '../../assets/images/mirg3.jpg'

const Page4 = () => {
    return (
        <div className={'page4'}>
            <div className={'new'}>
                <div>
                    <p>New Technologies</p>
                    <img src={mirg3} className={'nkar'}/>
                    <p>Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry.</p>
                    <input type={"button"} value={'Read More'}/>
                </div>
            </div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default Page4;