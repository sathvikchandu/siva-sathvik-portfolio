import React from 'react'

const ContactUs = () => {
  const Response = () => {
   
    window.location.reload();
  }
  
  return (
    <div name="contact" className='w-full h-content bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
       <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-content text-center '>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-gray-500 h-content text-center'>Contact</p>
              
            </div>
            <div className='flex justify-center items-center'>
                <form action='https://getform.io/f/9b13342f-e748-4906-ba3f-564f445bc8e6' method='POST' className='flex flex-col w-full md:w-1/2 md:mt-20' onSubmit={Response}>
                    <input type="text" name="name" placeholder='Enter your name'className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none mb-2'/>
                    <input type="email" name="Email" placeholder='Enter your email'className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none mb-2'/>
                    <textarea name='message' rows="5" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" placeholder='Enter your message here' >

                    </textarea>
                    <button type="submit" className='text-white bg-gradient-to-b from-red-500 to to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Let's talk</button>
                </form>
            </div>
        </div> 
    </div>
  )
}

export default ContactUs