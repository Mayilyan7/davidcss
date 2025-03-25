import React from 'react';
import './homepageheader.scss'
import AppleLogo from '../../assets/images/AppleLogo.png';
import FacebookLogo from '../../assets/images/FacebookLogo.png';
import GmailLoigo from '../../assets/images/GmailLoigo.png';
import InstagramLogo from '../../assets/images/InstagramLogo.png';
import Gic from '../../assets/images/gic.png';

const HomePageHeader = () => {
    return (
        <div className={"container"}>
            <div className={"header"}>
                <div className={"child1"}>
                    <img src={AppleLogo} className={"logo1"} />
                    GROWMAX
                </div>
                <div className={"child2"}>
                    <div>
                        <img src={FacebookLogo} className={"logo2"} />
                    </div>
                    <div>
                        <img src={InstagramLogo} className={"logo2"} />
                    </div>
                    <div>
                        <img src={GmailLoigo} className={"logo2"} />
                    </div>
                    <div>
                        <img src={Gic} className={"logo3"} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePageHeader;