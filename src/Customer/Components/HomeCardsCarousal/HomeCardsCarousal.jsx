import React from "react";
import AliceCarousel from "react-alice-carousel";
import HomeCards from "../HomeCards/HomeCards";

const HomeCardsCarousal = () => {
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const items = [1, 1, 1, 1, 1].map((item) => <HomeCards />);

  return (
    <div className="relative px-4 lg:px-8">
      <div className="relative p-5">
        <AliceCarousel
          items={items}
          disableButtonsControls
          autoPlay
          autoPlayInterval={2000}
          infinite
          responsive={responsive}
        />
      </div>
    </div>
  );
};

export default HomeCardsCarousal;
