import React from 'react'
import HomeCarousel from '../../Components/HomeCarousel/HomeCarousel';
import HomeCardsCarousal from '../../Components/HomeCardsCarousal/HomeCardsCarousal';

const HomePage = () => {
  return (
    <div>
        <HomeCarousel/>
        <div>
          <HomeCardsCarousal></HomeCardsCarousal>
        </div>
    </div>
  )
}

export default HomePage;