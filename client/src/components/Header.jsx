import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { motion } from "framer-motion" 
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const Header = () => {

    const {user, setShowLogin}= useContext(AppContext)
    const navigate= useNavigate()
    const onClickHandler = () =>{
        if(user){
            navigate('/result')
        }
        else{
            setShowLogin(true)
        }
    }

  return (
    <motion.div className='flex flex-col justify-center items-center text-center my-20'
        initial={{opacity:0.2, y:100}}
        transition={{duration: 1}}
        whileInView={{ opacity: 1, y:0}}
        viewport={{once: true}}    
    >
        <motion.div className='bg-purple-200 inline-flex text-center gap-2 px-6 py-1 rounded-full border border-neutral-500 '
        
        initial={{opacity:0, y:-20}}
        transition={{delay: 0.2, duration: 0.8}}
        animate={{ opacity: 1, y:0}}   
        >
            <p>Best text to image generator </p>
            <img src={assets.star_icon} alt="" />
        </motion.div>

        <motion.h1 className='text-4xl sm:text-7xl text-center mx-auto mt-10 max-w-[300px] sm:max-w-[590px] font-extrabold leading-tight'
        
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:0.4, duration:2}}
        >
            <span className="text-transparent bg-clip-text bg-gradient-to-tr from-purple-950 via-purple-800 to-purple-700">
                Turn Text to
            </span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-blue-500 via-red-500 to-pink-500">
                image
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-tl from-purple-950 via-purple-800 to-purple-700">
                , in seconds.
            </span>
        </motion.h1>

        <motion.p className='text-center max-w-xl mx-auto mt-5 '
            initial={{opacity:0, y:20}}
            animate={{opacity:1, y:0}}
            transition={{delay:0.6, duration:0.8}}
        
        >
            Imagine it. See it.
            DreamPixelGen turns your wildest ideas into 
            vibrant visuals—like magic!
        </motion.p>


        <motion.button onClick={onClickHandler}
        
        className='sm:text-lg text-white bg-gradient-to-r from-black via-purple-1000 to-purple-900 w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full '
        whileHover={{scale: 1.05}}
        whileTap={{scale: 0.95}}
        initial={{opacity:0}}
        animate={{ opacity:1 }}
        transition={{default:{duration:0.5}, opacity:{delay:0.8, duration:1} }}
        > 
            Generate Images
            <img className='h-6' src={assets.star_group} alt="" />
        </motion.button>

        <motion.div className='flex flex-wrap justify-center mt-16 gap-3 '
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay:1, duration:1}}
        
        >
            {Array(6).fill('').map((item, index) => (
                <motion.img 
                whileHover={{scale:1.05, duration: 0.1 }}
                className="rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10" 
                src={index % 2 ===0? assets.sample_img_2 : assets.sample_img_1}
                alt="" key={index} width={70} />
             ))}
        </motion.div>
        <motion.p className=' mt-2 text-neutral-600'
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay:1.2, duration:0.8}}
        > Genrated images from DreamPixelGen 
        </motion.p>

    </motion.div>
  )
}

export default Header
