/* eslint-disable @next/next/no-img-element */
import LeftPannel from '@/components/LeftPannel'
import ReactPlayer from 'react-player'
import { BiLike ,BiDislike } from 'react-icons/bi'
import { MdPlaylistAdd } from 'react-icons/md'
import { useState,useEffect } from 'react'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import { v4 as uuidv4 } from 'uuid';
import Connection from '@/components/Connection'
import Loader from '@/components/Loader'
const apiStatusConstants = {
    initial: 'INITIAL',
    success: 'SUCCESS',
    failure: 'FAILURE',
    inProgress: 'IN_PROGRESS',
  }
const VideoItemDetails = (props) => {
    const{bgStatus,receivedVideo} = props
    const router = useRouter();
    const VideoId = router.query.id
    const [videoObj,setVideoObj] = useState({})
      const original = videoObj
      const {id,view_count,video_url,title,published_at,description,thumbnail_url,channel} = videoObj
    const [like,setLike] = useState(false)
    const [disLike,setDislike] = useState(false)
    const [saveStatus,setSaveStatus] = useState(false)
    const [apiStatus,setApiStatus] = useState(apiStatusConstants.initial)
    const giveLike = () =>{
        if(disLike){
            setDislike(false)
        }
        if(like){
            setLike(!like)
        }
        setLike(!like)
    }
    const giveDislike = () =>{
        if(like){
            setLike(false)
        }
        if(disLike){
            setDislike(!disLike)
        }
        setDislike(!disLike)
    }

    function pushTheVideo(){
        const pushingObj={
            id:id,
            thumbnail_url:thumbnail_url,
            published_at:published_at,
            title:title,
            view_count:view_count,
            channel:channel
        }
        receivedVideo(pushingObj)
        setSaveStatus(!saveStatus)
    }
    useEffect(()=>{
        const jwtToken = Cookies.get('jwtToken')
    
        if(jwtToken === undefined){
          router.replace('/login')
        }
        else{
          const getVideosData = async() =>{
            setApiStatus(apiStatusConstants.inProgress)
            const ApiUrl = `https://apis.ccbp.in/videos/${VideoId}`
            const options = {
              headers: {
                Authorization: `Bearer ${jwtToken}`,
              },
              method: "GET",
            };
            const response = await fetch(ApiUrl, options);
            if(response.ok === true){
              const data = await response.json()
              const video = data.video_details
              setVideoObj(video)
              console.log(data.video_details)
              setApiStatus(apiStatusConstants.success)
            }
            else{
              setApiStatus(apiStatusConstants.failure)
            }
            
          }
          getVideosData();
    
        }
      },[VideoId, router])

      
    //   console.log(published_at)
    //    const year = Number(published_at?.slice(-4))
    //    const yearNumber = 2023 -  Number(videoObj.published_at?.slice(-4));
    
      
    const changeText = saveStatus ? `Saved` : `Save`
    const textColor = saveStatus ? `text-[#4f46e5]`:`text-[#747577]`
    const iconFill = saveStatus ? `#4f46e5` : `#747577`
    const likeFill = like ? `#4f46e5` : `#747577`
    const textFill = like ? `text-[#4f46e5]` : `text-[#747577]`
    const disFill = disLike ? `text-[#4f46e5]` : `text-[#747577]`
    const disLikeFill = disLike ? `#4f46e5` : `#747577`
    const bgHexValue = bgStatus ? '#fff': '#212121'
    const videoContainer = bgStatus ? `bg-[#f0f1f1]` : `bg-[#0F0F0F]`
    const titleColor = bgStatus ? `text-[#000]` : `text-[#f0f1f1]`
    const hrTagColor = bgStatus ? `border-t border-black` : `border-t border-sky-950 `

    function SucceView(){
        return(
            <div>
            {
                original !== undefined && (
                    <div className={`bg-[${bgHexValue}]`}>
                    <div className='flex md:flex-row container mx-auto md:px-4'>
                    <LeftPannel bgHexValue={bgHexValue} bgStatus={bgStatus}/>
                    <div className={`md:w-[100%] md:py-4 md:px-4 md:pl-3 ${videoContainer} rounded-[5px ]`}>
                        <ReactPlayer url={video_url}  width={`100%`} height={`28em`}  controls={true}/>
                        <div className='mt-4 p-2'>
                            <p className={`font-sans text-xl font-semibold ${titleColor}`}>{title}</p>
                            <div className='flex md:flex-row flex-col md:items-center md:justify-between mt-5'>
                                <div className='flex items-center'>
                                    <p className='text-[#747577] font-sans font-semibold text-xl'>{view_count} views</p>
                                    <p className='text-[#747577] font-sans font-semibold ml-2 mr-2 text-xl'>.</p>
                                </div>
                                <div className='flex items-center mt-3 md:mt-0'>
                                    <button className='flex items-center mr-6 md:mr-4' onClick={giveLike}>
                                        <BiLike fill={`${likeFill}`} size={25} className='mt-1'/>
                                        <span className={`${textFill} font-sans font-semibold ml-1 text-xl`}>Like</span>                                        
                                    </button>
                                    <button className='flex items-center mr-6 md:mr-4' onClick={giveDislike}>
                                        <BiDislike fill={`${disLikeFill}`} size={25} className='mt-1'/>
                                        <span className={`${disFill} font-sans font-semibold ml-1 text-xl`}>Dislike</span> 
                                    </button>
                                    <button className='flex items-center mr-2' onClick={pushTheVideo}>
                                        <MdPlaylistAdd fill={`${iconFill}`} size={30} className='mt-1'/>
                                        <span className={`${textColor} font-sans font-semibold ml-1 text-xl`}>{changeText}</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <hr className={`${hrTagColor} mt-3`}/>
                        <div className='mt-7 p-2'>
                            <div className='flex items-center'>
                                <img src={original.channel.profile_image_url} alt='profileAvatar' className='w-[70px] h-[70px] mr-2'/>
                                <div className='ml-2'>
                                    <p className={`font-sans text-xl font-semibold ${titleColor}`}>{original.channel.name}</p>
                                    <p className={`font-sans text-xl font-semibold ${titleColor}`}>{original.channel.subscriber_count} subscribers</p>
                                </div>
                                
                            </div>
                            <p className={`font-sans text-xl font-semibold ${titleColor} mt-4`}>{description}</p>
                        </div>
                    </div>
                    </div>
                    </div>
                )
            }
            </div>
        )
    }

    function finalView(){
        switch(apiStatus){
          case apiStatusConstants.success:
            return SucceView()
          case apiStatusConstants.failure:
            return <Connection bgStatus={bgStatus}/>
          case apiStatusConstants.inProgress:
            return <Loader bgStatus={bgStatus}/>
          default:
            return null
        }
      }

  return (
    <div className={`bg-[${bgHexValue}]`}>
        {finalView()}
    </div>
  )
}

export default VideoItemDetails;
// {year === 201 ? <p className='text-[#747577] font-sans font-semibold text-xl'>2 years ago</p> : <p className='text-[#747577] font-sans font-semibold text-xl'>{yearNumber} years ago</p>}

