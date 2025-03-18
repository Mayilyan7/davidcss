import React from 'react';
import './PositionCard.scss';

const PositionCard = ({name, image, description}) => {
    return (
        <div>
            <div className="PositionCard">
                <img src={image} alt="product image" />
            </div>
            <p>{description}</p>
            <div>
                <input type={'button'} value={name}/>
            </div>
        </div>
    );
};

export default PositionCard;