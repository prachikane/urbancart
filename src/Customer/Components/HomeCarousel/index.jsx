import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { HomeCarousalData } from './data';

const items = HomeCarousalData.map((item) =>
    <div className='img-div'>
        <img className='cursor-pointer' role='presentation' src={item.image} alt=""></img>
    </div>
);

const HomeCarousel = () => {
    return(
        <AliceCarousel items={items}/>
    )
};

export default HomeCarousel;