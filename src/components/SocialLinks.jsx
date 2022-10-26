import React from 'react'
import { FaGithub,FaLinkedin } from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
const SocialLinks = () => {
  const links=[
    
    {
      id: 2,
      child:(
        <>
          Github <FaGithub size={30}/>
        </>
      ),
      href: 'https://github.com/sathvikchandu',
      
    },
    {
      id: 3,
      child:(
        <>
          Email <HiOutlineMail size={30}/>
        </>
      ),
      href: 'mailto: sivasathvikchandu_medasani@srmap.edu.in',
      style: 'rounded-tr-md'
    },
    {
      id: 4,
      child:(
        <>
          Resume <BsFillPersonLinesFill size={30}/>
        </>
      ),
      href: 'https://drive.google.com/file/d/1qArHKrLX79fsUHlu-IjtkKEV7BGW5aUx/view?usp=sharing',
      style: 'rounded-tr-md',
      download: true,
    },
    {
      id: 1,
      child:(
        <>
          LinkedIn <FaLinkedin size={30}/>
        </> 
      ),
      href: 'https://www.linkedin.com/in/siva-sathvik-chandu/',
      style: 'rounded-tr-md'
    },
  ]
  return (
    <div className='hidden lg:flex flex-col top-[34%] left-0 fixed'>
      <ul>

        {links.map(({id,child,href,style,download})=>(
          <li key={id} className={'bg-gradient-to-r from-red-500 to-blue-500 flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300'}><a href={href} className='flex justify-between items-center w-full text-white' download={download} target='_blank' rel="noreferrer">#<>{child}</></a></li>
        ))}


        
      </ul>
    </div>
  )
}

export default SocialLinks
