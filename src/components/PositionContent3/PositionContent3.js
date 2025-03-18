import React from 'react';
import './PositionContent3.scss';
import image1 from'../../assets/images/image1.jpg'

const PositionContent3 = () => {
    return (
        <div className="PositionContent3">
            <div className="darak1">
                <div className="darak2">
                    <div className="darak3">
                        <div className="darak3">
                            <img className="img" src={image1} alt="image1" />
                            <div className="darak4">
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing
                                    and typesetting industry. Lorem Ipsum has been the
                                    industry's standard dummy text ever since the 1500s,
                                </p>
                                <div className={'link'}>
                                    <p>
                                        <a href="#">Comments</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="darak3">
                        <div className="darak3">
                            <img className="img" src={image1} alt="image1" />
                            <div className="darak4">
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing
                                    and typesetting industry. Lorem Ipsum has been the
                                    industry's standard dummy text ever since the 1500s,
                                </p>
                                <div className={'link'}>
                                    <p>
                                        <a href="#">Comments</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="darak5">
                    <div className="text">
                        <p>Lorem Ipsum dolor sit amet</p>
                    </div>
                    <div className="text">
                        <p>Lorem ipsum is simply dummy consetetur.</p>
                    </div>
                    <div className="text">
                        <p>Lorem ipsum is simply dummy consetetur.</p>
                    </div>
                    <div className="text">
                        <p>Lorem ipsum is simply dummy consetetur.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PositionContent3;
