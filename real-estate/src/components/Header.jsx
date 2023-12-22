import {FaSearch} from 'react-icons/fa'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    // h-[10vh] flex'
    <header className='bg-primary shadow-md h-[10vh] flex '  >
        <div className='flex justify-between items-center  w-[100%] sm:w-[85%]  mx-auto p-3 my-auto' > 
            <Link to='/'>
            <h1 className='w-24 sm:w-60 font-bold text-base sm:text-xl flex flex-wrap justify-center'>
                <span className='text-greenie'>Aashin</span>
                <span className='text-lightblue'>Estate</span>
            </h1>
            </Link>
            <form className=' text-sm sm:text-base border flex items-center  border-lightblue px-3 py-1 rounded-lg shadow-sm text-yellowie focus:outline-none'>
                <input className='w-24 sm:w-60 bg-transparent placeholder-greenie focus:outline-none ' type="text" placeholder='Search...' />
                <FaSearch className='text-greenie'/>
            </form>
            <ul className='w-24 sm:w-60 flex justify-center gap-7'>
              <Link to='/'>
                <li className='hidden sm:inline text-greenie text-base hover:text-lightblue'>Home</li>
              </Link>
              <Link to='/about'>
                <li className='hidden sm:inline text-greenie text-base hover:text-lightblue'>About</li>
              </Link>
              <Link to='/sign-in'>
                <li className='text-greenie  text-sm sm:text-base hover:text-lightblue'>Sign in</li>
              </Link>
            </ul>
        </div>
        
    </header>
  )
}
