/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import LeftPannel from '@/components/LeftPannel'
import Navbar from '@/components/Navbar';
import {AiOutlineClose} from 'react-icons/ai'
import { useState } from 'react';
import Cookies from "js-cookie";
import Videos from '@/components/Videos';

export default function Home(props) {
  const{data} = props
  const VideosArray = data.videos
  const [open,setOpen] = useState(true)
  const [error_msg,setMsg] = useState(null)
  const bgImageStyle={
    backgroundImage: `url("https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png")`,
    height: '30vh',
    backgroundSize: '130% 100%',
    backgroundRepeat:"no-repeat",
  }

  const closeButton = () =>{
    setOpen(false)
  }

  function renderBannerImage(){
    return(
      <div>
        <div style={bgImageStyle} className='p-2 md:p-4 flex items-start justify-between'>
          <div>
            <img src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png" alt="logo" className="md:w-auto md:h-8 w-auto h-8"/>
            <h1 className='text-[#4A415C] font-sans font-bold md:text-2xl mt-4 mb-2'>Buy Nxt Watch Premium prepaid plans with <br/> UPI</h1>
            <button className='border border-[#354555] px-4 py-1 font-sans font-bold text-[#354555]'>GET IT NOW</button>
          </div>
          <div>
            <button className='flex-grow' onClick={closeButton}>
              <AiOutlineClose size={25} fill='#000'/>
            </button>
          </div>
        </div>
      </div>
    )
  }


  return (
    <div>
      <Navbar/>
      <div  className='bg-[#212121]'>
        <div className='flex md:flex-row container mx-auto md:px-4 '>
          <LeftPannel/>
          <div className='flex-grow'>
            {open ? renderBannerImage():''}
            <div className='bg-[#212121] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  py-3'>
            {VideosArray.map(eachItem=>(
              <Videos key={eachItem.id} data={eachItem}/>
            ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export async function getStaticProps(){
  const ApiUrl = `https://apis.ccbp.in/videos/all`
  const jwtToken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MjMwNjU1MzJ9.D13s5wN3Oh59aa_qtXMo3Ec4wojOx0EZh8Xr5C5sRkU`
    // const jwtToken = Cookies.get('jwtToken')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: "GET",
    };
    const response = await fetch(ApiUrl, options);
    const data = await response.json()
    return{
      props:{
        data
      }
    }
 
}

// the below lines of code is passing authentication information to the urls and this will giving proper results.
// const jwtToken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MjMwNjU1MzJ9.D13s5wN3Oh59aa_qtXMo3Ec4wojOx0EZh8Xr5C5sRkU`
//   const url = "https://apis.ccbp.in/profile"
//   const Api = 'https://jsonplaceholder.typicode.com/users'
//   const otpions = {
//     headers:{
//       Authorization: `Bearer ${jwtToken}`,
//     },
//     method:'GET'
//   }
//   const res = await fetch(url,otpions)
//   const users = await res.json()