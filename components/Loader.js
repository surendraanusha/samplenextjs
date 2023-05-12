import React from 'react'
import ScaleLoader from "react-spinners/ScaleLoader";

const Loader = (props) => {
    const {bgStatus} = props
    const spinnerColor = bgStatus ? '#E62E2D':'#fff'
    const loaderText = bgStatus ? `text-[#E62E2D]` : `text-[#fff]`
  
  return (
    <div className='flex items-center justify-center flex-col w-[100%] h-[100vh]'>
        <ScaleLoader  size={400} height={60} color={`${spinnerColor}`}/>
        <p className={`${loaderText} font-sans font-bold text-2xl`}>Loading...</p>
      </div>
  )
}

export default Loader
