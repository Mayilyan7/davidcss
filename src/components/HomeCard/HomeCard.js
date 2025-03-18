import React from 'react';
import './HomeCard.scss';

const HomeCard = ({name, image, description}) => {
    return (
        <div className="HomeCard">
            <img src={image} alt="product image" />
            <h3>{name}</h3>
            <p>{description}</p>
        </div>
    );
};

export default HomeCard;