import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import LeftPannel from '@/components/LeftPannel'

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  )
}
// <Navbar/>
// 