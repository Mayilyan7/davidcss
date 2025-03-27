import React from 'react';
import './inputpage1.scss';

const InputPage1 = () => {
    return (
        <div>
            <h1>Step1: Your Details</h1>
            <div className={'name'}>
                <label for='name'>
                    <p>Name</p>
                </label>
                <input type={'text'} placeholder={'First and Last Name'} id='name' />
            </div>
            <div className={'name'}>
                <label for='email'>
                    <p>Email</p>
                </label>
                <input type={'text'} placeholder={'email@example.com'} id='email' />
            </div>
            <div className={'name'}>
                <label for='phone'>
                    <p>Phone</p>
                </label>
                <input type={'number'} placeholder={'+37455859505'} id='phone' />
            </div>
        </div>
    );
};

export default InputPage1;