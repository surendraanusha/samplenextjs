import Link from "next/link"

/* eslint-disable @next/next/no-img-element */
import {FaMoon} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'
import {HiUserCircle} from 'react-icons/hi'
import { Button } from 'primereact/button';

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primereact/resources/primereact.min.css";                                       
        
const Navbar = () => {
  return (
    <div>
      <nav className="container mx-auto px-2 py-2 md:px-4 md:py-4 flex items-center justify-between">
        <img src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png" alt="logo" className="md:w-auto md:h-8 w-auto h-8"/>
        <div className="flex items-center">
          <button className="border-none bg-transparent mr-3 md:mr-6 cursor-pointer">
            <FaMoon size={25}/>
          </button>
          <button className="border-none bg-transparent mr-3 md:mr-6 cursor-pointer visible md:hidden">
            <GiHamburgerMenu size={27}/>
          </button>
          <button className="border-none bg-transparent mr-3 md:mr-6 cursor-pointer hidden md:inline-flex">
            <HiUserCircle size={35} fill="#396692"/>
          </button>
          <button className="border-none bg-transparent cursor-pointer visible md:hidden">
            <FiLogOut size={27}/>
          </button>
          <button className="items-center border border-cyan-700 text-cyan-700 px-1 py-1 rounded-sm font-sans w-24 font-semibold bg-transparent cursor-pointer hidden md:inline hover:bg-blue-400 hover:text-white hover:border-0">
            <span className="text-center">Logout</span>
          </button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar


// dark mode bg value -----------> #212121 
// light mode bg value -----------> #ffffff 