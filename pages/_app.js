import '@/styles/globals.css'
import Link from 'next/link';
/* eslint-disable @next/next/no-img-element */
import {FaMoon} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'
import {HiUserCircle} from 'react-icons/hi'
import {FiSun} from 'react-icons/fi'
import Cookies from "js-cookie"
import { useRouter } from 'next/router';
import Popup from 'reactjs-popup'
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primereact/resources/primereact.min.css";                                       
import { useEffect, useState } from "react"
const solutions = [
  { name: 'Home',linkValue:'/'},
  { name: 'Trending',linkValue:'/trending'},
  { name: 'Gaming',linkValue:'/gaming'},
  { name: 'Saved videos',linkValue:'/saved-videos'},
]

import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'

export default function App({ Component, pageProps }) {
  const [status,setStatus] = useState(true)
  const router = useRouter();
  const [savedVideos,addSavedVideos] = useState([])


  const userLogout = async () =>{
    await Cookies.remove('jwtToken')
    await router.replace('/login')
  }

  const changeTheme = () =>{
    setStatus(!status)
  }
  const pathValue = router.route

  const receivedVideo = (videoInfor) =>{
    addSavedVideos(prevState =>([
      ...prevState,videoInfor
    ]))
  }

  useEffect(()=>{
    if(Cookies.get('jwtToken') === undefined){
      router.push('/login')
    }
  },[router])

  const bgColor = status ? `bg-[#fff]` : `bg-[#212121]`
  const imageTheme = status ? `light` : `dark`
  const imgUrl = `https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-${imageTheme}-theme-img.png`
  const iconColor = status ? '#000000' : '#ffffff'
  const logoutIcon = status ? `text-[#000000]` : `text-[#ffffff]`
  const popUpbg = status ? `bg-[#F0F1F1]` : `bg-[#212121]`
  const popUpTitle = status ? `text-[#423C42]` : `text-[#ffffff]`

  function renderNavbar(){
      return (
        <div className={`${bgColor}`}>
          <nav className="container mx-auto px-2 py-3 md:px-4 md:py-4 flex items-center justify-between">
          <Link href={`/`}>
            <img src={imgUrl} alt="logo" className="md:w-auto md:h-8 w-auto h-8"/>
          </Link>
            <div className="flex items-center">
              <button className="border-none bg-transparent mr-3 md:mr-6 cursor-pointer" onClick={changeTheme}>
                {status ? <FaMoon size={25} fill='#000'/>  : <FiSun size={25} className='text-white'/>}
              </button>
              <Popover className='visible md:hidden'>
                <Popover.Button className="inline-flex items-center mr-3 md:mr-6 mt-2 gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                  <GiHamburgerMenu size={27} fill={`${iconColor}`}/>
                </Popover.Button>
                <Popover.Panel className="absolute left-1/2 z-10 mt-3 flex w-screen max-w-max -translate-x-1/2 px-4">
                    <div className={`${bgColor} w-screen max-w-md flex-auto overflow-hidden rounded-3xl text-sm leading-6 shadow-lg ring-1 ring-gray-900/5`}>
                      <div className="p-4">
                        {solutions.map((item) => (
                          <div key={item.name} className="group relative flex gap-x-6 rounded-lg p-2 hover:bg-gray-50">
                            <Link href={`${item.linkValue}`}>
                              <p className={`${popUpTitle} text-lg font-sans font-bold`}>
                                {item.name}
                              </p>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                </Popover.Panel>
              </Popover>
              <div className='flex w-min md:mr-6'>
                <button className="border-none bg-transparent cursor-pointer hidden md:inline-flex">
                  <HiUserCircle size={35} fill="#396692"/>
                </button>
                <div className='h-3 w-3 rounded-full bg-green-500 -ml-3 hidden md:inline-flex'></div>
              </div>
              
              <button className="border-none bg-transparent cursor-pointer visible md:hidden" onClick={userLogout}>
                <FiLogOut size={27} className={`${logoutIcon}`}/>
              </button>
              <Popup
                modal
                trigger={
                  <button className="items-center border border-cyan-700 text-cyan-700 px-1 py-1 rounded-sm font-sans w-24 font-semibold bg-transparent cursor-pointer hidden md:inline hover:bg-blue-400 hover:text-white hover:border-0">
                      <span className="text-center">Logout</span>
                  </button>
                }
              >
                {close => (
                  <div className={`${popUpbg} p-5 shadow-2xl`}>
                    <div>
                      <p className={`${popUpTitle} font-sans font-bold text-2xl`}>Are you Sure!</p>
                    </div>
                    <div className='flex gap-8 mt-10 items-center'>
                        <button
                        type="button"
                        className="border border-cyan-700 text-cyan-700 px-1 py-1 rounded-sm font-sans w-24 font-semibold bg-transparent cursor-pointer hidden md:inline hover:bg-blue-400 hover:text-white hover:border-0"
                        onClick={() => close()}
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        className="border border-cyan-700 text-cyan-700 px-1 py-1 rounded-sm font-sans w-24 font-semibold bg-transparent cursor-pointer hidden md:inline hover:bg-blue-400 hover:text-white hover:border-0"
                        onClick={userLogout}
                      >
                        Confirm
                      </button>
                    </div>
                  </div>
                )}
              </Popup>
            </div>
          </nav>
        </div>
      )
  }

  return (
    <div className={`h-[100vh] ${bgColor}`}>
      {pathValue !== '/login' && renderNavbar()}
      <Component {...pageProps} bgStatus={status} savedVideos={savedVideos} receivedVideo={receivedVideo}/>
    </div>
  )
}
