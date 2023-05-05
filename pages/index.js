import Image from 'next/image'
import { Inter } from 'next/font/google'
import HomeStyles from '../styles/Home.module.css'
import UserList from '@/components/UserList'
const inter = Inter({ subsets: ['latin'] })

export default function Home(props) {
  const{users} = props

  return (
    <div className='flex flex-col justify-center sm:p-2 md:items-center relative top-20'>
      <h1 className={`text-center ${HomeStyles.title}`}>User&apos;s List Application</h1>
      <ul className='grid sm:grid-cols-1 p-3 md:grid-cols-2 gap-4 mt-3 md:p-5 max-w-2xl'>
        {
          users.map(eachUserObj=>(
            <UserList userObj={eachUserObj} key={eachUserObj.id}/>
          ))
        }
      </ul>
    </div>
  )
}


export async function getStaticProps(){
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await res.json()
  return{
    props:{
      users
    }
  }
}

// the below lines of code is passing authentication information to the urls and this will giving proper results.
// const jwtToken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MjMwNjU1MzJ9.D13s5wN3Oh59aa_qtXMo3Ec4wojOx0EZh8Xr5C5sRkU`
//   const url = "https://apis.ccbp.in/profile"
//   const Api = 'https://jsonplaceholder.typicode.com/users'
//   const otpions = {
//     headers:{
//       Authorization: `Bearer ${jwtToken}`,
//     },
//     method:'GET'
//   }
//   const res = await fetch(url,otpions)
//   const users = await res.json()