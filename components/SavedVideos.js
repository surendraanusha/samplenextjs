import Link from "next/link"
/* eslint-disable @next/next/no-img-element */
const SavedVideos = (props) => {
    const {data,bgStatus} = props
    const {id,thumbnail_url,title,view_count} = data
    const titleHexValue = bgStatus ? `text-[#747577]` : `text-[#C0D0C0]`
    const channelHex = bgStatus ? `text-black` : `text-[#747577]`
  return (
        <Link href={`/videos/${id}`}>
            <div>
                <img src={thumbnail_url} alt='baner' className='w-full h-60 rounded-none'/>
                <div className='flex mt-3 items-start px-2'>
                    <img src={data.channel.profile_image_url} alt='profileAvatar' className='w-10 h-10 mr-2 mt-1'/>
                    <div>
                        <p className={`${titleHexValue} font-sans font-semibold`}>{title}</p>
                        <p className={`${channelHex} font-sans font-semibold`}>{data.channel.name}</p>
                        <p className={`${channelHex} font-sans font-semibold`}>{view_count} Views</p>
                    </div>
                </div>
            </div>
        </Link>
  )
}

export default SavedVideos
