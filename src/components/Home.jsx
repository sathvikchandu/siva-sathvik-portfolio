import React from 'react'
import Heroimage from '../assets/HeroImage.jpg'
import {TiArrowRightThick} from 'react-icons/ti'
const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black to-gray-800 text-white via-black md:-mt-16'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-3 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
          <h2 className=' text-3xl sm:text-5xl font-bold text-white'>
            I am a full stack developer
          </h2>
          <p className='text-gray-500 py-4 max-w-sm'>
          An Active learner with a good problem-solving skill and always open to challenges. A self motivated web developer with good strong communicatio and presentation skills aiming to be on top of the ladder.
          </p>
          <div>
            <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-red-500 to-blue-500 cursor-pointer' >
              <a href='https://drive.google.com/file/d/12MPa-V72JOGbZAR201sTHBglKnJ7Q4-Q/view?usp=sharing' target='_new'>
              Portfolio </a>
              <span className='group-hover:rotate-90 duration-300'>
              <TiArrowRightThick size={22} className="ml-1" />
              </span> 
            </button>

          </div>
          
        </div>
        <div>
          <img className="rounded-2xl mx-3 h-60 w-2/3 md:w-full my-5 " src={Heroimage} alt="hero"/>
        </div>
      </div>
    </div>
  )
}

export default Home