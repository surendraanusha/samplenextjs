/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'


const Videos = (props) => {
    const {data,bgStatus} = props
    const {id,thumbnail_url,published_at,title,view_count} = data
    const year = Number(published_at.slice(-4))
    const yearNumber = 2023 -  Number(published_at.slice(-4));
    const titleHexValue = bgStatus ? `text-[#747577]` : `text-[#C0D0C0]`
    const channelHex = bgStatus ? `text-black` : `text-[#747577]`
  return (
    <Link href={`/videos/${id}`}>
      <div>
        <img src={thumbnail_url} alt='baner' className='w-full'/>
        <div className='flex mt-3 items-start px-2'>
            <img src={data.channel.profile_image_url} alt='profileAvatar' className='w-10 h-10 mr-2 mt-1'/>
            <div>
                <p className={`${titleHexValue} font-sans font-semibold`}>{title}</p>
                <p className={`${channelHex} font-sans font-semibold`}>{data.channel.name}</p>
                <div className='flex items-center'>
                    <span className='text-[#747577] font-sans font-semibold'>{view_count} Views</span>
                    <p className='text-[#747577] font-sans font-semibold ml-2 mr-2'>.</p>
                    {year === 201 ? <p className='text-[#747577] font-sans font-semibold'>2 years ago</p> : <p className='text-[#747577] font-sans font-semibold'>{yearNumber} years ago</p>}
                </div>
            </div>
        </div>
      </div>
    </Link>
      
  )
}

export default Videos
