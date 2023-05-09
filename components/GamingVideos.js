/* eslint-disable @next/next/no-img-element */
import React from 'react'

const GamingVideos = (props) => {
    const {data} = props
    const {id,thumbnail_url,published_at,title,view_count} = data
    // console.log(published_at.length)
    // console.log("year of published",published_at)
    // console.log(published_at.slice(-4))
    
  return (
     <div>
       <img src={thumbnail_url} alt='baner' className='w-full'/>
       <div className='mt-3 px-2'>
        <p className='text-[#C0D0C0] font-sans font-bold'>{title}</p>
        <p className='text-[#747577] font-sans font-semibold'>{view_count} Watching Worldwide</p>
       </div>
     </div>
  )
}

export default GamingVideos
