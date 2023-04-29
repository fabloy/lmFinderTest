
import Image from '../images/lm.png'

const Header = ()=>{
 return(
        <header className='bg-gray-300'>
         <nav className='flex justify-center items-center'>
            <img className='w-24' src={Image} alt="" />
         </nav>
        </header>
    )
    
}
export default Header