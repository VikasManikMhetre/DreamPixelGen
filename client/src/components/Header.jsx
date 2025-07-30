import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col justify-center items-center text-center my-20'>
        <div className='bg-purple-200 inline-flex text-center gap-2 px-6 py-1 rounded-full border border-neutral-500 '>
            <p>Best text to image generator </p>
            <img src={assets.star_icon} alt="" />
        </div>

        <h1 className='text-4xl sm:text-7xl text-center mx-auto mt-10 max-w-[300px] sm:max-w-[590px] font-extrabold leading-tight'>
        <span className="text-transparent bg-clip-text bg-gradient-to-tr from-purple-950 via-purple-800 to-purple-700">
            Turn Text to
        </span>{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-l from-blue-500 via-red-500 to-pink-500">
            image
        </span>
        <span className="text-transparent bg-clip-text bg-gradient-to-tl from-purple-950 via-purple-800 to-purple-700">
            , in seconds.
        </span>
        </h1>
        <p className='text-center max-w-xl mx-auto mt-5 '>
            Imagine it. See it.
            DreamPixelGen turns your wildest ideas into 
            vibrant visuals—like magic!
        </p>
        <button className='sm:text-lg text-white bg-gradient-to-r from-black via-purple-1000 to-purple-900 w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full '> 
            Generate Images
            <img className='h-6' src={assets.star_group} alt="" />
        </button>

        <div className='flex flex-wrap justify-center mt-16 gap-3 '>
            {Array(6).fill('').map((item, index) => (
                <img className="rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10" 
                src={index % 2 ===0? assets.sample_img_2 : assets.sample_img_1}
                alt="" key={index} width={70} />
             ))}
        </div>
        <p className=' mt-2 text-neutral-600'> Genrated images from DreamPixelGen </p>

    </div>
  )
}

export default Header
