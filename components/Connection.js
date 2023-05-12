/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Connection = (props) => {
    const {bgStatus} = props
    const genImageUrl = bgStatus ?  `light` : `dark`
    const failurHeading = bgStatus ? `text-[#423C42]` :`text-[#F8FBFC]`
    const paraClr = bgStatus ? `text-[#65556E]` :`text-[#528DB4]`
    const imageUrl = `https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-${genImageUrl}-theme-img.png`
  return (
    <div className='h-full flex flex-col justify-center items-center'>
        <div className='h-full flex flex-col justify-center items-center p-3 md:p-0'> 
            <img src={imageUrl} alt='connection-lost' className='h-80 mb-4 w-auto'/>
            <h1 className={`${failurHeading} font-sans text-xl md:text-3xl font-bold mb-2`}>Oops! Something Went Wrong</h1>
            <p className={`${paraClr} font-sans text-xl lg:text-2xl font-semibold text-center`}>We are having some trouble to complete your request.</p>
            <p className={`${paraClr} font-sans text-lg md:text-xl font-semibold mb-3`}>please try again.</p>
            <button className='px-10 mt-2 py-2 bg-blue-700 text-white font-sans font-bold rounded-md'>Retry</button>
        </div>
    </div>
  )
}

export default Connection;
