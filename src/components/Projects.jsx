import React from 'react'

import enma from '../assets/enma.png'
import wechat from '../assets/wechat.png'
import deceptive from '../assets/deceptive.png'

const Projects = () => {
    const tech=[
       {
        id:1,
        src:enma,
        title:'Enma',
        style:'shadow-gray-500'
       }, 
       {
        id:2,
        src:wechat,
        title:'Wechat',
        style:'shadow-orange-500'
       }, 
       {
        id:3,
        src:deceptive,
        title:'Deceptive-image-inator',
        style:'shadow-yellow-500'
       }
    ]
  return (
    <div name="experience" className='bg-gradient-to-b from-gray-800 to-black w-full h-content '>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-content text-white'>
            
            <div className='text-center'>
                

                <p className='text-3xl font-bold border-gray-500 py-2 text-center'>
                  Experience  
                </p>
                <p className='py-6 ml-20 text-xl'>
                    These are the Projects that I have worked on.
                </p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                {
                    tech.map(({id,src,title,style})=>(
                        <div className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                            <figure>
                                <img src={src} alt={title} className='w-30 mx-auto'/>
                                <figcaption className="mt-4">{title}</figcaption>
                            </figure>
                        </div>
                    ))
                }
                
            </div>
        </div>
    </div>
  )
}

export default Projects