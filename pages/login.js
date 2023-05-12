/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react"
import Cookies from "js-cookie";
import { useRouter } from 'next/router';
import Head from "next/head";

const Login = (props) => {
    const {bgStatus} = props
    const [userName,setUserName] = useState("")
    const [password,setPassword] = useState("")
    const [status,setStatus] = useState(true)
    const [error_msg,setMsg] = useState(null)
    const router = useRouter()

    const getUsername = (event) =>{
        setUserName(event.target.value)
    }

    const getPassword = (event) =>{
        setPassword(event.target.value)
    }

    const getUserInfo = async(event) => {   
        event.preventDefault()
        let userObject = {
            username:userName,
            password:password
        }
        const url = 'https://apis.ccbp.in/login'
       
        const options = {
            method: 'POST',
            body: JSON.stringify(userObject),
        }
        const response = await fetch(url, options)
        const data = await response.json()
        if (response.ok === true) {
            Cookies.set('jwtToken', data.jwt_token, {expires: 30});
            router.replace('/')
            if(error_msg !== null){
                setMsg(null)
            }
          } else {
            setMsg(data.error_msg)
          }
    }

    const getStatus = (event) =>{
        let toggle = event.target.checked
        if(toggle){
            setStatus(false)
        }
        else{
            setStatus(true)
        }
    }
    const imageTheme = bgStatus ? `light` : `dark`
    const parentBg = bgStatus ? `bg-[#fff]` : `bg-[#000]`
    const loginCardBg = bgStatus ? `bg-[#fff]` : `bg-[#212121]`
    const imgUrl = `https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png`
  return (
    <div className={`h-[100vh] bg-[#fff]  flex justify-center items-center p-3 md:p-0`}>
        <div className={`bg-[#fff] shadow-2xl rounded-[5px] p-5 flex flex-col w-80`}>
            <img src ={`${imgUrl}`} alt='logo' className='w-auto h-14 mb-3'/>
            <form onSubmit={getUserInfo}>
            <div className='mb-3 mt-2'>
                <label htmlFor='userName' className='font-bold font-sans text-slate-700 text-base'>UserName</label>
                <br/>
                <input type='text' value={userName} id='userName' onChange={getUsername} className='p-1 w-full rounded-sm outline-none border text-slate-700 border-zinc-400 text-lg font-semibold placeholder:text-slate-400' placeholder="Enter Name" />
            </div>
            <div>
                <label htmlFor='password' className='font-bold font-sans text-slate-700 '>Password</label>
                <br/>
                <input type={status ? `password`: 'text'} value={password} id='password' onChange={getPassword} className='p-1 w-full rounded-sm outline-none border text-slate-700 border-zinc-400 text-lg font-semibold placeholder:text-slate-400' placeholder="Enter Name" />
            </div>
            <div className='flex items-center mt-1'>
                <input type='checkbox' id='toggle' value={status} onClick={getStatus} className='rounded-sm outline-none border text-slate-700 border-zinc-400 text-lg font-semibold placeholder:text-slate-400' placeholder="Enter Name"/>
                <label htmlFor='toggle' className='font-bold font-sans text-slate-700 ml-1 text-base'>Show password</label>
            </div>
            <button type="submit" className='bg-blue-600 outline-none w-full p-2 rounded-md text-white font-semibold mt-5'>Login</button>
            {error_msg !== null ? <p className="text-red-600 font-sans text-base mt-2 font-semibold">*{error_msg}</p> : ''}
            </form>
        </div>
    </div>
  )
}


export default Login
