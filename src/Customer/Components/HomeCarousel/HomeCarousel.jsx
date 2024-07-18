import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import {HomeCarousalData} from '../../Data/HomeCarousalData.js'

const items = HomeCarousalData.map((item) => (
        <img
            className="cursor-pointer"
            role="presentation"
            src={item.image}
            alt=""
            style={{margin:"auto"}}
        ></img>
));

const HomeCarousel = () => {
  return (
    <div>
      <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={2000}
        infinite
      />
    </div>
  );
};

export default HomeCarousel;
