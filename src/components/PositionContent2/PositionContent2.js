import React from 'react';
import './PositionContent2.scss';
import PositionCard from "../PositionCard/PositionCard";
import image1 from "../../assets/images/image1.jpg";
import image2 from "../../assets/images/image2.jpg";
import image3 from "../../assets/images/image3.jpg";
import image4 from "../../assets/images/image4.jpg";

const PositionContent2 = () => {


    let mek = {
        name: 'More',
        image: image1,
        description: 'Lorem ipsum is simply dummy.'
    }

    let erku = {
        name: 'More',
        image: image2,
        description: 'Lorem ipsum is simply dummy.'
    }

    let ereq = {
        name: 'More',
        image: image3,
        description: 'Lorem ipsum is simply dummy.'
    }

    let chors = {
        name: 'More',
        image: image4,
        description: 'Lorem ipsum is simply dummy.'
    }


    let products = [mek, erku, ereq, chors];

    return (
        <section className='Content'>
            <div className='Content2'>
                {products.map((vale)=>{
                    return (
                        <PositionCard name={vale.name} image={vale.image} description={vale.description}/>
                    )
                })}
            </div>
        </section>
    );
};

export default PositionContent2;