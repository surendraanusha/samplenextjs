import {AiFillHome,AiFillTwitterCircle} from 'react-icons/ai'
import {FaFire,FaFacebook} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import Link from 'next/link'

const LeftPannel = () => {
  return (
    <div className='bg-[#212121] w-[40%] h-[89vh] hidden md:flex justify-between flex-col py-3'>
        <ul>
            <Link href={'/'}>
                <li className='flex items-center mb-3'>
                    <AiFillHome size={25} fill='red'/>
                    <p className='text-white font-semibold font-sans text-xl ml-6'>Home</p>
                </li>
            </Link>
            
            <Link href={'/trending'}>
                <li className='flex items-center mb-3'>
                    <FaFire size={25} fill='red'/>
                    <p className='text-white font-semibold font-sans text-xl ml-6'>Trending</p>
                </li>
            </Link>
            <Link href={'/gaming'}>
                <li className='flex items-center mb-3'>
                    <SiYoutubegaming size={25} fill='red'/>
                    <p className='text-white font-semibold font-sans text-xl ml-6'>Gaming</p>
                </li>
            </Link>
            <li className='flex items-center mb-3'>
                <MdPlaylistAdd size={30} fill='red'/>
                <p className='text-white font-semibold font-sans text-xl ml-5'>Saved videos</p>
            </li>
            
        </ul>
        <div>
            <p className='font-bold text-white font-sans text-xl'>CONTACT US</p>
            <div className='flex items-center mt-4 mb-4'>
                <FaFacebook size={30} fill='#33599A' className='mr-4'/>
                <AiFillTwitterCircle size={32} fill='#57ACF0' className='mr-4'/>
                <BsLinkedin size={29} className='rounded-full' fill='#3B78B4'/>
            </div>
            <p className='text-white font-sans text-xl font-bold'>
                Enjoy! Now to see your <br/>
                channels and <br/>
                recommendetions!
            </p>
        </div>
    </div>
  )
}

export default LeftPannel
