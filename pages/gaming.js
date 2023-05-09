import React from 'react'
import Videos from '@/components/Videos'
import Navbar from '@/components/Navbar'
import LeftPannel from '@/components/LeftPannel'
import GamingVideos from '@/components/GamingVideos'
import {SiYoutubegaming} from 'react-icons/si'
const Gaming = (props) => {
    const {data} = props
    const VideosArray = data.videos
    
    return (
      <div>
        <Navbar/>
        <div  className='bg-[#212121]'>
          <div className='flex md:flex-row container mx-auto md:px-4'>
            <LeftPannel/>
            <div className='flex-grow'>
              <div className='flex items-center p-3 bg-[#181818]'>
                <div className='bg-black p-5 rounded-full mr-3'>
                    <SiYoutubegaming size={30} fill='red'/>
                </div>
                    <p className='text-white font-sans text-3xl font-bold'>Gaming</p>
              </div>
              <div className='bg-[#212121] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2 md:p-0 md:py-4'>
              {VideosArray.map(eachItem=>(
                <GamingVideos key={eachItem.id} data={eachItem}/>
              ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
  
  export async function getStaticProps(){
      const ApiUrl = `https://apis.ccbp.in/videos/gaming`
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

export default Gaming
