import React from 'react'
import HomeCarousel from '../../Components/HomeCarousel/HomeCarousel';
import HomeCardsCarousal from '../../Components/HomeCardsCarousal/HomeCardsCarousal';

const HomePage = () => {
  return (
    <div>
        <HomeCarousel/>
        <div className='py-20 space-y-10 flex flex-col justify-center px-5 lg:px-10'>
          <HomeCardsCarousal/>
          <HomeCardsCarousal/>
          <HomeCardsCarousal/>
          <HomeCardsCarousal/>
          <HomeCardsCarousal/>
        </div>
    </div>
  )
}

export default HomePage;