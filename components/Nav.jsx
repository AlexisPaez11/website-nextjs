// import Head from 'next/head'
// import Image from 'next/image'
import Link from "next/link"

export default function Nav () {
    return (
    <>
    <nav className="" >
        {/* <ul className={isMobile ? 'nav-menu-mobile' : 'nav-menu'} onClick={() => setIsMobile(false)}> */}
        <ul className="">
            <li>
            <Link href='/'><a>Inicio</a></Link>
            </li>
            
            <li>
            <Link href='/projects'><a>Proyectos</a></Link>
            </li>
            
            <li className='logo h-10'>
            <Link href='/'><a><svg className='h-9' viewBox="0 -4 68 70"><path d="M48 45.5L40 31.5H42C45.866 31.5 49 28.366 49 24.5V24.5C49 20.634 45.866 17.5 42 17.5H32.5L23.5 1H44.175C54.5999 1 63.6359 8.21707 65.9404 18.384V18.384C68.5146 29.7408 61.9241 41.1681 50.8048 44.6274L48 45.5Z"/><path d="M21 1.5L57 70H38.5L13 21L21 1.5Z"/><path d="M8.5 31.5H15.5L24 47.5H1.5L8.5 31.5Z"/></svg></a></Link>
            </li>

            <li><Link href='/blog'><a>Blog</a></Link>
            </li>
            
            <li>
            <Link href='/about'><a>About me</a></Link>
            </li>
        </ul>

        {/* <button className='menu' onClick={() => setIsMobile(!isMobile)}>
            {isMobile ? <HiMenuAlt3 /> : <HiMenuAlt3 />}
        </button> */}
    </nav>
    </>
    )
  }