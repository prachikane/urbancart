import React from 'react'

const HomeCards = () => {
  return (
    <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3'>
        <div className='h-[13rem] w-[10rem] '>
            <img
                className='object-cover object-top w-full h-full' 
                src='https://plus.unsplash.com/premium_photo-1688497831384-e40b2e5615cd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVucyUyMGNsb3RoZXN8ZW58MHwxfDB8fHww' 
                alt='Black Tee'>   
            </img>
        </div>
        <div className='p-4'>
            <h3 className='text-lg font-medium text-gray-900'>Black Tee</h3>
            <p className='mt-2 text-sm text-gray-500'>Men's Solid Cotton Black Tee</p>
        </div>
    </div>
  )
}

export default HomeCards