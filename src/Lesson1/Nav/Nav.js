import React from 'react';
import './nav.scss'
import HomeLogo from '../../assets/images/HomeLogo.png'
const Nav = () => {
    return (
        <div className={'container1'}>
        <div className={'nav'}>
            <div>
                <img src={HomeLogo} className={'home'}/>
            </div>
            <div className={'blog'}>
                <a href="#" className={'gic'}>About Us</a>
            </div>
            <div  className={'blog'}>
                <a href="#" className={'gic'}>Gallery</a>
            </div>
            <div  className={'blog'}>
                <a href="#" className={'gic'}>Events</a>
            </div>
            <div  className={'blog'}>
                <a href="#" className={'gic'}>Blog</a>
            </div>
            <div  className={'blog'}>
                <a href="#" className={'gic'}>Contact</a>
            </div>
        </div>
        </div>
    );
};

export default Nav;