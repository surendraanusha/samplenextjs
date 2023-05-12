/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'

const GamingVideos = (props) => {
    const {data} = props
    const {id,thumbnail_url,title,view_count} = data
     
  return (
    <Link href={`/videos/${id}`}>
      <div>
        <img src={thumbnail_url} alt='baner' className='w-full'/>
        <div className='mt-3 px-2'>
        <p className='text-[#C0D0C0] font-sans font-bold'>{title}</p>
        <p className='text-[#747577] font-sans font-semibold'>{view_count} Watching Worldwide</p>
        </div>
      </div>
    </Link>
     
  )
}

export default GamingVideos
