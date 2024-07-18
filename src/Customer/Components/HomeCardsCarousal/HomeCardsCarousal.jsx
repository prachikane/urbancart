import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeCards from "../HomeCards/HomeCards";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Button } from "@mui/material";
import {MensTShirt} from "../../Data/MensTShirt.js"


const HomeCardsCarousal = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5 },
  };

  const items = MensTShirt.map((item) =>
    <HomeCards product={item}/>
  );

  const slidePrev = () => {
    setActiveIndex(activeIndex-1)
  };

  const slideNext = () => {
    setActiveIndex(activeIndex+1)
  };

  const syncActiveIndex = () => {
    setActiveIndex(activeIndex);
    console.log("inside sync active index")
  };

  const onUpdated = () =>{
    console.log("Active index is : "+activeIndex)
  }


  return (
    <div className="relative px-4 lg:px-8">
      <div className="relative p-5 border">
        {activeIndex!==0 && <Button
          className="z-50"
          variant="contained"
          sx={{
            backgroundColor: "white",
            position: "absolute",
            top: "8rem",
            left: "0rem",
            transform: "translateX(-50%) rotate(90deg)",
          }}
          onClick={slidePrev}
        >
          <NavigateBeforeIcon
            sx={{ color: "black", transform: "rotate(-90deg)" }}
          />
        </Button>}

        <AliceCarousel
          disableButtonsControls
          disableDotsControls
          items={items}
          activeIndex={activeIndex}
          responsive={responsive}
          onSlideChange={syncActiveIndex}
          onUpdated={onUpdated}
        />

        {activeIndex!== items.length-5 && <Button
          className="z-50"
          variant="contained"
          sx={{
            backgroundColor: "white",
            position: "absolute",
            top: "8rem",
            right: "0rem",
            transform: "translateX(50%) rotate(90deg)",
          }}
          onClick={slideNext}
        >
          <NavigateNextIcon
            sx={{ color: "black", transform: "rotate(-90deg)" }}
          />
        </Button>}
      </div>
    </div>
  );
};

export default HomeCardsCarousal;
