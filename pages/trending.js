import Navbar from "@/components/Navbar"
import LeftPannel from "@/components/LeftPannel"
import Videos from "@/components/Videos"
import {FaFire} from 'react-icons/fa'

const Trending = (props) => {
  const {data} = props
  const VideosArray = data.videos

  return (
    <div>
      <Navbar/>
      <div  className='bg-[#212121]'>
        <div className='flex md:flex-row container mx-auto md:px-4'>
          <LeftPannel/>
          <div className='flex-grow'>
          <div className='flex items-center p-3 bg-[#181818]'>
            <div className='bg-black p-5 rounded-full mr-3'>
                <FaFire size={30} fill='red'/>
            </div>
                <p className='text-white font-sans text-3xl font-bold'>Trending</p>
            </div>
            <div className='bg-[#212121] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-3'>
            {VideosArray.map(eachItem=>(
              <Videos key={eachItem.id} data={eachItem}/>
            ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps(){
    const ApiUrl = `https://apis.ccbp.in/videos/trending`
    const jwtToken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MjMwNjU1MzJ9.D13s5wN3Oh59aa_qtXMo3Ec4wojOx0EZh8Xr5C5sRkU`
      // const jwtToken = Cookies.get('jwtToken')
      const options = {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
        method: "GET",
      };
      const response = await fetch(ApiUrl, options);
      const data = await response.json()
      return{
        props:{
          data
        }
      }
   
  }


export default Trending

// <div className='bg-[#181818] p-2'>
//                     <div className='bg-[#0F0F0F] rounded-3xl p-4'>
//                         <FaFire size={30} fill='red'/>
//                     </div>
//                     <p className='text-white font-sans font-bold'>Trending</p>
//                 </div>