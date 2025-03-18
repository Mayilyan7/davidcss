import React from 'react';
import './pagecontent.scss';
import HomeCard from "../HomeCard/HomeCard";
import image1 from "../../assets/images/image1.jpg";
import image2 from "../../assets/images/image2.jpg";
import image3 from "../../assets/images/image3.jpg";

const HomePageContent = () => {


    let Anna = {
        name: 'Lorem',
        image: image1,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    }

    let Deen = {
        name: 'Lorem',
        image: image2,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    }

    let Davit = {
        name: 'Lorem',
        image: image3,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    }

    let products = [Anna, Deen, Davit];

    return (
        <section className='homeContent'>
            <h1>Home Page Content</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Alias aut commodi consectetur dolorum,
            </p>
            <div className='itemsWrapper'>
                {products.map((vale)=>{
                    return (
                        <HomeCard name={vale.name} image={vale.image} description={vale.description}/>
                    )
                })}
            </div>
        </section>
    );
};

export default HomePageContent;