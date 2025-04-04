import React from 'react';
import './inputpage3.scss';
import Visa from '../../assets/images/visa.jpg';
import Amex from '../../assets/images/amex.png';
import Mastercard from '../../assets/images/mastercard.png'

const InputPage3 = () => {
    return (
        <div>
            <h1>Step3: Card Detalies</h1>
            <div className={'card'}>
                <label for='type'>
                    <p>Card Type</p>
                </label>
                <input type={'radio'} name={'Visa'} /><img src={Visa} className={'visa'} id='type'/>
                    <p className={'amex'}>Visa</p>
                <input type={'radio'} name={'Visa'} /><img src={Amex} className={'visa'}/>
                    <p className={'amex'}>AmEx</p>
                <input type={'radio'} name={'Visa'} /><img src={Mastercard} className={'visa'}/>
                    <p className={'amex'}>Mastercard</p>
            </div>
            <div className={'radio'}>
                <label for='cardnumber'>
                    <p>Card Number</p>
                </label>
                <input type={'text'} id='cardnumber'/>
            </div>
            <div className={'radio'}>
                <label for='security'>
                    <p>Security Code</p>
                </label>
                <input type={'card'} id='security'/>
            </div>
            <div className={'radio'}>
                <label for='namecard'>
                    <p>Name on Card</p>
                </label>
                <input type={'text'} placeholder={'Exact name an on the card'} id='namecard' />
            </div>
        </div>
    );
};

export default InputPage3;