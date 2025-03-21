import React from 'react';
import './Content.scss'

const Content = () => {
    return (
        <div className="guyn">
            <div className={'pages'}>
                <div className={'page1'}>
                    <p>LIFETIME</p>
                </div>
                <div className={'page2'}>
                    <p>$999</p>
                </div>
                <div className={'page3'}>
                    <div className={'page4'}>
                        <p>Unlimited Storage</p>
                    </div>
                    <div className={'page4'}>
                        <p>Unlimited Clients</p>
                    </div>
                    <div className={'page4'}>
                        <p>Unlimited Projects</p>
                    </div>
                    <div className={'page4'}>
                        <p>Unlimited Colors</p>
                    </div>
                    <div className={'page4'}>
                        <p>Free Goodies</p>
                    </div>
                    <div className={'page4'}>
                        <p>24/7 Email support</p>
                    </div>
                    <div className={'page5'}>
                        <input type={'button'} value={'BUY NOW'}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content;