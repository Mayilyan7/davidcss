import React from 'react';
import './lesson3.scss'

const Lesson3 = () => {

    let String1 = 88;
    let String2 = 33;
    let String3 = 77;
    let sum1 = String1 + String2 + String3;
    let sum2 = sum1 / 3;

    function lll () {
        document.getElementById('ddd').innerHTML ='<div class=\'bbb\'></div>';
    }

    return (
        <div className="lesson3">
            <div>tariq: {sum2}</div>
            <div onClick={lll} id="ddd">
                <input type={"button"} value={'Creator'} className='chap'/>
            </div>
        </div>
    );
};

export default Lesson3;