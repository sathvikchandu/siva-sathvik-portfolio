import React from 'react'

const About = () => {
  return( 
  <div name="about" className='w-full h-content bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg py-4 mx-auto flex flex-col justify-center w-full h-content text-center'>
            <div className='pb-20'>
                <p className='text-3xl font-bold border-gray-500  '>
                    About
                </p>
            </div>
            <p className='text-xl md:ml-20'>
            I am a consistent, talented, ambitious and hardworking invidual with good expertise in ReactJS and have good experience in UI/UX design.
            I am a self-taught developer with a passion for learning and a strong desire to create. Currently working on NodeJS and mongoDB. I am also a team
            player who has several projects under collaborataion and I am also good public speaker.
            </p>
        </div>
        
    </div>
  )
}

export default About