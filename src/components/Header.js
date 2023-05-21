import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Image from '../images/lm.png'

const Header = ()=>{
const [scrolling, setScrolling] = useState(false)
const handleScroll = ()=>{
    if(window.scrollY>50){
        setScrolling(true)
    }else{
        setScrolling(false)
    }
}
    useEffect(()=>{
       window.addEventListener('scroll',handleScroll)
       return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    },[])

 return(
        <header 
         className={`
          fixed w-full top-0 bg-slate-200 bg-opacity-60 max-h-10 transition-all easy-in duration-500
          ${scrolling ? `max-h-1 bg-opacity-1 ` : ``}
         `
         }>
         <nav className='flex justify-center items-center'>
         <Link to={`/`}> 
            <img className='w-24' src={Image} alt="" />
         </Link>
         </nav>
         
        </header>
    )
    
}
export default Header