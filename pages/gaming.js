import React from 'react'
import { useRouter } from 'next/router';
import LeftPannel from '@/components/LeftPannel'
import GamingVideos from '@/components/GamingVideos'
import {SiYoutubegaming} from 'react-icons/si'
import Connection from '@/components/Connection'
import Loader from '@/components/Loader'
import { useState,useEffect } from 'react';
import Cookies from 'js-cookie';
const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}
const Gaming = (props) => {
    const {bgStatus} = props
    const router = useRouter();
    const bgHexValue = bgStatus ? '#fff': '#212121'
    const bannerHeadingBg = bgStatus ? 'bg-[#F1F1F1]' : 'bg-[#181818]'
    const bannerTitle = bgStatus ? `text-[#000]` : `text-[#fff]`
    const iconBg = bgStatus ? 'bg-[#E1E8F0]' : 'bg-[#000]'
    const [VideosArray,setVideosArray] = useState([])
    const [apiStatus,setApiStatus] = useState(apiStatusConstants.initial)
    
    useEffect(()=>{
      const jwtToken = Cookies.get('jwtToken')
  
      if(jwtToken === undefined){
        router.replace('/login')
      }
      else{
        const getVideosData = async() =>{
          setApiStatus(apiStatusConstants.inProgress)
          const ApiUrl = `https://apis.ccbp.in/videos/gaming`
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
        <div className={`w-[${100}%]  lg:pl-3`}>
          <div className={`flex items-center p-3 ${bannerHeadingBg}`}>
            <div className={`${iconBg} p-5 rounded-full mr-3`}>
                <SiYoutubegaming size={30} fill='red'/>
            </div>
                <p className={`${bannerTitle} font-sans text-3xl font-bold`}>Gaming</p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-3'>
            {VideosArray.map(eachItem=>(
              <GamingVideos key={eachItem.id} data={eachItem}/>
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
  
    return (
      <div>
        <div className={`bg-[${bgHexValue}]`}>
          <div className='flex md:flex-row container mx-auto md:px-4'>
            <LeftPannel data={40} bgHexValue={bgHexValue} bgStatus={bgStatus}/>
            {finalView()}
          </div>
        </div>
      </div>
    )
}


export default Gaming
