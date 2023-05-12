/* eslint-disable @next/next/no-img-element */
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import LeftPannel from '@/components/LeftPannel'
import {AiOutlineClose} from 'react-icons/ai'
import { useEffect, useState } from 'react';
import Cookies from "js-cookie";
import Videos from '@/components/Videos';
import Connection from '@/components/Connection';
import Loader from '@/components/Loader';
import Head from 'next/head';
const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}
import { useRouter } from 'next/router';

export default function Home(props) {
  const {bgStatus} = props
  const [VideosArray,setVideosArray] = useState([])
  const [open,setOpen] = useState(true)
  const router = useRouter();
  const [apiStatus,setApiStatus] = useState(apiStatusConstants.initial)

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

  
  useEffect(()=>{
    const jwtToken = Cookies.get('jwtToken')

    if(jwtToken === undefined){
      router.replace('/login')
    }
    else{
      const getVideosData = async() =>{
        setApiStatus(apiStatusConstants.inProgress)
        const ApiUrl = `https://apis.ccbp.in/videos/all`
        const options = {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
          method: "GET",
        };
        const response = await fetch(ApiUrl, options);
        if(response.ok === true){
          const data = await response.json()
          setVideosArray(data.videos)
          setApiStatus(apiStatusConstants.success)
        }
        else{
          setApiStatus(apiStatusConstants.failure)
        }
        
      }
  
      getVideosData();

    }
  },[router])
  
  
  function successView(){
    return(
      <div>
          {open ? renderBannerImage():''}
          <div className={`bg-[${bgHexValue}] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-3`}>
          {VideosArray.map(eachItem=>(
            <Videos key={eachItem.id} data={eachItem} bgStatus={bgStatus}/>
          ))}
          </div>
      </div>
    )
  }

  function finalView(){
    switch(apiStatus){
      case apiStatusConstants.success:
        return successView()
      case apiStatusConstants.failure:
        return <Connection bgStatus={bgStatus}/>
      case apiStatusConstants.inProgress:
        return <Loader bgStatus={bgStatus}/>
      default:
        return null
    }
  }
  const bgHexValue = bgStatus ? '#fff': '#212121'
  return (
    <div className={`bg-[${bgHexValue}]`}>
      <div className='flex md:flex-row container mx-auto md:px-4 '>
        <LeftPannel data={45} bgHexValue={bgHexValue} bgStatus={bgStatus}/>
        <div className={`w-[${100}%]  lg:pl-3`}>
          {finalView()}
        </div>
      </div>
  </div>
  )
}

