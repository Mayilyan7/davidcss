import React from 'react';
import './inputpage2.scss';

const InputPage2 = () => {
    return (
        <div>
            <h1>Step2: Delivery addres</h1>
            <div className={'address'}>
                <label for='address'>
                    <p>Address</p>
                </label>
                <textarea id='address'></textarea>
            </div>
            <div className={'address'}>
                <label for='postcode'>
                    <p>Post Code</p>
                </label>
                <input type={'text'} id='postcode'/>
            </div>
            <div className={'address'}>
                <label for='country'>
                    <p>Country</p>
                </label>
                <input type={'text'} id='country'/>
            </div>
        </div>
    );
};

export default InputPage2;