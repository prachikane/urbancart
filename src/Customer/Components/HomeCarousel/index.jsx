import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { HomeCarousalData } from './data';
//import styles from './index.scss';

const items = HomeCarousalData.map((item) =>
    <img className='cursor-pointer' role='presentation' src={item.image} alt=""></img>
);

const HomeCarousel = () => {
    return(
        <AliceCarousel items={items}/>
    )
};

export default HomeCarousel;