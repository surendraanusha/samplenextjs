import Link from "next/link"
import NavbarStyles from '../styles/Navbar.module.css'

const Navbar = () => {
  return (
    <div className={`fixed w-full z-20 backdrop-blur-sm ${NavbarStyles.navContainer}`}>
        <Link href={'/'}><li className="mr-4 cursor-pointer">Home</li></Link>
        <Link href={'/about'}><li className="cursor-pointer">About</li></Link>
    </div>
  )
}

export default Navbar
