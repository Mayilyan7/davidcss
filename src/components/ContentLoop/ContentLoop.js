import React from 'react';
import './ContentLoop.scss'
import Content from "../Content/Content";


const ContentLoop = () => {


    let mek = {
        name: 'More',
        description: 'Lorem ipsum is simply dummy.'
    }

    let erku = {
        name: 'More',
        description: 'Lorem ipsum is simply dummy.'
    }

    let ereq = {
        name: 'More',
        description: 'Lorem ipsum is simply dummy.'
    }

    let chors = {
        name: 'More',
        description: 'Lorem ipsum is simply dummy.'
    }

    let products = [mek, erku, ereq, chors];

    return (
        <section className='content1'>
            <div className='content2'>
                {products.map((vale)=>{
                    return (
                        <Content name={vale.name} description={vale.description}/>
                    )
                })}
            </div>
        </section>
    );
};

export default ContentLoop;