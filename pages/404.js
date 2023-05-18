/* eslint-disable @next/next/no-img-element */
import React from 'react'

const PageNotFound = (props) => {
    const {bgStatus} = props
    const imageValue = bgStatus ? `light` : `dark`
    const bgColor = bgStatus ? `bg-[#fff]` : `bg-[#000]`
    const titleColor = bgStatus ? `text-[#1C293A]` : `text-[#F9FAFC]`
    const subTitleColor = bgStatus ? `text-[#445366]` : `text-[#6CA1B8]`
    const notFoundImage = `https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-${imageValue}-theme-img.png`
  return (
    <div className={`${bgColor} h-[100vh] flex flex-col justify-center items-center p-3`}>
      <img src={`${notFoundImage}`} alt='notFound' className='h-80 w-auto mb-4'/>
      <h1 className={`${titleColor} text-3xl font-bold mb-2`}>Page Not Found</h1>
      <p className={`${subTitleColor} text-xl font-semibold text-center`}>We are sorry, the page you requested could not be found.</p>
    </div>
  )
}

export default PageNotFound
