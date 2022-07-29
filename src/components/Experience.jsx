import React from 'react'

import html from "../assets/html.png"
import css from "../assets/css.png"
import javascript from "../assets/javascript.png"
import reactImage from "../assets/react.png"
import github from "../assets/github.png"
import tailwind from "../assets/tailwind.png"

const Experience = () => {
    const tech=[
       {
        id:1,
        src:html,
        title:'HTML',
        style:'shadow-orange-500'
       }, 
       {
        id:2,
        src:css,
        title:'CSS',
        style:'shadow-blue-500'
       }, 
       {
        id:3,
        src:javascript,
        title:'JavaScript',
        style:'shadow-yellow-500'
       }, 
       {
        id:4,
        src:reactImage,
        title:'React',
        style:'shadow-blue-600'
       }, 
       {
        id:5,
        src:github,
        title:'Github',
        style:'shadow-gray-500'
       }, 
       {
        id:6,
        src:tailwind,
        title:'Tailwind',
        style:'shadow-sky-400'
       }, 
    ]
  return (
    <div name="experience" className='bg-gradient-to-b from-gray-800 to-black w-full h-content '>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-content text-white'>
            
            <div className='text-center'>
                

                <p className='text-3xl font-bold border-gray-500 py-2 text-center'>
                  Experience  
                </p>
                <p className='py-6 ml-20 text-xl'>
                    These are the technologies I have worked with.
                </p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                {
                    tech.map(({id,src,title,style})=>(
                        <div className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                            <figure>
                                <img src={src} alt={title} className='w-20 mx-auto'/>
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

export default Experience