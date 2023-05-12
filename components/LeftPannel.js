import {AiFillHome,AiFillTwitterCircle} from 'react-icons/ai'
import {FaFire,FaFacebook} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import Link from 'next/link'
import { useRouter } from 'next/router'

const LeftPannel = (props) => {
    const{data,bgHexValue,bgStatus} = props
    const textColor = bgStatus ? `text-[#423C42]` : `text-white`
    const router = useRouter();
    const pathValue = router.route
    const homeBg = bgStatus ? `bg-[#F1F1F1]` : `bg-[#181818]`
    const TrenBg = bgStatus ? `bg-[#F1F1F1]` : `bg-[#181818]`
    const GameBg = bgStatus ? `bg-[#F1F1F1]` : `bg-[#181818]`
    const SavedBg = bgStatus ? `bg-[#F1F1F1]` : `bg-[#181818]`
    const Hmg = pathValue === '/' ? homeBg : ''
    const Tmg = pathValue === '/trending' ? TrenBg : ''
    const Gmg = pathValue === '/gaming' ? GameBg : ''
    const Smg = pathValue === '/saved-videos' ? SavedBg : ''


  return (
    <div className={`bg-[${bgHexValue}] w-[${45}%] h-[100vh] hidden md:flex justify-between flex-col py-3`}>
        <ul>
            <Link href={'/'}>
                <li className={`flex items-center mb-3 py-2 ${Hmg} pl-2`}>
                   <AiFillHome size={25} fill='red'/>
                    <p className={`${textColor} font-bold font-sans text-xl ml-6`}>Home</p>
                </li>
            </Link>
            
            <Link href={'/trending'}>
                <li className={`flex items-center mb-3 py-2 ${Tmg} pl-2`}>
                    <FaFire size={25} fill='red'/>
                    <p className={`${textColor} font-bold font-sans text-xl ml-6`}>Trending</p>
                </li>
            </Link>
            <Link href={'/gaming'}>
                <li className={`flex items-center mb-3 py-2 ${Gmg} pl-2`}>
                    <SiYoutubegaming size={25} fill='red'/>
                    <p className={`${textColor} font-bold font-sans text-xl ml-6`}>Gaming</p>
                </li>
            </Link>
            <Link href={'/saved-videos'}>
                <li className={`flex items-center mb-3 py-2 ${Smg} pl-2`}>
                    <MdPlaylistAdd size={30} fill='red'/>
                    <p className={`${textColor} font-bold font-sans text-xl ml-5`}>Saved videos</p>
                </li>
            </Link>
            
        </ul>
        <div className='lg:mb-20 pl-2'>
            <p className={`font-bold ${textColor} font-sans text-xl`}>CONTACT US</p>
            <div className='flex items-center mt-4 mb-4'>
                <FaFacebook size={30} fill='#33599A' className='mr-4'/>
                <AiFillTwitterCircle size={32} fill='#57ACF0' className='mr-4'/>
                <BsLinkedin size={29} className='rounded-full' fill='#3B78B4'/>
            </div>
            <p className={`${textColor} font-sans text-xl font-bold`}>
                Enjoy! Now to see your <br/>
                channels and <br/>
                recommendetions!
            </p>
        </div>
    </div>
  )
}

export default LeftPannel
