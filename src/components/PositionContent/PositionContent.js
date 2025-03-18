import React from 'react';
import './PositionContent.scss'
import image2 from "../../assets/images/image2.jpg";

const PositionContent = () => {
    return (
            <div className={'game'}>
                <img className="img" src={image2} alt="Grey" />
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>Blog</li>
                        <li>Features</li>
                        <li>Contact</li>
                    </ul>
                </nav>
                <nav>
                    <ul className={'pc'}>
                        <li>PC</li>
                        <li>XBOX360</li>
                        <li>Ps3</li>
                        <li>PSP</li>
                        <li>MOBILE</li>
                    </ul>
                </nav>
            </div>
    );
};

export default PositionContent;