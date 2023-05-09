/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Videos = (props) => {
    const {data} = props
    const {id,thumbnail_url,published_at,title,view_count} = data
    // console.log(published_at.length)
    // console.log("year of published",published_at)
    // console.log(published_at.slice(-4))
    const year = Number(published_at.slice(-4))
    const yearNumber = 2023 -  Number(published_at.slice(-4));
    
  return (
     <div>
       <img src={thumbnail_url} alt='baner' className='w-full'/>
       <div className='flex mt-3 items-start px-2'>
            <img src={data.channel.profile_image_url} alt='profileAvatar' className='w-10 h-10 mr-2 mt-1'/>
            <div>
                <p className='text-[#C0D0C0] font-sans font-normal'>{title}</p>
                <p className='text-[#747577] font-sans font-semibold'>{data.channel.name}</p>
                <div className='flex items-center'>
                    <p className='text-[#747577] font-sans font-semibold'>{view_count} Views</p>
                    <p className='text-[#747577] font-sans font-semibold ml-2 mr-2'>.</p>
                    {year === 201 ? <p className='text-[#747577] font-sans font-semibold'>2 years ago</p> : <p className='text-[#747577] font-sans font-semibold'>{yearNumber} years ago</p>}
                </div>
            </div>
       </div>
     </div>
  )
}

export default Videos
